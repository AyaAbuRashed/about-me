'use strict';
var score=0;
var name =prompt("write your name");
console.log("welcome "+name );
alert("welcome"+name);
var a=prompt("Is Html stands for hypertext markup language?yes/no");
a=a.toLowerCase();
if(a =="yes")
{alert("Correct answer");
score++;}
else if (a=="no")
{
    alert("InCorrect answer");
}
var b=prompt("Is CSS stand for Cascading Style Sheets?yes/no");
b=b.toLowerCase();
if(b=="yes")
{alert("Correct answer");
score++;}
else if (b=="no")
{
    alert("InCorrect answer");
}
var c=prompt("Is  JavaScript a programming language?yes/no");
c=c.toLowerCase();
if(c =="yes")
{alert("Correct answer");
score++;}
else if (c=="no")
{
    alert("InCorrect answer");
}
var x=prompt("Is JavaScript written in CSS?yes/no");
x=x.toLowerCase();
if(x =="no")
{alert("Correct answer");
score++;}
else if (x=="yes")
{
    alert("InCorrect answer");
}
var y=prompt("Is the Head tag means content ?yes/no");
y=y.toLowerCase();

if(y =="no")
{alert("Correct answer"+name);
score++;}
else if (y=="yes")
{
    alert("InCorrect answer"+name);
}

var num=Math.floor(Math.random() * 101);
var g=prompt("guess a number between[0,100] you have only 4 opportunities");
g=parseInt(g);
for(var i=0;i<4;i++)
{
    if (g==num) 
     {alert("correct");
    score++;}
     else if(g<num)
         {alert("too low");
         g=prompt("guess a number between[0,100] you have only 4 opportunities");
        }
     else{alert("too high");
     g=prompt("guess a number between[0,100] you have only 4 opportunities");}
}
alert("the correct number is"+num);

var cars = ["FERRARI", "VOLVO", "BMW","FORD" ,"LAMBORGHINI","MCLAREN ","BUGATTI CHIRON"];
//var r=prompt("guess one of the top fastest car in the world").toUpperCase();


//var q=0;
//var b=false;
//while(q<5)
//{
  // for(i=0;i<cars.length;i++)
   //{if(r==cars[i])
    //{ alert("correct");
        //score++;
        //b=true;
      //  break; }
        
    //}
    //if(b){break;}
    // r=prompt("guess one of the top fastest car in the world").toUpperCase();
  //  q++;

//}
var favColor = ['black', 'blue', 'gray', 'red', 'yellwo', 'green', 'white', 'softwhite', 'darkgray', 'Ivory'];
for(var x = 0; x < 6; x++){
var userAnswer = prompt('Guess one of my fav colors and type it here?').toLowerCase();
    for (var j = 0; j < favColor.length; j++) {
        if( userAnswer === favColor[j]){
            alert('Your Answer Is Corrct!!');
            break ;}
       }
    if (userAnswer === favColor[j]){
        break;}
        else{
        alert('Your Answer is incorrect, Try again');}
}
    
alert("Your score is"+score+"/7");

console.log("Is Html stands for hypertext markup language?yes/no");
console.log("Is CSS stand for Cascading Style Sheets?yes/no");
console.log("Is  JavaScript a programming language?yes/no");
console.log("Is JavaScript written in CSS?yes/no");
console.log("Is the Head tag means content ?yes/no");
console.log("guess a number between[0,100] you have only 4 opportunities");
console.log("guess one of the top fastest car in the world");