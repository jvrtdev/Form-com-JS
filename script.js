var alunos = []

function calcularMedia(){
    var nomeAluno = document.getElementById('nome').value;
    var nota1 = parseFloat(document.getElementById('nota1').value);
    var nota2 = parseFloat(document.getElementById('nota2').value);

    if (isNaN(nota1) || isNaN(nota2)){
        alert('Digite um valor númerico!');
        return
    }
    alunos.push(nomeAluno);
    alunos.push(nota1);
    alunos.push(nota2);
    console.log(alunos)

    var media = (nota1 + nota2) /2;

    //alert('Nome:' + nomeAluno + '\n' + 'Media: ' + media)
    var resultado =  'Nome: ' + nomeAluno + '\n' + 'Media: ' + media 

    document.getElementById('resultado').innerText = resultado
    document.getElementById('nome').value = '';
    document.getElementById('nota1').value = '';
    document.getElementById('nota2').value = '';
}