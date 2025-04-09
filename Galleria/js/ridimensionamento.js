/**
 * Uniforma le larghezze delle righe e ottimizza l'altezza delle immagini
 */
document.addEventListener('DOMContentLoaded', () => {
    // Seleziona il container principale
    const container = document.querySelector('.tabella_immagini');
    
    if (!container) {
      console.error("Container .tabella_immagini non trovato");
      return;
    }
    
    // Seleziona tutte le righe
    const rows = container.querySelectorAll('.riga2, .riga3');
    
    // Imposta larghezza uniforme per tutte le righe
    uniformRowWidths(rows);
    
    // Per ogni riga, ottimizza le immagini
    rows.forEach(row => {
      // Ottieni tutte le immagini nella riga
      const images = Array.from(row.querySelectorAll('img'));
      
      // Crea una promessa per attendere il caricamento di tutte le immagini
      const loadPromises = images.map(img => {
        return new Promise(resolve => {
          if (img.complete) {
            resolve(img);
          } else {
            img.onload = () => resolve(img);
          }
        });
      });
      
      // Quando tutte le immagini sono caricate
      Promise.all(loadPromises).then(loadedImages => {
        // Ottieni i dati originali delle immagini
        const imagesData = loadedImages.map(img => ({
          element: img,
          width: img.naturalWidth,
          height: img.naturalHeight
        }));
        
        // Ottimizza la riga
        optimizeRow(row, imagesData);
      });
    });
    
    // Gestisci il ridimensionamento della finestra
    window.addEventListener('resize', debounce(() => {
      // Uniforma larghezze
      uniformRowWidths(rows);
      
      // Ottimizza ogni riga
      rows.forEach(row => {
        const images = Array.from(row.querySelectorAll('img'));
        
        // Skip se non ci sono immagini
        if (images.length === 0) return;
        
        // Ottieni i dati originali delle immagini
        const imagesData = images.map(img => ({
          element: img,
          width: img.naturalWidth,
          height: img.naturalHeight
        }));
        
        // Ricalcola l'altezza ottimale
        optimizeRow(row, imagesData);
      });
    }, 200));
  });
  
  /**
   * Uniforma le larghezze di tutte le righe
   * @param {NodeList} rows - Righe da uniformare
   */
  function uniformRowWidths(rows) {
    // Ottieni il container principale
    const container = rows[0].parentElement;
    const containerWidth = container.clientWidth;
    
    // Imposta larghezza uniforme per tutte le righe
    rows.forEach(row => {
      // Rimuovi padding specifici e usa quelli del container
      row.style.width = '100%';
      row.style.boxSizing = 'border-box';
      row.style.paddingLeft = '0';
      row.style.paddingRight = '0';
      row.style.marginLeft = '0';
      row.style.marginRight = '0';
    });
  }
  
  /**
   * Ottimizza una singola riga di immagini
   * @param {Element} row - Elemento riga
   * @param {Array} imagesData - Dati delle immagini
   */
  function optimizeRow(row, imagesData) {
    // Ottieni le proprietà di stile calcolate della riga
    const rowStyles = window.getComputedStyle(row);
    
    // Calcola il column-gap in pixel
    let columnGap;
    const columnGapStyle = rowStyles.columnGap;
    
    if (columnGapStyle.includes('vw')) {
      // Estrai il valore numerico dal vw
      const vwValue = parseFloat(columnGapStyle);
      // Converti vw in pixel
      columnGap = (vwValue / 100) * window.innerWidth;
    } else {
      // Usa il valore direttamente se è già in px
      columnGap = parseFloat(columnGapStyle) || 0;
    }
    
    // Se columnGap è 0 o NaN, usa il valore standard di 1vw
    if (!columnGap) {
      columnGap = window.innerWidth * 0.01; // 1vw
    }
    
    // Calcola la larghezza disponibile per le immagini
    const availableWidth = row.clientWidth - ((imagesData.length - 1) * columnGap);
    
    // Calcola l'altezza ottimale
    const optimalHeight = calculateOptimalRowHeight(imagesData, availableWidth);
    
    // Applica le dimensioni ottimali
    applyOptimalSizes(imagesData, optimalHeight, availableWidth, columnGap);
  }
  
  /**
   * Calcola l'altezza ottimale per una riga di immagini
   * @param {Array} images - Array di oggetti immagine con width e height originali
   * @param {number} availableWidth - Larghezza disponibile per le immagini
   * @returns {number} L'altezza ottimale per la riga
   */
  function calculateOptimalRowHeight(images, availableWidth) {
    // Calcola la somma dei rapporti di aspetto (larghezza/altezza)
    let aspectRatioSum = 0;
    images.forEach(img => {
      const ratio = img.width / img.height;
      aspectRatioSum += ratio;
    });
    
    // Calcola l'altezza ottimale
    return availableWidth / aspectRatioSum;
  }
  
  /**
   * Applica le dimensioni ottimali alle immagini
   * @param {Array} images - Array di oggetti immagine
   * @param {number} optimalHeight - Altezza ottimale calcolata
   * @param {number} availableWidth - Larghezza disponibile totale
   * @param {number} columnGap - Spazio tra le colonne
   */
  function applyOptimalSizes(images, optimalHeight, availableWidth, columnGap) {
    // Calcola le nuove dimensioni
    let totalCalculatedWidth = 0;
    
    const newSizes = images.map(img => {
      const aspectRatio = img.width / img.height;
      const newWidth = optimalHeight * aspectRatio;
      totalCalculatedWidth += newWidth;
      
      return {
        element: img.element,
        newWidth: newWidth,
        newHeight: optimalHeight
      };
    });
    
    // Aggiusta proporzionalmente per assicurarsi che la somma delle larghezze sia esattamente uguale alla larghezza disponibile
    const scaleFactor = availableWidth / totalCalculatedWidth;
    
    newSizes.forEach(item => {
      // Applica il fattore di scala per assicurarsi che la somma totale sia esattamente uguale alla larghezza disponibile
      const finalWidth = Math.floor(item.newWidth * scaleFactor);
      
      // Applica le dimensioni all'elemento
      item.element.style.height = `${optimalHeight}px`;
      item.element.style.width = `${finalWidth}px`;
      item.element.style.maxWidth = 'none'; // Rimuove la limitazione max-width dal CSS
      item.element.style.flexShrink = '0'; // Previene la riduzione automatica da flex
    });
  }
  
  /**
   * Funzione debounce per limitare l'esecuzione di un evento frequente
   */
  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }