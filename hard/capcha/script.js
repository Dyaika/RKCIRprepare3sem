let abc = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
let word = '';
for (let i = 0; i < 6; i++){
    word += abc[Math.floor(Math.random() * abc.length)];
}
let capcha = document.querySelector("span");
capcha.innerText = word;
console.log(word)