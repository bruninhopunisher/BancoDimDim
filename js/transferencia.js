document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.transfer-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        setTimeout(function() {
            window.location.href = 'transfe_realiza.html';
        }, 1000);
    });
});
