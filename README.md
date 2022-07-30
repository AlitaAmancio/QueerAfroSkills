<div align="center">
  <img src="https://user-images.githubusercontent.com/89790349/181865965-d10e486b-7ee0-47e7-b4bb-703ba5f75eab.png" alt="Logo Queer Afro Skills"/>

</div>


# Queer Afro Skills

Projeto final que conclui o curso da @reprograma "Todas em Tech". Idealizado e desenvolvido pela aluna negra e trans Alita Amancio, da turma On15, com o apoio e supervisão da professora Hannah Freitas.

# Sobre o Projeto

O nome vem de uma junção de ideias associadas ao tema trabalhado. Queer, represantado pela letra "Q" na sigla LGBTQIA+, é um termo guarda-chuva que engloba todas as orientações sexuais e identidades de gênero fora do padrão heteronormativo e cisnormativo. Afro está relecionado ao cabelo negro, volumoso e encaracolado e Skills vem do inglês, habilidades. O projeto é direcionado especificamente a essa parcela da população, pessoas LGBTQIA+ negras. E essa API busca facilitar o acesso desses a oportunidades de estudo e profisisonalização.

A educação das comunidades negras e LGBTQIA+ no Brasil é uma situação que precisa ser abordada. Atualmente nosso país é o que mais mata pessoas homossexuais, transexuais e travestis no mundo e essa violência se inicia cedo, logo na escola. De acordo com a Pesquisa Nacional Sobre o Ambiente Educacional no Brasil 2016, realizada pela Associação Brasileira de Gays, Lésbicas, Bissexuais, Travestis e Transexuais (ABGLT), 68% dos alunos entrevistados (todos LGBTQIA+) sofreram preconceito por suas identidades de gênero e 73% por suas orientações sexuais. Essas agressões constantes, tanto as verbais como as físicas, tornam a escola mais um dos ambientes hostis que essas pessoas enfrentam diáriamente, pessoas que por vezes acabam desistindo de sua educação e consequentemente encontram maiores dificultades para ingressar no mercado de trabalho. Voltando nosso olhar para a comunidade negra o preconceito racial ainda é muito presente no país, se pessoas negras qualificadas não conseguem espaço no mercado de trabalho atuando em suas profissões de escolha as não qualificadas sofrem ainda mais com esse problema. Cabe a todos nós como sociedade solucionar este problema estrutural e eu, como aluna negra e transexual, idealizei uma das possíveis iniciativas.

# Descrição

O projeto é uma API REST que permite o cadastro do usuário de empresas e outros colaboradores como também das pessoas físicas em si. Além de criar os usuários é possível buscá-los na plataforma e, uma vez que autenticados, podem também fazer o update ou deletar suas informações. A outra parte da API possibilita criar e descrever as iniciativas de estudo e profissionalização, o objetivo é que essa API reúna e divulgue essas oportunidades com as informações necessárias para que os usuários as acessem. Trata-se de um CRUD completo conectado com a database MongoDB.

# Aprendizados

Desenvolvemos uma API Restful fundamentada no CRUD (Create, Read, Update, Delete), uma API na estrutura MVC, com autenticação e integrada ao banco de dados MongoDB. Foram realizados o deploy no GitHub, Heroku e Testes no Postman. Atrelado a isso colocamos em prática nossos conhecimentos no Git e seus comandos.

# Tecnologias Utilizadas

Durante a construção do projeto foram utilizadas as ferramentas e dependências listadas a seguir:

Ferramentas:
* [Javascript](https://www.javascript.com/)
* [Node.js](https://nodejs.org/en/)
* [MongoDBAtlas](https://www.mongodb.com/atlas/database)
* [VSCode](https://code.visualstudio.com/)
* [Postman](https://www.postman.com/)
* [Heroku](https://id.heroku.com/login)
* [GitHub](https://github.com/)

Dependencias:
* [accesscontrol](https://www.npmjs.com/package/accesscontrol)
* [bcrypt](https://www.npmjs.com/package/bcrypt)
* [cors](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/CORS)
* [dotenv-safe](https://www.npmjs.com/package/dotenv-safe)
* [express](https://expressjs.com/pt-br/)
* [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
* [mongoose](https://mongoosejs.com/)

Dependencias Dev:
* [jest](https://jestjs.io/pt-BR/)
* [nodemon](https://nodemon.io/)
* [supertest](https://www.npmjs.com/package/supertest)

OBSERVAÇÃO: As dependencias "accesscontrol", "jest" e "supertest" foram instaladas para funcionalidades futuras, mas no estado atual do projeto ainda não são utilizadas.

# Arquitetura MVC

```
 📁 QueerAfroSkills
   |
   |-  📁 src
   |    |
   |    |- 📁 config
   |         |- 📑 database.js
   |
   |    |- 📁 controllers
   |         |- 📑 companyUserAuthController.js
   |         |- 📑 companyUserController.js 
   |         |- 📑 initiativeController.js
   |         |- 📑 userAuthController.js
   |         |- 📑 userController.js
   |    |- 📁 middlewares
   |         |- 📑 auth.js
   |    |- 📁 models
   |         |- 📑 companySchema.js
   |         |- 📑 initiativeSchema.js
   |         |- 📑 userSchema.js
   |    |- 📁 routes
   |         |- 📑 companyUserRoutes.js
   |         |- 📑 initiativeRoutes.js
   |         |- 📑 userRoutes.js
   |    |- 📑 app.js
   |- 📑 .env
   |- 📑 .env.example
   |- 📑 .gitignore
   |- 📑 package-lock.json
   |- 📑 package.json
   |- 📑 Procfile
   |- 📑 README.md
   |- 📑 roles.js
   |- 📑 server.js
```

# Rotas

Rotas de Usuário Empresa
 
|     Metodo HTTP     |       Endpoint      |      Descrição      |
| ------------------- | ------------------- | ------------------- |
|         GET         |  /company/all       |  Retorna todas as empresas |
|         GET         |  /company/all/:id   |  Retorna uma empresa por Id |
|        POST         |  /company/create    |  Cria um novo usuário de empresa |
|        POST         |  /company/login     |  Loga um usuário de empresa |
|         PATCH       |  /company/update/:id |  Atualiza as informações de uma empresa pelo Id (Necessário autenticação) |
|        DELETE       |  /company/delete/:id |  Deleta um usuário de empresa pelo Id (Necessário autenticação) |

Rotas de Usuário (Pessoa Física)

|     Metodo HTTP     |       Endpoint      |      Descrição      |
| ------------------- | ------------------- | ------------------- |
|         GET         |  /users/all       |  Retorna todos os usuários |
|         GET         |  /users/all/:id   |  Retorna um usuários por Id |
|        POST         |  /users/create    |  Cria um novo usuário |
|        POST         |  /users/login     |  Loga um usuário |
|         PATCH       |  /users/update/:id |  Atualiza as informações de um usuário pelo Id (Necessário autenticação) |
|        DELETE       |  /users/delete/:id |  Deleta um usuário pelo Id (Necessário autenticação) |

Rotas de Iniciativa


|     Metodo HTTP     |       Endpoint      |      Descrição      |
| ------------------- | ------------------- | ------------------- |
|         GET         |  /initiative/all/       |  Retorna todas as iniciativas* |
|         GET         |  /initiative/:id   |  Retorna uma iniciativa por Id |
|        POST         |  /initiative/create    |  Cria uma iniciativa (Necessário autenticação) |
|         PATCH       |  /initiative/update/:id |  Atualiza uma iniciativa pelo Id (Necessário autenticação) |
|        DELETE       |  /initiative/delete/:id |  Deleta uma iniciativa pelo Id (Necessário autenticação) |

*OBSERVAÇÃO: A rota /initiative/all/  aceita 
