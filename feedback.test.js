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

})