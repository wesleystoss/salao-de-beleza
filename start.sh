#!/bin/bash

echo "🚀 Iniciando deploy do Salão de Beleza..."

# Verificar se o Node.js está instalado
if ! command -v node &> /dev/null; then
    echo "❌ Node.js não está instalado!"
    exit 1
fi

echo "✅ Node.js encontrado: $(node --version)"

# Instalar dependências
echo "📦 Instalando dependências..."
npm install

# Verificar se o arquivo .env existe
if [ ! -f .env ]; then
    echo "⚠️  Arquivo .env não encontrado. Criando com configurações padrão..."
    cat > .env << EOF
# Configurações do Servidor
PORT=3000
NODE_ENV=production

# Configurações de Sessão
SESSION_SECRET=f19e2cf92be65437befa273e36240603b386e2204787a0c31bbde5a8a513b4c4

# Configurações de Email (opcional)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=seu-email@gmail.com
EMAIL_PASS=sua-senha-de-app

# Configurações do Banco de Dados (opcional)
DB_HOST=localhost
DB_PORT=3306
DB_NAME=salon_db
DB_USER=root
DB_PASS=sua-senha

# Configurações de Upload (opcional)
UPLOAD_PATH=./public/uploads
MAX_FILE_SIZE=5242880
EOF
fi

# Iniciar o servidor
echo "🌐 Iniciando servidor na porta 3000..."
echo "📱 Acesse: http://localhost:3000"
echo "🌍 Ou: https://salao-de-beleza.wesleystoss.com.br"

npm start 