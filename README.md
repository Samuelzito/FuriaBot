# 🤖 FURIA WhatsApp Bot

Este é um chatbot automatizado para o WhatsApp que responde perguntas sobre o time FURIA Esports, incluindo transmissões ao vivo, próximos torneios, elenco atual, redes sociais e muito mais!

---

## 🚀 Funcionalidades

- Verifica se a FURIA está ao vivo na Twitch.
- Informa próximos torneios de CS2 e Kings League.
- Mostra redes sociais oficiais.
- Traz o elenco atual do time.
- Sistema de recompensas e ranking de fãs (planejado).
- Detecção de intenção com NLP (Natural Language Processing).
- Respostas automáticas para agradecimentos.

---

## 🧠 Tecnologias Usadas

- `Node.js`
- `whatsapp-web.js`
- `axios`
- `cheerio`
- `natural` (classificador Bayesiano para NLP)
- `qrcode-terminal`

---

## 📦 Instalação

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/furia-bot.git
cd furia-bot
```

2. Instale as dependências, uma por uma:

```bash
npm install whatsapp-web.js
npm install axios
npm install cheerio
npm install natural
npm install qrcode-terminal
```

---

## 🖥️ Como rodar

```bash
node src/index.js
```

Abra o WhatsApp, escaneie o QR code no terminal e pronto!

---

## 🔑 Como gerar as credenciais da Twitch

⚠️ As credenciais devem ser coladas diretamente no `twitchAPI.js`.  
Você precisa:

- `Client ID`
- `Access Token` (temporário)

### 🎥 Tutorial em vídeo:

📺 [Como criar credenciais da Twitch e obter o token](https://www.youtube.com/watch?v=esExQmpG03A)

### Passos:

1. Acesse: https://dev.twitch.tv/console/apps
2. Clique em "Register Your Application"
3. Use `http://localhost` como redirect URI
4. Copie o `Client ID`
5. Gere o token acessando:

```
https://id.twitch.tv/oauth2/authorize?client_id=SEU_CLIENT_ID&redirect_uri=http://localhost&response_type=token
```

6. Pegue o `access_token` da URL e cole no `twitchAPI.js`:

```js
const CLIENT_ID = 'SEU_CLIENT_ID';
const ACCESS_TOKEN = 'SEU_ACCESS_TOKEN';
```

---

## 💬 Comandos disponíveis

Exemplos que o bot entende:

- `Tem live hoje?`
- `Quais são os próximos torneios?`
- `Quem são os jogadores?`
- `Onde posso assistir?`
- `ajuda`
- `ranking`
- `prêmios`
- `redes sociais da furia`
- `oi`, `fala`, `bom dia` etc.

---

## ⚙️ Personalização

- Comandos → `intents/commands.js`
- NLP e classificação → `intents/intentClassifier.js`
- Regras e respostas → `messageHandler.js`
- Torneios → scraping no site [draft5.gg](https://draft5.gg)

---

## ⚠️ Aviso importante

O token da Twitch **expira após um tempo**.  
Para continuar verificando o status da live, **gere um novo token** sempre que necessário.

---

🖤 **Feito com orgulho para os fãs da FURIA!**
