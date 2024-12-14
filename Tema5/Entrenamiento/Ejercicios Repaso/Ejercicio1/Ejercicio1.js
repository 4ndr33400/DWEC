let paragraphs = document.querySelectorAll('body');
let wordSize = 24
function zoomIn(){
    wordSize += 2;
    paragraphs.forEach(paragraph => {
        paragraph.style.fontSize= wordSize + 'px';
    });  
}
function zoomOut(){
    wordSize -= 2;
    paragraphs.forEach(paragraph => {
        paragraph.style.fontSize= wordSize + 'px';
    });  
}