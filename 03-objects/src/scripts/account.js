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
    
   isPositive () {
   if( this.balance < 0)
     {
      alert('Amount must be positive!');
      return false;
    }
    return true;
  }
  isAllowed (){
 if (this.balance < 0)
   {
    alert('You have negative balance! Please deposite money or bank charges will be applied in 5 business days.');
} else (this.balance >= 0);{
    return true;
}
  } }



 function search(nameKey, myArray){
    for (var i=0; i < myArray.length; i++) {
        if (myArray[i].name === nameKey) {
            return myArray[i];
        }
    }
}

 export default {search, account} ;