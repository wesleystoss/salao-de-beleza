#!/bin/bash

echo "🚀 Iniciando servidor permanente do Salão de Beleza..."

# Carregar NVM
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
nvm use 20

# Navegar para o diretório do projeto
cd /home/u474727782/public_html/portfolio/salao-de-beleza

# Parar servidor anterior se estiver rodando
if pgrep -f "node server.js" > /dev/null; then
    echo "⚠️  Parando servidor anterior..."
    pkill -f "node server.js"
    sleep 3
fi

# Verificar se o Node.js está funcionando
if ! command -v node &> /dev/null; then
    echo "❌ Node.js não está disponível"
    exit 1
fi

echo "✅ Node.js encontrado: $(node --version)"

# Iniciar o servidor em background (permanente)
echo "🌐 Iniciando servidor na porta 3000..."
echo "📱 Acesse: https://salao-de-beleza.wesleystoss.com.br"
echo "📋 Logs salvos em: server.log"

# Iniciar com nohup para manter rodando mesmo após desconectar
nohup node server.js > server.log 2>&1 &

# Aguardar um pouco para o servidor inicializar
sleep 3

# Verificar se o servidor está rodando
if pgrep -f "node server.js" > /dev/null; then
    echo "✅ Servidor iniciado com sucesso!"
    echo "📋 PID: $(pgrep -f 'node server.js')"
    echo "🔧 Para ver os logs: tail -f server.log"
    echo "🛑 Para parar: pkill -f 'node server.js'"
else
    echo "❌ Erro ao iniciar o servidor"
    echo "📋 Verifique os logs: cat server.log"
fi 