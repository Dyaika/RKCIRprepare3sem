
let arr = [];
let table = document.querySelector('table');
let n = Math.floor(Math.random()*10)
let createTable = function (array){
    table.innerHTML = '';
    for (let i = 0; i < n; i++){
        let tr = document.createElement('tr');
        for(let j = 0; j < n; j++){
            //console.log(array[i * 5 + j])
            let td = document.createElement('td');
            td.innerText = array[i * n + j];
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
}
for (let i = 0; i < n*n; i++){
    arr[i] = Math.floor(Math.random()*10)
}
console.log(n)
createTable(arr)
let baton = document.querySelector('button')
baton.addEventListener('click', () =>{
    arr.sort()
    createTable(arr)
})