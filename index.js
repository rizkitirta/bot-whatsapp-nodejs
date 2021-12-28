const { create, Client } = require('@open-wa/wa-automate');

// or
// import { create, Client } from '@open-wa/wa-automate';


function start(client) {
    client.onMessage(async message => {
        // if (message.body === 'Hi') {
        //   await client.sendText(message.from, '👋 Hello!');
        // await client.reply(chatId, "Hello", );
        // }

        let pesan = message.body.toLowerCase()
        let chatId = message.chatId
        console.log(message);
        switch (pesan) {
            case 'p':
                await client.sendText(message.from, `Halo ${sender.shortName} saya tirtaBot ada yg bisa dibantu?? `);
                break;
            case 'woy':
                await client.sendText(message.from, 'apaan cuy gw tirtaBot!');
                break;
            case 'assalamualaikum':
                await client.sendText(message.from, "wa'alaikumsalam");
                break;

            case 'mas tirta':
                await client.sendText(message.from, "Iya knp,saya tirtaBot ada yg bisa dibantu??");
                break;

            case 'halo':
                await client.sendText(message.from, "Iya hi knp?? sy tirtaBot");
                break;

            default:
                await client.sendText(message.from, `Halo ${sender.shortName} saya tirtaBot👋, silahkan tinggalkan pesan yang ingin disampaikan!!`);
                break;
        }
    });
}

create().then(start);