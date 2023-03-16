export default function feedback(correct, guess) {
    let correctArray = correct.toUpperCase().split('');
    let guessArray = guess.toUpperCase().split('');
  
    const resultObjects = guessArray.map((letter, index) => { 
      
    return {letter, result: 'correct'}
  })
  
  return resultObjects
}
