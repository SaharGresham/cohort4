import functions from './functions.js';

// **********
//
// Add the event listeners
// 
let arr=[1,3];


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

addNumber.addEventListener("click", e => {
     arr = functions.addtoarray(arr,parseFloat(myInput.value));
     if (isNaN(parseFloat(myInput.value))){
      document.getElementById("output").value= functions.Messages['two'];
    } else{
        document.getElementById("output").value= functions.Messages['one'];
    }

    //  console.log(arr);
     console.log("Inside event listener.");
});

showArray.addEventListener ("click", e => { 
    document.getElementById("output").value = functions.showarray(arr);
    // console.log(arr);

});
totalNumbers.addEventListener ("click", e => { 
    document.getElementById("output").value = functions.sumarray(arr);
    // console.log(arr);

});

totalNumbers.addEventListener ("click", e => { 
    document.getElementById("output").value = functions.sumarray(arr);
    // console.log(arr);

});

clearArray.addEventListener ("click", e => { 
    document.getElementById("output").value = functions.cleararray(arr);
    console.log(arr);

});

displayLngname.addEventListener ("click", e => { 
    let prov = document.getElementById("myProvince").value;
    document.getElementById("outputDic").value = functions.dictionaryfunction(prov);
    // document.getElementById("outputDic").value = functions.dictionaryfunction(myProvince).value;
    console.log(prov);

});