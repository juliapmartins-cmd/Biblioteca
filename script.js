// Seleciona o botão pelo ID 'showMessage' e armazena na
const btn = document.getElementById('showMessage');
// Seleciona a caixa de mensagem pelo ID 'messageBox' e

const box = document.getElementById('messageBox');
// Cria um array com mensagens que serão exibidas na caixa
const messages = [
'Olá, mundo!',
'Bem-vindo à programação!',
'Você está indo muito bem',
'Continue praticando',
'Frontend é divertido!'
];
// Variável para controlar qual mensagem está sendo exibida no

let current = 0;
// Adiciona um "ouvinte de evento" ao botão, que será acionado
btn.addEventListener('click', () => {
// Adiciona a classe 'show' à caixa de mensagem para ativar a

box.classList.add('show');
// Define o conteúdo de texto da caixa com a mensagem atual

box.textContent = messages[current];
// Atualiza o índice para a próxima mensagem.
// Quando chega ao final do array, volta para o início (efeito

current = (current + 1) % messages.length;
});



const livrosEncontrados = [
    {
        id: 1,
        titulo: "Dom Casmurro",
        autor: "Machado de Assis",
        imagem: "https://via.placeholder.com/200x300?text=Dom+Casmurro",
        disponivel: true
    },
    {
        id: 2,
        titulo: "O Pequeno Príncipe",
        autor: "Antoine de Saint-Exupéry",
        imagem: "https://via.placeholder.com/200x300?text=Pequeno+Principe",
        disponivel: false
    },
    {
        id: 3,
        titulo: "1984",
        autor: "George Orwell",
        imagem: "https://via.placeholder.com/200x300?text=1984",
        disponivel: true
    },
    {
        id: 4,
        titulo: "A Revolução dos Bichos",
        autor: "George Orwell",
        imagem: "https://via.placeholder.com/200x300?text=Revolucao+dos+Bichos",
        disponivel: true
    }];


