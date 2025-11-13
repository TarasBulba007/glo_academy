const courseProgress = () => {
    document.addEventListener('DOMContentLoaded', function () {
        const earnedElement = document.querySelector('.course__progress-label .course__number');
        const progressBar = document.querySelector('.course__progress-element progress');

        earnedElement.textContent = '0₽';
        progressBar.value = 0;

        const startValue = 0;
        const endValue = 400000;
        const duration = 1000;
        const startTime = performance.now();

        function animate(currentTime) {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);

            const currentValue = Math.floor(progress * (endValue - startValue) + startValue);

            earnedElement.textContent = currentValue.toLocaleString('ru-RU') + '₽';
            progressBar.value = currentValue;

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        }

        requestAnimationFrame(animate);
    });
}

courseProgress()
