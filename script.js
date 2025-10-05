// Arquivo: script.js

// Espera o conteúdo da página carregar completamente
document.addEventListener('DOMContentLoaded', function () {

    // Inicializa o EmailJS com a sua Public Key
    emailjs.init('xxxxxxxxxxxxxxxxxxx'); // <-- SUBSTITUA PELA SUA PUBLIC KEY

    const contactForm = document.getElementById('contact-form');
    const feedbackEl = document.getElementById('form-feedback');

    contactForm.addEventListener('submit', function (event) {
        // Previne o comportamento padrão do formulário (que é recarregar a página)
        event.preventDefault();

        // Mostra uma mensagem de "enviando..."
        feedbackEl.textContent = 'Enviando...';
        feedbackEl.classList.remove('success', 'error'); // Remove classes anteriores
        feedbackEl.style.display = 'block';

        // Envia o formulário usando EmailJS
        emailjs.sendForm('xxxxxxxxxxxxxx', 'xxxxxxxxxxxxxxx', this)
            .then(function (response) {
                // Executado em caso de SUCESSO
                console.log('SUCCESS!', response.status, response.text);
                feedbackEl.textContent = 'Mensagem enviada com sucesso!';
                feedbackEl.classList.add('success');

                // Limpa o formulário
                contactForm.reset();

            }, function (error) {
                // Executado em caso de ERRO
                console.log('FAILED...', error);
                feedbackEl.textContent = 'Ocorreu um erro ao enviar a mensagem. Tente novamente.';
                feedbackEl.classList.add('error');
            });
    });
});