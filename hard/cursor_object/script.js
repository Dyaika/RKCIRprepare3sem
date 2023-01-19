let obj = document.createElement('div');
obj.style.width = "10px";
obj.style.height = "20px";
obj.style.borderRadius = "20px";
obj.style.backgroundColor = "blue";

obj.style.position = "fixed";
document.body.appendChild(obj);
onmousemove  = (e => {
    obj.style.left = e.pageX - 5 + "px";
    obj.style.top = e.pageY - 10 + "px";
})