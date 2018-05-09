var numSquares = 6;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll(".square");
var message = document.querySelector("#message");
var headerColor = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easybtn = document.querySelector("#easybtn");
var hardbtn = document.querySelector("#hardbtn");
var modebtn = document.querySelectorAll(".mode");

init();

function init()
{
setupModeBtn();
setupSquares();
reset();	
}

function setupModeBtn(){
	for(var i =0; i<modebtn.length; i++)
	{
		modebtn[i].addEventListener("click",function(){
		modebtn[0].classList.remove("selected");
		modebtn[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
		reset();
	})

}
}

function setupSquares(){
	for(var i = 0; i<squares.length; i++)
	{
		squares[i].addEventListener("click",function()
		{
		var clickedColor = this.style.backgroundColor;
		if(clickedColor == pickedColor)
			{
				message.textContent = "CORRECT!"
				message.style.color = "green";
			colorChange(clickedColor);
			headerColor.style.backgroundColor = clickedColor;
			resetButton.textContent = "Play again?" ;
			}
		else
			{
			this.style.backgroundColor = "#232323";
			message.textContent = "Try Again :("
			message.style.color ="red";
			}

		});
	}
}

function reset(){
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	document.querySelector("#displayColor").textContent = pickedColor;
	for(var i = 0; i<squares.length; i++)
	{
		if(colors[i])
			{
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
			} 
		else
			{
			squares[i].style.display = "none";
			}
	}
	headerColor.style.backgroundColor = "steelblue";
	message.textContent="";
	resetButton.textContent = "NEW COLORS" ;
	// message.color="white";

}

resetButton.addEventListener("click",function(){
	reset();

})

function colorChange(color){
for(var i = 0; i<squares.length; i++){
	squares[i].style.backgroundColor = color;
}
}



function pickColor(){
	var rand = Math.floor(Math.random()*colors.length);
	return colors[rand];
}

function generateRandomColors(num){
	var arr = [];
	for(var i = 0; i<num; i++){
		arr.push(randomColors());
	}
	return arr;
}

function randomColors(){
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	return "rgb("+ r +", "+ g +", "+ b +")";

}