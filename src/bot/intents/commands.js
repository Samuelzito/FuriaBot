const commands = [
    {
        action: 'greet',
        keywords: ['oi', 'ola', 'olá', 'iae', 'eae', 'opa', 'salve']
    },
    {
        action: 'help',
        keywords: ['ajuda', 'help', 'comandos', 'menu']
    },
    {
        action: 'about_furia',
        keywords: [
            'sobre o time',
            'time da furia',
            'jogadores',
            'quem joga',
            'equipe furia',
            'quem são'
        ]
    },
    {
        action: 'check_stream',
        keywords: [
            'stream',
            'ao vivo',
            'live',
            'qual stream',
            'quem está ao vivo',
            'assistir ao vivo'
        ]
    },
    {
        action: 'watch_stream',
        keywords: [
            'assistir',
            'onde assistir',
            'ver ao vivo',
            'ver live',
            'aonde posso assistir',
            'quero assistir'
        ]
    }
];

module.exports = commands;
