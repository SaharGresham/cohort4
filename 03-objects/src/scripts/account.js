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
 function search(nameKey, myArray){
    for (var i=0; i < myArray.length; i++) {
        if (myArray[i].name === nameKey) {
            return myArray[i];
        }
    }
}

 export default {search, account} ;