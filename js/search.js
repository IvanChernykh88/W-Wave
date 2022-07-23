document.addEventListener('DOMContentLoaded', function() {
    var btn = document.querySelector('.search__btn');
    btn.setAttribute("type", "button");
    console.log(btn);
    btn.addEventListener('click', function(e) {
        setInterval(function() {
            btn.setAttribute("type", "submit");
        }, 200)
        document.querySelector('.search__input').classList.add('search__input_active');
        var input = document.querySelector('.search__input');
        input.focus();
    })
})

