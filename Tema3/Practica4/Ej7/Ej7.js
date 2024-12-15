function dniCalculator(){
    let dniNumber = 20929565;
    let dniWord = dniNumber % 23;
    let dniLetters = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 
        'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 
        'K', 'E'];
        let dniLetter = dniLetters[dniWord];
        console.log(`Dado tu número de DNI ${dniNumber}, tu letra es ${dniLetter}.`);
}
dniCalculator();