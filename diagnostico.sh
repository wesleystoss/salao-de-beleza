#!/bin/bash

echo "🔍 DIAGNÓSTICO DO SISTEMA"
echo "=========================="

# Verificar se estamos no diretório correto
echo "📁 Diretório atual: $(pwd)"

# Verificar se o NVM está disponível
echo ""
echo "🔧 Verificando NVM..."
if [ -f "$HOME/.nvm/nvm.sh" ]; then
    echo "✅ NVM encontrado em: $HOME/.nvm/nvm.sh"
    export NVM_DIR="$HOME/.nvm"
    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
    
    if command -v nvm &> /dev/null; then
        echo "✅ NVM carregado com sucesso"
        echo "📦 Versão do NVM: $(nvm --version)"
    else
        echo "❌ NVM não conseguiu carregar"
    fi
else
    echo "❌ NVM não encontrado"
fi

# Verificar Node.js
echo ""
echo "🟢 Verificando Node.js..."
if command -v node &> /dev/null; then
    echo "✅ Node.js encontrado: $(node --version)"
else
    echo "❌ Node.js não encontrado no PATH"
fi

# Verificar NPM
echo ""
echo "📦 Verificando NPM..."
if command -v npm &> /dev/null; then
    echo "✅ NPM encontrado: $(npm --version)"
else
    echo "❌ NPM não encontrado no PATH"
fi

# Verificar se o servidor está rodando
echo ""
echo "🌐 Verificando servidor..."
if pgrep -f "node server.js" > /dev/null; then
    echo "✅ Servidor Node.js está rodando"
    echo "📋 Processos encontrados:"
    ps aux | grep "node server.js" | grep -v grep
else
    echo "❌ Servidor Node.js não está rodando"
fi

# Verificar se a porta 3000 está em uso
echo ""
echo "🔌 Verificando porta 3000..."
if netstat -tlnp 2>/dev/null | grep :3000 > /dev/null; then
    echo "✅ Porta 3000 está em uso"
    netstat -tlnp 2>/dev/null | grep :3000
else
    echo "❌ Porta 3000 não está em uso"
fi

# Verificar arquivos do projeto
echo ""
echo "📁 Verificando arquivos do projeto..."
if [ -f "server.js" ]; then
    echo "✅ server.js encontrado"
else
    echo "❌ server.js não encontrado"
fi

if [ -f "package.json" ]; then
    echo "✅ package.json encontrado"
else
    echo "❌ package.json não encontrado"
fi

if [ -d "node_modules" ]; then
    echo "✅ node_modules encontrado"
else
    echo "❌ node_modules não encontrado"
fi

if [ -f ".env" ]; then
    echo "✅ .env encontrado"
else
    echo "❌ .env não encontrado"
fi

echo ""
echo "🎯 PRÓXIMOS PASSOS:"
echo "1. Se Node.js não foi encontrado, execute: nvm install 20 && nvm use 20"
echo "2. Se servidor não está rodando, execute: npm start"
echo "3. Se node_modules não existe, execute: npm install"
echo "4. Teste o site: https://salao-de-beleza.wesleystoss.com.br" 