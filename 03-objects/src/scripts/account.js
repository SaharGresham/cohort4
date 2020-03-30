 class account {
     constructor(accountName,startingBalance){
         this.accountName = accountName;
         this.balance = startingBalance;
         
     }
     deposit(amount){
         this.balance = amount+this.balance;

     }
     withdraw(amount){
          this.balance= this.balance-amount;
     }
     showBalance(){ return this.balance;}

     
 }
 export default {account} ;