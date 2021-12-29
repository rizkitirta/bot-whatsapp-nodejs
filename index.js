const { create, Client } = require('@open-wa/wa-automate')

function start(client) {
    client.onMessage(async message => {

        if (message.chat.isGroup === false) {
            let pesan = message.body.toLowerCase()

            if (pesan === 'hi' || pesan === 'hai') {
                await client.sendText(message.from, '👋 Hello!');
            } 
            else if (pesan === 'p') {
                await client.sendText(message.from, `Halo ${message.sender.shortName} saya *tirtaBot* ada yg bisa dibantu?? `)
            } 
            else if (pesan === 'woy') {
                await client.sendText(message.from, 'apaan cuy gw *tirtaBot!*')
            } 
            else if (pesan.includes('mas')) {
                await client.sendText(message.from, "Iya knp,saya tirtaBot ada yg bisa dibantu??")
            } 
            else if (pesan.includes('tir')) {
                await client.sendText(message.from, `Iya knp ${message.sender.shortName},saya *tirtaBot* ada yg bisa dibantu??`)
            } 
            else if (pesan.includes('rizki') || pesan === 'ki') {
                await client.sendText(message.from, `Iya knp ${message.sender.shortName},saya *tirtaBot* ada yg bisa dibantu??`)
            } 
            else if (pesan.includes('nang') || pesan === 'bon') {
                await client.sendText(message.from, `Iya knp ${message.sender.shortName},saya *tirtaBot* ada yg bisa dibantu??`)
                await client.sendText(message.from, "Lain kali manggilnya Rizki atau Tirta yaa karena itu adalah nama saya | reply by *#tirtaBot*")
            } 
            else if (pesan.includes('assalamualaikum') || pesan.includes("assalamu'alaikum")) {
                await client.sendText(message.from, "wa'alaikumsalam,saya *tirtaBot* ada yang bisa dibantu??")
            } 
            else if (pesan.includes('bisa') || pesan.includes('iya') || pesan === 'ada') {
                await client.sendText(message.from, "oke,tunggu sebentar yaa nanti akan dibalas😉. | reply by *#tirtaBot*")
            } 
            else if (pesan.includes('halo') || pesan.includes('hallo')) {
                await client.sendText(message.from, "Iya halo jga👋,saya tirtaBot ada apa??")
            } 
            else if (pesan.includes('tolong')) {
                await client.sendText(message.from, "Oke mau minta tolong apa? | reply by *#tirtaBot*")
            } 
            else if (pesan.includes('bantuin')) {
                await client.sendText(message.from, "Oke mau minta bantuin apa? | reply by *#tirtaBot*")
                await client.sendText(message.from, "Nanti akan dibantuin jika ada yang bisa dibantu | reply by *#tirtaBot*")
            } 
            else if (pesan.includes('editin')) {
                await client.sendText(message.from, `Maaf yaa ${message.sender.shortName} untuk sekarang sepertinya belum ada waktu untuk mengedit, trimakasih..😉| reply by *#tirtaBot*`)
            } 
            else if (pesan.includes('sayang')) {
                await client.sendText(message.from, "Iya knp sayang?? | reply by *#tirtaBot*")
            } 
            else if (pesan.includes('lagi ngapain')) {
                await client.sendText(message.from, "Lagi mikirin kamu,heheh | reply by *#tirtaBot*")
            } 
            else if (pesan.includes('wkwk') || pesan.includes('awoekawoek')) {
                await client.sendText(message.from, "awoekawoek | reply by *#tirtaBot*")
            } 
            else if (pesan.includes('hahaha') || pesan.includes('hhh') || pesan.includes('hahaha')) {
                await client.sendText(message.from, "hahah.. | reply by *#tirtaBot*")
            } 
            else if (pesan.includes('cepat')) {
                await client.sendText(message.from, `Maaf ${message.sender.shortName} tidak bisa buru-buru karena saat ini sedang sibuk!🙏  | reply by *#tirtaBot*`)
            } 
            else if (pesan === 'oke' || pesan === 'ok' || pesan === 'okk' || pesan === 'okok' ||) {
                await client.sendText(message.from, `👍  | reply by *#tirtaBot*`)
            } 
            else if (pesan.includes('i love you')) {
                await client.sendText(message.from, `I love you to ${message.sender.shortName}😍❤  | reply by *#tirtaBot*`)
            } 

            //Profile
            else if (pesan === 'nama') {
                await client.sendText(message.from,  `Nama Anda: ${message.sender.shortName}, Panggilan: ${message.sender.shortName}`)
            } 
            else if (pesan === 'photo') {
                await client.sendText(message.from,  `Photo Anda: ${message.sender.profilePicThumbObj.img}`)
            } 
            else {
                await client.sendText(message.from, `Halo ${message.sender.shortName} saya *#tirtaBot*👋, silahkan tinggalkan pesan yang ingin disampaikan!!`)
                await client.sendText(message.from, 'Nanti akan segera dibalas | reply by *#tirtaBot*')
            }
        }
    })
}

create().then(start)