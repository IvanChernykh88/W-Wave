document.addEventListener('DOMContentLoaded', function(){
    var btn = document.querySelector('.podcast-button__btn');
    // console.log(btn);
    btn.addEventListener('click', function() {
        document.querySelectorAll('.podcast__card_2').forEach(function(card) {
            card.classList.toggle('podcast_invisible')
        })
    } )
})