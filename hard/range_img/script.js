let img = document.querySelector('img');
let range = document.querySelector('input')
img.style.width = range.value * 10 + 'px';
range.addEventListener('input', () =>{
    img.style.width = range.value * 10 + 'px';
})