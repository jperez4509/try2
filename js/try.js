var firstNum = parseInt(prompt("Please enter a number.", 10));
var secondNum = parseInt(prompt("Please enter another number.", 10));

if(firstNum !== NaN && secondNum !== NaN) {
	var result = firstNum + secondNum;
	console.log(result);
} else {
	alert("One of the entered values was not a number. Please only enter numbers.")
}
