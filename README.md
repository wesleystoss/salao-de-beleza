# 🎨 Site Institucional - Beleza & Estilo

Um site institucional moderno e responsivo para salões de beleza, desenvolvido com Node.js, Express e EJS.

## ✨ Características

- 🎨 Design moderno e elegante
- 📱 Totalmente responsivo
- ⚡ Performance otimizada
- 🔒 Segurança implementada
- 📧 Formulário de contato funcional
- 🗺️ Integração com Google Maps
- 📱 Botão WhatsApp flutuante
- 🎯 SEO otimizado
- 🚀 Pronto para produção

## 🛠️ Tecnologias Utilizadas

- **Backend:** Node.js, Express.js
- **Template Engine:** EJS
- **Frontend:** HTML5, CSS3, JavaScript
- **Estilização:** CSS Custom Properties, Flexbox, Grid
- **Ícones:** Font Awesome
- **Fontes:** Google Fonts (Playfair Display, Poppins)
- **Segurança:** Helmet, Rate Limiting, CORS
- **Performance:** Compression, Lazy Loading

## 📁 Estrutura do Projeto

```
institucional/
├── public/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── main.js
│   └── images/
├── views/
│   ├── partials/
│   │   ├── header.ejs
│   │   └── footer.ejs
│   ├── index.ejs
│   ├── contato.ejs
│   ├── servicos.ejs
│   ├── sobre.ejs
│   ├── 404.ejs
│   └── error.ejs
├── routes/
│   ├── index.js
│   ├── contato.js
│   ├── servicos.js
│   └── sobre.js
├── server.js
├── package.json
├── env.example
├── .gitignore
└── README.md
```

## 🚀 Instalação e Configuração

### Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn

### Passos para Instalação

1. **Clone o repositório**
   ```bash
   git clone <url-do-repositorio>
   cd institucional
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente**
   ```bash
   cp env.example .env
   ```
   
   Edite o arquivo `.env` com suas configurações:
   ```env
   PORT=3000
   NODE_ENV=development
   SESSION_SECRET=sua-chave-secreta-muito-segura-aqui
   ```

4. **Execute o projeto**
   ```bash
   # Desenvolvimento
   npm run dev
   
   # Produção
   npm start
   ```

5. **Acesse o site**
   ```
   http://localhost:3000
   ```

## 📋 Páginas Disponíveis

- **Home** (`/`) - Página inicial com hero section, serviços e depoimentos
- **Serviços** (`/servicos`) - Lista detalhada de todos os serviços
- **Sobre** (`/sobre`) - História da empresa, equipe e valores
- **Contato** (`/contato`) - Formulário de contato e informações
- **404** - Página de erro personalizada
- **500** - Página de erro interno

## 🎨 Personalização

### Cores
As cores principais podem ser alteradas no arquivo `public/css/style.css`:

```css
:root {
    --primary-color: #ff6b9d;
    --primary-dark: #e55a8a;
    --secondary-color: #f8f9fa;
    --accent-color: #ffd700;
    /* ... outras variáveis */
}
```

### Conteúdo
- **Serviços:** Edite o arquivo `routes/servicos.js`
- **Equipe:** Edite o arquivo `routes/sobre.js`
- **Informações de contato:** Edite os arquivos de template em `views/`

### Imagens
Substitua as imagens na pasta `public/images/`:
- `hero-bg.jpg` - Imagem de fundo da página inicial
- `salon-interior.jpg` - Imagem do interior do salão
- `salon-history.jpg` - Imagem para a seção história
- `team-1.jpg`, `team-2.jpg`, `team-3.jpg` - Fotos da equipe
- `testimonial-1.jpg`, `testimonial-2.jpg`, `testimonial-3.jpg` - Fotos dos depoimentos

## 🌐 Deploy na Hostinger

### 1. Preparação do Projeto
```bash
# Instale as dependências
npm install

# Configure para produção
NODE_ENV=production
```

### 2. Upload dos Arquivos
1. Acesse o painel da Hostinger
2. Vá para o File Manager
3. Navegue até a pasta `public_html`
4. Faça upload de todos os arquivos do projeto

### 3. Configuração do Node.js
1. No painel da Hostinger, vá para "Node.js"
2. Configure a versão do Node.js (16 ou superior)
3. Defina o arquivo de entrada como `server.js`
4. Configure as variáveis de ambiente

### 4. Configuração do Domínio
1. Configure o domínio para apontar para a pasta do projeto
2. Configure o SSL se necessário

### 5. Variáveis de Ambiente na Hostinger
Configure as seguintes variáveis no painel:
```env
NODE_ENV=production
PORT=3000
SESSION_SECRET=sua-chave-secreta-muito-segura-aqui
```

## 🔧 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev

# Produção
npm start

# Instalar dependências
npm run build
```

## 📱 Funcionalidades Mobile

- Menu hamburger responsivo
- Touch gestures
- Otimização para dispositivos móveis
- Botão WhatsApp flutuante

## 🔒 Segurança

- **Helmet.js** - Headers de segurança
- **Rate Limiting** - Proteção contra ataques
- **CORS** - Controle de acesso
- **Input Validation** - Validação de formulários
- **XSS Protection** - Proteção contra XSS

## 📈 Performance

- **Compression** - Compressão de resposta
- **Lazy Loading** - Carregamento sob demanda
- **Minificação** - Arquivos otimizados
- **Cache Headers** - Headers de cache
- **Image Optimization** - Imagens otimizadas

## 🎯 SEO

- Meta tags otimizadas
- Structured Data (Schema.org)
- Open Graph tags
- Twitter Cards
- Sitemap (pode ser adicionado)
- Robots.txt (pode ser adicionado)

## 📧 Funcionalidades de Contato

- Formulário de contato funcional
- Validação de campos
- Máscara de telefone
- Integração com WhatsApp
- Mapa do Google Maps

## 🔄 Próximas Melhorias

- [ ] Sistema de agendamento online
- [ ] Galeria de fotos
- [ ] Blog integrado
- [ ] Sistema de avaliações
- [ ] Painel administrativo
- [ ] Integração com redes sociais
- [ ] Newsletter
- [ ] Chat online

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 📞 Suporte

Para suporte, envie um email para `contato@seusite.com` ou abra uma issue no GitHub.

## 🙏 Agradecimentos

- Font Awesome pelos ícones
- Google Fonts pelas fontes
- Hostinger pela hospedagem
- Comunidade Node.js

---

**Desenvolvido com ❤️ para salões de beleza** 