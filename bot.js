const mineflayer = require('mineflayer');

console.log('Starte Java-Join-Versuch für arschattack.mcsh.io...');

const bot = mineflayer.createBot({
  host: 'arschattack.mcsh.io',
  port: 25565,
  username: 'WakeUpBot',
  version: '1.21.1'
});

bot.on('spawn', () => {
  console.log('ERFOLG: Bot ist auf den Server gejoint! Server ist aufgewacht.');
  setTimeout(() => {
    bot.quit();
    process.exit(0);
  }, 2000);
});

bot.on('error', (err) => {
  console.log('Join-Signal gesendet (Server war im Standby/Reagiert):', err.message);
  process.exit(0);
});

setTimeout(() => {
  console.log('Timeout erreicht - Beende Bot.');
  process.exit(0);
}, 15000);
