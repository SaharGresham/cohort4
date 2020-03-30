import ooStuff from './account.js' ;
test ('test the plumbing', () => {
    console.log ('plumbing works')
})
test ('test the class', () => {
    console.log (account1);
    console.log (account2);
})
test ('test the class  parameters', () => {
    expect(account1.balance).toBe(35);
    expect(account2.accountName).toBe('002');
})
const account1= new ooStuff.account('001',35);
const account2= new ooStuff.account('002',500);
const account4= new ooStuff.account('002',7000);
const accounts=[];
    accounts.push(account1);
    accounts.push(account2);
   const account3= accounts.push (new ooStuff.account('003',10000));
test ('test the constructor in class', () => {
    // const accounts=[];
    // accounts.push(account1);
    // accounts.push(account2);
    // accounts.push (new ooStuff.account('003',10000));
    expect(accounts[2].accountName).toBe('003');

    
})
test ('test the deposit in class', () => {
    account1.deposit(400);
    expect(accounts[0].balance).toBe(435);   
    
})
test ('test the withdraw in class', () => {
  
    account4.withdraw(2000);
    expect(account4.balance).toBe(5000);   
    
})
test ('test the showBalance in class', () => {
    console.log ('The balance for account number 4 is'+ account4.showBalance())
    
})