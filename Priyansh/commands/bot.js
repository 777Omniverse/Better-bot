const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Fixed By Arun Kumar",
  description: "goibot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Kolkata").format("DD/MM/YYYY || HH:mm:ss");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["cameraman focus quickly 📸" , "Lagdi Lahore di aa🙈" , "lets go for tea" , "make tea for me ,Watch all day Bot BoT🙄" , "hello my wife " ,  "This thing will reach Delhi" , "Do you love me" , "I wonder how you live without a brain☹️" , "Do you know me🙄" , "You turned out to be unfaithful.🙂🤨", "Systemmmmmmm😴" , "One night stand ", "Will you marry me " , "Moye moye moye moye🙆🏻‍♀🙆🏻‍♀" , "This sorrow never ends 🙁" , "you are a scoundrel" , "you just looking like a wow😶" , "find my sky and your land" , "come tomorrow it's lunch time" , "when you see B0T B0T b0T😒😒", "Hey no one is watching🤭", "When you will come on my bed darling " , "You are the one whom I don't know. 🙂" , "what is this i love you" , "I can hear oi dont speak loudly 😒" , "so elegent so beautiful , just looking like a wow🤭" , "began" , "Aayein🤔" , "I Love you baby When you call me i feel something something" , "Hello aunty" , "betray your lover , Darling give us a chance too🙈" , "Stop🤣😛" , "Baby show na" , "In the night' come to my inbox " , "dont eat my brain😒😒" , "Shut up 7th standard fail😒" , "When will you stop taking cheap drugs?" , "I am busy with my love, dont tease me." , "hi darling missed me🙈" , "Dont call me like that, I feel ashamed." , "Call me papa of your kids" , "dance my bulbul you will get money" , "I'm from here, where are you from?" , "will you be my valentine🙈🙈" , "What are your plans for Valentines week?" , "Give me some rose chocolate too arent we strangers","you look like innocent😊", "Dont call me Bot oi call me hubby😁","Do not disturb again and again I am busy with my girlfriend🙄","I don't talk to the poor😑","don't come so close love will happen😛😍","say baby do you love me😜","hey my love i am in no mood to joke😏","Say what is the work, don't be shy😚","you  don't have any work eat whole day eat and spend  whole  day on messanger🤔","shutup alway bot bot you don't have any work🧐","Tell me no one is watching🥱","oh my baby give me one kiss since many days don't kiss me💋💋","go away I don't have any other work do you keep bothering me all the time😤","Hey my wife how are you🤪😝","come inbox can't talk here🤭","Don't call me I am busy🙄","hey you are the one i don't know😂","i am your heartbeat💓💓","You are insulting by saying robot robot😬","dont call me bot call me hubby🤗","i cant see anythingI😎","do not want to talk to you🤐","will you marry me?❣👰🤵" ,  "i am here what happened sweetheart🥴","keep quiet or else i will come out and break your teeth🦷👈","Seeing the boss, you have no other work🖐👊","you keeps on talking all the time🤕","take a shower first","i am blind😎","yes tell me🤫","Hey baby come here give a kiss💋 here and give two kisses💋💋 here","hey man i'm in no mood to joke😔","don't bother me i will kiss😌🖐","don't come so close love will happen🥺","will you marry me?🥰","Go away, you have no business🤷","when you see,you keeps on talking😒","marry me","Hey baby come here give a kiss here and give two kisses here","hey man i'm in no mood to joke🙂"];
  var rand = tl[Math.floor(Math.random() * tl.length)]
   mess = "{name}"
  if (event.body.indexOf("Bot") == 0 || (event.body.indexOf("bot") == 0)) {
    var msg = {
      body: `🚧${name}🚧,  \n\n『\n   ${rand} 』\n\n❤️𝙲𝚛𝚎𝚍𝚒𝚝𝚜 :   𝐉⃝   ̶  ̶  ̶𝐚͡𝐜͜𝐤𝐬𝐨𝐧ﮩﮩ٨ــﮩــــ𓆩♥︎𓆪🌹 `
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
