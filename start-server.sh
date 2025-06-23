#!/bin/bash

echo "🚀 Iniciando servidor do Salão de Beleza..."

# Carregar NVM corretamente
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# Verificar se o NVM carregou
if ! command -v nvm &> /dev/null; then
    echo "❌ NVM não foi carregado corretamente"
    echo "Tentando carregar manualmente..."
    source "$HOME/.nvm/nvm.sh"
fi

# Verificar se o Node.js 20 está instalado
if ! nvm list | grep -q "v20"; then
    echo "📦 Instalando Node.js 20..."
    nvm install 20
fi

# Usar Node.js 20
echo "🔧 Usando Node.js 20..."
nvm use 20

# Verificar se o Node.js está funcionando
if ! command -v node &> /dev/null; then
    echo "❌ Node.js não está disponível"
    exit 1
fi

echo "✅ Node.js encontrado: $(node --version)"
echo "✅ NPM encontrado: $(npm --version)"

# Navegar para o diretório do projeto
cd /home/u474727782/public_html/portfolio/salao-de-beleza

# Parar servidor anterior se estiver rodando
if pgrep -f "node server.js" > /dev/null; then
    echo "⚠️  Parando servidor anterior..."
    pkill -f "node server.js"
    sleep 2
fi

# Instalar dependências se necessário
if [ ! -d "node_modules" ]; then
    echo "📦 Instalando dependências..."
    npm install
fi

# Iniciar o servidor
echo "🌐 Iniciando servidor na porta 3000..."
echo "📱 Acesse: https://salao-de-beleza.wesleystoss.com.br"
echo "🔧 Logs aparecerão abaixo:"
echo "=================================="

# Iniciar o servidor
node server.js 