import React, { Component } from "react"
import AccountCard from "./AccountCard.js"
import accounts from './account.js'


let x = new accounts.AccountController();
x.createAccount('sav', 100)
x.createAccount('chq', 150)
console.log(x);

function get(id) {
    return document.getElementById(id).value;
}
class AccountCTRL extends Component {

    constructor(props) {
        super(props)

        this.state = {
            accountCards: []

        }
        console.log("hello from state:", this.state.accountCards)
    }
    
    mySave() {
        console.log("In My Save");
        const acName = get("idaccountN");
        const acBalance = get("idstartingB");
                console.log(acName, acBalance);
        const theAC=x.createAccount(this.acName, this.acBalance);
        // x.accountsHolder.push(theAC);
        console.log(theAC)


                // if (!acName) {
                //     setMsg('You must enter an account name');
                //     return;
        //  }
    }


        
        clickMe = (e) => {
            const todo = e.target.getAttribute("todo")
            if (todo === "register") {
                this.mySave();
            }
            const array1 = []

            let size = x.accountCards.length;
            console.log("Should do the click thing", size, this.state.accountCards);

            array1.push(
                <AccountCard
                    key={x.accountCards[0].key}
                    name={x.accountCards[0].accountName}
                    balance={x.accountCards[0].balance}
                />
            )
            this.setState({ accountCards: array1 })



        }

    


        render() {
           
            return (

                <div className="account-details" onClick={this.clickMe}>

                    <h3>Account Registration</h3>
                    <div><label>Account Name: </label><input type="text" id="idaccountN" required /></div>
                    <div><label>Starting Balance: </label><input type="number" id="idstartingB" required /></div>
                    <button todo="register">Register My Account </button>

                </div>
            )

        }
    }

    export default AccountCTRL;
     