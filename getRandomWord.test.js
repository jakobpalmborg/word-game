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


})