const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', {
    title: 'Beleza & Estilo - Seu Salão de Beleza',
    page: 'home',
    hero: {
      title: 'Transforme sua beleza',
      subtitle: 'Descubra o poder de se sentir incrível',
      cta: 'Agende seu horário'
    },
    servicos: [
      {
        nome: 'Corte Feminino',
        descricao: 'Cortes modernos e clássicos para todos os tipos de cabelo',
        icone: 'scissors',
        preco: 'A partir de R$ 45'
      },
      {
        nome: 'Coloração',
        descricao: 'Técnicas avançadas de coloração e mechas',
        icone: 'palette',
        preco: 'A partir de R$ 120'
      },
      {
        nome: 'Tratamentos',
        descricao: 'Hidratação, reconstrução e selagem capilar',
        icone: 'spa',
        preco: 'A partir de R$ 80'
      },
      {
        nome: 'Maquiagem',
        descricao: 'Maquiagem para eventos especiais e dia a dia',
        icone: 'brush',
        preco: 'A partir de R$ 60'
      }
    ],
    depoimentos: [
      {
        nome: 'Maria Silva',
        texto: 'Melhor experiência que já tive em um salão! Profissionais incríveis.',
        foto: '/images/testimonial-1.jpg'
      },
      {
        nome: 'Ana Costa',
        texto: 'Resultado surpreendente! Meu cabelo nunca esteve tão bonito.',
        foto: '/images/testimonial-2.jpg'
      },
      {
        nome: 'Juliana Santos',
        texto: 'Ambiente acolhedor e atendimento de primeira qualidade.',
        foto: '/images/testimonial-3.jpg'
      }
    ]
  });
});

module.exports = router; 