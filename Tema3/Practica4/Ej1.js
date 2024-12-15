function evenArrayNumbers(){
    let array = [1,2,3,4,5,6];
for (let i = 0; array.length; i++){
    if( i  % 2 !== 0 ){
        console.log(array[i]);
    }
}

for(let i of array){
    if(i % 2 !== 0){
        console.log(array[i]);
    }
}

}
evenArrayNumbers();


