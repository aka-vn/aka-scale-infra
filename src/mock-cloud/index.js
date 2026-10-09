const express = require('express');
const app = express();
app.use(express.json());

// ⚠️ MOCK CLOUD: Idempotent Upsert
app.put('/api/tickets/:id', (req, res) => {
  console.log(`[Cloud] Upsert ticket ${req.params.id}`);
  // TODO: Implement DB Upsert
  res.status(200).json({ status: 'success', id: req.params.id });
});

// Chaos API
app.post('/admin/chaos', (req, res) => {
  console.log('[Cloud] Chaos mode activated:', req.body);
  res.sendStatus(200);
});

app.listen(3001, () => console.log('[Cloud] Mock Server on http://localhost:3001'));
