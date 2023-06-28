function calcularMedia(nota1, nota2, nota3, nome) {
    let name = nome
    let mediaCalculada = (nota1 + nota2 + nota3) / 3

    return mediaCalculada
}
let nome = "Carlos"
let nota1 = 8
let nota2 = 8
let nota3 = 10
console.log(`${nome}, possui notas ${nota1},${nota2},${nota3} e sua media é: ${calcularMedia(nota1, nota2, nota3, nome)}`);
