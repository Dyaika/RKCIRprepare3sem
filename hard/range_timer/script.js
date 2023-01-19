let btn = document.querySelector('button');
let range = document.querySelector('input');
let n = range.value;
let div = document.querySelector('div');
div.innerText = n;
let active = false;
range.addEventListener('input', ()=>{
    if (!active){
        n = range.value;
        div.innerText = n;
    }
})
let timerFunc = function (){
    active = true;
    let timer = setInterval(() =>{
        if (n == 0){
            alert("Время вышло!");
            clearInterval(timer);
        } else{

            n--;
            div.innerText = n;
            range.value = n;
        }
    }, 1000)
    active = false;
}
btn.addEventListener('click', timerFunc)