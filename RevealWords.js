function solve (words, sentence){

    let wordsList = words.split(', ');

    wordsList.forEach(word => {
        let template = '*'.repeat(word.length);
        sentence = sentence.replace(template, word);
    });

    return sentence;
}