
const frm = document.querySelector("form");
const bt1 = document.querySelector("#btCrip"); //referencia ao botao de Criptografar
const bt2 = document.querySelector("#btDesc"); //referencia ao botao de Descriptografar

//Function para prevenir o submit:
frm.addEventListener("submit", (e)=>{
    e.preventDefault();
});

bt1.addEventListener("click", ()=>{
    const texto = (frm.inTexto.value).toUpperCase();
    const textoSplit = texto.split("");
    const textoAscii = textoSplit.map((t)=>{ 
        return t.codePointAt();
    })
    const textoFilter = textoAscii.filter((n)=>{
        return (n == 32 || n >= 65 && n<=91);
    })
    const textoRotacao = textoFilter.map((n)=>{
        return(n-65+1)%26+65
    })
})
bt2.addEventListener("click", ()=>{
    console.log("Descriptografar");
})