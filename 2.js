// 2. Crie uma função que recebe um valor inteiro e retorne verdadeiro se
// for ímpar ou falso se for par.

function confirma(numero) {
    let booleano = false
    if (numero % 2 === 0) {
        booleano = false
    } else {
        booleano = true
    }
    return booleano
}

let numero = 6

console.log(confirma(numero))