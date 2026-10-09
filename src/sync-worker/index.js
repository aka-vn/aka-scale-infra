// ⚠️ SYNC WORKER: Reads local Outbox and pushes to Mock Cloud
console.log('[Sync] Worker started. Polling local Outbox...');
setInterval(() => {
  // TODO: Read SQLite Outbox, call axios.put to localhost:3001
}, 5000);
