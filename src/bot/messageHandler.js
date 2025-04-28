const commands = require('./intents/commands');
const { checkStreamStatus, aboutFuria } = require('./twitchAPI');

async function handleMessage(message) {
    const lowerCaseBody = message.body.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim();

    let matchedCommand = null;

    // Primeiro tenta encontrar uma correspondência EXATA
    matchedCommand = commands.find(cmd =>
        cmd.keywords.some(keyword => lowerCaseBody === keyword.toLowerCase())
    );

    // Se não achar correspondência exata, tenta encontrar se CONTÉM a palavra-chave
    if (!matchedCommand) {
        matchedCommand = commands.find(cmd =>
            cmd.keywords.some(keyword => lowerCaseBody.includes(keyword.toLowerCase()))
        );
    }

    if (matchedCommand) {
        switch (matchedCommand.action) {
            case 'greet':
                return 'Fala FURIOSO(A)! 🎮 Se liga nas transmissões, a FURIA tá com tudo! 💥 Quer receber atualizações ao vivo? Responde com "Sim" ou "Não"! 🎮🔥';
            case 'help':
                return `
🚀 *Comandos disponíveis*:

1. *Qual stream está ao vivo?*
2. *Me fale sobre o time da FURIA!*
3. *Quais são os próximos torneios?*
4. *Onde posso assistir ao vivo?*

Número de atendimento ao cliente: +55 11 1234-5678. 🏆
                `;
            case 'check_stream':
                return await checkStreamStatus();
            case 'about_furia':
                return aboutFuria();
            case 'watch_stream':
                return '🎮 Você pode assistir ao vivo na nossa transmissão oficial na Twitch: [FURIA TV](https://www.twitch.tv/furiatv)';
            default:
                return 'Comando não reconhecido. Digite "ajuda" para ver os comandos disponíveis.';
        }
    }

    return 'Comando não reconhecido. Digite "ajuda" para ver os comandos disponíveis.';
}

module.exports = handleMessage;
