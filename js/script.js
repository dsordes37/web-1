//chamando os elementos dom
const letter = document.getElementById("letreiro");
const btChute = document.getElementById("chute");

const input1 = document.getElementById("player1Input");
const input2 = document.getElementById("player2Input");

const hist1 = document.getElementById("hist1");
const hist2 = document.getElementById("hist2");

let onPlay=false



//função que sorteia o numero
function sortearNumero(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Função que adiciona um registro no histórico
function createRegister(reg){
    let li = document.createElement("li");
    li.innerText=reg;
    return li
}


//função que inincia a partida
function partida(){
    input1.disabled=false;
    input2.disabled=false;

    btChute.innerText="Chutar";
    onPlay=true;

    letter.innerText="Tentem adivinhar"
    hist1.replaceChildren();
    hist2.replaceChildren();
}

//função que reseta o jogo
function inicio(){
    input1.disabled=true;
    input1.value='';
    input2.disabled=true;
    input2.value='';

    btChute.innerText="Iniciar nova partida";
    onPlay=false;

    
}


//funcção que verifica o resultado
function verifica(){

    if(!onPlay){
        partida();

    }else if(input1.value!='' && input2.value!='' && input1.value>0 && input1.value<101 && input2.value>0 && input2.value<101){
        letter.innerText=`${input1.value} e ${input2.value}`;

        if(input1.value>numero){
            hist1.appendChild(createRegister(`${input1.value} é maior.`));
        }else if(input1.value<numero){
            hist1.appendChild(createRegister(`${input1.value} é menor.`));
        }

        if(input2.value>numero){
            hist2.appendChild(createRegister(`${input2.value} é maior.`));

        }else if(input2.value<numero){
            hist2.appendChild(createRegister(`${input2.value} é menor.`));
        }

        if(input1.value==numero && input2.value != numero){
            hist1.appendChild(createRegister(`O número é ${numero}, vitória do jogador 1`));
            hist2.appendChild(createRegister(`O número é ${numero}, vitória do jogador 1`));
            letter.innerText=`O número é ${numero}, vitória do jogador 1`;
            inicio()
        }else if(input2.value==numero && input1.value != numero){
            hist1.appendChild(createRegister(`O número é ${numero}, vitória do jogador 2`));
            hist2.appendChild(createRegister(`O número é ${numero}, vitória do jogador 2`));
            letter.innerText=`O número é ${numero}, vitória do jogador 2`;
            inicio()
        }else if(input2.value == input1.value && input1.value == numero){
            hist1.appendChild(createRegister(`O número é ${numero}, empate`));
            hist2.appendChild(createRegister(`O número é ${numero}, empate`));
            letter.innerText=`O número é ${numero}, empate`;
            inicio()
        }

        hist1.scrollTop = hist1.scrollHeight;
        hist2.scrollTop = hist1.scrollHeight;




    }else{
        letter.innerText=`Os dois campos devem conter números entre 1 e 100`;
    }
}



let numero = sortearNumero(1, 100);

inicio();



//eventlisteners
btChute.addEventListener("click", verifica)

document.addEventListener("keydown", (key)=>{
    if(key.key=="Enter"){
        verifica()
    }
})
