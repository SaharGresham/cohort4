import functions from './daily'
test('Does that function work?', () => {
    expect(functions.convertToFahrenheit(0)).toBe(32);
    expect(functions.convertToFahrenheit(-40)).toBe(-40);
 
});

