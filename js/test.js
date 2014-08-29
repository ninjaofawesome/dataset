$(document).ready(function(){
  console.log('are you ready to test some dataaaaaaaa?!');

  $('.box-2').hide();

  var myData = document.querySelector('.box-label');
  console.log(myData.dataset.color);

  $('.box').click(function(){
    $('.box-2').children('h1').text(myData.dataset.color);
    $('.box-2').fadeIn();

  });
});