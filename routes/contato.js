const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('contato', {
    title: 'Contato - Beleza & Estilo',
    page: 'contato'
  });
});

router.post('/', (req, res) => {
  const { nome, email, telefone, servico, mensagem } = req.body;
  
  // Validação básica
  if (!nome || !email || !telefone) {
    req.flash('error_msg', 'Por favor, preencha todos os campos obrigatórios.');
    return res.redirect('/contato');
  }
  
  // Aqui você pode adicionar lógica para enviar email ou salvar no banco
  // Por enquanto, apenas simulamos o sucesso
  
  console.log('Nova mensagem de contato:', {
    nome,
    email,
    telefone,
    servico,
    mensagem,
    data: new Date().toISOString()
  });
  
  req.flash('success_msg', 'Mensagem enviada com sucesso! Entraremos em contato em breve.');
  res.redirect('/contato');
});

module.exports = router; 