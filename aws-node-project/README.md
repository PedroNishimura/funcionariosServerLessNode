API de CRUD de funcionários utilizando Node.js, Express.js, Serverless, Lambda, DynamoDB

EndPoints:
https://oa17le9wkg.execute-api.us-east-1.amazonaws.com/dev/funcionario/consultar -> Lista de funcionários (GET)
https://oa17le9wkg.execute-api.us-east-1.amazonaws.com/dev/funcionario/cadastrar -> Cadastrar um funcionário (POST)
https://oa17le9wkg.execute-api.us-east-1.amazonaws.com/dev/funcionario/atualizar/:id -> Atualizar um funcionário (PUT)
https://oa17le9wkg.execute-api.us-east-1.amazonaws.com/dev/funcionario/deletar/:id -> Excluir um funcionário (DELETE)

Recursos NPM utilizados:
aws-sdk;
aws-serverless-express;
body-parser;
cors;
express;
uuid

Tutorial:
Acessar os endpoints pelo Postman ou serviços parecidos, com os respectivos métodos HTTP.

Exemplos de JSON para testar a API:

https://oa17le9wkg.execute-api.us-east-1.amazonaws.com/dev/funcionario/consultar
consultar -> {}

https://oa17le9wkg.execute-api.us-east-1.amazonaws.com/dev/funcionario/cadastrar
cadastrar -> {
  "nome": "David",
  "cargo": "Adm",
  "idade": 42
}

https://oa17le9wkg.execute-api.us-east-1.amazonaws.com/dev/funcionario/atualizar/123 -> '123' é o id do usuário
atualizar -> {
  "nome": "Pedro",
  "cargo": "Adm",
  "idade": 30
}

https://oa17le9wkg.execute-api.us-east-1.amazonaws.com/dev/funcionario/deletar/123 -> '123' é o id do usuário
deletar -> {}