#!/bin/bash

echo "🔍 Monitorando servidor do Salão de Beleza..."

# Carregar NVM
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
nvm use 20

# Navegar para o diretório do projeto
cd /home/u474727782/public_html/portfolio/salao-de-beleza

# Loop infinito para monitorar
while true; do
    # Verificar se o servidor está rodando
    if ! pgrep -f "node server.js" > /dev/null; then
        echo "$(date): ❌ Servidor parou. Reiniciando..."
        
        # Iniciar o servidor novamente
        nohup node server.js > server.log 2>&1 &
        
        # Aguardar um pouco
        sleep 5
        
        # Verificar se reiniciou com sucesso
        if pgrep -f "node server.js" > /dev/null; then
            echo "$(date): ✅ Servidor reiniciado com sucesso!"
        else
            echo "$(date): ❌ Erro ao reiniciar o servidor"
        fi
    else
        echo "$(date): ✅ Servidor rodando normalmente"
    fi
    
    # Aguardar 30 segundos antes de verificar novamente
    sleep 30
done 