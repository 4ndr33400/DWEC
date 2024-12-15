function isPalindrome(){
    //Declarar variable para la palabra introducida
    let wordInput =  document.getElementById("wordInput").value;
    //Pasar la palabra introducida a minúsculas y eliminar los espacios
    let normalizedWord = wordInput.toLowerCase().replace(/\s/g, ''); 
    //Pasar la palabra normalizada a array, invertirlo y pasarlo a String.
    let reversedWord = normalizedWord.split('').reverse().join('');
    let isPalindrome = document.getElementById("isPalindrome"); 
    //Si la palabra al reves y la palabra introducida es lo mismo devuelve que es palindromo
    if(reversedWord === wordInput && wordInput !== ''){
        isPalindrome.textContent = `es palindromo`;
    } else {
        isPalindrome.textContent = `no es palindromo`;
    }
}