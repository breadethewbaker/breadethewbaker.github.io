var _divClick = 0;

$('div').click(function(){
  if (_divClick === 0){
    $("h1").html("Carmen Sandiego");
    $('#acts').append("<li id='add'>Hiding</li>");
    _divClick = 1;
  }
  else{
    $("h1").html("Brett Baker");
    $("#add").remove();
    _divClick = 0;
  }
  $('#carmen').toggleClass("carmenbody");
});
