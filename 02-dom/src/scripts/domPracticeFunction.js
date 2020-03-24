const functions ={
  
   addtolist (number){
    let addlist=document.getElementById("mylist");
    
    
     let someItem= document.createElement('li');
     someItem.appendChild(document.createTextNode("Item "+number));
     addlist.appendChild(someItem);
    
    },
    
    // show (){
    //     let x = document.getElementsByTagName("li");
    //     console.log ("in the show function");
    //     return (x);
        
    // },

    addtobefore (number){
     let addlist=document.getElementById("mylist");
    
    
     let someItem= document.createElement('li');
     someItem.appendChild(document.createTextNode("Item "+number));
     addlist.insertBefore(someItem,addlist.childNodes[0]);
     

    },
    deleteItem(number){
        let addlist=document.getElementById("mylist");
        // let l=addlist.length;
        // addlist.removeChild(addlist.childNodes[l-1]);
        // document.getElementById("mylist").removeChild();
        addlist.removeChild(addlist.lastChild);
    },
}
export default functions;