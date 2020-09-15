var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square")
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#colorMessage");
var cheader = document.getElementById("colorsGame");
var resetButton = document.querySelector("#colorReset");
var easyBtn = document.querySelector("#colorEasyBtn");
var hardBtn = document.querySelector("#colorHardBtn");

easyBtn.addEventListener("click", function(){
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i=0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
})

hardBtn.addEventListener("click", function(){
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i=0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }
})

resetButton.addEventListener("click", function(){
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    messageDisplay.textContent = "";
    for(var i = 0; i <squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }
    cheader.style.backgroundColor = "white";
    this.textContent = "New Colors";
})

colorDisplay.textContent = pickedColor;

for(var i = 0; i <squares.length; i++){
    //add initial colors to squares
    squares[i].style.backgroundColor = colors[i];
    //add clicl listeners to squares
    squares[i].addEventListener("click", function(){
    var clickedColor = this.style.backgroundColor;

    if(clickedColor === pickedColor){
        messageDisplay.textContent = "Correct!";
        resetButton.textContent = "Play Again?";
        changeColors(clickedColor)
        cheader.style.backgroundColor = pickedColor;
    } else{
        this.style.backgroundColor = "#232323"
        messageDisplay.textContent = "Try Again!"}
    })
}

function changeColors(color){
    for(var i = 0; i <squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    var arr = [];
    for(var i = 0; i < num; i++){
        arr.push(randomColor())
    }
    return arr;
}

function randomColor(){
var r = Math.floor(Math.random() * 256);
var g = Math.floor(Math.random() * 256);
var b = Math.floor(Math.random() * 256);
return "rgb("+r+", "+g+", "+b+")";
}
