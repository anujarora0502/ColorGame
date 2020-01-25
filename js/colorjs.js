var numOfSquare=6;
var colors=generateRandomColors(numOfSquare);

var squares=document.querySelectorAll(".square");

var pickedColor=colors[pick()];
var colorDisplay=document.getElementById("colorDisplay");
colorDisplay.textContent=pickedColor;
var messageDisplay=document.getElementById("message");
var h1=document.querySelector("h1");
var reset=document.querySelector("#reset");
var easy=document.querySelector("#easy");
var hard=document.querySelector("#hard");
var head=document.querySelector("#header");




easy.addEventListener("click",function(){
easy.classList.add("selected");
hard.classList.remove("selected");
reset.classList.remove("selected");

numOfSquare=3;
colors=generateRandomColors(numOfSquare);
pickedColor=colors[pick()];
colorDisplay.textContent=pickedColor;
h1.style.background="#1e1616";
head.style.background="#1e1616";
messageDisplay.textContent="";

for(var i=0;i<squares.length;i++){
    if(colors[i]){
        squares[i].style.backgroundColor=colors[i];
    }
    else{
        squares[i].style.display="none";
    }
}



});

hard.addEventListener("click",function(){
    hard.classList.add("selected");
 
    easy.classList.remove("selected");
    reset.classList.remove("selected");

    numOfSquare=6;
    colors=generateRandomColors(numOfSquare);
    pickedColor=colors[pick()];
    colorDisplay.textContent=pickedColor;
    h1.style.background="#1e1616";
    head.style.background="#1e1616";
    messageDisplay.textContent="";

    
    for(var i=0;i<squares.length;i++){
        
            squares[i].style.backgroundColor=colors[i];
        
    
            squares[i].style.display="block";
        
    } 


});





reset.addEventListener("click",function(){
    colors=generateRandomColors(numOfSquare);
    pickedColor=colors[pick()];
    colorDisplay.textContent=pickedColor;
    messageDisplay.textContent="";
    reset.classList.add("selected");
    easy.classList.remove("selected");
    hard.classList.remove("selected");


    // colorDisplay.style.background="#1e1616";
    h1.style.background="#1e1616";
    for(var i=0;i<squares.length;i++){
        squares[i].style.backgroundColor=colors[i];
        reset.textContent="new game";
    }

});

for(var i=0;i<squares.length;i++){
    squares[i].style.backgroundColor=colors[i];

    squares[i].addEventListener("click",function(){

        var clickedColor=this.style.backgroundColor;
        // console.log(clickedColor,pickedColor);
        if(clickedColor === pickedColor){
            messageDisplay.textContent="correct";   
            changeColor(clickedColor);
            h1.style.backgroundColor=clickedColor;
            reset.textContent="play again";
            head.style.background=clickedColor;
            messageDisplay.classList.add("message");
            
        }
        else{
            this.style.backgroundColor='#1e1616';
            messageDisplay.textContent="try again";
        }
        
    });
}

function changeColor(color){
    for(var i=0; i<colors.length;i++){
        squares[i].style.backgroundColor=color;
    }
}

function pick(){
   var random= Math.floor(Math.random()*colors.length);
    return random;
}

function generateRandomColors(num){
    var arr=[];

for(var i=0;i<num;i++){
    arr.push(randomColor());

}

    return arr;
}

function randomColor(){
    var r=Math.floor(Math.random()*256);
    var g=Math.floor(Math.random()*256);
    var b=Math.floor(Math.random()*256);

    return "rgb("+ r+", "+ g +", "+ b+")" ;
}