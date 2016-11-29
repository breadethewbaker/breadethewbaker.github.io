$(document).ready(function(){
  var _divClick = 0;
  $('#hclick').click(function(){
    if (_divClick === 0){
      $("#hl").html("<li id='hl'><a href='index.html'>Carmen Sandiego</a></li>");
      $('.acts').remove()
      $('#ul').append("<ul class='acts'><li id='add'>Hiding</li></ul>");
      _divClick = 1;
    }
    else{
      $("#hl").html("<li id='hl'><a href='index.html'>Brett Baker</a></li>");
      $("#add").remove();
      $('.acts').append("<li>Running</li>\n<li>Riding my bicycle</li>\n<li>Playing tennis</li>\n<li>Reading</li>\n<li>Baking</li>");
      _divClick = 0;
    }
    $('.title').toggleClass("cartitle");
    $('.lbar').toggleClass("carlbar");
  });
  $('#sudoku')
});
