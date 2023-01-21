const frm = document.querySelector("form");
const container = document.querySelector("#container");
getId();
let pStatus = false;

frm.addEventListener("submit", (e)=>{
    e.preventDefault();
})

function getId(){
    document.querySelectorAll("button").forEach(element=>{
        let id = element.getAttribute("id");
        element.addEventListener("click", ()=>{
            const numRotacao = Number(frm.inNumber.value);
            const result = numValidate(numRotacao);
            if(!result){return};
            const texto = cifra(id, numRotacao);
            let paragrafoCriado = criarElemento();
            pStatus = exibirTexto(paragrafoCriado, texto)
        })
    })
}

function cifra (id, numRotacao){
    let texto = (frm.inTexto.value).toUpperCase();
    const textoSplit = texto.split("");
    const textoAscii = textoSplit.map(transformarAscii);
    const textoRotacao = textoAscii.map(rotacao.bind(null,id, numRotacao));
    const textoCifrado = textoRotacao.map(transformarCaractere);
    texto = textoCifrado.join("");
    return texto;
}
function transformarAscii(texto){
    return texto.codePointAt();
}
function rotacao(id, nRotacao ,ascii){
    if(id == "btCrip"){
        if(ascii<65 || ascii>91){
            return ascii
        }
        return(ascii-65+nRotacao)%26+65
    } else {
        if(ascii<65 || ascii>91){
            return ascii
        }
        return(ascii+65-nRotacao)%26+65
    }
}
function transformarCaractere(ascii){
    return String.fromCharCode(ascii);
}

function criarElemento(){
    const paragrafo = document.createElement("p");
    paragrafo.id = "resp";
    paragrafo.className = "branco"
    return paragrafo;
}
function exibirTexto(p, t){
    if(!pStatus){
        p.innerHTML = t;
        container.appendChild(p)
        return pStatus = true
    } else {
        document.querySelector("#resp").innerHTML = t;
        return pStatus = true
    }
}
function numValidate(numRotacao){
    if(numRotacao>=0 && numRotacao<=26){
        return true
    }
    return false
}