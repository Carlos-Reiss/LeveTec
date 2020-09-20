<h1 align="center">
	<!-- <img alt="Logo" src=".github/logo.png" width="200px" /> -->
  Projeto Leve Tecnologia
</h1>

<h3 align="center">
  Projeto desenvolvido do backend ao frontend, aplicação de cadastro de pessoas em cursos.
</h3>

<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/EliasGcf/readme-template">

  <a href="https://www.linkedin.com/in/carlos-reis-b62893185/">
    <img alt="Made by" src="https://img.shields.io/badge/made%20by-Carlos%20reis-gree">
  </a>
  
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/carlos-reiss/LeveTec">
  
  <a href="https://github.com/carlos-reiss/leveTec/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/Carlos-reiss/LeveTec">
  </a>
  
  <a href="https://github.com/carlos-reiss/LeveTec/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/Carlos-reiss/LeveTec">
  </a>
  
</p>

<p align="center">
  <a href="#-sobre-o-projeto">Sobre o Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-comecando-a-utilizar-o-projeto">Começando a usar o Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</p>


<img alt="Layout" src="frontend/src/assets/gif_aplicacao.gif">

## 👨🏻‍💻 Sobre o Projeto

- <p >Projeto toltamente desenvolvido em typescript, o backend está finalizado todas as rotas foi desenvolvido utilizando NodeJS com Express e o frontend foi feito em ReactJS.</p>

## 🚀 Tecnologias utilizadas no Projeto

Tecnologias que eu utilizei para o desenvolvimento da aplicação.

- [Node.js](https://nodejs.org/en/)
- [ReactJS](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/pt-br/)
- [Celebrate](https://github.com/arb/celebrate)
- [mongoose](https://mongoosejs.com/)
- [express-async-errors](https://github.com/davidbanham/express-async-errors)
- [mongoDB](https://www.mongodb.com/)
- [React Router DOM](https://reacttraining.com/react-router/)
- [React Icons](https://react-icons.github.io/react-icons/#/)
- [React-Input-Mask](https://github.com/sanniassin/react-input-mask)
- [Styled Components](https://styled-components.com/)
- [Axios](https://github.com/axios/axios)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [EditorConfig](https://editorconfig.org/)

## 💻 Começando a utilizar o Projeto

Caso queira testar rotas do backend pode utilizar o `Insomnia` App dentro da pasta **backend** tem um arquivo .json para testar as rotas

### Necessário para rodar o projeto

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/) ou [npm](https://www.npmjs.com/)
- caso queira visualizar o banco de dados no MongoDB vou deixar link abaixo.
 - Link: mongodb+srv://carlos-reis:12345678carlos@cluster0.ntz2g.mongodb.net/test?authSource=admin&replicaSet=atlas-11hmbi-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true
- Para utilizar esse link é necessário o [MongoDB Compass community](https://www.mongodb.com/try/download/compass) colar o link na aba conexões, (deixei aberto a acessos a todos os IP's) depois de conectar o banco é 'Projeto'.

**Clonando o Projeto e acessando as pastas**

```bash
$ git clone https://github.com/Carlos-Reiss/LeveTec.git && cd LeveTec
```

**Proxima Etapa backend**

### Backend

```bash
# Entrar na pasta do backend e baixar dependências 
$ cd backend

# instalar dependências
$ yarn install ou npm install

# após finalizar o download iniciar o servidor
$ yarn dev:server ou npm run-script dev:server

# Iniciado servidor na porta 8080... caso falhe só mudar para outra porta importante também mudar no frontend
```

### Frontend

_Obs.: Antes de continuar é bom visualizar se a API está mesmo rodando_

```bash
# Entrar na pasta do frontend e baixar dependências 
$ cd frontend

# instalar dependências
$ yarn install ou npm install

# Caso tenha mudado a porta de acesso ao servidor deve mudar no frontend no arquivo 'src/services/api.ts'

# Inicializando Frontend
$ yarn start ou npm start
```


---

💻 by Carlos Antonio Reis 👋 [linkedin](https://www.linkedin.com/in/carlos-reis-b62893185/)