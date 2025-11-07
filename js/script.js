function sortearNumero(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Função que adiciona um registro no histórico
function createRegister(reg){
    let li = document.createElement("li");
    li.innerText=reg;
    return li
}


const letter = document.getElementById("letreiro");
const btChute = document.getElementById("chute");

const input1 = document.getElementById("player1Input");
const input2 = document.getElementById("player2Input");

const hist1 = document.getElementById("hist1");
const hist2 = document.getElementById("hist2");


let numero = sortearNumero(1, 100);


btChute.addEventListener("click", ()=>{
    if(input1.value!='' && input2.value!='' && input1.value>0 && input1.value<101 && input2.value>0 && input2.value<101){
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
            hist2.appendChild(createRegister(`O número é ${numero}, vitória do jogador 1`))
        }else if(input2.value==numero && input1.value != numero){
            hist1.appendChild(createRegister(`O número é ${numero}, vitória do jogador 2`));
            hist2.appendChild(createRegister(`O número é ${numero}, vitória do jogador 2`));
        }else if(input2.value === numero && input1.value === numero){
            hist1.appendChild(createRegister(`O número é ${numero}, empate`));
            hist2.appendChild(createRegister(`O número é ${numero}, empate`));
        }




    }else{
        letter.innerText=`Os dois campos devem conter números entre 1 e 100`;
    }
})
