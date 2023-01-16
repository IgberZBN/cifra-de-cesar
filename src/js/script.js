//fazer referencia aos elementos
const frm = document.querySelector("form"); 
const bt1 = document.querySelector("#btCrip"); //botao de criptografia
const bt2 = document.querySelector("#btDesc"); //botao de descriptografia
const resp = document.querySelector("#resp");

frm.addEventListener("submit", (e)=>{
    e.preventDefault(); //cancelar o envio do formulario
});

bt1.addEventListener("click", ()=>{
    let texto = (frm.inTexto.value).toUpperCase(); //pega o valor do input e tranforma as letras em maisculo 
    const textoSplit = texto.split(""); //separa cada letra em uma unica array
    const textoAscii = textoSplit.map((t)=>{ 
        return t.codePointAt(); //transforma cada letra em numero
    })
    const textoFilter = textoAscii.filter((n)=>{
        return (n == 32 || n >= 65 && n<=91); // 32 = space, 65>= ou <=91 A ate Z
    })
    const textoRotacao = textoFilter.map((n)=>{
        if(n==32){
            return n
        }
        return(n-65+1)%26+65
    })
    texto = textoRotacao.map((n)=>{
        return String.fromCharCode(n); //tranforma o numero em letra
    })
    resp.innerHTML = 
    `
    <span class="respTitulo textoCinza">Criptografia do texto:</span><br>
    <span class="resp textoCinza textoParaCopiar">${texto.join('')}</span>&nbsp;&nbsp;<label for="btCopy" class="pointer"><button onclick="copiarTexto()" type="button" id="btCopy" class="btCopy textoCinza"><i class="fa-solid fa-copy resp"><span class="hidden">Copiar</span></i></button></label>
    `
})
bt2.addEventListener("click", ()=>{
    let texto = (frm.inTexto.value).toUpperCase(); //pega o valor do input e tranforma as letras em maisculo 
    const textoSplit = texto.split(""); //separa cada letra em uma unica array
    const textoAscii = textoSplit.map((t)=>{ 
        return t.codePointAt(); //transforma cada letra em numero 
    })
    const textoFilter = textoAscii.filter((n)=>{
        return (n == 32 || n >= 65 && n<=91); // 32 = space, 65>= ou <=91 A ate Z
    })
    const textoRotacao = textoFilter.map((n)=>{
        if(n==32){
            return n
        }
        return(n+65-1)%26+65
    })
    texto = textoRotacao.map((n)=>{
        return String.fromCharCode(n); //tranforma o numero em letra
    })
    resp.innerHTML = 
    `
    <span class="respTitulo textoCinza">Descriptografia do texto:</span><br>
    <span class="resp textoCinza textoParaCopiar">${texto.join('')}</span>&nbsp;&nbsp;<label for="btCopy" class="pointer"><button onclick="copiarTexto()" type="button" id="btCopy" class="btCopy textoCinza"><i class="fa-solid fa-copy resp"><span class="hidden">Copiar</span></i></button></label>
    `
})

function copiarTexto(){
    let texto = document.querySelector(".textoParaCopiar")
    let textArea = document.createElement("textarea");
    textArea.value = texto.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("Copy");
    textArea.remove();
}