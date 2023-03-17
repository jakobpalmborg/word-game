export default function getRandomWord(list, length, noDuplicates) {
    let randomNumber = Math.floor(Math.random() * list.length)

    let randomWord = list[randomNumber];
    
    return randomWord
}