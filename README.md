# Teste Técnico Caju: Frontend Sênior

## Apresentação
Olá, eu sou a Mel! 👋 Sou uma desenvolvedora apaixonada por tecnologia, com experiência em desenvolvimento web, tanto no frontend quanto no backend. Formada em Análise e Desenvolvimento de Sistemas pela Universidade Paulista, atualmente atuo como **Tech Lead Frontend**, onde utilizo minhas habilidades técnicas e de liderança para otimizar soluções e promover um ambiente colaborativo.

Estou animada para discutir como posso contribuir para o sucesso da equipe e da Caju! 🌟

[Meu Linkedin](https://www.linkedin.com/in/meltammy/)

---

## 🚀 Realizei o deploy do frontend e do servidor do Json Web Server. Você pode conferir a aplicação em funcionamento aqui: [Aplicação Caju.](https://meltammy.github.io/caju/#/caju/dashboard)

--- 

# Checklist dos requisitos da vaga
- ✅ React;
- ✅ Hooks e Custom hooks;
- ✅ Javascript (programação assíncrona e Consumo de APIs);
- ✅ CSS;
- ✅ HTML;
- ✅ Testes de unidade e Integração;
- ✅ Typescript;
- ✅ Material UI;
- ✅ Gestão de estado global.

# Checklist de Implementação

### Testes e CI/CD
- ✅ Testes Unitários e de Integração
- ✅ End-to-End (E2E)
- ✅ Configuração de CI/CD com deploy automatizado

### Tela Cadastro
- ✅ Validação no campo de email para aceitar apenas emails válidos
- ✅ Validação no campo nome completo para aceitar pelo menos um espaço, no mínimo duas letras, e que a primeira letra não seja um número
- ✅ Validação no campo CPF para aceitar apenas CPFs válidos e adicionar uma máscara de CPF ao campo
- ✅ Implementação de POST ao preencher todos os campos corretamente
- ✅ Redirecionamento ao /dashboard ao criar uma nova admissão

### Tela Dashboard
- ✅ Implementação de GET ao carregar a página e ao fazer pesquisa por CPF
- ✅ Filtragem dos cards por coluna, usando o status
- ✅ Implementação de PUT ao clicar em Reprovar e alterar o status para REPROVED
- ✅ Implementação de PUT ao clicar em Aprovar e alterar o status para APPROVED
- ✅ Implementação de PUT ao clicar em Revisar novamente e alterar o status para REVIEW
- ✅ Implementação de DELETE ao clicar na lixeira no card
- ✅ O botão de Reprovar e Aprovar só aparece em admissões com o status REVIEW
- ✅ O botão Revisar novamente só aparece em admissões com o status REPROVED ou APPROVED
- ✅ Implementação de um loading na tela ao realizar requisições
- ✅ Todas as ações têm modal de confirmação e uma notificação de sucesso ou erro
- ✅ Na pesquisa por CPF, realização da requisição automaticamente ao preencher um CPF válido
- ✅ Adição de máscara de CPF no campo de pesquisa
- ✅ Atualização dos dados (refetch) ao clicar no ícone de atualizar

--- 

## 🛠️ Iniciando a Aplicação

Para começar, siga os passos abaixo:

1. Instale as dependências:
    ```shell
    yarn install
    ```

2. Adicione um arquivo .env na raiz do projeto com a seguinte variável:
    ```
    VITE_API_URL=http://localhost:3000
    ```

3. Inicie o servidor do Json Web Server
    ```shell
    yarn init:db
    ```

4. Execute a aplicação
    ```shell
    yarn dev
    ```

## 🔍 Rodando os testes

#### Testes com Jest
```shell
yarn dev
```

#### Testes E2E com Cypress
```shell
yarn cypress open
```

### 🧪 Cobertura dos Testes
**Jest:** 17 testes implementados, incluindo testes de componentes e funções.

**Cypress:** Testes E2E foram implementados nas duas telas.

---

# 💡 Experiência do Desenvolvimento

## Organização Pessoal

Acredito que a organização é essencial para um desenvolvimento eficaz. Para isso, criei um dashboard no Trello para acompanhar o progresso das tarefas e funcionalidades do projeto.

👉 [Confira meu dashboard no Trello!](https://trello.com/b/pr14yiCe/caju)

Essa prática garante que nada fique de fora e que o trabalho flua de maneira produtiva.

## Compromisso com a Qualidade
Estou comprometida em manter a qualidade do código, implementei pipelines de health check que asseguram a integridade do projeto antes de cada merge, realizando:

- **Validação de Tipagem**: Garante que o código está devidamente tipado.
- **Testes**: Executa testes unitários e de integração.
- **Lint**: Avalia a conformidade do código com as regras de estilo.

Essas medidas não apenas melhoram a qualidade, mas também facilitam a colaboração em equipe.

## Práticas de Commit
Uso o padrão **Conventional Commits** para estruturar minhas mensagens de commit de forma clara e consistente, mantendo um histórico organizado e refletindo a qualidade do projeto.

--- 

## 🛠️ Ferramentas Utilizadas

### Commitlint
O Commitlint mantém as mensagens de commit em um padrão definido, facilitando a leitura do histórico do projeto.

### Husky
O Husky gerencia hooks do Git de maneira prática, implementando validações automáticas antes de cada commit. Antes de cada push, um health check é executado, garantindo que apenas código de qualidade suba para o GitHub.

### Commitizen
O Commitizen simplifica a escrita de mensagens de commit, oferecendo uma interface interativa que orienta os desenvolvedores a seguirem as convenções.

## 📦 Dependências adicionais
Evitei ao máximo utilizar bibliotecas externas para mostrar minhas habilidades com TypeScript e React. Essa decisão foi intencional, pois busquei demonstrar minha proficiência e controle sobre as funcionalidades dessas tecnologias. No entanto, utilizei algumas bibliotecas para otimizar o trabalho com formulários, garantindo uma experiência de usuário eficiente.

### react-hook-form
Facilita a manipulação de formulários em React, permitindo um gerenciamento mais simples de estado e validações.

### react-text-mask
Fornece máscaras de entrada para campos de texto, ajudando na formatação de dados enquanto o usuário digita. Porém no código também há uma função para formatar o CPF.

### yup
Uma biblioteca de validação que funciona bem com `react-hook-form`, permitindo criar esquemas de validação de maneira intuitiva e eficaz.
