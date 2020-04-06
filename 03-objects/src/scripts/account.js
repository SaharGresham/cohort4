class AccountController {

    constructor(account, view) {
        this.account = account
        this.view = view
        //display initial account
        // this.showaccounts(this.account)
    }

    // showaccounts = allAccounts => {
    //     this.view.displayallAccounts(allAccounts)
    
    handleRegister = (accountName, StartingBalance) => {
        this.account.registerAccount(accountName, StartingBalance)
    }
        // handelDeposit=(amount)
        // handelWithdraw()
        // handelDelete()
        // handleToggel()

        // total()
        // highestValue()
        // lowestValue()


      }
class View {
    constructor(){
    // get the card
    this.card= this.getElement (".Left")
    //   The name of the account
     this.title= this.createElement('h1')
     this.title.textContent= ''


}
}
 
 class Account {
     constructor(_accountName,StartingBalance){
     this.allAccounts=[{
         accountName: _accountName,
        balance:StartingBalance}]}

     

     registerAccount (_accountName,startingBalance){
       
       const account={
           accountName:_accountName, 
           balance:startingBalance }; 
       if (account.isPositive)
       {this.allAccounts.push(account)};
    
     }
     deposit(amount, ) {

         this.balance += amount;


     }
     withdraw(amount){
          this.balance -= amount;
     }
    
     isPositive() {
         if (this.balance < 0) {
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

 export default {search, Account, AccountController} ;