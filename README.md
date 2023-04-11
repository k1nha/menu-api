<h1 align="center" id="title">Api</h1>

<p align="center" id="description">Uma api criado com TypeScript e MySQL.</p>

<h2>Índice:</h2>

* [Etapas de Instalação](#etapas-de-instalacao)
* [Pré-requisito](#pre-requisitos)
* [Sobre o Projeto](#sobre-o-projeto)
* [Constrído com](#construido-com)

  
<h2 id="etapas-de-instalacao">🛠️ Etapas de Instalação:</h2>

<p>1. Clonar o repositóro em sua maquina e instalar as depedências do projeto:</p>

```bash
npm install
```

<p>2. Instalar a imagem do MySQL e subir em um container docker:</p>

```bash
docker run --name 'your_container' -e MYSQL_ROOT_PASSWORD='your_password' -p 'your_port:3306' mysql
```

<p>3. Criar o arquivo .env na pasta raíz do projeto usando o .env.example</p>

```bash
DATABASE_URL="mysql://mysql:your_username@your_password:your_port/menu"
```

<p>4. Gerar as tabelas no banco de dados e por último rodar o servidor</p>

```bash
npx prisma migrate dev --init
npm run server
```

<h2 id="pre-requisitos">⚙️ Pré-requisitos:</h2>
<p>Para rodar o projeto em sua máquina, é necessário:

* npm (node)
* Docker
</p>

<h2 title="sobre-o-projeto">📑 Sobre o projeto:</h2>
<p>Este projeto é um CRUD para cardápio de um restaurante, onde podemos consultar, apagar, criar os itens no cardápio.

** CRUD (Create Read Update e Delete em Inglês) é uma sigla utilizada para se referir às quatro operações básicas realizadas em banco de dados relacionais que são consulta, inclusão, alteração e exclusão dos registros. </p>
  
  
<h2 title="construido-com">💻 Construído com:</h2>

Tecnologias usadas no projeto:

*   Express
*   Node.js
*   MySQL em Docker
*   Prisma.io



