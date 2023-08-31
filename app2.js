
// Console Log message
console.log('Message from Dev John')


// Strings
let carName1 = "Volvo XC60";
let carName2 = 'Volvo XC60';

document.getElementById("demo2").innerHTML =
carName1 + "<br>" + 
carName2; 

// const 
const x = 5;
const y = 6;
const z = x + y;
document.getElementById("demo").innerHTML =
"The value of z is: " + z;


//block varible 
	function myFunction() {
  document.getElementById("demo1.1").innerHTML = "Hello Dolly!";
  document.getElementById("demo2.2").innerHTML = "How are you?";
}