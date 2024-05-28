document.getElementById('esqueciSenhaForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const successMessage = document.getElementById('mensagem-sucesso');
    successMessage.style.display = 'block';
});
