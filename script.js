function calcular_planos(){
    const cx_fatura = document.getElementById('cx-fatura') 
    const cx_pago_p1 = document.getElementById('cx-pago-p1')
    const cx_meses_1 = document.getElementById('cx-meses1')
    const cx_pago_p2 = document.getElementById('cx-pago-p2')
    const cx_meses_2 = document.getElementById('cx-meses2')

    //Tratamento de Dados:
    const fatura = Number(cx_fatura.value)
    const pago_p1 = Number(cx_pago_p1.value)
    const meses1 = Number(cx_meses_1.value)
    const pago_p2 = Number(cx_pago_p2.value)
    const meses2 = Number(cx_meses_2.value)

    //Processamentos:
    const taxa = 15

    const rotativo_1 = fatura - pago_p1
    const valor_a_pagar_1 = calcular_juros_rotativo(rotativo_1, taxa, meses1)
    const fatura_p1 = calcular_fatura_futura(valor_a_pagar_1, taxa, meses1)

    const rotativo_2 = fatura - pago_p2
    const valor_a_pagar_2 = calcular_juros_rotativo(rotativo_2, taxa, meses2)
    const fatura_p2 = calcular_fatura_futura(valor_a_pagar_2, taxa, meses2)

    const result = `🔶----> P1 <----🔶
    Valor a Pagar: R$ ${valor_a_pagar_1.toFixed(2)}
    Valor Residual: R$ ${rotativo_1.toFixed(2)}
    Fatura em ${meses1} meses será de R$ ${fatura_p1.toFixed(2)}
    \n🔷----> P2 <----🔷
    Valor a Pagar: R$ ${valor_a_pagar_2.toFixed(2)}
    Valor Residual: R$ ${rotativo_2.toFixed(2)}
    Fatura em ${meses2} meses será de R$ ${fatura_p2.toFixed(2)}`

    alert(result)
}

function calcular_juros_rotativo(rotativo, taxa, tempo) {
    return juros_compostos(rotativo, taxa, tempo)
}

function calcular_fatura_futura(valor, taxa, meses) {
    const valor_futuro = valor + juros_compostos(valor, taxa, meses)
    return valor_futuro
}

function juros_compostos(c, i, t) {
    const juros = c * (1 + (i/100))**t
    return juros
}