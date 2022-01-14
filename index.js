let textEl = document.getElementById('text')
let speed = document.getElementById('speed')

const text='We love programming!'


let index =1;
let num =500;

let time = 500/speed.value
textFunc()

function textFunc(){
    textEl.innerHTML=text.slice(0,index);
    index++
    if(index>text.length){
        
        index=1;
    }
    setTimeout(textFunc,time)

}

speed.addEventListener('input',(e)=>{time = num/e.target.value})