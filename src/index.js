const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const handleMessage = require('./bot/messageHandler');
const sendMessage = require('./bot/messageSender');

// Inicializa o cliente do WhatsApp
const client = new Client();

/**
 * Evento disparado para gerar o QR Code de autenticação
 */
client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
    console.log('📷 Escaneie o QR Code acima para autenticar.');
});

/**
 * Evento disparado quando o bot está pronto
 */
client.on('ready', () => {
    console.log('✅ Bot iniciado com sucesso e pronto para uso!');
});

/**
 * Evento disparado quando uma nova mensagem é recebida
 */
client.on('message', async (message) => {
    try {
        // 1. Ignorar mensagens enviadas por mim mesmo
        if (message.fromMe) {
            console.log('📛 Mensagem ignorada (enviada pelo próprio bot).');
            return;
        }

        // 2. Ignorar mensagens de grupo
        if (message.id.remote.includes('@g.us')) {
            console.log('📛 Mensagem ignorada (grupo detectado).');
            return;
        }

        // 3. Ignorar mensagens muito antigas (> 10 segundos)
        const agora = Math.floor(Date.now() / 1000); // Tempo atual em segundos
        if (agora - message.timestamp > 10) {
            console.log('⏳ Mensagem antiga detectada e ignorada.');
            return;
        }

        // 4. Ignorar mensagens vazias
        if (!message.body || message.body.trim() === '') {
            console.log('📭 Mensagem vazia detectada e ignorada.');
            return;
        }

        // 5. Exibir a mensagem recebida no terminal
        console.log(`📨 Mensagem recebida de ${message.from}: "${message.body}"`);

        // 6. Processar a mensagem com o handler
        const response = await handleMessage(message);

        // 7. Enviar a resposta (se existir)
        if (response) {
            await sendMessage(client, message, response);
            console.log(`✅ Resposta enviada para ${message.from}: "${response}"`);
        } else {
            console.log('ℹ️ Nenhuma resposta necessária.');
        }

    } catch (error) {
        console.error('❌ Erro ao processar a mensagem:', error);
    }
});

// Inicializar o cliente
client.initialize();
