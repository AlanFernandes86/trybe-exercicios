const sum = require('./sum');
const myRemove = require('./my-remove');

describe('Exercício 01:', () => {
    it('1. sum(4, 5) return 9', () => {
        expect(sum(4, 5)).toBe(9);
    });
    it('2. sum(0, 0) return 0', () => {
        expect(sum(0, 0)).toBe(0);
    });
    it('3. sum(4, "5") throw Error', () => {
        expect(() => {
            sum(4, "5")
        }).toThrow();
    });
    it('4. sum(4, "5") throw message "parameters must be numbers"', () => {
        expect(() => {
            sum(4, "5")
        }).toThrowError(/^parameters must be numbers$/);
    });
});

describe('Exercício 02:', () => {
    it('myRemove([1, 2, 3, 4], 3) returns [1, 2, 4]', () => {
        expect(myRemove([1, 2, 3, 4], 3)).toStrictEqual([1, 2, 4]);
    });
    it('myRemove([1, 2, 3, 4], 3) not returns [1, 2, 3, 4]', () => {
        expect(myRemove([1, 2, 3, 4], 3)).not.toStrictEqual([1, 2, 3, 4]);
    });
    it('myRemove([1, 2, 3, 4], 3) returns [1, 2, 3, 4]', () => {
        expect(myRemove([1, 2, 3, 4], 5)).toStrictEqual([1, 2, 3, 4]);
    });
});
