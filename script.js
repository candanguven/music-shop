let globalCounter=0;

function increase(){
    let display= document.getElementById("counter");
    display.innerText=++globalCounter;
    
}