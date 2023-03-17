import { describe, it } from '@jest/globals';
import getRandomWord from './getRandomWord.js';

describe('getRandomWord()', () => {
    it('return a word from the imput string', () => {
        const result = getRandomWord(['abc', 'def', 'ghi'], 3);
        expect(result).toMatch(/abc|def|ghi/)
    })
  
    it('get a word with a certain number of letters', () => {
        const result = getRandomWord(['abc', 'abcd', 'abcde'], 5);
        expect(result).toBe('abcde')
    })
   
    it('get word with no duplicates', () => {
        const result = getRandomWord(['aabcd', 'abcde', 'abbcd', 'abcdd'], 5, true);
        expect(result).toBe('abcde')
    })
    
    it('if list of words is empty', () => {
        const result = getRandomWord([], 5);
        expect(result).toBe('no words in list, try again')
    })
  
    it('no words matching length', () => {
        const result = getRandomWord(['abc', 'abcd'], 5);
        expect(result).toBe('no words matching length, try again')
    })
   
    it('no words without duplicates', () => {
        const result = getRandomWord(['aabcd', 'abbcd', 'abcdd'], 5, true);
        expect(result).toBe('no words without duplicates, try again')
    })


})