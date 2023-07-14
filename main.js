
x1 = 0
var x2;
x2 = 0
var x3;
x3 = 0
var x4;
x4 = 0
var x5;
x5 = 0

var y1;
y1 = 0
var y2;
y2 = 0
var y3;
y3 = 0
var y4;
y4 = 0
var y5;
y5 = 0
var y6;
y6 = 0
var y7;
y7 = 0

function Login() 
{
    window.location = "index.html";
}
function causes() 
{
    window.location = "causes.html";
}
function test() 
{
    window.location = "test.html";
}

function result1() {
  

if(document.getElementById("yes1").checked) 
{
x1 = 1
}
elseif(document.getElementById("no1").checked)
{
x1 = 0
}




if(document.getElementById("yes2").checked)
{
x2 = 1
}
elseif(document.getElementById("no2").checked)
{
x2 = 0
}



if(document.getElementById("yes3").checked)
{
x3 = 1
}
elseif(document.getElementById("no3").checked)
{
x3 = 0
}




if(document.getElementById("yes4").checked)
{
x4 = 1
}
elseif(document.getElementById("no4").checked)
{
x4 = 0
}



if(document.getElementById("yes5").checked)
{
x5 = 1
}
elseif(document.getElementById("no5").checked)
{
x5 = 0
}

}
function test1()
{
var score
score = (x1 + x2 + x3 + x4 + x5 )
if (score <= 1){
    document.getElementById("result1").innerHTML = "You don't need to consult to a Doctor.";
    }
else if (score = 2){
    document.getElementById("result1").innerHTML = "You might perhaps need to consult to a Doctor.";
    }
else if (score = 3){
    document.getElementById("result1").innerHTML = "You might perhaps need to consult to a Doctor.";
    }
else if (score = 4){
    document.getElementById("result1").innerHTML = "I strongly advise you to consult to a Doctor.";
    }
else{
    document.getElementById("result1").innerHTML = "I strongly advise you to consult to a Doctor.";
}
}




function result2() {
    
  
  if(document.getElementById("test2yes1").checked) 
  {
  y1 = 1
  }
  elseif(document.getElementById("test2no1").checked)
  {
  y1 = 0
  }
  
  
  
  
  if(document.getElementById("test2yes2").checked)
  {
  y2 = 1
  }
  elseif(document.getElementById("test2no2").checked)
  {
  y2 = 0
  }
  
  
  
  if(document.getElementById("test2yes3").checked)
  {
  y3 = 1
  }
  elseif(document.getElementById("test2no3").checked)
  {
  y3 = 0
  }
  
  
  
  
  if(document.getElementById("test2yes4").checked)
  {
  y4 = 1
  }
  elseif(document.getElementById("test2no4").checked)
  {
  y4 = 0
  }
  
  
  
  if(document.getElementById("test2yes5").checked)
  {
  y5 = 1
  }
  elseif(document.getElementById("test2no5").checked)
  {
  y5 = 0
  }


  if(document.getElementById("test2yes6").checked)
  {
  y6 = 1
  }
  elseif(document.getElementById("test2no6").checked)
  {
  y6 = 0
  }

  
  if(document.getElementById("test2yes7").checked)
  {
  y7 = 1
  }
  elseif(document.getElementById("test2no7").checked)
  {
  y7 = 0
  }
  
  }
function test2()
  {
  var score2
  score2 = (y1 + y2 + y3 + y4 + y5 + y6 + y7)
  if (score2 <= 1){
    document.getElementById("result2").innerHTML = "You don't need to consult to a Doctor.";
      }
  else if (score2 = 2){
    document.getElementById("result2").innerHTML = "You might perhaps need to consult to a Doctor.";
    }
  else if (score2 = 3){
    document.getElementById("result2").innerHTML = "You might perhaps need to consult to a Doctor.";
    }
  else if (score2 = 4){
    document.getElementById("result2").innerHTML = "You advise you to consult to a Doctor.";
    }
  else if (score2 = 5){
    document.getElementById("result2").innerHTML = "I advise you to consult to a Doctor.";
    }
  else if (score2 = 6){
    document.getElementById("result2").innerHTML = "I strongly advise you to consult to a Doctor.";
    }
  else{
    document.getElementById("result2").innerHTML = "I strongly advise you to consult to a Doctor.";
    }

  }
  
