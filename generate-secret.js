const crypto = require('crypto');

// Gera uma chave secreta aleatória de 64 caracteres
const secret = crypto.randomBytes(32).toString('hex');

console.log('=== CHAVE SECRETA GERADA ===');
console.log(secret);
console.log('============================');
console.log('');
console.log('Copie esta chave e use como SESSION_SECRET no seu arquivo .env ou na Hostinger');
console.log('');
console.log('Exemplo de uso:');
console.log('SESSION_SECRET=' + secret); 