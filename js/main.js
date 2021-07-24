var nome = "Yuri Odilon";
var idade = 27

//alert("Bem vindo " + nome + ", Você tem " + idade + "  anos de idade");

//console.log(nome); // Fica na area do Inspecionar

/* 
Substituir Strings com o atributo Replace
*/
// Atributos
//var frase = "Japão é o melhor time do mundo"
//console.log(frase.toUpperCase()); // toUpperCase transforma todas em maiúsculo
//console.log(frase.toLocaleLowerCase()); // toUpperCase transforma todas em minúsculo
//console.log(frase.replace("Japão", "Brasil"));  // Veja a substituição da palavra mencionando a variável com o atributo replace

//------------------------------------------------------------------
// Array

//var lista = ["maça", "pera", "laranja"];
//lista.push("uva"); // Inserir elementos na array
//lista.pop("maça"); // remove o ultimo elemento da array
//console.log(lista.length); // Retorna o tamanho da do array
//console.log(lista.reverse()); // Inverte as posições do array
//console.log(lista.toString()); // transforma as posições do array como uma string
//console.log(lista.join(" | ")); // define o espaçamento entre as posições do array

//------------------------------------------------------------------
// Dicionário

/*CRIA UMA ESPÉCIE DE TIPO DE VARIÁVEL*/
//var fruta = {nome:"Maça",   // atributo 0
//             cor: "vermelha"}; // atributo 1
//console.log(fruta.cor); // Vai repasssar a cor do dicionário, "cor" agora é um atributo             

//-------------------------------------------------------------------
// Lista de Dicionários
//var frutas = [{nome:"Banana", cor:"Amarela"},
//              {nome:"Uva", cor:"roxa"}];
//Note que agora tem 2 existe uma coleção de dicionários.
//console.log(frutas[1].nome); // Irá mostrar "Uva"


// Condicional If
/*

var idade = prompt("Qual sua idade? "); // prompt vai receber o valor do usuário

if(idade >= 18){
    alert("Maior de Idade");
}else{

    alert("Menor de idade");
}

*/
//--------------------------------------------------------------
// Laço de repetição 
var count; // Para o For não precisa atribuir valor, while precisa.

/*
while(count < 5){

    console.log(count);
    count++;
}
*/
/*
for(count=0; count <=5; count++){
    console.log(count);

}
*/
/*
var d = new Date();

alert(d.getMonth()+1);  // Atributos de Data, note que array inicia com 0 e pra mostrar por exemplo o mes correto deve ser adicionado +1
*/
//-----------------------------------------------------------------
// FUNÇÃO
/*
function soma(n1, n2){

    return n1+n2;
}

console.log(soma(1, 2));

function validaIdade(){

    idade = prompt("Qual sua Idade?");
    var valida = false;

    if(idade >= 18){

        valida = true;
    }

    return valida;
}
console.log(validaIdade(19));
*/
//--------------------------------

function clicou(){
    //alert("Obrigado por clicar");
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado!<b>";
}

// getElementById seleciona o elemento pelo ID, innerHTML insere um valor no elemento

function redirecionar(){
    //window.open("https://www.google.com/"); // Redireciona ao chamar a funcao
    window.location.href = "https://www.google.com/"; // Redireciona na mesma janela
}

function trocar(){
    //alert("trocar texto");
    document.getElementById("mouseover").innerHTML = "Obrigado por passar o mouse";
}

function voltar(){

    document.getElementById("mouseover").innerHTML = "Passe o mouse aqui";
}


/* 
MUDANDO APENAS UM ELEMENTO
    Para fazer alterações em apenas um unico elemento, lá no html na propriedade onmouseover=nomedafuncao(this)
    utilize o parâmetro "this" e quando for fazer a função no js, passe como parâmetro a função o elemento desas forma:

        function voltar(elemento){
            elemento.innerHTML = "texto a ser passado";
        }

    */ 

 function load() {

    alert("Pagina Carregada");
 }      

 function change(elemento){
    console.log(elemento.value);

 }