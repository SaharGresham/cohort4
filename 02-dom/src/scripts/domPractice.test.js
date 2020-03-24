import domfuncs from './domPracticeFunction'


test('Does the show functions work?', () => {
    // expect(functions.add(1,2)).toBe(3);
    // expect(functions.add(101,202)).toBe(303);
    console.log("We are in the tests");
    // const element = domfuncs.buildCard();
    // expect(element).toBeTruthy();
    console.log(document.getElementsByTagName("ol").innerHTML);
});
