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
         

            });
