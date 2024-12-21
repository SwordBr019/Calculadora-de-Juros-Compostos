document.getElementById('calculate'),addEventListener('click', function(){ //Criando a função para fazer o calculo
    const value = document.getElementById("value").value; //Valor
    const fee = (document.getElementById("fee").value)/100; //Juros
    const time = document.getElementById("time").value; //Tempo

    const total = value * (1+fee)**time; //Const do calcula = Valor 1+fee (Juros) * Tempo

    this.document.getElementById('total').innerHTML = ("R$ " + total.toFixed(2).replace(".", ",")) //Imprimiodo o resultado na tela
})