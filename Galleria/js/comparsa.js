document.addEventListener("DOMContentLoaded", function () {
    const elements1 = document.querySelectorAll(".reveal");
    const elements2 = document.querySelectorAll(".reveal2");
    const elements3 = document.querySelectorAll(".reveal3");

    const observer1 = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer1.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    const observer2 = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer2.unobserve(entry.target);
            }
        });
    }, { threshold: 0.7 });
    
    const observer3 = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer3.unobserve(entry.target);
            }
        });
    }, { threshold: 0.7 });

    elements1.forEach((el) => observer1.observe(el));
    elements2.forEach((el) => observer2.observe(el));
    elements3.forEach((el) => observer3.observe(el));
});