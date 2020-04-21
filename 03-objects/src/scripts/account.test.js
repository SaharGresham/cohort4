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

// test ('test the class  parameters', () => {
//     expect(account1.balance).toBe(35);
//     expect(account2.accountName).toBe('002');
// })
// const account1= new ooStuff.Account('001',35);
// const account2= new ooStuff.Account('002',500);
// const account4= new ooStuff.Account('004',7000);
// const accounts=[];
//     accounts.push(account1);
//     accounts.push(account2);
//    const account3= accounts.push (new ooStuff.Account('003',10000));
//    accounts.push(account4);
// test ('test the constructor in class', () => {
//     // const accounts=[];
//     // accounts.push(account1);
//     // accounts.push(account2);
//     // accounts.push (new ooStuff.Account('003',10000));
//     expect(accounts[2].accountName).toBe('003');

    
// })
// test ('test the deposit in class', () => {
//     account1.deposit(400);
//     expect(accounts[0].balance).toBe(435);   
//     account2.deposit(0);
//     expect(accounts[1].balance).toBe(500);

    
// })
// test ('test the withdraw in class', () => {
  
//     account4.withdraw(2000);
//     expect(account4.balance).toBe(5000); 
//     account4.withdraw(6000);
//     expect(account4.balance).toBe(-1000);   
    
// })

// test ('test isPositive in class', () => {
//     account2.isPositive();
//     expect(accounts[1].balance).toBe(500);    
// })
// test ('test isAllowed in class', () => {
//     account4.isAllowed(500);
//     expect(account4.balance).toBe(-1000);    
//     expect(account2.isAllowed(500)).toBe(true);  
// })

