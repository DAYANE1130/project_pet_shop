# project_pet_shop - Em desenvolvimento
# API de Petshop - README

## Sobre o Projeto

Este projeto consiste em uma API desenvolvida em Node.js que tem como objetivo gerenciar animais de estimação de uma petshop. A API utiliza um banco de dados relacional SQL para armazenar informações sobre os animais, bem como os dados pessoais, de contato e de endereço dos seus respectivos donos. O projeto segue o padrão de arquitetura MVC, implementa validações de dados, realiza operações de CRUD (Create, Read, Update, Delete) e segue o padrão REST para a comunicação com o cliente.

## Tecnologias Utilizadas

- Node.js
- Express.js
- Banco de Dados SQL (por exemplo, PostgreSQL, MySQL)
- Outras dependências conforme necessário

## Estrutura do Projeto

O projeto segue a estrutura MVC (Model-View-Controller) para uma organização modular e escalável do código.

- `src/`
  - `controllers/`: Contém os controladores que lidam com as requisições HTTP e chamam os serviços apropriados.
  - `models/`: Define os modelos de dados que são usados para interagir com o banco de dados.
  - `routes/`: Define as rotas da API e associa cada rota ao controlador correspondente.
  - `services/`: Implementa a lógica de negócios e interage com o banco de dados através dos modelos.
  - `middlewares/`: Contém os validadores de dados para garantir a integridade das informações.
  - `server.js`: Arquivo principal que configura e inicia o servidor Express.

## Configuração do Banco de Dados

- O projeto utiliza um banco de dados SQL para armazenar os dados. Certifique-se de ter um banco de dados instalado e configurado em sua máquina.

- Crie um arquivo `.env` na raiz do projeto para configurar as variáveis de ambiente relacionadas ao banco de dados:

```env
DB_HOST=seu-host
DB_PORT=porta-do-banco
DB_USER=seu-usuario
DB_PASS=sua-senha
DB_NAME=nome-do-banco

Executando o Projeto
Siga os passos abaixo para configurar e iniciar uma API:

Clone o repositório:

git clone https://github.com/seu-usuario/nome-do-repositorio.git
cd nome-do-repositorio

Instale as dependências:
npm install

Iniciar o servidor:
npm start

A API estará rodando em http://localhost:3000.




Link documentação Swagger - http://localhost:3000/doc/
