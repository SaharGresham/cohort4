import ooStuff from './account.js';

document.body.addEventListener("click", e => {
    console.log("You Clicked, at banking Page");


    if (e.target.nodeName === 'BUTTON') {

        if (e.target.textContent === "Register My Account") {
            let accountName = idaccountN.value;
            let startingBalance = parseFloat((idstartingB).value);
            let newAccount = new ooStuff.Account(accountName, startingBalance);
            console.log (newAccount);
            let newView =new ooStuff.View(newAccount);
            console.log (newView);
            let newAccountController= new ooStuff.AccountController(newAccount,newView);
            newAccountController.showaccounts(newAccount);
            
            // newAccount.handleRegister ((accountName, startingBalance));
            
            console.log (newAccountController);
            
        }
        if (e.target.textContent === "Submit") {
            // console.log(allaccounts);
            let accountN = document.getElementById("currentAccount").value;
            let currentB = allaccounts.find(x => x.accountName === accountN);
            let currentIndex = allaccounts.findIndex(x => x.accountName === accountN);
            document.getElementById("currentBalance").value = parseFloat((currentB.balance).toFixed(2));
        }

        if (e.target.textContent === "Update") {
            let accountN = document.getElementById("currentAccount").value;
            let currentB = allaccounts.find(x => x.accountName === accountN);
            let depositeN = parseFloat(document.getElementById("depositeNow").value);
            let withdrawN = parseFloat(document.getElementById("withdrawNow").value);

            if (depositeN > 0) {
                let deposite1 = currentB.deposit(depositeN);
                document.getElementById("currentBalance").value = parseFloat((currentB.balance).toFixed(2));
            }
            else if (depositeN < 0) { alert('Amount must be positive!'); }

            if (withdrawN > 0) {
                let withdraw1 = currentB.withdraw(withdrawN);
                document.getElementById("currentBalance").value = parseFloat((currentB.balance).toFixed(2));
                currentB.isAllowed();

            }
        }
    }


})
