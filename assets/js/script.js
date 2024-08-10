// Seleciona o formulário na página
const form = document.querySelector('form');

// Adiciona um ouvinte de evento para o evento de envio do formulário
form.addEventListener('submit', function (event) {

    // Previne o comportamento padrão do envio do formulário
    event.preventDefault();

    // Obtém os valores de peso e altura dos campos de entrada
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    // Calcula o IMC (Índice de Massa Corporal) e arredonda para duas casas decimais
    const bmi = (weight / (height * height)).toFixed(2);

    // Seleciona o elemento onde o valor do IMC será exibido
    const value = document.querySelector('#value');
    let description = '';

    // Adiciona a classe 'atention' ao elemento de valor
    value.classList.add('atention');

    // Remove a classe 'hidden' do elemento de informações
    document.getElementById('infos').classList.remove('hidden');

    // Define a descrição com base no valor do IMC
    if (bmi < 18.5) {
        description = 'Cuidado! você está abaixo do peso!';
    } else if (bmi >= 18.5 && bmi <= 25) {
        description = 'Parabéns! você está no peso ideal!';
        value.classList.remove('atention');
        value.classList.add('normal');
    } else if (bmi > 25 && bmi <= 35) {
        description = 'Cuidado! você está com sobrepeso!';
    } else if (bmi > 35 && bmi <= 40) {
        description = 'Cuidado! você está com obesidade grau 1!';
    } else  {
        description = 'Cuidado! você está com obesidade grau 2!';
    }

    // Substitui o ponto por vírgula no valor do IMC e exibe no elemento de valor
    value.textContent = bmi.replace('.', ',');
    // Exibe a descrição no elemento de descrição
    document.getElementById('description').textContent = description;
});