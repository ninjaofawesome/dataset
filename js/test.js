$(document).ready(function(){
  console.log('are you ready to test some dataaaaaaaa?!');

  $('.box.box-2').hide();
  $('.box.box-3').hide();
  $('.box.box-4').hide();

  var myData = document.querySelector('.box-label');
  var answer= $('.box-label-2').data('color');

  $('.box').click(function(){
    $('.box.box-2').children('h1').text(myData.dataset.color)

    $('.box.box-2').fadeIn();
    $('.box.box-3').delay(600).fadeIn();
  });

  $('.box.box-3').click(function(){
    $('.box.box-4').children('h1').text(answer).attr('data-number', '1');
    $('.box.box-4').fadeIn();
  });
});

