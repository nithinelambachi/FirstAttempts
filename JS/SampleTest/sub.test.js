const sub =require('./sub');
test('Properly subtracting', () => {
expect(sub(5, 2)).toBe(3);
})
module.exports = sub;