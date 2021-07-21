

var a = prompt( "Enter the first number:");
var b = prompt("Enter the second number:")
function setup(){
  var b2 = createButton("click here to Swap");
b2.mousePressed(swap)
  }


function swap()
{
  [a,b ] =[b,a]
  console.log("number a is"+a)
  console.log("number b is"+b)
}
