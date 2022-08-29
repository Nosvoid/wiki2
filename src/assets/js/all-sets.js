document.addEventListener('DOMContentLoaded', function() {
    
    // Opening sets by clicking on button based on letters
    let btn = document.querySelectorAll('.open-sets');

    btn.forEach(element => {
        element.addEventListener('click', () => {
            let next = element.nextElementSibling;
            if(next.classList.contains('display-none')) {
                next.classList.remove('display-none');
                next.classList.add('display-grid');
            } else if(next.classList.contains('display-grid')) {
                next.classList.remove('display-grid');
                next.classList.add('display-none');
            }
        })
    });

    // Showing buffs for each of costumes
    const showBuffs = document.querySelectorAll('.show-buffs');
    const closeBuffs = document.querySelectorAll('.close-buffs');

    showBuffs.forEach(element => {
        element.addEventListener('click', () => {
            let nextChild = element.nextElementSibling;

            // Opening the modal
            if(nextChild.classList.contains('display-none')) {
                nextChild.classList.remove('display-none');
                nextChild.classList.add('display-flex');
            } else if(next.classList.contains('display-flex')) {
                nextChild.classList.remove('display-flex');
                nextChild.classList.add('display-none');
            }

            // Closing the modal
            closeBuffs.forEach(element => {
                element.addEventListener('click', () => {
                    nextChild.classList.remove('display-flex');
                    nextChild.classList.add('display-none');
                })
            });

            // Closing modal if click outside of the modal
            window.addEventListener('click', outsideClick);
            function outsideClick(e) {
                if(e.target == nextChild) {
                    nextChild.classList.remove('display-flex');
                    nextChild.classList.add('display-none');
                }
            }
        });
    });
});