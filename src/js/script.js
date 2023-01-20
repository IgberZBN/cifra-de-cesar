const frm = document.querySelector("form");
const container = document.querySelector("#container");
const buttonId = getId();

frm.addEventListener("submit", (e)=>{
    e.preventDefault();
})


function getId(){
    document.querySelectorAll("button").forEach(element=>{
        let id = element.getAttribute("id");
        element.addEventListener("click", ()=>{
            cifra(id);
        })
    })
}

function cifra (id){
    let texto = (frm.inTexto.value).toUpperCase();
    const textoSplit = texto.split("");
    const textoAscii = textoSplit.map(transformarAscii);
    const textoRotacao = textoAscii.map(rotacao.bind(null,id));
    const textoCifrado = textoRotacao.map(transformarCaractere);
    const [paragrafo, elementAdd] = criarElemento();
    texto = textoCifrado.join("")
    exibirTexto(texto, paragrafo, elementAdd);
}

function transformarAscii(texto){
    return texto.codePointAt();
}
function rotacao(id, ascii){
    if(id == "btCrip"){
        if(ascii<65 || ascii>91){
            return ascii
        }
        return(ascii-65+1)%26+65
    } else {
        if(ascii<65 || ascii>91){
            return ascii
        }
        return(ascii+65-1)%26+65
    }
}
function transformarCaractere(ascii){
    return String.fromCharCode(ascii);
}
function criarElemento(){
    const paragrafo = document.createElement("p");
    paragrafo.id = "resp"
    let elementAdd = false;
    return [paragrafo, elementAdd];
}
function exibirTexto(texto,p,elementAdd){
    if(!elementAdd){
        p.innerHTML = `${texto}`
        container.appendChild(p);
        elementAdd = true;
    } else {
        p.innerHTML = `${texto}`
    }
}