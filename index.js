const prompt=require("prompt-sync")();
let rand=Math.floor(Math.random()*100);
console.log(rand);
let num;
let chances=0;
do{
  num=Number.parseInt(prompt("Enter a number"));
  chances++
  if(num>rand){
    console.log(" Input number is greater than the random number");
  }
  else if(num<rand){
    console.log("Input number is less than the random number");
  }
  else{
    console.log("Input number is equal to the random number");
  }
  
}while(num!=rand );
console.log("Your score is ",100-chances);
  