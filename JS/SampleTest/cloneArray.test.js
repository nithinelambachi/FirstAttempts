const cloneArray = require('./cloneArray');
test('properly clone array', () => {
    const array = [1, 2, 3, 4, 5];
    //expect(cloneArray(array)).toBe(array);    
    //this is same data, but different in memmory so it will fail so  replace "toBe" with "toStrictEqual"
    expect(cloneArray(array)).not.toBe(array);
    expect(cloneArray(array)).toStrictEqual(array);
    expect(cloneArray(array)).toEqual(array);

})