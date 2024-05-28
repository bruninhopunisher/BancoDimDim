document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.transfer-form');

    form.addEventListener('submit', function(event) {
        // Evita o envio padrão do formulário
        event.preventDefault();

        // Redireciona para a página de sucesso após 1 segundo
        setTimeout(function() {
            window.location.href = 'transfe_realiza.html';
        }, 1000);
    });
});
