// validation.js

document.getElementById('validateButton').addEventListener('click', function () {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const documentType = document.getElementById('documentType').value;
    const documentValue = document.getElementById('document').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const errorMessage = document.getElementById('error-message');

    if (!validateEmail(email)) {
        showError('E-mail inválido.');
        return;
    }

    if (password !== confirmPassword) {
        showError('As senhas não iguais.');
        return;
    }

    if (documentType === 'cpf' && !validateCPF(documentValue)) {
        showError('CPF inválido.');
        return;
    }

    if (documentType === 'cnpj' && !validateCNPJ(documentValue)) {
        showError('CNPJ inválido.');
        return;
    }

    errorMessage.style.display = 'none';
    alert('Informações validadas com sucesso!');

    document.getElementById("myForm").submit();
});

document.getElementById('registrationForm').addEventListener('submit', function (event) {
    const errorMessage = document.getElementById('error-message');
    if (errorMessage.style.display !== 'none') {
        event.preventDefault();
        alert('Corrija os erros antes de enviar.');
    }
});

function showError(message) {
    const errorMessage = document.getElementById('error-message');
    errorMessage.textContent = message;
    errorMessage.style.display = 'block';
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validateCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g, '');
    if (cpf.length !== 11 || /^(.)\1*$/.test(cpf)) return false;
    let sum = 0, remainder;
    for (let i = 1; i <= 9; i++) sum += parseInt(cpf.substring(i - 1, i)) * (11 - i);
    remainder = (sum * 10) % 11;
    if ((remainder === 10) || (remainder === 11)) remainder = 0;
    if (remainder !== parseInt(cpf.substring(9, 10))) return false;
    sum = 0;
    for (let i = 1; i <= 10; i++) sum += parseInt(cpf.substring(i - 1, i)) * (12 - i);
    remainder = (sum * 10) % 11;
    if ((remainder === 10) || (remainder === 11)) remainder = 0;
    if (remainder !== parseInt(cpf.substring(10, 11))) return false;
    return true;
}

function validateCNPJ(cnpj) {
    cnpj = cnpj.replace(/[^\d]+/g, '');
    if (cnpj.length !== 14 || /^(.)\1*$/.test(cnpj)) return false;
    let length = cnpj.length - 2;
    let numbers = cnpj.substring(0, length);
    let digits = cnpj.substring(length);
    let sum = 0, pos = length - 7;
    for (let i = length; i >= 1; i--) {
        sum += numbers.charAt(length - i) * pos--;
        if (pos < 2) pos = 9;
    }
    let result = sum % 11 < 2 ? 0 : 11 - sum % 11;
    if (result !== parseInt(digits.charAt(0))) return false;
    length = length + 1;
    numbers = cnpj.substring(0, length);
    sum = 0;
    pos = length - 7;
    for (let i = length; i >= 1; i--) {
        sum += numbers.charAt(length - i) * pos--;
        if (pos < 2) pos = 9;
    }
    result = sum % 11 < 2 ? 0 : 11 - sum % 11;
    if (result !== parseInt(digits.charAt(1))) return false;
    return true;
}
