
//  npm test shapes -- -t plumb

import ooStuff from './account.js' ;
import account from './account.js';
test ('test the plumbing', () => {
    console.log ('plumbing works')
})
test ('test the class Account', () => {
    const account1= new ooStuff.Account('k1','Checking',35);
    const account2= new ooStuff.Account('k2','Saving',500);
    const account3= new ooStuff.Account ('k3', 'business', -500)
    const account4= new ooStuff.Account ('k4', 'TFSA', 1000)
    expect (account1.key).toBe('k1');
    console.log (account2);
    expect ((account3.balance)>0). toBe(false);
    const Card2=account2.createAccountCard();
    expect (Card2.getAttribute("key")).toBe ("k2");
    const Card1 =account1.createAccountCard();
    expect (Card1.innerText).toBe ("Account: Checking"+'\n'+"Balance: 35$");
    account4.accountDeposite(50000);
    expect (account4.balance).toBe(51000);
    account2.accountWithdraw(2000);
    expect (account2.balance).toBe(-1500);
    account1.accountWithdraw(100);
    account1.accountDeposite(700);
    expect (account1.balance). toBe(635);
})

test ('test Accountcontroller class', () => {
    const divReferenceTest=document.createElement("div");
    const accounts= new ooStuff.AccountController();
    expect(accounts.counter).toBe (1);
    expect (accounts.accountsHolder.length).toBe (0);
    expect (accounts.accountCards.length).toBe (0);
    accounts.createAccount ('Carfund', 15000,divReferenceTest);
    accounts.createAccount ('Vacationfund',7000,divReferenceTest);
    expect (accounts.accountCards). toStrictEqual ([["k1"],["k2"]]);
    expect (accounts.accountsHolder.length).toBe(2);
    expect (accounts.accountsHolder[1].accountName).toBe("Vacationfund");
    expect (accounts.accountsHolder[0].balance).toBe(15000);
})
test ('test Accountcontroller functions', () => {
    const divReferenceTest=document.createElement("div");
    const accounts= new ooStuff.AccountController();
    accounts.createAccount ('Carfund', 15000,divReferenceTest);
    accounts.createAccount ('Vacationfund',7000,divReferenceTest);
    accounts.createAccount ("Checking",2000,divReferenceTest);
    accounts.createAccount ("Saving",8000,divReferenceTest);
    accounts.createAccount ("TFSA",2000,divReferenceTest);
    expect (accounts.getAccount("k2").accountName).toBe ("Vacationfund");
    expect (accounts.getAccount("k5").balance).toBe (2000);
    expect(accounts.findAccount("Carfund").key).toBe("k1");
    expect(accounts.depositeIT("Saving",3000).balance).toBe(11000);
    expect (accounts.depositeIT("Checking", 400).balance).toBe (2400);
    expect (accounts.withdrawIT("TFSA",1000).balance).toBe (1000);
    expect (accounts.withdrawIT("Carfund",16000).balance).toBe (-1000);
    accounts.deleteAccount("Carfund",divReferenceTest);
    expect (accounts.accountCards).toStrictEqual ([["k2"],["k3"],["k4"],["k5"]]);
    accounts.deleteAccount ("Vacationfund",divReferenceTest);
    expect (accounts.accountCards.length).toBe(3);
    const all =accounts.accountSummary();
    expect(all[0]).toBe (14400);
    expect (all[3]).toBe (1000);
    expect (all[4]).toBe ("Saving");
})

test ('test Accountcontroller createAccount', () => {
    const divReferenceTest=document.createElement("div");
    const accounts1= new ooStuff.AccountController();
    const firstKey=accounts1.createAccount('Checking',1000,divReferenceTest)
    expect(accounts1.nextKey()).toBe ("k2");
   
    expect(firstKey).toBe("k1");
    
  
})


