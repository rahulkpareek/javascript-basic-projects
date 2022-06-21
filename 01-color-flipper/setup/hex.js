const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const clr = document.querySelector(".color");

btn.addEventListener('click', ()=>{
    let hexVal="#";

    for(let i=0;i<6;i++)
    {
        hexVal += hex[GetRandomNumber(hex.length)];
    }

    document.body.style.backgroundColor = hexVal;
    clr.textContent = hexVal;
})

function GetRandomNumber(len){
    return Math.floor(Math.random()*len);
}