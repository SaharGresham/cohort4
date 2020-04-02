import ooStuff from './account.js' ;
let checkingAccounts=[];
document.body.addEventListener("click", e => {
 console.log("You Clicked, at banking Page");
    

    if (e.target.nodeName === 'BUTTON') {
        
        if (e.target.textContent === "Register My Account") {
           let accountName= document.getElementById ("accountN").value;
           let startingBalance=parseFloat(document.getElementById ("startingB").value);
           let newAccount =new ooStuff.account(accountName,startingBalance);
           if (newAccount. isPositive()){
           checkingAccounts.push( newAccount);}
        }
        if (e.target.textContent === "Submit") {
            console.log(checkingAccounts);
            let accountN=document.getElementById ("currentAccount").value;
            
             let currentB = checkingAccounts.find( x =>  x.accountName === accountN);
             let currentIndex=checkingAccounts.findIndex( x =>  x.accountName === accountN);
            
            document.getElementById("currentBalance").value=parseFloat((currentB.balance).toFixed(2));    
        }
          
            if (e.target.textContent === "Update") {
            let accountN=document.getElementById ("currentAccount").value;
            let currentB = checkingAccounts.find( x =>  x.accountName === accountN);
            let depositeN=parseFloat(document.getElementById ("depositeNow").value);
             let withdrawN=parseFloat(document.getElementById ("withdrawNow").value);
            
            if (depositeN>0){
            let deposite1= currentB.deposit(depositeN);           
            document.getElementById("currentBalance").value=parseFloat((currentB.balance).toFixed(2));}
            else if (depositeN<0){alert('Amount must be positive!');}

            if (withdrawN>0) {
                let withdraw1= currentB.withdraw(withdrawN);
                document.getElementById("currentBalance").value=parseFloat((currentB.balance).toFixed(2));
                currentB.isAllowed ();
                
                }  
            }
    }


})
