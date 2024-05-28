document.getElementById('loan-investment-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const loanAmount = document.getElementById('loan-amount').value.trim();
    const loanTerm = document.getElementById('loan-term').value.trim();
    const investmentAmount = document.getElementById('investment-amount').value.trim();
    const investmentTerm = document.getElementById('investment-term').value.trim();
    const formMessage = document.getElementById('form-message');

    if (!loanAmount || isNaN(loanAmount) || loanAmount <= 0) {
        formMessage.textContent = 'Por favor, insira um valor de empréstimo válido.';
        return;
    }

    if (!loanTerm || isNaN(loanTerm) || loanTerm <= 0) {
        formMessage.textContent = 'Por favor, insira um prazo de empréstimo válido.';
        return;
    }

    if (!investmentAmount || isNaN(investmentAmount) || investmentAmount <= 0) {
        formMessage.textContent = 'Por favor, insira um valor de investimento válido.';
        return;
    }

    if (!investmentTerm || isNaN(investmentTerm) || investmentTerm <= 0) {
        formMessage.textContent = 'Por favor, insira um prazo de investimento válido.';
        return;
    }

    formMessage.style.color = 'green';
    formMessage.textContent = 'Formulário enviado com sucesso! Redirecionando...';

    setTimeout(function() {
        window.location.href = "home_page.html"; 
    }, 2000);
});
