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
const account4= new ooStuff.account('004',7000);
const accounts=[];
    accounts.push(account1);
    accounts.push(account2);
   const account3= accounts.push (new ooStuff.account('003',10000));
   accounts.push(account4);
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
    account2.deposit(0);
    expect(accounts[1].balance).toBe(500);

    
})
test ('test the withdraw in class', () => {
  
    account4.withdraw(2000);
    expect(account4.balance).toBe(5000); 
    account4.withdraw(6000);
    expect(account4.balance).toBe(-1000);   
    
})

test ('test isPositive in class', () => {
    account2.isPositive();
    expect(accounts[1].balance).toBe(500);    
})
test ('test isAllowed in class', () => {
    account4.isAllowed(500);
    expect(account4.balance).toBe(-1000);    
    expect(account2.isAllowed(500)).toBe(true);  
})

