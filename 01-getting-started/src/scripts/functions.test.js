import functions from './functions'

test('Check the sizes', () => {
    expect(functions.size(-1)).toBe("small"); // Consider the edge cases
    expect(functions.size(0)).toBe("small");
    expect(functions.size(10)).toBe("medium");
    expect(functions.size(15)).toBe("medium");
    expect(functions.size(20)).toBe("large");
    expect(functions.size(2000000)).toBe("large");
});

test('Does that add function work?', () => {
    expect(functions.add(1,2)).toBe(3);
    expect(functions.add(101,202)).toBe(303);
});
test('Does that multiply function work?', () => {
    expect(functions.multiply(1,2)).toBe(2);
    expect(functions.multiply(10,3)).toBe(30);
});
test('Does that division function work?', () => {
    expect(functions.division(1,2)).toBe(0.5);
    expect(functions.division(10,5)).toBe(2);
});
test('Does that calctaxes function work?', () => {
    expect(functions.calctaxes(30000)).toBe(4500);
    expect(functions.calctaxes(60000)).toBe(9630.575);
    expect(functions.calctaxes(110000)).toBe(20591.780000000002);
    expect(functions.calctaxes(160000)).toBe(33877.590000000004);
    // expect(functions.calctaxes(250000)).toBe(48580.325);
});
test('Does that array function work?', () => {
    expect(functions.addtoarray([],3)).toStrictEqual([3]);
    expect(functions.addtoarray([1],3)).toStrictEqual([1,3]);
});
test('Does that sumarray function work?', () => {
    expect(functions.sumarray([1,2])).toBe(3);
    expect(functions.sumarray([0,5,10,15,20])).toBe(50);
});
test('Does that dictionaryfunction work?', () => {
    expect(functions.dictionaryfunction('NB')).toBe("New Brunswick");
    expect(functions.dictionaryfunction('mx')).toBeFalsy();
});