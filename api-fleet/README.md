# Api-fleet

- NodeJS v5.2.0+

## Como executar

Faça o clone/download deste repositório, execute `npm install` e `npx json-server db.json`. A API fica localizada em `http://localhost:3000`.

## Rotas

Todas as requisições de POST para esta API devem conter o header `Content-Type: application/json`.
Esta API contém as seguintes rotas:

- `GET /veiculos` : lista os veículos cadastrados
- `POST /veiculos` : cria um novo veiculo
- `DELETE /veiculos/:id` : apaga o veiculo com ID :id

- `GET /user` : lista os usuários cadastrados
- `POST /user` : cria um novo usuário
- `DELETE /user/:id` : apaga o usuário com ID :id

Para filtrar os veiculos em `GET /veiculos`, é possível:

- fazer uma busca global utilizando a query string `?q=:busca`;
- fazer uma busca por placas individuais utilizando a query string `?placa=:busca`.
