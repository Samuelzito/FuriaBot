const axios = require('axios');

const CLIENT_ID = 'vvn5j2kgpwj6a3ydfldb9q3mt3cq04';
const ACCESS_TOKEN = 'shjmhgyoqi2i5mk7des3wifnty58bp';

async function checkStreamStatus() {
    try {
        const response = await axios.get('https://api.twitch.tv/helix/streams', {
            headers: {
                'Client-ID': CLIENT_ID,
                'Authorization': `Bearer ${ACCESS_TOKEN}`
            },
            params: {
                'user_login': 'furiatv'
            }
        });

        if (response.data.data.length > 0) {
            return '🔥 A FURIA está AO VIVO na Twitch! Vamos acompanhar, FURIOSO(A)? 🔥';
        } else {
            return '😞 A FURIA não está ao vivo no momento. Fique ligado!';
        }
    } catch (error) {
        console.error('Erro ao verificar o status da Twitch:', error);
        return 'Não foi possível verificar o status da stream.';
    }
}

async function helpMessage() {
    return `
🚀 Comandos disponíveis:

1. *Qual stream está ao vivo?*
2. *Me fale sobre o time da FURIA!*
3. *Quais são os próximos torneios?*
4. *Onde posso assistir ao vivo?*

Número de atendimento ao cliente: +55 11 1234-5678. 🏆
    `;
}

async function aboutFuria() {
    return `
💥 A FURIA é composta por grandes jogadores:

- Kaike "KSCERATO" Cerato
- Yuri "yuurih" Santos
- André "drop" Abreu
- Marcelo "chelo" Cespedes
- Gabriel "FalleN" Toledo

#GoFuria 🖤
    `;
}

module.exports = { checkStreamStatus, helpMessage, aboutFuria };
