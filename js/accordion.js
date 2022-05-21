$( function() {
  $( "#accordion" ).accordion({
    icons: false,
    heightStyle: "content",
    collapsible: true,
    active: false
  });
  document.querySelectorAll('.accordion-item__btn').forEach(function(tabsBtn) {
    tabsBtn.addEventListener('click', function(event) {
    const path = event.currentTarget.dataset.path
    // console.log(path)
      document.querySelectorAll('.accordion__card-info').forEach(function(tabWork) {
        tabWork.classList.remove('accordion__card-tabActive')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('accordion__card-tabActive')
     
      document.querySelectorAll('.accordion-item__btn').forEach(function(tabActiv) {
        tabActiv.classList.remove('accordion-item__btn_active')
      })
      document.querySelector(`[data-path="${path}"]`).classList.add('accordion-item__btn_active')
    })
  })
} );
