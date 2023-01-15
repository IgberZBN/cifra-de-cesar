
const frm = document.querySelector("form");
const bt1 = document.querySelector("#btCrip"); //referencia ao botao de Criptografar
const bt2 = document.querySelector("#btDesc"); //referencia ao botao de Descriptografar

//Function para prevenir o submit:
frm.addEventListener("submit", (e)=>{
    e.preventDefault();
});

bt1.addEventListener("click", ()=>{
    console.log("Criptografar");
})
bt2.addEventListener("click", ()=>{
    console.log("Descriptografar");
})