 const fs = require("fs");
module.exports.config = {
	name: "Jack",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Jack", 
	description: "no prefix",
	commandCategory: "No command marks needed",
	usages: "...",
    cooldowns: 100, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("owner") ||
     react.includes("Arun") || 
react.includes("arun")) {
		var msg = {
				body: "★𝗢𝘄𝗻𝗲𝗿 + 𝗠𝗮𝗱𝗲 𝗕𝘆★\n\n✦𒄬 𓆩๛⃝𝗝𝗮𝗰𝗸𝘀𝗼𝗻 ‣᭄𓆪 𑁍•›› ;* 3:) :)✦\n\n★★᭄𝐘𝐨𝐮𝐭𝐮𝐛𝐞 𝐋𝐢𝐧𝐤 :\n\n✦ (*****) ✦ \n𝗝𝗼𝗶𝗻 𝗢𝘂𝗿 𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸 𝗚𝗿𝗼𝘂𝗽 \n 𝙀𝙑𝙀𝙍𝙔𝙏𝙃𝙄𝙉𝙂 𝙄𝙉 𝘾𝙊𝙈𝙈𝙊𝙉 https://www.facebook.com/groups/298652772396019/?ref=share&mibextid=NSMWBT`",
				attachment: fs.createReadStream(__dirname + `/noprefix/kk1.jpg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("📷", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

    }
