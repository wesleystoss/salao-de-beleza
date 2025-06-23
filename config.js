// Configurações do ambiente
const config = {
  // Configurações do Servidor
  PORT: process.env.PORT || 3000,
  NODE_ENV: process.env.NODE_ENV || 'production',

  // Configurações de Sessão
  SESSION_SECRET: process.env.SESSION_SECRET || 'f19e2cf92be65437befa273e36240603b386e2204787a0c31bbde5a8a513b4c4',

  // Configurações de Email (opcional)
  EMAIL_HOST: process.env.EMAIL_HOST || 'smtp.gmail.com',
  EMAIL_PORT: process.env.EMAIL_PORT || 587,
  EMAIL_USER: process.env.EMAIL_USER || '',
  EMAIL_PASS: process.env.EMAIL_PASS || '',

  // Configurações do Banco de Dados (opcional)
  DB_HOST: process.env.DB_HOST || 'localhost',
  DB_PORT: process.env.DB_PORT || 3306,
  DB_NAME: process.env.DB_NAME || 'salon_db',
  DB_USER: process.env.DB_USER || 'root',
  DB_PASS: process.env.DB_PASS || '',

  // Configurações de Upload (opcional)
  UPLOAD_PATH: process.env.UPLOAD_PATH || './public/uploads',
  MAX_FILE_SIZE: process.env.MAX_FILE_SIZE || 5242880
};

module.exports = config; 