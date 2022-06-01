document.addEventListener('DOMContentLoaded', function() {
    var btn = document.querySelector('.search__btn');
    console.log(btn);
    btn.addEventListener('click', function() {
        document.querySelector('.search__input').classList.add('search__input_active')
    })
})

