let salarioBruto = 1000
let salarioLiquido = 0

// -------------------------- INSS -----------------------------//
if (salarioBruto <= 1556.94){
    let salarioBruto1 = salarioBruto * 0.08
    salarioLiquido = salarioBruto - salarioBruto1
} 
else if (salarioBruto > 1556.94 && salarioBruto <= 2594){
    let salarioBruto2 = salarioBruto * 0.09
    salarioLiquido = salarioBruto - salarioBruto2
} 
else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
    let salarioBruto3 = salarioBruto * 0.11
    salarioLiquido = salarioBruto - salarioBruto3
}
else if (salarioBruto >= 5189.82){
    let salarioBruto4 = salarioBruto - 570.88
    salarioLiquido = salarioBruto4
}

let salarioLiquido2 = salarioLiquido

// ----------------------- Imposto de renda --------------------------//

if (salarioLiquido2 >= 1903.99 && salarioLiquido2 <= 2826.65){
    let salarioBruto7 = salarioLiquido2 * 0.075 - 142.80
    salarioLiquido2 = salarioLiquido2 - salarioBruto7
}
else if (salarioLiquido2 >= 2826.66 && salarioLiquido2 <= 3751.05){
    let salarioBruto8 = salarioLiquido2 * 0.15 - 354.80
    salarioLiquido2 = salarioLiquido2 - salarioBruto8
}
else if (salarioLiquido2 >= 3751.06 && salarioLiquido2 <= 4664.68) {
    let salarioBruto9 = salarioLiquido2 * 0.225 - 636.13
    salarioLiquido2 = salarioLiquido2 - salarioBruto9
}
else if (salarioLiquido2 >= 4664.68){
    let salarioBruto10 = salarioLiquido2 * 0.275 - 869.36
    salarioLiquido2 = salarioLiquido2 - salarioBruto10
}

console.log(salarioLiquido2)