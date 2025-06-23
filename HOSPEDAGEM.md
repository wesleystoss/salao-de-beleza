# Guia de Hospedagem - Hostinger

Este guia irá ajudá-lo a hospedar o site do salão de beleza na Hostinger.

## 📋 Pré-requisitos

- Conta na Hostinger
- Domínio configurado
- Acesso ao painel de controle (hPanel)

## 🚀 Passo a Passo

### 1. Preparação dos Arquivos

Certifique-se de que todos os arquivos estão prontos:
- ✅ `index.html`
- ✅ `css/style.css`
- ✅ `js/script.js`
- ✅ `.htaccess`
- ✅ `sitemap.xml`
- ✅ `robots.txt`
- ✅ `manifest.json`
- ✅ `sw.js`
- ✅ Pasta `images/` com as imagens
- ✅ Pasta `videos/` com os vídeos

### 2. Acesso ao hPanel

1. Acesse [hpanel.hostinger.com](https://hpanel.hostinger.com)
2. Faça login com suas credenciais
3. Selecione seu domínio

### 3. Upload dos Arquivos

#### Opção A: File Manager (Recomendado)
1. No hPanel, clique em "File Manager"
2. Navegue até a pasta `public_html`
3. Faça upload de todos os arquivos e pastas
4. Certifique-se de que a estrutura está correta:
   ```
   public_html/
   ├── index.html
   ├── css/
   ├── js/
   ├── images/
   ├── videos/
   ├── .htaccess
   ├── sitemap.xml
   ├── robots.txt
   ├── manifest.json
   └── sw.js
   ```

#### Opção B: FTP
1. Use um cliente FTP (FileZilla, WinSCP)
2. Conecte-se usando as credenciais FTP da Hostinger
3. Faça upload para a pasta `public_html`

### 4. Configuração do Domínio

1. No hPanel, vá em "Domains"
2. Configure o domínio principal
3. Ative o SSL/HTTPS (gratuito na Hostinger)

### 5. Configurações de Email

1. No hPanel, vá em "Email"
2. Crie um email profissional: `contato@seudominio.com`
3. Configure no formulário do site

### 6. Otimizações de Performance

#### Compressão GZIP
O arquivo `.htaccess` já inclui compressão GZIP.

#### Cache de Navegador
O arquivo `.htaccess` já configura cache adequado.

#### CDN (Opcional)
1. No hPanel, vá em "Performance"
2. Ative o CDN da Hostinger

### 7. Configuração de SEO

#### Google Search Console
1. Acesse [search.google.com/search-console](https://search.google.com/search-console)
2. Adicione seu domínio
3. Verifique a propriedade
4. Envie o sitemap: `https://seudominio.com/sitemap.xml`

#### Google Analytics
1. Crie uma conta no Google Analytics
2. Substitua `GA_MEASUREMENT_ID` no arquivo `analytics.html`
3. Adicione o código no `<head>` do `index.html`

### 8. Testes

Após o upload, teste:

#### ✅ Funcionalidades Básicas
- [ ] Site carrega corretamente
- [ ] Navegação funciona
- [ ] Formulário de contato
- [ ] Botão WhatsApp
- [ ] Galeria de imagens

#### ✅ Responsividade
- [ ] Desktop
- [ ] Tablet
- [ ] Mobile

#### ✅ Performance
- [ ] Teste no Google PageSpeed Insights
- [ ] Teste no GTmetrix
- [ ] Teste no Pingdom

#### ✅ SEO
- [ ] Meta tags corretas
- [ ] Sitemap acessível
- [ ] Robots.txt funcionando
- [ ] URLs amigáveis

### 9. Configurações Avançadas

#### Backup Automático
1. No hPanel, vá em "Backups"
2. Configure backup automático

#### Monitoramento
1. Configure alertas de uptime
2. Monitore performance regularmente

#### Segurança
1. Ative proteção DDoS
2. Configure firewall
3. Mantenha backups regulares

## 🔧 Personalizações

### Alterar Informações do Salão
1. Edite `index.html`:
   - Nome do salão
   - Endereço
   - Telefone
   - Email
   - Horários

### Alterar Cores
1. Edite `css/style.css`:
   ```css
   :root {
     --primary-color: #d4af37;    /* Cor principal */
     --secondary-color: #2c3e50;  /* Cor secundária */
     --accent-color: #e74c3c;     /* Cor de destaque */
   }
   ```

### Adicionar Imagens
1. Faça upload das imagens para `images/`
2. Atualize os caminhos no HTML
3. Otimize as imagens (recomendado: WebP)

## 📞 Suporte

### Hostinger
- Chat ao vivo no hPanel
- Base de conhecimento
- Ticket de suporte

### Problemas Comuns

#### Site não carrega
- Verifique se os arquivos estão em `public_html`
- Verifique permissões de arquivo (644)
- Verifique permissões de pasta (755)

#### HTTPS não funciona
- Ative SSL no hPanel
- Aguarde propagação (pode levar algumas horas)

#### Formulário não envia
- Configure email no servidor
- Verifique configurações SMTP
- Teste com diferentes provedores de email

## 📈 Monitoramento

### Ferramentas Recomendadas
- Google Analytics
- Google Search Console
- Google PageSpeed Insights
- GTmetrix
- Pingdom

### Métricas Importantes
- Tempo de carregamento
- Taxa de rejeição
- Conversões
- Posicionamento no Google

## 🔄 Manutenção

### Atualizações Regulares
- Mantenha backups
- Monitore performance
- Atualize conteúdo
- Verifique links quebrados

### Backup
- Faça backup antes de alterações
- Mantenha versões anteriores
- Teste em ambiente local

---

**Dúvidas? Entre em contato com o suporte da Hostinger ou consulte a documentação oficial.** 