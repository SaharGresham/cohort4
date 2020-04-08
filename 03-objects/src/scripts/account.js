class AccountController {

    constructor(account, view) {
        this.account = account
        this.view = view
        
    // this.showaccounts(this.account)
    }

    // showaccounts (account) {
    //     displayAccountCards(account)}
    
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
    constructor(account) {
    this.divCard=getElement('#leftCard')
    const divCard= document. createElement ('div','leftCard');
      let  divReference = document.querySelector('main-block2');
   
    // divCard.appendChild(document.createTextNode(`${this.get_name} <br> balance: ${this.get_Sbalance} `))
    divCard.appendChild(document.createTextNode(`Hello`))
    const checkbox = this.createElement('input');
    checkbox.type = 'checkbox';
    
    divCard.appendChild (checkbox);
    divReference.appendChild (divCard);
        // set up accounts show up on left side of the page
    
        // this.div = this.getElement("#containerLeft")

        // this.title = this.createElement('h1')
        // this.title.textContent = 'Accounts'
        // this.div.append (this.title)
        return divCard;
    }
    createElement(tag, className) {
        const element = document.createElement(tag)
        if (className) element.classList.add(className)
    
        return element
      }
    
      // Retrieve an element from the DOM
      getElement(selector) {
        const element = document.querySelector(selector)
    
        return element
      }

    get_name() {
        let accountName = idaccountN.value;
    }
    get_Sbalance() {
        let startingBalance = parseFloat((idstartingB).value)
    }
}

function displayAccountCards (allAccounts) {
    for (let i = 0, len = allAccounts.length; i < len; i++) {
// allAccounts.forEach(account => {
    const divCard= document. createElement ('div',"leftCard");
   
    divCard.appendChild(document.createTextNode(`${this.get_name} <br> balance: ${this.get_Sbalance} `))
    const checkbox = this.createElement('input');
    checkbox.type = 'checkbox';
    
    divCard.appendChild (checkbox);
    console.log(divCard);
    divCard.parentElement.appendChild (divCard);


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

 export default {search,displayAccountCards, Account, AccountController,View,} ;