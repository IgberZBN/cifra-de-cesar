
const frm = document.querySelector("form");
const bt1 = document.querySelector("#btCrip"); //referencia ao botao de Criptografar
const bt2 = document.querySelector("#btDesc"); //referencia ao botao de Descriptografar
const resp = document.querySelector("#resp");

//Function para prevenir o submit:
frm.addEventListener("submit", (e)=>{
    e.preventDefault();
});

bt1.addEventListener("click", ()=>{
    let texto = (frm.inTexto.value).toUpperCase();
    const textoSplit = texto.split("");
    const textoAscii = textoSplit.map((t)=>{ 
        return t.codePointAt();
    })
    const textoFilter = textoAscii.filter((n)=>{
        return (n == 32 || n >= 65 && n<=91);
    })
    const textoRotacao = textoFilter.map((n)=>{
        if(n==32){
            return n
        }
        return(n-65+1)%26+65
    })
    texto = textoRotacao.map((n)=>{
        return String.fromCharCode(n);
    })
    resp.innerHTML = 
    `
    <span class="respTitulo textoCinza">Criptografia do texto:</span><br>
    <label for="btCopy"><span class="resp textoCinza textoParaCopiar">${texto.join('')}</span>&nbsp;&nbsp;<button onclick="copy()" type="button" id="btCopy" class="btCopy textoCinza"><i class="fa-solid fa-copy resp"></i></button></label>
    `
})
bt2.addEventListener("click", ()=>{
    let texto = (frm.inTexto.value).toUpperCase();
    const textoSplit = texto.split("");
    const textoAscii = textoSplit.map((t)=>{ 
        return t.codePointAt();
    })
    const textoFilter = textoAscii.filter((n)=>{
        return (n == 32 || n >= 65 && n<=91);
    })
    const textoRotacao = textoFilter.map((n)=>{
        if(n==32){
            return n
        }
        return(n+65-1)%26+65
    })
    texto = textoRotacao.map((n)=>{
        return String.fromCharCode(n);
    })
    resp.innerHTML = 
    `
    <span class="respTitulo textoCinza">Descriptografia do texto:</span><br>
    <label for="btCopy"><span class="resp textoCinza textoParaCopiar">${texto.join('')}</span>&nbsp;&nbsp;<button onclick="copy()" type="button" id="btCopy" class="btCopy textoCinza"><i class="fa-solid fa-copy resp"></i></button></label>
    `
})

function copy(){
    let texto = document.querySelector(".textoParaCopiar")
    let textArea = document.createElement("textarea");
    textArea.value = texto.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("Copy");
    textArea.remove();
}