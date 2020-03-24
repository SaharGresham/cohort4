import functions from './domPracticeFunction.js'
let counter=3;

divArea.addEventListener("click", e => {
    console.log("You Clicked, at your command");
    console.log(e.target.textContent);
    // console.log(e.target.nodeName);
    // console.log(e.target);
    if (e.target.textContent === "Show") {

    //  idShow.addEventListener("click", (() =>{
     let thelist= document.getElementById("mylist").textContent;
     document.getElementById("demo").innerHTML = thelist;
     console.log(thelist); 
//    }));
};
   if (e.target.textContent === "Add") {
//    idAdd.addEventListener("click", functions.addtolist());
      counter=counter+1;
      functions.addtolist(counter);
    //   counter++
};
if (e.target.textContent === "AddBefore") {
    //    idAdd.addEventListener("click", functions.addtolist());
    counter=counter+1;
    functions.addtobefore(counter);
          
    };
    if (e.target.textContent === "Delete") {
        //    idAdd.addEventListener("click", functions.addtolist());
              functions.deleteItem(counter);
            //   counter=counter-1;
        };


// //    idAdd.addEventListener("click",(() =>{
// //     let addlist=document.getElementById("mylist");
// //     // var entry = document.createElement('li');
// //     // document.getElementById("mylist").createElement('li')
// //     // entry.appendChild(document.createTextNode("Item"+""+counter));
// //     // mylist.appendChild(entry);
// //      let someItem= document.createElement('li');
// //      someItem.appendChild(document.createTextNode("Item n"));
// //      addlist.appendChild(someItem);
     



//     // document.getElementById("display").value=functions.show().tostring();
//     // console.log(functions.show().tostring());
// // }));
})
