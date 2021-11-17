let mousedown = false;

$(document).ready(function(){
  for(let i=0;i<10*10;i++)
    $("#canvas").append("<div class='pixel'></div>");

  $(".color").click(function(ev){    
    $("#color").attr('class',ev.target.className);    
  });

  let changePixelColor = function(ev){        
      $(ev.target).attr('class','pixel '+$("#color").attr('class'));    
  };

  $(".pixel").hover(function(ev){
    if(mousedown)
      changePixelColor(ev);
  });

  $(".pixel").click(changePixelColor);

  $(document).mousedown(function(ev){
    ev.preventDefault();
    if(ev.button === 0)
      mousedown = true;
  });

  $(document).mouseup(function(ev){
    if(ev.button === 0)
      mousedown = false;
  });

});