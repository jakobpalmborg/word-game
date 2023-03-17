import { describe, it } from '@jest/globals';
import getRandomWord from './getRandomWord.js';

describe('getRandomWord()', () => {
    it('return a word from the imput string', () => {
        const result = getRandomWord(['abc', 'def', 'ghi']);
        expect(result).toMatch(/abc|def|ghi/)
    })

})