let ans = document.querySelectorAll('input');
let proc = document.querySelector('output')
let btn = document.querySelector('button')
let checking = function (){
    let count = 0;
    for (let i = 0; i < 5; i++){
        let answer = ans[i].attributes.attr1.value;
        if (answer == ans[i].value){
            ans[i].style.backgroundColor = "green";
            count++;
        } else {
            ans[i].style.backgroundColor = "red";
        }
    }
    proc.innerText = count / 5.0 * 100 + "%";
}
btn.addEventListener('click', checking)