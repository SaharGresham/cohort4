
const functions = {
    provincename: {'AB':"Alberta", 'BC':"British Clombia", 'MB': "Manitoba",
              'NB': "New Brunswick",		
              'NL':	"Newfoundland and Labrador",
              'NS':	"Nova Scotia",
              'NT':"Northwest Territories",	
              'NU':	"Nunavut",
              'ON':	"Ontario",	
              'PE':	"Prince Edward Island",
              'QC':	"Quebec",	
             'SK':	"Saskatchewan",	
              'YT':	"Yukon",
            },
     Messages:{'one':"Number added to the array",
                'two': "Input is not a valid number"},
    
    size: (num) => {
        if (num < 10) return "small";
        if (num < 20) return "medium";
        return "large";
    },


    add: (num1, num2) => {
        return num1 + num2;
    },

    subtract: (num1, num2) => {
        return num1 - num2;
    
    },
    multiply: (num1, num2) => {
        return num1*num2;
    },

    division: (num1, num2) => {
        return num1/num2;
    },

    
    calctaxes: (amount) => {
        let tax=0;
        if(amount > 214368) {
           
            tax= 48535*0.15+(97069-48535)*0.205+(150473-97069)*.26+
        (214368-150473)*0.29+(amount-214368)*0.33;
        }   
       else if (amount>150473) {
           
            tax = 48535*0.15+(97069-48535)*0.205+(150473-97069)*.26+(amount-150473)*0.29;  
       }else if (amount>97069) {
        
                tax =48535*0.15+(97069-48535)*0.205+(amount-97069)*.26;  
      } else if( amount >48535 ){
                tax = (amount - 48535) *0.205 + (48535)*0.15; 
      }if (amount <= 48535){
                    tax = (amount) * 0.15;
      }
      return (tax);
    },
   
    addtoarray: (numberarray,inputnumber) =>{
        // if(typeof inputnumber == 'number'){
        //     numberarray.push(Number(inputnumber));
        //     return (numberarray); 
        //  }else{
        //   return (numberarray);
        // }
        if(isNaN(inputnumber)){
            return(numberarray);
        }else{numberarray.push(Number(inputnumber));
            return (numberarray);
        }
    },

      showarray: (numberarray) => {
         
             return ""+numberarray;
              
          },
          sumarray: (numberarray) =>{
              return numberarray.reduce ((a,b) => a+b,0 );
          },
          cleararray: (numberarray) =>{
              return [];
          },
          dictionaryfunction: (province) =>{
              
              return functions.provincename[province];
          },

      

    
  
};

export default functions;
