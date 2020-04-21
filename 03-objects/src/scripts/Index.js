import ooStuff from './account.js';

const allAccounts= new ooStuff.AccountController();
console.log(allAccounts);

document.body.addEventListener("click", e => {
    console.log("You Clicked, at banking Page") ;
    const el= e.target;   
    const elID=el.id;
    console.log (el);
    console.log(elID);
    console.log(el.textContent)

    if (el.textContent === "Register My Account" && !(elID.includes ("k"))) {
        idcontainerLeft.append( allAccounts.createAccount());
        console.log(allAccounts);
        idaccountN.value="";
        idstartingB.value="";
        allAccounts.accountSummary();
    }    

       if (elID.includes ("k")) {
           allAccounts.getAccount(elID);
          console.log( allAccounts);
          allAccounts.accountSummary();        
    }
        
        if (el.textContent === "Update") {
            allAccounts.updateAccount ();
            allAccounts.accountSummary();  
            console.log( allAccounts);
            iddepositeNow.value="";
            idwithdrawNow.value= "";
            }
            if(el.textContent=== "Delete Account"){
                allAccounts.deleteAccount();
                allAccounts.accountSummary();  
                console.log( allAccounts);
            }
         // allAccounts.accountSummary()}
            // let accountN = Delete Accountdocument.getElementById("currentAccount").value;
            // let currentB = allaccounts.find(x => x.accountName === accountN);
            // let depositeN = parseFloat(document.getElementById("depositeNow").value);
            // let withdrawN = parseFloat(document.getElementById("withdrawNow").value);

            // if (depositeN > 0) {
            //     let deposite1 = currentB.deposit(depositeN);
            //     document.getElementById("currentBalance").value = parseFloat((currentB.balance).toFixed(2));
            // }
            // else if (depositeN < 0) { alert('Amount must be positive!'); }

            // if (withdrawN > 0) {
            //     let withdraw1 = currentB.withdraw(withdrawN);
            //     document.getElementById("currentBalance").value = parseFloat((currentB.balance).toFixed(2));
            //     currentB.isAllowed();

            });
