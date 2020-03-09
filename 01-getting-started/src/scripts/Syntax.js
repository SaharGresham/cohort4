
// loops 
// for
// for/in
// while
// do while
// forEach (with array and function)
// Objects / Dictionaries
// declare object
// lookup key to retrieve value
// /
const syntaxFunction = {
    //define attributes / variables
    // number
    NumberT: (x) => {
        return("This is a number");
    },
    //sting
    StringT: (x) =>{
        return ("This is a string");
    },
    //boolean

    BooleanT: (x) => {
        return ("This is a boolean");
    },
    //array
    ArrayT: (x) => {
        return ("This is an array");
    },
    // dictionary
    DictionaryT: (x) => {
        return ("This is a dictionary");
    },
    //undefined
    UndifinedT: (x) => {
        return ("This is undifined");
    },
            
    // sample if / else
    SampleIfElse: () =>{
        var hour = new Date().getHours(); 
        if (hour < 18) {
        return("Good Day");
        } else {
         return ("Good Evening");
        }
      },
      // arrays
    SampleArrays: (x) =>{
        x.splice(0,0,"Cauliflower"); // add to the front
        x.push("Cucumber"); // add to the end
        x[1]="Eggplant";// update values
        return(x);
    },
    SampleLoop: (x) =>{
        var i;
        for (i = 0; i < x.length; i++) {
          x[i]= x[i] + 10
        }; 
        return(x);

    },
    sampleforin: (number_arrays) =>{
       
        var x;
        var sum=0;
        for (x in number_arrays) {
            sum += number_arrays[x]
          };
          return sum;
    },
    sampleWhileLoop: (number) => {
        var i=0;
        var sum=0;
        while (i <number) {
        sum=sum+i;
        i++;
        };
        return (sum);
    },
    sampledoWhile: (number_arrays) => {
         let i=0;
         let sum=0;
        do {
           sum= number_arrays[i]+sum;
           i++;
           }
      while (i < number_arrays.length);  
       return (sum);
     },

     sampleforEach: (number_arrays) => {
     let sum = 0; 
     number_arrays.forEach(myfunction);
     function myfunction(item){
      sum+=item;
     };
       return (sum);
  },
      sampleObjects: () => {
        let person = {fname:"John", lname:"Deo", age:25}; 
        let text="";
        let x=0;
        for (x in person) {
            text += person[x] + " ";
          }
        return (text)
      },
      


        
    
    

    
    add12Num: (x) => {

     return x+12;
    },
   
    add12Str: (x) => {
        return x+12;
    },
    add12Bln: (x) =>{
        if (Boolean(x)){
            return "true12";}
         return "false12";
    },

// calc_tax: (amount) => {
//     let tax=0;
//     if (amount <= 48535){
//         tax= (amount*0.15) ;
//     else if ( 45535< amount <= 97069){
//         tax= (amount-48535)*0.2+ 48535*0.15;
    
//     }
//     return (tax);

// },


}
export default syntaxFunction;