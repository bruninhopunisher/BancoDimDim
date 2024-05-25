// forgot_password.js

document.getElementById('esqueciSenhaForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const successMessage = document.getElementById('mensagem-sucesso');

    // Aqui você pode adicionar a lógica para enviar o e-mail de recuperação
    // Por exemplo, fazer uma requisição AJAX para o backend

    // Exibir a mensagem de sucesso (simulação de envio de e-mail)
    successMessage.style.display = 'block';
});
