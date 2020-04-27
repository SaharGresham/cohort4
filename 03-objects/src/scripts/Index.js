import ooStuff from './account.js';

const allAccounts = new ooStuff.AccountController();
console.log(allAccounts);

document.body.addEventListener("click", e => {
    
    const divReference = document.getElementById("idcontainerLeft");
    const el = e.target;
    const elID = el.id;
    const todo = el.getAttribute("todo");
    const key = el.getAttribute("key");
    
    if (todo === "register") 
    {
        allAccounts.createAccount(idaccountN.value, idstartingB.value, divReference);
        idaccountN.value = "";
        idstartingB.value = "";
    }

    if (key) 
    {
        const showAccount = allAccounts.getAccount(key);
        idcurrentAccount.value = showAccount.accountName;
        idcurrentBalance.value = showAccount.balance;
    }

    if (todo === "deposite") {
        if (typeof (idcurrentAccount.value) === "string" && allAccounts.findAccount(idcurrentAccount.value));
        {
            let ourAccount1 = allAccounts.findAccount(idcurrentAccount.value);
            allAccounts.depositeIT(idcurrentAccount.value, iddepositeNow.value);
            idcurrentBalance.value = ourAccount1.balance;
        }
        iddepositeNow.value = "";
    }
    if (todo === "withdraw") {
        if (typeof (idcurrentAccount.value) === "string" && allAccounts.findAccount(idcurrentAccount.value));
        {
            let ourAccount2 = allAccounts.findAccount(idcurrentAccount.value);
            allAccounts.withdrawIT(idcurrentAccount.value, idwithdrawNow.value);
            idcurrentBalance.value = ourAccount2.balance;
        }
        idwithdrawNow.value = "";
    }

    if (todo === "delete") {
        if (typeof (idcurrentAccount.value) === "string" && allAccounts.findAccount(idcurrentAccount.value));
        {
            allAccounts.deleteAccount(idcurrentAccount.value, divReference);
        }
        idcurrentAccount.value = "";
        idcurrentBalance.value = "";
        iddepositeNow.value = "";
        idwithdrawNow.value = "";
    }
    if (todo) {
        idTotalBalance.value = allAccounts.accountSummary()[0];
        idAccountsNumber.value = allAccounts.accountSummary()[1];
        idLowestValueName.value = allAccounts.accountSummary()[2];
        idLowestValueMoney.value = allAccounts.accountSummary()[3];
        idHighestValueName.value = allAccounts.accountSummary()[4];
        idHighestValueMoney.value = allAccounts.accountSummary()[5];
    }

});
