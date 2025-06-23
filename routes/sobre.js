const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const equipe = [
    {
      nome: 'Ana Paula Silva',
      cargo: 'Proprietária e Cabeleireira',
      especialidade: 'Coloração e Cortes',
      experiencia: '15 anos',
      foto: '/images/team-1.jpg',
      descricao: 'Especialista em técnicas modernas de coloração e cortes personalizados.'
    },
    {
      nome: 'Maria Santos',
      cargo: 'Cabeleireira Senior',
      especialidade: 'Tratamentos Capilares',
      experiencia: '12 anos',
      foto: '/images/team-2.jpg',
      descricao: 'Especialista em tratamentos avançados e reconstrução capilar.'
    },
    {
      nome: 'Juliana Costa',
      cargo: 'Maquiadora',
      especialidade: 'Maquiagem Social e Noiva',
      experiencia: '8 anos',
      foto: '/images/team-3.jpg',
      descricao: 'Especialista em maquiagem para eventos especiais e noivas.'
    }
  ];

  const valores = [
    {
      titulo: 'Qualidade',
      descricao: 'Utilizamos apenas produtos de alta qualidade e técnicas modernas.'
    },
    {
      titulo: 'Atendimento',
      descricao: 'Nosso foco é proporcionar uma experiência única e personalizada.'
    },
    {
      titulo: 'Inovação',
      descricao: 'Sempre atualizados com as últimas tendências e técnicas do mercado.'
    },
    {
      titulo: 'Confiança',
      descricao: 'Construímos relacionamentos duradouros baseados na confiança.'
    }
  ];

  res.render('sobre', {
    title: 'Sobre Nós - Beleza & Estilo',
    page: 'sobre',
    equipe,
    valores,
    historia: {
      titulo: 'Nossa História',
      texto: 'Fundado em 2010, o Beleza & Estilo nasceu da paixão por transformar e realçar a beleza natural de cada cliente. Ao longo de mais de uma década, construímos uma reputação sólida baseada na excelência técnica, atendimento personalizado e resultados surpreendentes.',
      missao: 'Proporcionar experiências únicas de beleza, utilizando técnicas modernas e produtos de qualidade, para que cada cliente se sinta confiante e especial.',
      visao: 'Ser referência em beleza e bem-estar, reconhecida pela excelência técnica e inovação constante no mercado.'
    }
  });
});

module.exports = router; 