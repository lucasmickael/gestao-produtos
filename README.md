# Cadastro de Produtos — MVC

## Integrante
**Nome:** Lucas Mickael Silva Lima
**RM:** 20240370

## Como executar
1. Instale as dependências:
   ```bash
   npm install
   ```
2. Inicie o projeto:
   ```bash
   npm start
   ```
3. Acesse no navegador:
   `http://localhost:3000`

## Funcionalidades
* Cadastro de produtos
* Listagem de produtos
* Edição de produtos
* Exclusão de produtos
* Cadastro de categorias (Desafio 1)
* Produtos por categoria (Desafio 2)
* Pesquisa de produtos (Desafio Extra)

## Desafios Resolvidos

### Desafio 1: Criando categorias para os produtos
Criei o model `Categoria` na pasta `models/index.js` e adicionei as associações (`hasMany` e `belongsTo`) conectando `Categoria` e `Produto` usando a chave estrangeira `categoriaId`. Criei as rotas e views de categorias para permitir o cadastro. Atualizei os formulários de produtos para apresentar um `<select>` populado com as categorias do banco.

### Desafio 2: Listando produtos por categoria
Criei uma rota específica (`GET /produtos/categoria/:categoriaId`) que utiliza o `categoriaId` da URL (`req.params`) para filtrar e apresentar apenas os produtos pertencentes a essa categoria, renderizando a mesma tela principal de produtos (`index.ejs`).

### Desafio Extra: Pesquisa de produtos
Adicionei uma rota `GET /produtos` que verifica o valor do parâmetro de query string `busca`. Se preenchido, ele constrói um filtro na consulta do Sequelize utilizando o operador `Op.like` (`%termo%`), permitindo localizar produtos por parte do nome, reaproveitando a view de listagem com uma barra de busca.
