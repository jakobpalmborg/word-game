export default function feedback(correct, guess) {
  let correctArray = correct.toUpperCase().split("");
  let guessArray = guess.toUpperCase().split("");

  let result;

  const resultObjects = guessArray.map((letter, index) => {
    if (letter === correctArray[index]) {
      result = "correct";
    } else if (correctArray.includes(letter)) {
      result = "missplaced";
    } else {
      result = "incorrect";
    }

    return { letter, result };
  });

  return resultObjects;
}
