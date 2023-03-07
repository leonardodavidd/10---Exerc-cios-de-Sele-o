function calcularexe1(){
    let nota1 = Number(document.getElementById('nota1').value)
    let nota2 = Number(document.getElementById('nota2').value)
    let nota3 = Number(document.getElementById('nota3').value)
    let nota4 = Number(document.getElementById('nota4').value)
    let media = (nota1 + nota2 + nota3 + nota4) / 4
    if (media >= 7){
        document.getElementById('resultado').innerHTML = 'Aprovado'
    }
    else {
        document.getElementById('resultado').innerHTML = 'Reprovado'
    }
}
function calcularexe2(){
    let nr1 = parseFloat(document.getElementById('nr1').value)
    let nr2 = parseFloat(document.getElementById('nr2').value)
    let media = (nr1 + nr2) / 2
    if (media >= 0 && media <= 3){
        document.getElementById('resultado').innerHTML = 'Reprovado'
    }
    if (media >= 3 && media <= 7){
        document.getElementById('resultado').innerHTML = 'Exame'
    }
    if (media >= 7 && media <= 10){
        document.getElementById('resultado').innerHTML = 'Aprovado'
    }
}
function calcularexe3(){
    let nr1 = Number(document.getElementById('nr1').value)
    let nr2 = Number(document.getElementById('nr2').value)
    if (nr1 == nr2){
        document.getElementById('resultado').innerHTML = 'Os dois números são iguais'
    }
    if (nr1 < nr2){
        document.getElementById('resultado').innerHTML = 'O menor número é o primeiro'
    }
    if (nr2 < nr1){
        document.getElementById('resultado').innerHTML = 'O menor número é o segundo'
    }
}
function calcularexe4(){
    let nr1 = Number(document.getElementById('nr1').value)
    let nr2 = Number(document.getElementById('nr2').value)
    let nr3 = Number(document.getElementById('nr3').value)
    if (nr1 > nr2 && nr1 > nr3){
        document.getElementById('resultado').innerHTML = 'O maior número é o primeiro'
    }
    else if (nr2 > nr1 && nr2 > nr3){
        document.getElementById('resultado').innerHTML = 'O maior número é o segundo'
    }
    else if (nr3 > nr1 && nr3 > nr2){
        document.getElementById('resultado').innerHTML = 'O maior número é o terceiro'
    }
    else{
        document.getElementById('resultado').innerHTML = 'Os três valores digitados são iguais ! '
    }
}
function calcularexe5(){
    var nr1 = Number(document.getElementById('nr1').value)
    var nr2 = Number(document.getElementById('nr2').value)
    var opcao = Number(document.getElementById('opcao').value)
    var media = (nr1 + nr2) / 2
    if (opcao == '1'){
        document.getElementById('resultado').innerHTML = 'A média entre os números digitados é ' + media
    }
    if (opcao == '2'){
        if (nr1 == nr2){
            document.getElementById('resultado').innerHTML = 'Os dois números são iguais ! '
        }
        if (nr1 > nr2){
            var maior = nr1
            var menor = nr2
            conta = maior - menor 
            document.getElementById('resultado').innerHTML = 'A diferença do maior pro menor é ' + conta
        }
        else if(nr2 > nr1){
            var maior = nr2
            var menor = nr1
            conta = maior - menor 
            document.getElementById('resultado').innerHTML = 'A diferença do maior pro menor é ' + conta
        }
    }
    if (opcao == '3'){
        document.getElementById('resultado').innerHTML = 'A multiplicação/produto dos dois números é ' + (nr1*nr2)
    }
    if (opcao == '4'){
        document.getElementById('resultado').innerHTML = 'A divisão do primeiro pelo segundo é ' + (nr1/nr2)
    }
}
function calcularexe6(){
    var nr1 = Number(document.getElementById('nr1').value)
    var nr2 = Number(document.getElementById('nr2').value)
    var opcao = Number(document.getElementById('opcao').value)
    if (opcao != '123'){
        document.getElementById('resultado').innerHTML = 'Opção inválida ! '
    }
    if(opcao == '1'){
        var elevado = nr1 ** nr2
        document.getElementById('resultado').innerHTML = 'O primeiro número elevado ao segundo é ! ' + (elevado)
    }
    if(opcao == '2'){
        var raiz1 = Math. sqrt(nr1)
        var raiz2 = Math. sqrt(nr2)
        document.getElementById('resultado').innerHTML = 'A raiz quadrada do primeiro número é = ' + raiz1 + '<br>' +
        'A raiz quadrada do segundo número é = ' + raiz2
    }
    if(opcao == '3'){
        var nr1 = Number(document.getElementById('nr1').value)
        var nr2 = Number(document.getElementById('nr2').value)
        var raiz1 = nr1 * nr1 * nr1
        var raiz2 = nr2 * nr2 * nr2
        document.getElementById('resultado').innerHTML = 'A raiz cúbica do primeiro número é = ' + raiz1 + '<br>' + 
        'A raiz cúbica do segundo número é = ' + raiz2

    } 
}
function calcularexe7(){
    var nr1 = Number(document.getElementById('nr1').value)
    if (nr1 < '500'){
        var aumento = nr1 * 0.30
        document.getElementById('resultado').innerHTML = 'O seu novo salário com acréscimo de 30% é = ' + (nr1 + aumento)
    }
    else{
        document.getElementById('resultado').innerHTML = 'O seu salário passa dos 500, então você não tem direito ao aumento. '
    }
}
function calcularexe8(){
    var nr1 = Number(document.getElementById('nr1').value)
    if(nr1 <= '300'){
        var aumento = nr1 * 0.35
        document.getElementById('resultado').innerHTML = 'O seu novo salário com acréscimo de 35% é = ' + (nr1 + aumento)
    }
    if(nr1 > '300'){
        var aumento = nr1 * 0.15
        document.getElementById('resultado').innerHTML = 'O seu novo salário com acréscimo de 15% é = ' + (nr1 + aumento)
    }
}
function calcularexe9(){
    var nr1 = Number(document.getElementById('nr1').value)
    if(nr1 > 400){
        var percentual = nr1 * 0.30
        document.getElementById('resultado').innerHTML = 'Seu saldo médio é = ' + nr1 + '<br>'+
        'Seu valor de acréscimo de 30% é = ' + percentual
    }
    else if(nr1 <= 400 && nr1 >= 300){
        var percentual = nr1 * 0.25
        document.getElementById('resultado').innerHTML = 'Seu saldo médio é = ' + nr1 + '<br>'+
        'Seu valor de acréscimo de 25% é = ' + percentual
    }
    else if(nr1 > 200 && nr1 <= 300){
        var percentual = nr1 * 0.20
        document.getElementById('resultado').innerHTML = 'Seu saldo médio é = ' + nr1 + '<br>'+
        'Seu valor de acréscimo de 20% é = ' + percentual
    }
    else if(nr1 <= 200){
        var percentual = nr1 * 0.10
        document.getElementById('resultado').innerHTML = 'Seu saldo médio é = ' + nr1 + '<br>'+
        'Seu valor de acréscimo de 10% é = ' + percentual
    }
}
function calcularexe10(){
    var nr1 = Number(document.getElementById('nr1').value)
    if(nr1 <= 12000){
        var porcentagem = nr1 * 0.05
        var imposto = 0
        document.getElementById('resultado').innerHTML = 'O preço do seu carro é ' + (porcentagem + imposto + nr1)
    }
    if(nr1 > 12000 && nr1 <=25000){
        var porcentagem = nr1 * 0.10
        var imposto = nr1 * 0.15
        document.getElementById('resultado').innerHTML = 'O preço do seu carro é ' + (porcentagem + imposto + nr1)
    }
    if(nr1 > 25000){
        var porcentagem = nr1 * 0.15
        var imposto = nr1 * 0.20
        document.getElementById('resultado').innerHTML = 'O preço do seu carro é ' + (porcentagem + imposto + nr1)
    }
}

