$('.navbar-nav li, .navbar-header').on('click', 'a', function(event){
  event.preventDefault();
  $('body').animate({
    scrollTop: $($.attr(this, 'href')).offset().top - 50
  }, 800);
});