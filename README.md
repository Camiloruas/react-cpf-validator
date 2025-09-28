# Validador de CPF

Um validador de CPF simples e responsivo, construído com React e Tailwind CSS. O projeto oferece feedback visual imediato sobre a validade do CPF inserido.

## Demonstração Online

Você pode testar a aplicação em tempo real no link abaixo:

[**Clique aqui para testar o Validador de CPF**](https://camiloruas.github.io/react-cpf-validator/)

## Features

- **Validação de CPF:** Implementa o algoritmo oficial para validação dos dígitos verificadores.
- **Máscara de Input:** Formata o CPF no padrão `xxx.xxx.xxx-xx` automaticamente durante a digitação.
- **Feedback Instantâneo:** A interface responde em tempo real, indicando se o CPF é válido ou inválido.
- **Design Responsivo:** Interface limpa e que se adapta a diferentes tamanhos de tela.

## Tecnologias Utilizadas

- **Frontend:** React (com Vite)
- **Estilização:** Tailwind CSS
- **Ícones:** React Icons

## Como Executar

Para executar este projeto localmente, siga os passos abaixo.

1.  **Clone o repositório:**

    ```bash
    git clone https://github.com/Camiloruas/react-cpf-validator.git
    ```

2.  **Navegue até o diretório:**

    ```bash
    cd react-cpf-validator
    ```

3.  **Instale as dependências:**

    ```bash
    npm install
    ```

4.  **Execute o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```
    Abra [http://localhost:5173](http://localhost:5173) (ou a porta indicada no terminal) no seu navegador.

## Scripts Disponíveis

- `npm run dev`: Inicia o servidor de desenvolvimento.
- `npm run build`: Gera a build de produção do projeto.
- `npm run lint`: Executa o linter para análise do código.
- `npm run preview`: Serve a build de produção localmente para teste.
- `npm run deploy`: Executa o deploy para o GitHub Pages.