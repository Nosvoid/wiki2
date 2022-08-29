document.addEventListener('DOMContentLoaded', function() {
    // Opening sets by clicking on button based on letters
    let btn = document.querySelectorAll('.open-quests');

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
});