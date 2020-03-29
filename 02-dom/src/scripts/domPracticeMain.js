import functions from './domPracticeFunction.js'
let counter=3;
let counting=0;

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
    })
 
    containerLeft.addEventListener("click", e => {
       
        if (e.target.nodeName === 'BUTTON') {
            if (e.target.textContent === "Before"){
               
                functions.addLeftCardBefore(e.target.parentElement,  "LeftCard "+ counting++);
               
            };
            if (e.target.textContent === "Push Me"){
                functions.pushCard(e.target,  "LeftCard "+ counting++);
                console.log(e.target);
  };

            if (e.target.textContent === "After"){
                functions.addLeftCardAfter(e.target.parentElement,  "LeftCard "+ counting++);
        };

        if (e.target.textContent === "DeleteCard"){
            functions.deleteTheCard(e.target.parentElement);
            console.log(e.target.parentElement);
        };
}
    })



