let min = document.querySelector('#min');
let max = document.querySelector('#max');
let meter = document.querySelector('meter');
let val =meter.value;
console.log(val)
let t1;
let t2;
min.addEventListener('click', ()=>{
    clearInterval(t1);
    clearInterval(t2);
    t1 = setInterval(() => {
        if (val <= 0){
            clearInterval(t1);
        } else{
            val--;
            meter.value = val;
        }
    }, 100)
});
max.addEventListener('click', ()=>{
    clearInterval(t1);
    clearInterval(t2);
    t2 = setInterval(() => {
        if (val >= 100){
            clearInterval(t2);
        } else{
            val++;
            meter.value = val;
        }
    }, 100)
});
