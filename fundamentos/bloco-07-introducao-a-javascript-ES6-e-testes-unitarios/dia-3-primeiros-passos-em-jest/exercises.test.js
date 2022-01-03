const sum = require('./sum');
const myRemove = require('./my-remove');
const myFizzBuzz = require('./my-fizz-buzz');
const { encode, decode } = require('./encode-and-decode');

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

describe('Exercício 03:', () => {
    it('myFizzBuzz(15) return "fizzbuzz"', () => {
        expect(myFizzBuzz(15)).toBe('fizzbuzz');
    });
    it('myFizzBuzz(9) return "fizz"', () => {
        expect(myFizzBuzz(9)).toBe('fizz');
    });
    it('myFizzBuzz(10) return "buzz"', () => {
        expect(myFizzBuzz(10)).toBe('buzz');
    });
    it('myFizzBuzz(7) return 7', () => {
        expect(myFizzBuzz(7)).toBe(7);
    });
    it('myFizzBuzz("7") return false', () => {
        expect(myFizzBuzz('7')).toBeFalsy();
    });
});

describe('Exercício 04:', () => {
    it('encode is a function', () => {
        expect(typeof encode).toBe('function');
    });
    it('decode is a function', () => {
        expect(typeof decode).toBe('function');
    });
    it('encode("aeiou") return "12345"', () => {
        expect(encode('aeiou')).toBe('12345');
    });
    it('decode("12345") return "aeiou"', () => {
        expect(decode('12345')).toBe('aeiou');
    });
    it('encode("bcdfghj") return "bcdfghj"', () => {
        expect(encode('bcdfghj')).toBe('bcdfghj');
    });
    it('encode("Hello World").length equals 11', () => {
        expect(encode('Hello World').length).toBe(11);
    });
    it('decode("H2ll4 W4rld").length equals 11', () => {
        expect(decode('H2ll4 W4rld').length).toBe(11);
    });
});
