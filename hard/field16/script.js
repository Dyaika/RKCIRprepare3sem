let inp = document.querySelector('input');
let word = inp.value;
inp.addEventListener('input', ()=>{
    if (inp.value.length > 16){
        inp.value = word;
    } else {
        word = inp.value;
    }
})