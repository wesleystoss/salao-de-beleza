const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const servicos = [
    {
      categoria: 'Cabelo',
      items: [
        {
          nome: 'Corte Feminino',
          descricao: 'Cortes modernos e clássicos personalizados para seu tipo de rosto',
          preco: 'R$ 45 - R$ 80',
          duracao: '45 min',
          inclui: ['Lavagem', 'Corte', 'Finalização']
        },
        {
          nome: 'Corte Masculino',
          descricao: 'Cortes masculinos modernos e tradicionais',
          preco: 'R$ 35 - R$ 60',
          duracao: '30 min',
          inclui: ['Lavagem', 'Corte', 'Finalização']
        },
        {
          nome: 'Coloração',
          descricao: 'Técnicas avançadas de coloração e mechas',
          preco: 'R$ 120 - R$ 300',
          duracao: '2-3 horas',
          inclui: ['Análise capilar', 'Coloração', 'Tratamento pós-coloração']
        },
        {
          nome: 'Mechas/Luzes',
          descricao: 'Mechas naturais e luzes para dar movimento ao cabelo',
          preco: 'R$ 150 - R$ 400',
          duracao: '2-4 horas',
          inclui: ['Aplicação', 'Desenvolvimento', 'Finalização']
        }
      ]
    },
    {
      categoria: 'Tratamentos',
      items: [
        {
          nome: 'Hidratação',
          descricao: 'Tratamento profundo para cabelos ressecados',
          preco: 'R$ 80 - R$ 120',
          duracao: '1 hora',
          inclui: ['Aplicação', 'Tempo de ação', 'Finalização']
        },
        {
          nome: 'Reconstrução',
          descricao: 'Reparação profunda para cabelos danificados',
          preco: 'R$ 100 - R$ 150',
          duracao: '1.5 horas',
          inclui: ['Análise', 'Aplicação', 'Tempo de ação']
        },
        {
          nome: 'Selagem',
          descricao: 'Selagem com queratina para cabelos lisos e sedosos',
          preco: 'R$ 200 - R$ 350',
          duracao: '2-3 horas',
          inclui: ['Lavagem', 'Aplicação', 'Chapinha']
        }
      ]
    },
    {
      categoria: 'Maquiagem',
      items: [
        {
          nome: 'Maquiagem Social',
          descricao: 'Maquiagem para eventos e ocasiões especiais',
          preco: 'R$ 60 - R$ 100',
          duracao: '45 min',
          inclui: ['Base', 'Sombra', 'Batom', 'Finalização']
        },
        {
          nome: 'Maquiagem Noiva',
          descricao: 'Maquiagem especial para o grande dia',
          preco: 'R$ 150 - R$ 250',
          duracao: '1.5 horas',
          inclui: ['Teste', 'Maquiagem completa', 'Fixador']
        }
      ]
    }
  ];

  res.render('servicos', {
    title: 'Nossos Serviços - Beleza & Estilo',
    page: 'servicos',
    servicos
  });
});

module.exports = router; 