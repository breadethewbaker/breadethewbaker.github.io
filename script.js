var x = 0;
$('div').click(function(){
  if (x === 0){
    $("h1").html("Carmen Sandiego");
    $('#acts').append("<li>I'm good at hiding</li>");
    x = 1;
  }
  else{
    $("h1").html("Brett Baker");
    x = 0;
  }
});
