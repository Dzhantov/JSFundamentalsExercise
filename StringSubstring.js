function stringSubstring(word, text){

    let lowerWord = word.toLowerCase();
    let lowerText = text.toLowerCase();

    let textArray = lowerText.split(' ');

    if(textArray.includes(lowerWord)){
        console.log(word);
        
    }else{
        console.log(`${word} not found!`);
        
    }
}