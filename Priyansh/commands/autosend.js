const schedule = require('node-schedule');
const moment = require('moment-timezone');
const chalk = require('chalk');

module.exports.config = {
    name: 'autosent',
    version: '10.0.0',
    hasPermssion: 0,
    credits: '𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭',
    description: 'Set Karne Ke Bad Automatically Msg Send Karega',
    commandCategory: 'group messenger',
    usages: '[]',
    cooldowns: 3
};

const messages = [
    { time: '12:00 AM', message: '*♥ ⃟ ⃟ ⃟  ╼╼╾╾𖣔╼╾╾╼  ⃟ ⃟ ⃟♥*               Can I follow you? Because I was always told by my parents to follow my dreams🌚                  *♥ ⃟ ⃟ ⃟  ╼╼╾╾𖣔╼╾╾╼  ⃟ ⃟ ⃟♥*' },
    { time: '1:00 AM', message: '❥❥━──➸➽❂❥❥━──➸➽                𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 12:00 𝗔𝐌 ⏳          𝐀𝐥𝐰𝐚𝐲𝐬 𝐛𝐞 𝐡𝐚𝐩𝐩𝐲 𝐢𝐧 𝐲𝐨𝐮𝐫 𝐥𝐢𝐟𝐞 good morning 😘  🥀              ❥❥━──➸➽❂❥❥━──➸➽' },
    { time: '2:00 AM', message: '❣️━━• 💟 •━━❣️                𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 1:00 A𝐌 ⏳             𝖨 𝗁𝗈𝗉𝖾 𝖾𝗏𝖾𝗋𝗒𝗈𝗇𝖾 𝖺𝗌𝗅𝖾𝖾𝗉                ❣️━━• 💟 •━━❣️' },
    { time: '3:00 AM', message: '♦️━━ •💚• ━━♦️                𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 2:00 A𝐌 ⏳            𝘐𝘵𝘴 2𝘈𝘔 𝘢𝘯𝘥 𝘪 𝘢𝘮 𝘭𝘺𝘪𝘯𝘨 𝘪𝘯 𝘣𝘦𝘥 𝘸𝘪𝘵𝘩 𝘯𝘰𝘵𝘩𝘪𝘯𝘨 𝘣𝘶𝘵 𝘵𝘩𝘦 𝘪𝘥𝘦𝘢 𝘰𝘧 𝘺𝘰𝘶 𝘢𝘯𝘥 𝘪😊                       ♦️━━ •💚• ━━♦️' },
    { time: '4:00 AM', message: '◈•┼┼ •🌹• ┼┼•◈                𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 3:00 A𝐌 ⏳             Ｉ ａｍ ｊｕｓｔ ｃｈｅｃｋｉｎｇ ｗｈｏｓ ａｗａｋｅ 🌃                 ◈•┼┼ •🌹• ┼┼•◈' },
    { time: '5:00 AM', message: '❣☬●▬▬๑♦️๑▬▬●☬❣                𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 4:00 A𝐌 ⏳            हेल्लो everyone good morning🤣                       ❣☬●▬▬๑♦️๑▬▬●☬' },
    { time: '6:00 AM', message: '🟠▦═══ 💜 ═══▦🟠                𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 5:00 𝗔𝐌 ⏳  𝙃𝙚𝙡𝙡𝙤 𝙞 𝙩𝙝𝙞𝙣𝙠 𝙚𝙫𝙚𝙧𝙮𝙤𝙣𝙚 𝙢𝙪𝙨𝙩 𝙝𝙖𝙫𝙚 𝙬𝙤𝙠𝙚𝙣 𝙪𝙥 🥀                     🟠▦═══ 💜 ═══▦🟠' },
    { time: '7:00 AM', message: '━━❖❖ ♥ ❖❖━━                𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 6:00 A𝐌 ⏳            good morning 𝘛𝘩𝘦𝘳𝘦 𝘢𝘳𝘦 𝘴𝘰𝘮𝘦 𝘴𝘱𝘦𝘤𝘪𝘢𝘭 𝘱𝘦𝘰𝘱𝘭𝘦 𝘪𝘯 𝘭𝘪𝘧𝘦 𝘸𝘩𝘰𝘮 𝘸𝘦 𝘤𝘢𝘯𝘯𝘰𝘵 𝘧𝘰𝘳𝘨𝘦𝘵 𝘦𝘷𝘦𝘯 𝘪𝘧 𝘸𝘦 𝘸𝘢𝘯𝘵 𝘵𝘰, 𝘢𝘴 𝘺𝘰𝘶 𝘢𝘳𝘦 𝘧𝘰𝘳 𝘮𝘦.🌅                     ━━❖❖ ♥ ❖❖━━' },
    { time: '8:00 AM', message: '❣☬❣●▬▬๑۩۩๑▬▬●❣☬❣                𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 7:00 A𝐌 ⏳           𝗪𝗮𝗸𝗲𝘂𝗽 𝗲𝗮𝗿𝗹𝘆 𝗱𝗼𝗻𝘁 𝗯𝗲 𝗹𝗮𝘇𝘆.                  ❣☬❣●▬▬๑۩۩๑▬▬●❣☬❣' },
    { time: '9:00 AM', message: '♥️━━❖ ❖❁❖ ❖━━♥️                𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 8:00 A𝐌 ⏳            G̐̈o̐̈t̐̈ u̐̈p̐̈ m̐̈y̐̈ p̐̈r̐̈e̐̈s̐̈i̐̈d̐̈e̐̈n̐̈t̐̈?😵                ♥️━━❖ ❖❁❖ ❖━━♥️' },
    { time: '10:00 AM', message: '~~<💚>~~ ❤️ ~~<💚>~~                𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 9:00 A𝐌 ⏳           𝐺𝑜 𝑒𝑎𝑡 𝑦𝑜𝑢𝑟 𝑙𝑢𝑛𝑐ℎ🙈                ~~<💚>~~ ❤️ ~~<💚>~~' },
    { time: '11:00 PM', message: '★・🔰・★・🔰・★               𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 10:00 A𝐌 ⏳           𝘿𝙤𝙣𝙩 𝙢𝙖𝙠𝙚 𝙣𝙤𝙞𝙨𝙚🙀               ★・🔰・★・🔰・★' },
    { time: '12:00 PM', message: '↤↤❤↤↤ 🔰 ↦↦❤↦↦                𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 11:00 A𝐌 ⏳           𝗢𝗶 𝗻𝗼𝘄 𝗽𝗹𝗮𝗻 𝗳𝗼𝗿 𝗱𝗿𝗶𝗻𝗸𝘀😻                ↤↤❤↤↤ 🔰 ↦↦❤↦↦' },
    { time: '1:00 PM', message: '⊰᯽⊱┈──╌❊❊╌──┈⊰᯽⊱                𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 12:00 𝐏𝐌 ⏳            Hello darling 𝘋𝘪𝘥 𝘺𝘰𝘶 𝘦𝘢𝘵 𝘣𝘳𝘦𝘢𝘬𝘧𝘢𝘴𝘵🥵                 ⊰᯽⊱┈──╌❊❊╌──┈⊰᯽⊱' },
    { time: '2:00 PM', message: '╔╦═• •✠•❀❀•✠ • •═╦╗                𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 1:00 𝐏𝐌 ⏳            𝐆𝐨𝐨𝐝 𝐀𝐟𝐭𝐞𝐫𝐍𝐨𝐨𝐧 𝐄𝐯𝐞𝐫𝐲𝐨𝐧𝐞🌞   💕                   ╚╩═• •✠•❀❀•✠ • •═╩╝' },
    { time: '3:00 PM', message: '▀▄▀▄▀▄ ▄▀▄▀▄▀                𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 2:00 𝐏𝐌 ⏳           2 𝙈𝙖𝙮𝙗𝙚 𝙚𝙫𝙚𝙧𝙮𝙤𝙣𝙚 𝙗𝙪𝙨𝙮 𝙩𝙝𝙞𝙨 𝙩𝙞𝙢𝙚 𝙞𝙣 𝙩𝙝𝙚 𝙬𝙤𝙧𝙠 😇                   ▀▄▀▄▀▄ ▄▀▄▀▄▀' },
    { time: '4:00 PM', message: '❖ ─ ✦ ─『✙ ✙』─ ✦ ─ ❖                𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 3:00 𝐏𝐌 ⏳                 𝚄𝚏𝚏 𝚑𝚘𝚝 𝚠𝚎𝚊𝚝𝚑𝚎𝚛 🥵                     ❖ ─ ✦ ─『✙ ✙』─ ✦ ─ ' },
    { time: '5:00 PM', message: '❦════ •⊰❂ ❂⊱• ════❦                𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 4:00 𝐏𝐌 ⏳           जिन्दगी को हर पाना तिमीलाई देख्ने गर्छु                      ❦════ •⊰❂ ❂⊱• ════❦' },
    { time: '6:00 PM', message: '⫷⫷⫷⫷  ⫸⫸⫸⫸                𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 5:00 𝐏𝐌 ⏳               𝙂𝙤𝙤𝙙 𝙚𝙫𝙚𝙣𝙞𝙣𝙜 𝙚𝙫𝙚𝙧𝙮 𝙨𝙞𝙣𝙜𝙡𝙚 𝙗𝙚𝙘𝙖𝙪𝙨𝙚 𝙢𝙮 𝙤𝙬𝙣𝙚𝙧 𝙨𝙞𝙣𝙜𝙡𝙚 😄           ⫷⫷⫷⫷  ⫸⫸⫸⫸' },
    { time: '7:00 PM', message: '💢🚀🚀💢  💢🚀🚀💢                𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 6:00 𝐏𝐌 ⏳              𝘋𝘪𝘥 𝘦𝘷𝘦𝘳𝘺𝘰𝘯𝘦 𝘩𝘢𝘷𝘦 𝘥𝘪𝘯𝘯𝘦𝘳?                           💢🚀🚀💢  💢🚀🚀💢' },
    { time: '8:00 PM', message: '︵‿︵‿︵‿︵‿︵‿︵‿︵                𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 7:00 𝐏𝐌 ⏳               𝙨𝙤𝙢𝙚 𝙥𝙚𝙤𝙥𝙡𝙚 𝙨𝙡𝙚𝙚𝙥 𝙚𝙖𝙧𝙡𝙮           ︵‿︵‿︵‿︵‿︵‿︵‿︵' },
    { time: '9:00 PM', message: '❦❧❦❧❦❧❦❧❦❧❦❧❦                𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 8:00 𝐏𝐌 ⏳              𝙀𝙫𝙚𝙧𝙮 𝙬𝙤𝙧𝙠 𝙛𝙞𝙣𝙞𝙨𝙝 𝙞 𝙝𝙞𝙣𝙠                  ❦❧❦❧❦❧❦❧❦❧❦❧❦' },
    { time: '10:00 PM', message: '｡☆✼★━━━━━━━━━━━━★✼☆｡                𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 9:00 𝐏𝐌 ⏳                  𝙄𝙩𝙨 𝙡𝙖𝙣𝙙𝙞 𝙡𝙖𝙣𝙙𝙞 𝙩𝙞𝙢𝙚                 ｡☆✼★━━━━━━━━━━━━★✼☆｡' },
    { time: '11:00 PM', message: '｡･ﾟ♡ﾟ･｡｡･ﾟ♡ﾟ･｡｡･ﾟ♡ﾟ･｡                𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 10:00 P𝐌 ⏳              𝘔𝘢𝘺𝘣𝘦 𝘪𝘵𝘴 𝘵𝘪𝘮𝘦 𝘵𝘰 𝘴𝘭𝘦𝘦𝘱                      ｡･ﾟ♡ﾟ･｡｡･ﾟ♡ﾟ･｡｡･ﾟ♡ﾟ･｡ ' }
];

module.exports.onLoad = ({ api }) => {
    console.log(chalk.bold.hex("#00c300")("============ SUCCESFULLY LOADED THE AUTOSENT COMMAND ============"));

    messages.forEach(({ time, message }) => {
        const [hour, minute, period] = time.split(/[: ]/);
        let hour24 = parseInt(hour, 10);
        if (period === 'PM' && hour !== '12') {
            hour24 += 12;
        } else if (period === 'AM' && hour === '12') {
            hour24 = 0;
        }

        const scheduledTime = moment.tz({ hour: hour24, minute: parseInt(minute, 10) }, 'Asia/Kolkata').toDate();

        schedule.scheduleJob(scheduledTime, () => {
            global.data.allThreadID.forEach(threadID => {
                api.sendMessage(message, threadID, (error) => {
                    if (error) {
                        console.error(`Failed to send message to ${threadID}:`, error);
                    }
                });
            });
        });
    });
};

module.exports.run = () => {
    // This function can be left empty as the main logic is handled in onLoad
};
