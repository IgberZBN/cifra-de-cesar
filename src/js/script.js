
const frm = document.querySelector("form");
const btCrip = document.querySelector("#btCrip");

//Function para prevenir o submit:
frm.addEventListener("submit", (e)=>{
    e.preventDefault();
});