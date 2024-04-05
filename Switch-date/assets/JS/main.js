const h1 = document.querySelector('.container h1')
const data = new Date();

// function getDiaSemana(semana) {
//     let DiaSemana;

//     switch (semana) {
//         case 0:
//             DiaSemana= 'Domingo'
//             return DiaSemana;
//         case 1:
//             DiaSemana= 'Segunda'
//             return DiaSemana;
//         case 2:
//             DiaSemana= 'Terça'
//             return DiaSemana;
//         case 3:
//             DiaSemana= 'Quarta'
//             return DiaSemana;
//         case 4:
//             DiaSemana= 'Quinta'
//             return DiaSemana;
//         case 5:
//             DiaSemana= 'Sexta'
//             return DiaSemana;
//         case 6:
//             DiaSemana= 'Sabado'
//             return DiaSemana;
//     }
// }

// function getNomeMes(mes) {
//     let NomeMes;

//     switch (mes) {
//         case 0:
//             mes= 'Janeiro'
//             return mes;
//         case 1:
//             mes= 'Fevereiro'
//             return mes;
//         case 2:
//             mes= 'Março'
//             return mes;
//         case 3:
//             mes= 'Abril'
//             return mes;
//         case 4:
//             mes= 'Maio'
//             return mes;
//         case 5:
//             mes= 'Junho'
//             return mes;
//         case 6:
//             mes= 'Julho'
//             return mes;
//         case 7:
//             mes= 'Agosto'
//             return mes;
//         case 8:
//             mes= 'Setembro'
//             return mes;
//         case 9:
//             mes= 'Outrubro'
//             return mes;
//         case 10:
//             mes= 'Novembro'
//             return mes;
//         case 11:
//             mes= 'Dezembro'
//             return mes;
//     }
// }

// function zeroAEsquerda (num) {
//     return num>= 10 ? num : `0${num}`;
// }

// function criaData (data) {
//     const semana = data.getDay();
//     const mes = data.getMonth();

//     const nomeDia = getDiaSemana(semana);
//     const NomedoMes = getNomeMes(mes);

//     return (`${nomeDia}, ${data.getDate()} de ${NomedoMes} de ${data.getFullYear()} ${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}`);
// }

// h1.innerHTML = criaData(data);

const opcoes = {
    dateStyle: 'full'
}


// Formatação manual do tempo
const hora = data.getHours().toString().padStart(2, '0');
const minutos = data.getMinutes().toString().padStart(2, '0');
const tempoFormatado = `${hora}:${minutos}`;

h1.innerHTML = data.toLocaleDateString('pt-BR', opcoes, tempoFormatado);