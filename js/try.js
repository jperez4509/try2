var firstNum = parseInt(prompt("Please enter a number.", 10));
var secondNum = parseInt(prompt("Please enter another number.", 10));

if(firstNum !== NaN && secondNum !== NaN) {
	var result = firstNum + secondNum;
	console.log(result);
} else {
	alert("One of the entered values was not a number. Please only enter numbers.")
}

// if(isNaN(start) || isNaN(end)){
//   alert("One of the values you entered is not a number.");
// } else if(start > end){
//   alert("The start number is greater than the ending number.");
// } else {
//   for( var i = start; i < (end+1); i++){
//     console.log(i % 2 ? i + " is even." : i + " is odd." );
//   }
// }