document.addEventListener('DOMContentLoaded', (event) => {
    const learnMoreButtons = document.querySelectorAll('.learn-more');
    const popups = document.querySelectorAll('.popup');
    const popupCloses = document.querySelectorAll('.popup-close');

    learnMoreButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            popups[index].style.display = 'block';
        });
    });

    popupCloses.forEach((close, index) => {
        close.addEventListener('click', () => {
            popups[index].style.display = 'none';
        });
    });

    window.addEventListener('click', (event) => {
        popups.forEach((popup) => {
            if (event.target === popup) {
                popup.style.display = 'none';
            }
        });
    });
});
