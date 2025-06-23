#!/bin/bash

echo "🔍 Verificando Node.js na Hostinger..."

# Verificar diferentes possíveis localizações do Node.js
echo "📋 Verificando Node.js em diferentes locais:"

# Verificar se existe node no PATH
if command -v node &> /dev/null; then
    echo "✅ Node.js encontrado no PATH: $(which node)"
    echo "📦 Versão: $(node --version)"
else
    echo "❌ Node.js não encontrado no PATH"
fi

# Verificar se existe npm no PATH
if command -v npm &> /dev/null; then
    echo "✅ NPM encontrado no PATH: $(which npm)"
    echo "📦 Versão: $(npm --version)"
else
    echo "❌ NPM não encontrado no PATH"
fi

# Verificar diretórios comuns da Hostinger
echo ""
echo "🔍 Verificando diretórios comuns:"

POSSIBLE_PATHS=(
    "/opt/alt/php81/usr/bin/node"
    "/opt/alt/php82/usr/bin/node"
    "/opt/alt/php83/usr/bin/node"
    "/usr/local/bin/node"
    "/usr/bin/node"
    "/opt/nodejs/bin/node"
    "/opt/nodejs18/bin/node"
    "/opt/nodejs20/bin/node"
    "/opt/nodejs21/bin/node"
    "/opt/nodejs22/bin/node"
    "/opt/alt/nodejs18/usr/bin/node"
    "/opt/alt/nodejs20/usr/bin/node"
    "/opt/alt/nodejs21/usr/bin/node"
    "/opt/alt/nodejs22/usr/bin/node"
)

for path in "${POSSIBLE_PATHS[@]}"; do
    if [ -f "$path" ]; then
        echo "✅ Node.js encontrado em: $path"
        echo "📦 Versão: $($path --version)"
    fi
done

# Verificar variáveis de ambiente
echo ""
echo "🌍 Variáveis de ambiente:"
echo "PATH: $PATH"
echo "HOME: $HOME"
echo "USER: $USER"

# Verificar se existe algum gerenciador de versões
echo ""
echo "🔧 Verificando gerenciadores de versão:"

if command -v nvm &> /dev/null; then
    echo "✅ NVM encontrado: $(which nvm)"
    echo "📦 Versões disponíveis:"
    nvm list
elif [ -f "$HOME/.nvm/nvm.sh" ]; then
    echo "✅ NVM encontrado em: $HOME/.nvm/nvm.sh"
    source "$HOME/.nvm/nvm.sh"
    echo "📦 Versões disponíveis:"
    nvm list
else
    echo "❌ NVM não encontrado"
fi

if command -v n &> /dev/null; then
    echo "✅ N (gerenciador) encontrado: $(which n)"
    echo "📦 Versões disponíveis:"
    n list
else
    echo "❌ N (gerenciador) não encontrado"
fi

echo ""
echo "📋 Próximos passos:"
echo "1. Entre no painel da Hostinger"
echo "2. Vá em 'Hospedagem' → Seu domínio"
echo "3. Procure por 'Node.js' ou 'Aplicações'"
echo "4. Habilite o Node.js"
echo "5. Configure a versão (recomendo 18.x ou 20.x)" 