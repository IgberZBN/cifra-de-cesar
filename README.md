
<header>
<h1>Cifra de cesar</h1>
<p>A cifra de César é um método de criptografia simples que consiste em substituir cada letra de uma mensagem por outra letra, que está um número fixo de posições mais adiante no alfabeto. Esse número é conhecido como a chave da cifra. Por exemplo, se a chave for 3, então a letra "A" seria substituída pela letra "D", a letra "B" seria substituída pela letra "E" e assim por diante. A decodificação da mensagem criptografada é feita usando a chave inversa.</p>
</header>
<h2>Sobre o codigo:</h2>      
<h3>Funcionamento da cifra em JavaScript:</h3>

<h4>Primeiramente dividimos cada letra do texto:</h4>

```js
const textoSplit = texto.split("");
```

<p>Esse código é uma função que que divide o texto de entrada (texto) em um array de caracteres. A função cria uma nova variável "textoSplit" que é um array, onde cada elemento representa um caractere do texto original.

A função usa o método split() para dividir o texto original em um array de caracteres. O método split() é usado passando como parâmetro uma string vazia (""), o que indica que o texto deve ser dividido em cada caractere.

Exemplo:
texto = "Hello World"
textoSplit = ["H", "e", "l", "l", "o", " ", "W", "o", "r", "l", "d"]

Assim, a função retorna um novo array "textoSplit" onde cada elemento representa um caractere do texto original.</p>
<h4>Transformar letra em numero:</h4>

```js
const textoAscii = textoSplit.map((t)=>{ 
    return t.codePointAt();
})
```

<p>Esse código é uma função que modifica o texto de entrada (textoSplit) para converter cada caractere em seu valor equivalente na tabela ASCII. A função cria uma nova variável "textoAscii" que é um array, onde cada elemento representa um valor ASCII de cada caractere do texto original.

A função usa o método map() para iterar sobre cada elemento do array "textoSplit" e aplicar a conversão de caractere para valor ASCII. Dentro do map, há uma função que usa o método codePointAt() para retornar o valor ASCII do caractere atual.

Assim, a função retorna um novo array "textoAscii" onde cada elemento representa o valor ASCII correspondente a cada caractere do texto original.</p>
<h4>Filtragem de dados:</h4>

```js
const textoFilter = textoAscii.filter((n)=>{
    return (n == 32 || n >= 65 && n<=91); // 32 = space, 65>= ou <=91 A ate Z
})
```

<p>Esse código é uma função que filtra o texto de entrada (textoAscii) para remover caracteres indesejados(caracteres especiais e numeros...). A função cria uma nova variável "textoFilter" que é um array, onde cada elemento representa um valor ASCII de caracteres válidos.

A função usa o método filter() para iterar sobre cada elemento do array "textoAscii" e aplicar uma lógica de filtragem. Dentro do filter, há uma função que usa uma condição para verificar se o elemento atual é igual a 32 (valor ASCII do espaço em branco) ou se está entre 65 (valor ASCII de "A") e 91 (valor ASCII de "Z"). Se a condição for verdadeira, o elemento é incluído no array "textoFilter", caso contrário, é removido.

Assim, a função retorna um novo array "textoFilter" onde cada elemento representa o valor ASCII correspondente a caracteres válidos do texto original.</p>

<h4>O substituição/rotação é feita da seguinte maneira:</h4>

```js
const textoRotacao = textoFilter.map((n)=>{
    if(n==32){
        return n
    }
    return(n-65+1)%26+65
})
```
<p>A função usa o método map() para iterar sobre cada elemento do array "textoFilter" e aplicar uma lógica de cifra de césar. Dentro do map, há uma condicional que verifica se o elemento atual é um espaço em branco (valor 32 na tabela ASCII), se for ele é retornado sem modificações. Caso contrário, é aplicada uma lógica para cifrar a letra.</p>

A lógica aplicada é: ``(n-65+1)%26+65``

<p>onde:</p>
<ul>
    <li>n é o elemento atual do array</li>
    <li>65 é o valor ASCII de "A" (letra inicial do alfabeto)</li>
    <li>1 é o valor de rotação (chave)</li>
    <li>%26 é o operador módulo que divide o número pelo número de letras do alfabeto (26) e retorna o resto da divisão</li>
    <li>+65 é somado novamente para que o resultado esteja dentro do intervalo de valores ASCII das letras maiúsculas</li>
</ul>
<p>Assim, a função retorna um novo array "textoRotacao" onde cada elemento representa a letra cifrada.</p>

<h4>Texto cifrado:</h4>

```js
const textoCifrado = textoRotacao.map((n)=>{
    return String.fromCharCode(n);
})
```
<p>Esse código é uma função que transforma o texto de entrada (textoRotacao) de valores ASCII para caracteres. A função cria uma nova variável "textoCifrado" que é um array, onde cada elemento representa um caractere do texto cifrado.

A função usa o método map() para iterar sobre cada elemento do array "textoRotacao" e aplicar a conversão de valor ASCII para caractere. Dentro do map, há uma função que usa o método fromCharCode() da classe String para retornar o caractere correspondente ao valor ASCII.

Assim, a função retorna um novo array "textoCifrado" onde cada elemento representa o caractere correspondente ao valor ASCII do texto cifrado.</p>