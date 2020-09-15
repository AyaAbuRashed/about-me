'use strict';
var score=0;
var name =prompt("write your name");
console.log("welcome "+name );
alert("welcome"+name);
var a=prompt("Is Html stands for hypertext markup language?yes/no(y/n)");
a=a.toLowerCase();

function first(a) {
    if(a =="yes" || a==="y")
    {alert("Correct answer");
    score++;}
    else if (a=="no" || a==="n")
    {
        alert("InCorrect answer");
    }
}
first(a);
var b=prompt("Is CSS stand for Cascading Style Sheets?yes/no(y/n)");
b=b.toLowerCase();
;
function second(b) {
    if(b=="yes" || b==="y")
    {alert("Correct answer");
    score++;}
    else if (b=="no" || b==="n")
    {
        alert("InCorrect answer");
    }
}
second(b);
var c=prompt("Is  JavaScript a programming language?yes/no(y/n)");
c=c.toLowerCase();

function third(c) {
    if(c =="yes" || c==="y")
    {alert("Correct answer");
    score++;}
    else if (c=="no" || c==="n")
    {
        alert("InCorrect answer");
    }
}
third(c);
var x=prompt("Is JavaScript written in CSS?yes/no(y/n)");
x=x.toLowerCase();

function four(x) {
    if(x =="no" || x==="n")
    {alert("Correct answer");
    score++;}
    else if (x=="yes" || x==="y")
    {
        alert("InCorrect answer");
    }
}
four(x);
var y=prompt("Is the Head tag means content ?yes/no(y/n)");
y=y.toLowerCase();
function five(y) {
    if(y =="no" || y==="n")
    {alert("Correct answer"+name);
    score++;}
    else if (y=="yes" || y==="y")
    {
        alert("InCorrect answer"+name);
    }
    
}
five(y);
var num=Math.floor(Math.random() * 101);
var g=prompt("guess a number between[0,100] you have only 4 opportunities");
g=parseInt(g);
function six(g,num) {
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
}
six(g,num);


var favColor = ['black', 'blue', 'gray', 'red', 'yellwo', 'green', 'white', 'softwhite', 'darkgray', 'Ivory'];
function seven(favColor) {
    for(var x = 0; x < 6; x++){
    var userAnswer = prompt('Guess one of my fav colors and type it here?').toLowerCase();
        for (var j = 0; j < favColor.length; j++) {
            if( userAnswer === favColor[j]){
                alert('Your Answer Is Corrct!!');
                score++;
                break ;}
           }
        if (userAnswer === favColor[j]){
            break;}
            else{
            alert('Your Answer is incorrect, Try again');}
    }
        
    
}
seven(favColor);
alert("Your score is "+score+"/7");


