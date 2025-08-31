// Simple animation for stats counting
document.addEventListener('DOMContentLoaded', function() {
    const statNumbers = document.querySelectorAll('.stat-number');
    const values = [15, 127, 8, 24];
    const duration = 2000;
    const interval = 50;
    
    statNumbers.forEach((stat, index) => {
        let startValue = 0;
        let endValue = values[index];
        let steps = duration / interval;
        let increment = Math.ceil(endValue / steps);
        let current = 0;
        
        let timer = setInterval(() => {
            current += increment;
            if (current >= endValue) {
                current = endValue;
                clearInterval(timer);
            }
            stat.textContent = current;
        }, interval);
    });
});