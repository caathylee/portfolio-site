$(document).ready(function(){
  
  $('.landing-icons').on('mouseover', function(){
    $(this).addClass('animated pulse');  
    });

  $('.landing-icons').on('mouseleave', function(){
    $(this).removeClass('animated pulse');
  });

});