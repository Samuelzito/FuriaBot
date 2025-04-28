const { checkStreamStatus, helpMessage, aboutFuria } = require('./twitchAPI');
const commands = require('./intents/commands');

/**
 * Função para processar mensagens recebidas
 */
const handleMessage = async (message) => {
    const messageBody = message.body.toLowerCase();

    for (const command of commands) {
        const match = command.keywords.some(keyword => messageBody.includes(keyword));
        if (match) {
            if (command.response) return command.response;
            if (command.action) {
                switch (command.action) {
                    case 'helpMessage': return await helpMessage();
                    case 'aboutFuria': return await aboutFuria();
                    case 'checkStreamStatus': return await checkStreamStatus();
                    default: return 'Comando reconhecido, mas sem ação definida.';
                }
            }
        }
    }

    return 'Comando não reconhecido. Digite "ajuda" para ver os comandos disponíveis.';
};

module.exports = handleMessage;
