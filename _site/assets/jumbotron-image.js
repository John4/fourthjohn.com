$(document).ready(function() {
  var NUM_PHOTOS = 7;
  var rand = Math.floor((Math.random() * NUM_PHOTOS) + 1);
  var $jumbotron = $('.jumbo#image-target');
  if($jumbotron) {
    $jumbotron.attr('style', "background-image: url(/images/jumbotron/" + rand +".jpg)")
  }
});
