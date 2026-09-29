const express = require('express');
const router = express.Router();
const { Produto, Categoria, Op } = require('../models');

// Lista todos ou pesquisa
router.get('/', async (req, res) => {
  const { busca } = req.query;
  let condition = {};
  
  if (busca) {
    condition = {
      nome: {
        [Op.like]: `%${busca}%`
      }
    };
  }

  const produtos = await Produto.findAll({
    where: condition,
    include: [{ model: Categoria, as: 'categoria' }]
  });
  const categorias = await Categoria.findAll();
  res.render('produtos/index', { produtos, categorias, busca });
});

// Desafio 2: Produtos por categoria
router.get('/categoria/:categoriaId', async (req, res) => {
  const { categoriaId } = req.params;
  const produtos = await Produto.findAll({
    where: { categoriaId },
    include: [{ model: Categoria, as: 'categoria' }]
  });
  const categorias = await Categoria.findAll();
  res.render('produtos/index', { produtos, categorias, busca: '' });
});

// Formulário de novo
router.get('/novo', async (req, res) => {
  const categorias = await Categoria.findAll();
  res.render('produtos/novo', { categorias });
});

// Salvar novo
router.post('/', async (req, res) => {
  await Produto.create(req.body);
  res.redirect('/produtos');
});

// Formulário de editar
router.get('/:id/editar', async (req, res) => {
  const produto = await Produto.findByPk(req.params.id);
  const categorias = await Categoria.findAll();
  res.render('produtos/editar', { produto, categorias });
});

// Salvar edição
router.post('/:id', async (req, res) => {
  await Produto.update(req.body, {
    where: { id: req.params.id }
  });
  res.redirect('/produtos');
});

// Deletar
router.post('/:id/deletar', async (req, res) => {
  await Produto.destroy({
    where: { id: req.params.id }
  });
  res.redirect('/produtos');
});

module.exports = router;
