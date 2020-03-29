import domfuncs from './domPracticeFunction'


// test('Does the show functions work?', () => {
//     // expect(functions.add(1,2)).toBe(3);
//     // expect(functions.add(101,202)).toBe(303);
//     console.log("We are in the tests");
//     // const element = domfuncs.buildCard();
//     // expect(element).toBeTruthy();
//     console.log(document.getElementsByTagName("ol").innerHTML);
// });
test('Does the dom functions work?', () => {
    const parent= document.createElement ('div');

    let divtest1=document.createElement('divtest1');
    let textstuff= document.createTextNode("First");
    divtest1.appendChild(textstuff);
    console.log(divtest1.textContent);
    parent.append(divtest1);

    let divtest2=document.createElement('divtest2');
    textstuff= document.createTextNode("Second");
    divtest2.appendChild(textstuff);
    console.log(divtest2.textContent);
    parent.append (divtest2);


    let divtest3=document.createElement('divtest2');
    textstuff= document.createTextNode("one.one");
    divtest3.appendChild(textstuff);
    console.log(divtest3.textContent);
    parent.append(divtest3); 

    document.body.append (parent);
    console.log(parent);

    console.log (parent.children.length);
    console.log (parent.children[0]);
    console.log (parent.children[0].textContent);
    console.log (parent.children[1]);
    console.log (parent.children[1].textContent);
    console.log (parent.children[2]);
    console.log (parent.children[2].textContent);

    
});
