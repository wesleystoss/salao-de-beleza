const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({
    message: 'Servidor funcionando!',
    timestamp: new Date().toISOString(),
    port: PORT,
    environment: process.env.NODE_ENV || 'development'
  });
});

app.get('/health', (req, res) => {
  res.json({
    status: 'OK',
    uptime: process.uptime(),
    memory: process.memoryUsage(),
    version: process.version
  });
});

app.listen(PORT, () => {
  console.log(`Servidor de teste rodando na porta ${PORT}`);
  console.log(`Acesse: http://localhost:${PORT}`);
}); 