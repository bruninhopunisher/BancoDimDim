// script.js

function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    sidebar.style.left = sidebar.style.left === '0px' ? '-250px' : '0px';
}

function showFields() {
    const transferType = document.getElementById('transfer-type').value;
    const additionalFields = document.getElementById('additional-fields');

    additionalFields.innerHTML = '';

    if (transferType === 'imediato' || transferType === 'via-chave') {
        additionalFields.innerHTML = `
            <label for="chave">Tipo de Chave:</label>
            <select id="chave" name="chave">
                <option value="cpf">CPF</option>
                <option value="cnpj">CNPJ</option>
                <option value="telefone">Telefone</option>
                <option value="email">Email</option>
            </select>
            <label for="chave-pix">Chave Pix:</label>
            <input type="text" id="chave-pix" name="chave-pix" required>`;
    } else if (transferType === 'agendada') {
        additionalFields.innerHTML = `
            <label for="chave">Tipo de Chave:</label>
            <select id="chave" name="chave">
                <option value="cpf">CPF</option>
                <option value="cnpj">CNPJ</option>
                <option value="telefone">Telefone</option>
                <option value="email">Email</option>
            </select>
            <label for="chave-pix">Chave Pix:</label>
            <input type="text" id="chave-pix" name="chave-pix" required>
            <label for="data">Data:</label>
            <input type="date" id="data" name="data" required>`;
    } else if (transferType === 'qr-code') {
        additionalFields.innerHTML = `
            <p>QR Code não está disponível na web.</p>`;
    }
}

function validarEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function validarCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g, '');
    if (cpf.length !== 11) return false;
    if (/^(\d)\1{10}$/.test(cpf)) return false;

    let sum = 0;
    for (let i = 0; i < 9; i++) {
        sum += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let digit = 11 - (sum % 11);
    digit = digit >= 10 ? 0 : digit;
    if (parseInt(cpf.charAt(9)) !== digit) return false;

    sum = 0;
    for (let i = 0; i < 10; i++) {
        sum += parseInt(cpf.charAt(i)) * (11 - i);
    }
    digit = 11 - (sum % 11);
    digit = digit >= 10 ? 0 : digit;
    if (parseInt(cpf.charAt(10)) !== digit) return false;

    return true;
}

function validarCNPJ(cnpj) {
    cnpj = cnpj.replace(/[^\d]+/g, '');
    if (cnpj.length !== 14) return false;
    if (/^(\d)\1{13}$/.test(cnpj)) return false;

    let sum = 0;
    let size = cnpj.length - 2;
    let numbers = cnpj.substring(0, size);
    let digits = cnpj.substring(size);
    let pos = size - 7;
    for (let i = size; i >= 1; i--) {
        sum += numbers.charAt(size - i) * pos--;
        if (pos < 2) pos = 9;
    }
    let result = sum % 11 < 2 ? 0 : 11 - sum % 11;
    if (result !== parseInt(digits.charAt(0))) return false;

    size = size + 1;
    numbers = cnpj.substring(0, size);
    sum = 0;
    pos = size - 7;
    for (let i = size; i >= 1; i--) {
        sum += numbers.charAt(size - i) * pos--;
        if (pos < 2) pos = 9;
    }
    result = sum % 11 < 2 ? 0 : 11 - sum % 11;
    if (result !== parseInt(digits.charAt(1))) return false;

    return true;
}

document.getElementById('pix-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const chavePix = document.getElementById('chave-pix').value.trim();
    const tipoChave = document.getElementById('chave').value;
    const data = document.getElementById('data');
    let isValid = true;

    if (tipoChave === 'email' && !validarEmail(chavePix)) {
        alert('O email inserido é inválido.');
        isValid = false;
    } else if (tipoChave === 'cpf' && !validarCPF(chavePix)) {
        alert('O CPF inserido é inválido.');
        isValid = false;
    } else if (tipoChave === 'cnpj' && !validarCNPJ(chavePix)) {
        alert('O CNPJ inserido é inválido.');
        isValid = false;
    }

    if (data && data.value === '') {
        alert('Por favor, selecione uma data.');
        isValid = false;
    }

    if (isValid) {
        setTimeout(function() {
            alert('Pix efetuado com sucesso!');
            window.location.href = 'sucesso.html';
        }, 2000);
    }
});
