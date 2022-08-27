//Esse script recebe uma string e reescreve todas as palavras com mais de 5 caracteres de tras pra frente

const receba = (text) => {

    const phrase = text.split(' ')
    const newPhrase = []

    phrase.forEach(word => {
        newPhrase.push(embaralhar(word))
    });

    console.log(newPhrase.join(' '))

}

const embaralhar = (word) => {

    let wordSize = word.length

    if(wordSize >= 5){

        const newWord = []

        while(wordSize > 0){

            let switchPosition = word[wordSize -1]

            newWord.push(switchPosition)

            wordSize--

        }

        return newWord.join('')
        
    }else{

        return word
        
    }   

    }

//Meow