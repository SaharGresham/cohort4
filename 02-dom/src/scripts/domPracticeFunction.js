const functions ={
  
   addtolist (number){
    let addlist=document.getElementById("mylist");
    
    
     let someItem= document.createElement('li');
     someItem.appendChild(document.createTextNode("Item "+number));
     addlist.appendChild(someItem);
    
    },
    

    addtobefore (number){
     let addlist=document.getElementById("mylist");
    
    
     let someItem= document.createElement('li');
     someItem.appendChild(document.createTextNode("Item "+number));
     addlist.insertBefore(someItem,addlist.childNodes[0]);
     

    },
    deleteItem(number){
        let addlist=document.getElementById("mylist");
        
        addlist.removeChild(addlist.lastChild);
    },
    buildLeftCard(text){
        
        const divleft=document.createElement('div');
        divleft.appendChild(document.createTextNode(text));

        const addAfter=document.createElement('button');
        addAfter.appendChild(document.createTextNode("After"));
        divleft.appendChild(addAfter);


        const addBefore=document.createElement('button');
        addBefore.appendChild(document.createTextNode("Before"));
        divleft.appendChild(addBefore);

        

        const deleteCard=document.createElement('button');
        deleteCard.appendChild(document.createTextNode("DeleteCard"));
        divleft.appendChild(deleteCard);

        divleft.classList.add("leftCard");
        
        
        return divleft;
    },

    pushCard (node,text) { 
        // console.log (node);
        //  console.log (node.parentElement);
        const div=functions.buildLeftCard(text);
        node.parentElement.appendChild (div,node);
        // console.log(node.parentElement);
    },

    addLeftCardAfter (node,text) { 
        // console.log (node);
        // console.log (node.parentElement);
        const div=functions.buildLeftCard(text);
        node.parentElement.appendChild (div,node);
    },

    addLeftCardBefore (node,text) { 
        // console.log (node);
        // console.log (node.parentElement);
        const div=functions.buildLeftCard(text);
        node.parentElement.insertBefore (div,node);
    },
    deleteTheCard (node) { 
        if (node.parentNode) {
            // remove a node from the tree, unless 
            // it's not in the tree already
            // console.log(node.parentNode);
            // let x=node.parentNode.ParentNode;
            node.parentNode.removeChild(node);
          }
    },

}
export default functions;