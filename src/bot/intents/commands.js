module.exports = [
    {
        name: 'saudacao',
        keywords: ['oi', 'ola', 'olá', 'iae', 'eae'],
        response: 'Fala FURIOSO(A)! 🎮 Se liga nas transmissões, a FURIA tá com tudo! 💥 Quer receber atualizações ao vivo? Responde com "Sim" ou "Não"! 🎮🔥'
    },
    {
        name: 'confirmarSim',
        keywords: ['sim'],
        response: 'Valeu! Agora você vai receber atualizações sempre que a FURIA estiver ao vivo! 🔥'
    },
    {
        name: 'confirmarNao',
        keywords: ['não'],
        response: 'Ok, você não vai receber mais notificações. Fica à vontade para chamar quando quiser saber de algo! 😉'
    },
    {
        name: 'ajuda',
        keywords: ['ajuda'],
        action: 'helpMessage'
    },
    {
        name: 'sobreTime',
        keywords: ['time', 'furia'],
        action: 'aboutFuria'
    },
    {
        name: 'statusStream',
        keywords: ['stream', 'ao vivo'],
        action: 'checkStreamStatus'
    },
    {
        name: 'assistir',
        keywords: ['assistir', 'onde assistir', 'aonde assistir', 'quero assistir'],
        response: '🎮 Você pode assistir ao vivo na nossa transmissão oficial na Twitch: [FURIA TV](https://www.twitch.tv/furiatv)'
    }
];
