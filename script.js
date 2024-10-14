// ---------- PSEUDOCÓDIGO -----------
// função getComputerChoice que retorna aleatoriamente pedra, papel ou tesoura
// utilizar math.random
// a depender do resultado de math.random, criar três estruturas condicionais
// utilizar o console do navegador para verificar resultados

function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3 + 1);
    if (randomNum === 1) {
        return "rock";
    } else if (randomNum === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let humanTurn = prompt("Let's play a game! All you need to do is choose between rock, paper and scissors:");
    return humanTurn;
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    //lógica retorna um valor que indica o que aconteceu na rodada

    if (humanChoice === computerChoice) {
        console.log("It's a draw! You both choose", humanChoice);
        return 0;
    } else if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "scissors" && computerChoice === "paper") || (humanChoice === "paper" && computerChoice === "rock")) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        return 1;
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        return -1;
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    for (let i = 1; i <= 5; i++) {
        console.log("Round number:", i);
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        const result = playRound(humanSelection, computerSelection);

        if (result === 1) {
            humanScore++;
        } else if (result === -1) {
            computerScore++;
        }

        console.log(`Your score: ${humanScore} | Computer Score: ${computerScore}`);
    }

    if (humanScore > computerScore) {
        console.log("You're the winner!");
    } else if (computerScore > humanScore) {
        console.log("The Computer is the winner!");
    } else {
        console.log("It's a tie!");
    }
}

playGame();

// -----------OS DOIS CÓDIGOS REPRESENTAM AS MESMAS SAÍDAS, PORÉM A PROCEDÊNCIA LÓGICA É UM POUCO DIFERENTE -----------
//----------------------------MAIS ESPECIFICAMENTE EM COMO LIDAM COM AS PONTUAÇÕES-----------------------------
//---------------------------O PRIMEIRO CÓDIGO REALIZA A PONTUAÇÃO DENTRO DO LOOPING -----------------------------------
// ----------------------ENQUANTO O OUTRO FAZ DENTRO DA FUNÇÃO playRound() A CADA ITERAÇÃO-----------------
//

// function getComputerChoice() {
//     let randomNum = Math.floor(Math.random() * 3 + 1);
//     if (randomNum === 1) {
//         return "rock";
//     } else if (randomNum === 2) {
//         return "paper";
//     } else {
//         return "scissors";
//     }
// }

// // console.log(getComputerChoice());

// //criar função que ao ser iniciada recebe um input do usuario e retorne esse valor
// //pode ser feito através do método prompt

// function getHumanChoice() {
//     let humanTurn = prompt("Let's play a game! All you need to do is choose between rock, paper and scissors:");
//     return humanTurn;
// }

// // console.log(getHumanChoice());

// //criar variáveis de pontuação
// // o jogo precisa adicionar a pontuação a essas variáveis a cada vitória
// // a pontuação inicial é zero
// // pontuação do computador e do humano

// //escrever a lógica de partida de uma rodada
// // função playRound() que realiza rodada única

// // função precisa das escolhas do humano e do computador como parâmetro
// // humanChoice e computerChoice
// // a função precisa transformar seu parâmetro humanChoice ------
// // - ---  de modo que a saída sempre seja no formato de letras minusculas ------
// // humanChoice deve reconhecer letras maiusculas e minusculas ------
// //humanChoice recebe o input e converte para letras minusculas
// //A saida sempre sera em letras minusculas valorizando a padronização

// // função precisa verificar quem ganhou o round e informar o vencedor através do console
// // se humanChoice === rock && computerChoice === scissors human win
// // logicamente há três situações em que eu ganho e três em que perco.
// // eu perco justamente quando executo o contrario das opções
// // ---- HÁ TRES CONDIÇÕES! UMA EM QUE EMPATAMOS, UMA QUE VENCO E OUTRA EM QUE PERCO! ------
// // console.log() uma string do tipo "You win! Rock beats Scissors"
// // função precisa incrementar as pontuação e informa-la no console

// let humanScore = 0;
// let computerScore = 0;

// function playRound(humanChoice, computerChoice) {
//     humanChoice = humanChoice.toLowerCase(); //o novo valor do parâmetro é ele mesmo em minusculo

//     if (humanChoice === computerChoice) {
//         console.log("It's a draw! You both choose", humanChoice);
//     } else if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "scissors" && computerChoice === "paper") || (humanChoice === "paper" && computerChoice === "rock")) {
//         console.log(`You win! ${humanChoice} beats ${computerChoice}`);
//         humanScore++;
//     } else {
//         console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
//         computerScore++;
//     }

//     console.log(`Your score: ${humanScore} | Computer Score: ${computerScore}`);
// }

// //chamada de função playRound atribuindo as funções getHumanChoice() e getComputerChoice() a variáveis que servirão de parâmetros para função playRound.
// // As variáveis humanSelection e computerSelection recebem apenas os valores de retorno das funções.
// // Hipoteticamente humanSelection seria "rock" e computerSelection seria "paper"
// // então a função playGround procederia com seus códigos

// // const humanSelection = getHumanChoice();
// // const computerSelection = getComputerChoice();

// // playRound(humanSelection, computerSelection);

// // criar função playGame para jogar 5 rodadas
// // essa função playGame executará playRound 5x - o que pode ser feito através de uma estrutura de looping
// // a função playGame manterá controle das pontuações e declarará um vencedor ao final

// //crie a função playGame
// // Mova a função playRound e as variáveis de pontuação para que sejam declaradas dentro da função playGame --
// //-----nao como parâmetro
// //o looping vai se repetir 5 vezes e a cada iteração será chamada a função playRound
// // talvez seja necessário alterar os valores de retorno ou outras informações da função playRound -----
// // de modo que o jogo fique mais intuitivo

// function playGame() {
//     //loop executará a chamada de funçãoplayRound a cada iteração

//     // let humanScore = 0;
//     // let computerScore = 0; // controle da pontuação seria feito dentro do loop

//     for (i = 1; i <= 5; i++) {
//         console.log("Round number", i);
//         const humanSelection = getHumanChoice();
//         const computerSelection = getComputerChoice();
//         playRound(humanSelection, computerSelection);
//     }

//     if ((humanScore === computerScore)) {
//         console.log("It's a tie!");
//     } else if (humanScore > computerScore) {
//         console.log("You're the winner!");
//     } else {
//         console.log("The Computer is the winner!");
//     }
// }

// playGame();
