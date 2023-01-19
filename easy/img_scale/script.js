let img = document.querySelector('img');
img.addEventListener('click', ()=>{
    img.classList.add("anime")
    setTimeout(()=>{img.classList.remove("anime")}, 3000)
})