const colors = ["green", "red", "yellow", "orange", "black", "blue"];
const btn = document.getElementById("btn");
const clr = document.querySelector(".color");

btn.addEventListener('click', ()=>{
    
    const randomNumber = GetRandomNumber(colors.length);
    document.body.style.backgroundColor = colors[randomNumber];
    clr.textContent = colors[randomNumber];
})

function GetRandomNumber(len){
    return Math.floor(Math.random()*len);
}