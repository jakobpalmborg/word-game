export default function getRandomWord(list, length, noDuplicates) {
    let randomWord = "";

    let newList = [];

    list.map((str) => {
        if (str.length === length) {
        newList.push(str)
        }
    })
    
    let randomNumber = Math.floor(Math.random() * newList.length);
    randomWord = newList[randomNumber];
    
    return randomWord
}
