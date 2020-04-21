class AccountController {

    constructor() {
        this.accountsHolder=[];
        this.accountCards=[]
        this.counter=1;
    }
        
    nextKey() {
        return `k${this.counter++}`;  
    
    }

    get_name() {
        let accountName = idaccountN.value;
        return accountName;
    }

    get_Sbalance() {
        let startingBalance = parseFloat((idstartingB).value)
        return startingBalance;
    }

    createAccount  () {
        
        const key=this.nextKey(); 
        const nextAccountName =this.get_name();
        const nextBalance=this.get_Sbalance() ;
        console.log(nextBalance);
    
        if (nextBalance>=0){
        const newAccount = new Account(key,nextAccountName,nextBalance);
        // this.account=account;
        console.log(newAccount);
        
        console.log(this.accountsHolder);
        this.accountsHolder.push(newAccount);
        
    // this[this.accountsHolder]=account;
        // this.accountsHolder.key=key;
        // this.accountsHolder.accountName=nextAccountName;
        // this.accountsHolder.balance=nextBalance;
        console.log(this.accountsHolder);
        // console.log(newaccountsholder);
        
        
        const newCardID= newAccount.createAccountCard();
        console.log(newCardID);
        console.log(this.accountCards);
        this.accountCards.push(newCardID);
        console.log(newCardID);
        return this;
        // console.log (this.accountsHolder[0])
        // const newallAccounts= new AccountController ()
        
       return key;
       
      
        }else {
            alert('Amount must be positive!');}
        }

        getAccount(k){
           const theKey=k;
           console.log(theKey);
           const  finding = this.accountsHolder.find(x => x.key === theKey);
           console.log(finding);
            // const finding=this.accountsHolder;
            // console.log(this.accountsHolder);
            // for (let i = 0, len = this.accountsHolder.length; i < len; i++)
            //  if (this.accountsHolder[i].key=k){
            //     //  console.log(this.accountsHolder[i].key=k)
                idcurrentAccount.value=finding.accountName;
            //     // console.log(finding[i].accountName);
                idcurrentBalance.value=finding.balance;
                

            //     // const foundaccount= finding[i];
            //     // console.log(foundaccount);
            //     // return foundaccount;
            //     }
                }
            updateAccount (){
                if (typeof(idcurrentAccount.value)==="string" ) {
                    console.log (typeof(idcurrentAccount.value));
                    const  changingAccount = this.accountsHolder.find(x => x.accountName ===idcurrentAccount.value );
                    console.log( changingAccount.divCard.innerText);
                    let depositeN = parseFloat(iddepositeNow.value);
                    let withdrawN = parseFloat(idwithdrawNow.value);
                    if (depositeN >= 0) {
                        changingAccount.balance += depositeN;
                        idcurrentBalance.value = parseFloat(((changingAccount.balance).toFixed(2)));
                    }
                    else if (depositeN < 0) { alert('deposite must be positive!'); }
        
                    if (withdrawN >= 0) {
                        changingAccount.balance -= withdrawN;
                        idcurrentBalance.value = parseFloat((changingAccount.balance).toFixed(2));  
                        if (changingAccount.balance <0){
                            alert('You have negative balance! Please deposite money or bank charges will be applied in 5 business days.');
                        }}
                        else if (withdrawN < 0) {alert ('Withdraw must be positive')}
                        changingAccount.divCard.innerText= "Account: "+ changingAccount.accountName +'\n' +'Balance: '+ changingAccount.balance+'$'  ;
                        console.log(changingAccount.divCard.innerText)
                        console.log (changingAccount)
                       
                        return changingAccount;

            }
            else {
                    alert (" Please Choose an existing account!")
                }
            }
            // deleteAccountCard(key){
            //     const tempKey=this.key;
            //     const mother = document.getElementById ("idcontainerLeft")
            //     const kid= document.getElementById(tempKey);
            //     Node.removeChild (kid);
                deleteTheCard (key) { 
                    const  tempKey=String(key) ;
                    const kid= document.getElementById(tempKey);
                    if (kid.parentNode) {
                        // remove a node from the tree, unless 
                        // it's not in the tree already
                        // console.log(node.parentNode);
                        // let x=node.parentNode.ParentNode;
                        kid.parentNode.removeChild(kid);
                      }
                }


            
            deleteAccount (){
                if (typeof(idcurrentAccount.value)==="string" ) {
                    console.log (typeof(idcurrentAccount.value));
                    const deletedAccount=this.accountsHolder.find(x => x.accountName ===idcurrentAccount.value) ;
                    const  deleteIndex = this.accountsHolder.indexOf(this.accountsHolder.find(x => x.accountName ===idcurrentAccount.value ));
                    const  deleteKey = this.accountsHolder.find(x => x.accountName ===idcurrentAccount.value ).key;
                    console.log(deletedAccount);
                    console.log (deleteIndex);
                    console.log(deleteKey);
                    console.log (this.accountsHolder)
                    // this.AccountController.divCard
                    this.deleteTheCard(deleteKey);
                    this. accountsHolder.splice(deleteIndex,1);
                    console.log (this.accountsHolder);
                    this.accountCards.splice(deleteIndex,1);
                    console.log(this.accountCards);
                    
                    idcurrentAccount.value="";
                    idcurrentBalance.value="";
                    iddepositeNow.value="";
                    idwithdrawNow.value="";

                   }}
            accountSummary(){
                // console.log (this.accountsHolder)
                // // cocst totalAccounts=this.accountsHolder;
                // idAccountsNumber.value=this.accountsHolder.length;
            
                // const balancesK = this.accountsHolder.map (temp => ({"key":temp.key, "balance": temp.balance}));
                // // console.log (balancesK);

                // const allBalances= balancesK.map(d => d.balance);
                // // console.log (allBalances);
                // idTotalBalance.value=allBalances.reduce((total, num) => total + num, 0);

                // const minBalance= Math.min.apply(Math,allBalances);
                // idLowestValueMoney.value= minBalance;
                // const minAccount= this.accountsHolder.find(x => x.balance =minBalance);
                // idLowestValueName.value=minAccount.accountName;
                
                // const maxBalance= Math.max.apply(Math,allBalances);
                // idHighestValueMoney.value= maxBalance;
                // const maxAccount= this.accountsHolder.find(x => x.balance = maxBalance);
                // idHighestValueName.value=maxAccount.accountName;
            }
        }
               
               

class Account {
    constructor(key,_accountName, StartingBalance) {
        this.key=key;
        this.accountName = String(_accountName);
        this.balance = Number(StartingBalance);
         }

         createAccountCard(){
           const divCardkey=this.key;
            const divReference = document.getElementById("idcontainerLeft");
            const divCard = document.createElement("div");
            this.divCard = divCard;
            divCard.setAttribute("class", "leftCard");
            divCard.setAttribute ("id",divCardkey);
            
           
            
            divCard.innerText= "Account: "+ this.accountName +'\n' +'Balance: '+ this.balance+'$'  ;

    
            divReference.appendChild(divCard);
            console.log(divCard);
            console.log (divCard.id)
            return [divCard.id];
         } }
         
        // depositN(amount) {

        //     this.balance += amount;


        // }
        // withdraw(amount){
        //     this.balance -= amount;
        // }

        // isPositive(amount,Account) {
        //     const balance = amount;
        //     if (this.balance < 0) {
        //         alert('Amount must be positive!');
        //         return false;
        //     }
        //     return true;
        // }
        // isAllowed(){
        //     if (this.balance < 0) {
        //         alert('You have negative balance! Please deposite money or bank charges will be applied in 5 business days.');
        //     } else (this.balance >= 0); {
        //         return true;
        //     }
        

    

export default {Account, AccountController}