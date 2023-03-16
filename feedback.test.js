import { describe, it } from '@jest/globals';
import feedback from './feedback.js';

describe('feedback()', () => {
  it('return the right data format', () => {
    const result = feedback('foo', 'foo');
    expect(result).toMatchObject([
        { letter: 'F', result: 'correct' },
        { letter: 'O', result: 'correct' },
        { letter: 'O', result: 'correct' }
      ])
  });

  it('result is correct, incorrect or missplaced', () => {
    const result = feedback('Hello', 'Honey');
    expect(result).toStrictEqual([
      { letter: 'H', result: 'correct' },
      { letter: 'O', result: 'missplaced' },
      { letter: 'N', result: 'incorrect' },
      { letter: 'E', result: 'missplaced' },
      { letter: 'Y', result: 'incorrect' }
    ])
  })

})



