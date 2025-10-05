# Portfólio Pessoal - Patrick Souza
OBS1: FOI TIRADO AS CHAVES DO POJETO POR QUESTÃO DE SEGURANÇA
Este projeto é um portfólio web de página única (single page) criado para apresentar o perfil profissional, habilidades e projetos de Patrick Souza, Analista de Suporte Pleno com foco em automação. A página foi desenvolvida com tecnologias web fundamentais e design responsivo.

A principal funcionalidade interativa é um formulário de contato que utiliza o serviço **EmailJS** para enviar os dados diretamente para a caixa de entrada do proprietário, sem a necessidade de um back-end.

## 🚀 Link para o Site Publicado

A versão final do site está hospedada no GitHub Pages e pode ser acessada através do seguinte link:

**[https://patricksouzal.github.io/programacaoWeb-Newton/](https://patricksouzal.github.io/programacaoWeb-Newton/)**

## ✨ Tecnologias Utilizadas

-   **HTML5:** Utilizado para a estruturação semântica do conteúdo da página.
-   **CSS3:** Responsável pela estilização completa, layout (utilizando Flexbox) e responsividade para diferentes tamanhos de tela.
-   **JavaScript (ES6+):** Utilizado para adicionar interatividade ao formulário de contato e realizar a integração com a API do EmailJS.
-   **EmailJS:** Serviço de terceiros que permite o envio de e-mails a partir de aplicações front-end, conectando o formulário diretamente a um provedor de e-mail (como o Gmail).

## ⚙️ Instruções para Configurar o EmailJS

Para que o formulário de contato deste projeto funcione em uma cópia local ou em um novo repositório, é necessário configurar suas próprias credenciais do EmailJS.

1.  **Crie uma Conta:** Acesse o site do [EmailJS](https://www.emailjs.com/) e crie uma conta gratuita.

2.  **Conecte seu E-mail:** Na dashboard do EmailJS, vá em "Email Services" e adicione seu provedor de e-mail (ex: Gmail). Isso irá gerar um **Service ID**.

3.  **Crie um Template:** Vá em "Email Templates" e crie um novo modelo de e-mail. O conteúdo do template pode usar variáveis que correspondem aos campos do formulário (ex: `{{name}}`, `{{email}}`, `{{message}}`). Isso irá gerar um **Template ID**.

4.  **Obtenha sua Public Key:** Na seção "Account" da dashboard, você encontrará sua **Public Key**.

5.  **Configure o `script.js`:** Abra o arquivo `script.js` e substitua os valores de placeholder pelas suas chaves, como no exemplo abaixo:

    ```javascript
    // Arquivo: script.js

    document.addEventListener('DOMContentLoaded', function () {

        // 1. Substitua pela sua Public Key
        emailjs.init('SUA_PUBLIC_KEY');

        // ... (restante do código)

        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();

            // 2. Substitua pelo seu Service ID e Template ID
            emailjs.sendForm('SEU_SERVICE_ID', 'SEU_TEMPLATE_ID', this)
                .then(function (response) {
                    console.log('SUCCESS!', response.status, response.text);
                    // ...
                }, function (error) {
                    console.log('FAILED...', error);
                    // ...
                });
        });
    });
    ```

    OBS2: FOI TIRADO AS CHAVES DO POJETO POR QUESTÃO DE SEGURANÇA