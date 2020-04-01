import ooStuff from './account.js' ;
let checkingAccounts=[];
document.body.addEventListener("click", e => {
 console.log("You Clicked, at banking Page");
    // console.log(e.target.textContent);
    // console.log(e.target.nodeName);
    // console.log(e.target);

    if (e.target.nodeName === 'BUTTON') {
        // document.body.appendChild(domfuncs.buildCard("You just added " + counter++));
        console.log(e.target.textContent);
        if (e.target.textContent === "Register My Account") {
           let accountName= document.getElementById ("accountN").value;
           let startingBalance=parseFloat(document.getElementById ("startingB").value);
           checkingAccounts.push( new ooStuff.account(accountName,startingBalance));
           console.log (checkingAccounts[0]);

        }
        if (e.target.textContent === "Submit") {
            console.log(checkingAccounts);
           
            let accountN=document.getElementById ("currentAccount").value;
            console.log(accountN);
            console.log(typeof(accountN));
             let currentB = checkingAccounts.find( x =>  x.accountName === accountN);
             let currentIndex=checkingAccounts.findIndex( x =>  x.accountName === accountN);
            console.log(checkingAccounts[currentIndex].balance);
            console.log(currentB.balance);
            
         } 
        
    }
})
