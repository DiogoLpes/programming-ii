console.log(hoistedVar); 
var hoistedVar = "I'm hoisted!";



hoistedFunc(); 
function hoistedFunc() {
  console.log("I work!");
}