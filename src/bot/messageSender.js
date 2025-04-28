async function sendMessage(client, message, response) {
    if (!response) return;
    await message.reply(response);
}

module.exports = sendMessage;
