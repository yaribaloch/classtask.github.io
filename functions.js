var numb=0;
function onClick() {
  var lines = document.getElementById("inputText").value;
  document.getElementById("paragraph").value = lines;
   }

function mouseEnter(){
display(numb);
}

function display(num){
  if(numb == 0)
  {
    numb++;
    setTimeout(red, 2000);
    display(numb);
  }
  else if (numb == 1)
  {    
    numb++;
    setTimeout(white, 4000);
    display(numb);  
  }
  else if (numb == 2)
  {    
    numb++;
    setTimeout(wines, 6000);
    display(numb);  
  }
   else if (numb == 3)
  {    
    numb++;
    setTimeout(car, 8000);
    display(numb);  
  }
  else if (numb == 4)
  {    
    numb=0;
    setTimeout(art, 10000);
    display(numb);  
  }
}
function red()
{
  document.getElementById("slider").innerHTML = '<img src="images/red.jpg" />';
}
function white()
{
  document.getElementById("slider").innerHTML = '<img src="images/white.jpg" />';
}
function wines()
{
  document.getElementById("slider").innerHTML = '<img src="images/wines.jpg" />';
}
function car()
{
  document.getElementById("slider").innerHTML = '<img src="images/car.jpg" />';
}

function art()
{
  document.getElementById("slider").innerHTML = '<img src="images/art.jpg" />';
}