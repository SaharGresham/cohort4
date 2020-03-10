import functions from './functions.js';

// **********
//
// Add the event listeners
// 


plus.addEventListener('click', (() =>{
    let num1=parseInt(document.getElementById("myInput1").value);
    let num2=parseInt(document.getElementById("myInput2").value);
    //display.innerHTML=functions.add(num1,num2);
    //console.log(num1);
    //console.log(num2);
    //console.log(functions.add(num1,num2));
    document.getElementById("display").value=parseInt(functions.add (num1,num2));
}));
minus.addEventListener('click', (() =>{
    let num1=parseInt(document.getElementById("myInput1").value);
    let num2=parseInt(document.getElementById("myInput2").value);
    //display.innerHTML=functions.subtract(num1,num2);
    document.getElementById("display").value=parseInt(functions.subtract (num1,num2));
}));
times.addEventListener('click', (() =>{
    let num1=parseInt(document.getElementById("myInput1").value);
    let num2=parseInt(document.getElementById("myInput2").value);
   // display.innerHTML=functions.multiply(num1,num2);
   document.getElementById("display").value=parseInt(functions.multiply (num1,num2));
}));

div.addEventListener('click', (() =>{
    let num1=parseInt(document.getElementById("myInput1").value);
    let num2=parseInt(document.getElementById("myInput2").value);
    //display.innerHTML=functions.division(num1,num2);
    document.getElementById("display").value=parseInt(functions.division (num1,num2));
}));
calculate.addEventListener('click', (() =>{
    let amount =parseFloat(document.getElementById("income").value);
    console.log(amount);
    console.log(functions.calctaxes (amount));
    console.log (tax);
   
    document.getElementById("tax").value=functions.calctaxes (amount).toFixed(2);
    document.getElementById("effective").value=(((functions.calctaxes (amount))/amount)*100).toFixed(2);
}));
