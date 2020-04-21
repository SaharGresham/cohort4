
//  npm test shapes -- -t plumb

import ooStuff from './account.js' ;
test ('test the plumbing', () => {
    console.log ('plumbing works')
})
test ('test the class Account', () => {
    const account1= new ooStuff.Account('k1','Checking',35);
    const account2= new ooStuff.Account('k2','Saving',500);
    const account3= new ooStuff.Account ('k3', 'business', -500)
    expect (account1.key).toBe('k1');
    console.log (account2);
    expect ((account3.balance)>0). toBe(false);
})


test ('test Accountcontroller class', () => {
    const accounts= new ooStuff.AccountController();
    expect(accounts.counter).toBe (1);
    expect (accounts.accountsHolder.length).toBe (0);
    expect (accounts.accountCards.length).toBe (0);
})
test ('test Accountcontroller createAccount', () => {
    const account1= new ooStuff.Account('k1','Checking',1000);
    const accounts1= new ooStuff.AccountController();
    account1.createAccountCard();
    expect(accounts1.nextKey()).toBe ("k1");
    accounts1.accountsHolder.push (account1);
    const divCard1=document.createElement("div");
    const divReference = document.getElementById("idcontainerLeft");
    divCard1.setAttribute ("id","k1");
    divCard1.setAttribute("class", "leftCard");
    accounts1.accountCards.push(["k1"]);
    divCard1.innerText= "Account: "+ "Checking" +'\n' +'Balance: '+ account1.balance+'$'  ;
    expect(accounts1.accountCards[0]).toStrictEqual(["k1"]);
  
})


