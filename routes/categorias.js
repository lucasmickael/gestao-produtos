const express = require('express');
const router = express.Router();
const { Categoria } = require('../models');

// Lista categorias
router.get('/', async (req, res) => {
  const categorias = await Categoria.findAll();
  res.render('categorias/index', { categorias });
});

// Formulário de nova
router.get('/novo', (req, res) => {
  res.render('categorias/novo');
});

// Salvar nova
router.post('/', async (req, res) => {
  await Categoria.create(req.body);
  res.redirect('/categorias');
});

module.exports = router;
