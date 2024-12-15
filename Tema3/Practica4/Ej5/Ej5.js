function sortWords(){
    condition = false;
    let wordsArray = [];
    while(!condition){
        let inputWord = document.getElementById("inputWord");
        wordsArray.push(inputWord);

        if(wordsArray.includes(inputWord)){
            let eliminatedWord = inputWord;
            let reapeatedWords = wordsArray.indexOf(eliminatedWord);

            for(let i = 0; i < wordsArray.length();i++){
                wordsArray.splice(reapeatedWords,wordsArray[i]);
                break;
            }
        }
        
        wordsArray.sort((a,b) => a.localeCompare(b,'es',{sensitivity: "base"}));
    }

}
