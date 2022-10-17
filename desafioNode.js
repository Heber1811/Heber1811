var cpf = '033.217.551-06';

// regra1 validação do décimo dígito

function validarDigitos(digito, cpf) {
    var multiplica = []
    var arrayDigito = []
    var cpfNaoFormatado = cpf.replace(/\D/g, '').substring(0, digito - 1).split('');
    var comparaDigito = cpf.replace(/\D/g, '').substring(digito - 1, digito);
 
    // console.log(cpfNaoFormatado)
    // console.log(comparaDigito)
    for (let i  = digito; i >= 2; i--) {
        multiplica.push(i)
    }
    cpfNaoFormatado.map(function (v, e) {
        arrayDigito.push(v * multiplica[e])
    })

    var somaDecimoDigito = arrayDigito.reduce((a, b) => a + b)

    if ((somaDecimoDigito * 10) % 11 == 10) {
        var decimoDigito = 0
    } else {
        var decimoDigito = (somaDecimoDigito * 10 % 11)
    } 
    if (decimoDigito == comparaDigito) {
        console.log(comparaDigito)
       return true;
    } else {
        return false
    }
}

if (validarDigitos(10, cpf))
    console.log(validarDigitos(11, cpf));
else
    console.log(false);

