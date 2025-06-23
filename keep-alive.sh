#!/bin/bash

# Script para manter o servidor Node.js rodando
echo "🚀 Iniciando servidor do Salão de Beleza..."

# Carregar NVM
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
nvm use 20

# Navegar para o diretório do projeto
cd /home/u474727782/public_html/portfolio/salao-de-beleza

# Verificar se o servidor já está rodando
if pgrep -f "node server.js" > /dev/null; then
    echo "⚠️  Servidor já está rodando. Parando processo anterior..."
    pkill -f "node server.js"
    sleep 2
fi

# Iniciar o servidor
echo "🌐 Iniciando servidor na porta 3000..."
echo "📱 Acesse: https://salao-de-beleza.wesleystoss.com.br"
echo "🔧 Logs aparecerão abaixo:"
echo "=================================="

# Iniciar o servidor em background
nohup node server.js > server.log 2>&1 &

# Mostrar os logs em tempo real
tail -f server.log 