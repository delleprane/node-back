# API de usuários

 A  API de usuários é capaz de cadastrar novos usuários, fazer edições/atualizações nas informações dos usuários, buscar usuário por nickname, deletar usuário e trazer todos os usuários.

 O código estará no ar para testes no Heroku.

[Heroku](https://test-fernanda.herokuapp.com/)

 Como banco de dados foi utilizado o MongoDB, será necessário definir as variáveis de ambiente no .env  para ter acesso ao banco de dados na sua máquina, como:
- Mongo_URL
- PORT

## Endpoint

|   Metodo   |  Endpoint  |    Playload     |   Response  |   Action |
| :---         |     :---:      |          ---: |      :---:      |          ---: |
| POST   | /auth/signup     | {name, lastname, nickname,bio, address}    |  {usuário}  | Cria um novo usuário  |
| Delete   | /perfil/:id      | {id do usuário}    |  -   |  Deleta o usuário |
| PATCH   | /perfil/:id      |  -   |  {usuário atualizado}   | Edita/Atualiza o usuário |
| POST   | /search   |  -   |  {filtro de usuário por nickname}   | Busca usuário por nickname |
| POST   | /search/name   |  -   |  {filtro de usuário por nome}   | Busca usuário por nome |
| GET   | /   |  -   |  {todos os usuários}   | Lista todos os usuários |


## Respostas

1. Respostas de sucesso (200)
2. Respostas de Erro (500)

## Instalação
$ npm install

## Rodar o código
$ npm run start
