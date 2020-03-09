import syntaxFunction from "./Syntax"

test ('check the parameter', () =>{

expect(syntaxFunction.NumberT(1)).toBe("This is a number") ; 
});
test ('check the string', () =>{

    expect(syntaxFunction.StringT("One")).toBe("This is a string") ; 
    });
test ('check the boolean', () =>{

    expect(syntaxFunction.BooleanT(true)).toBe("This is a boolean") ; 
    });
test ('check the array', () =>{

            
    expect(syntaxFunction.ArrayT(["Saab", "Volvo", "BMW"])).toBe("This is an array") ;        
});
test ('check the dictionary', () =>{

            
    expect(syntaxFunction.DictionaryT({type:"Fiat", model:"500", color:"white"})).toEqual("This is a dictionary") ;        
});

test ('check the SampleIFElse', () =>{
         
    expect(syntaxFunction.SampleIfElse(10)).toBe("Good Day") ;        
});
test ('check the SampleArrays', () =>{
         
    expect(syntaxFunction.SampleArrays(["Tomato","Potato","Mushroom"])).toStrictEqual(["Cauliflower","Eggplant","Potato","Mushroom","Cucumber"]);
});
test ('SampleLoop', () =>{
         
    expect(syntaxFunction.SampleLoop([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toEqual([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
});
test ('sampleforin', () =>{
         
    expect(syntaxFunction.sampleforin ([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toEqual(55);
    expect(syntaxFunction.sampleforin ([10, 20, 30])).toEqual(60);
    expect(syntaxFunction.sampleforin ([10])).toEqual(10);
});
test ('sampleWhileLoop', () =>{
         
    
    expect(syntaxFunction.sampleWhileLoop (1)).toEqual(0);
    expect(syntaxFunction.sampleWhileLoop(3)).toEqual(3);
});
test ('sampledoWhile', () =>{
         
    
    expect(syntaxFunction.sampledoWhile ([1,2])).toEqual(3);
    expect(syntaxFunction.sampledoWhile([1,2,3])).toEqual(6);
   });
   test ('sampleforEach', () =>{
         
    
   expect(syntaxFunction.sampleforEach ([1,2])).toEqual(3);
   expect(syntaxFunction.sampleforEach([1,2,3])).toEqual(6);
   });
   test ('sampleObjects', () =>{
         
    
   expect(syntaxFunction.sampleObjects ({fname:"John", lname:"Deo", age:25})).toBe("John Deo 25 ");
   });
//    test ('calc_tax', () =>{
         
    
    // expect(syntaxFunction.calc_tax (45000)).toEqual(6750);
    // });


test ('check add12Num' , () => {
    expect(syntaxFunction.add12Num(-1)).toBe(11) ; 
    expect(syntaxFunction.add12Num(0)).toBe(12) ; 
    expect(syntaxFunction.add12Num(13)).toBe(25) ; 

});


test ('check add12Str' , () => {
    expect(syntaxFunction.add12Str("NO")).toBe("NO12") ; 
    expect(syntaxFunction.add12Str("SAHAR ")).toBe("SAHAR 12") ; 
    expect(syntaxFunction.add12Str("")).toBe("12") ; 

});
test ('check add12Bln' , () => {
    expect(syntaxFunction.add12Bln(true)).toBe("true12") ; 
    expect(syntaxFunction.add12Bln(false)).toBe("false12") ; 

});