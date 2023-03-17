export default function getRandomWord(list, length, noDuplicates = false) {
   
    let randomWord = "";
    let newList1 = [];
    let newList2 = [];

    list.map((str) => {
            if (str.length === length) {
            newList1.push(str)
            }
    })
    
    if (noDuplicates === true) {
    
        newList1.map((str) => {
            let arr = str.split('')
            if (new Set(arr).size === arr.length) {
            arr = arr.join('')
            
            newList2.push(arr)
            } 
        })
    } else {
        newList2 = newList1
    }     
    
    let randomNumber = Math.floor(Math.random() * newList2.length);
    randomWord = newList2[randomNumber];
    
    return randomWord
}