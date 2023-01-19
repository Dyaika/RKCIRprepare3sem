let submit = document.querySelector('#button');
let pass = document.querySelector('#pass');
submit.addEventListener('click', ()=>{
    if(pass.value.length < 8 || pass.value.length > 16){
        pass.value = '';
        pass.style.backgroundColor = "red";
    }
})