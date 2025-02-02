const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "shayri",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭",
  description: "Ranmdom a Shayri",
  commandCategory: "group",
  usages: "love",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Kolkata").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["💅💔... When the soul cannot be separated from the body, then why can people be removed from the heart..💚 ","🌻💋 ... I had a great desire to call her mine, but before I could say it, she became a stranger :))♥️ ","💅🌾 ... She is very naive, as if she understands nothing. She touches the shine and wonders why the heartbeat is so fast :))😈 ","🪴🌾... I can wait for a lifetime, just praying to God that you don't turn out to be unfaithful :))❤ ","💦👅.. I get so lost in the shade of your tresses that when you laugh, I end up crying with the tears meant for you.🥳💦 ","💐😐... You ask too many questions. If you had just loved me enough, you would have had all the answers 😈 ","💦👅... Every word of yours was a lie, every promise was a deception. You were like a stone idol that I mistook for God.💔😌 ","💦___🎗 The most difficult moment is when we:- can't decide whether to forget or keep waiting 💔💦 ","(✿ ♥‿♥)... There's no need to seek support, I alone am enough to fill an entire gathering :))♥️ ","💍👅... I always wanted to come closer, but when I did, I realized love only exists in distance.🥺 ","💔🍷.. I am fine after being separated from you, but my heart still fears that it might stop beating.🙄 ","🌾👅.. You come into every chapter of my life, I always meet you, but why don’t you ever belong to me?💍 ","🤟💋... Thinking that someone so beautiful couldn't lie, I believed every word they said.🥺🌾 ","🍁😍... They say prayers are answered at a certain time, Oh God, tell me when I asked for them? 🥺🥶 ","🍒🙊... How do I make myself worthy of your love…? I change my habits, but you keep changing your conditions.😈 ","🥺🍒... She used to say she would give her life for my love, and today she says, 'Leave me, it's a question of my life.' 🙊 ","🙊😈... Every time I changed myself just for them, and now they say, 'You're not the same anymore.' 💔 ","🍷🍒... I always wanted to call you mine, but before I could say it, you became a stranger :))💚 ","💅💋... I never asked you to love me endlessly, I just wished that you could make me feel it :))💚 ","😈🙊... You once swore that every evening would be spent with me, but now either you have changed or there are no evenings in your city anymore.🍷🤟 ","🍒🌾... I don’t know when your careless habits will go away. At least take care of something—don’t lose me too.🍎 ","🪴🌻... Why do you always play this game of love with me? You get upset over small things, and I end up breaking completely.💚 ","💅🍷... I trusted you more than my fate, yet fate didn’t change as much as you did.🍁 ","😈 'Bad habits, if not changed in time, will eventually change your time","⏳ 'Your time is limited, so don’t waste it living someone else’s life.","soul cannot be separated from the body, then why can people be removed from the heart..💚 ","🌻💋 ... I had a great desire to call her mine, but before I could say it, she became a stranger :))♥️ ","💅🌾 ... She is very naive, as if she understands nothing. She touches the shine and wonders why the heartbeat is so fast :))😈 ","🪴🌾... I can wait for a lifetime, just praying to God that you don't turn out to be unfaithful :))❤ ","💦👅.. I get so lost in the shade of your tresses that when you laugh, I end up crying with the tears meant for you.🥳💦 ","💐😐... You ask too many questions. If you had just loved me enough, you would have had all the answers 😈 ","💦👅... Every word of yours was a lie, every promise was a deception. You were like a stone idol that I mistook for God.💔😌 ","💦___🎗 The most difficult moment is when we:- can't decide whether to forget or keep waiting 💔💦 ","(✿ ♥‿♥)... There's no need to seek support, I alone am enough to fill an entire gathering :))♥️ ","💍👅... I always wanted to come closer, but when I did, I realized love only exists in distance.🥺 ","💔🍷.. I am fine after being separated from you, but my heart still fears that it might stop beating.🙄 ","🌾👅.. You come into every chapter of my life, I always meet you, but why don’t you ever belong to me?💍 ","🤟💋... Thinking that someone so beautiful couldn't lie, I believed every word they said.🥺🌾 ","🍁😍... They say prayers are answered at a certain time, Oh God, tell me when I asked for them? 🥺🥶 ","🍒🙊... How do I make myself worthy of your love…? I change my habits, but you keep changing your conditions.😈 ","🥺🍒... She used to say she would give her life for my love, and today she says, 'Leave me, it's a question of my life.' 🙊 ","🙊😈... Every time I changed myself just for them, and now they say, 'You're not the same anymore.' 💔 ","🍷🍒... I always wanted to call you mine, but before I could say it, you became a stranger :))💚 ","💅💋... I never asked you to love me endlessly, I just wished that you could make me feel it :))💚 ","😈🙊... You once swore that every evening would be spent with me, but now either you have changed or there are no evenings in your city anymore.🍷🤟 ","🍒🌾... I don’t know when your careless habits will go away. At least take care of something—don’t lose me too.🍎 ","🪴🌻... Why do you always play this game of love with me? You get upset over small things, and I end up breaking completely.💚 ","💅🍷... I trusted you more than my fate, yet fate didn’t change as much as you did.🍁","😈Bad habits, if not changed in time, will eventually change your time.","⏳ 'Your time is limited, so don’t waste it living someone else’s life"];
  var rand = tl[Math.floor(Math.random() * tl.length)]

   mess = "{name}"

  if (event.body.indexOf("Shayri") == 0 || (event.body.indexOf("shayri") == 0)) {
    var msg = {
      body: `${rand}`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
