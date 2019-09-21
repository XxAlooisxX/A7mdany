const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '#'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});



client.on("message",msg=>{
   if(msg.content.startsWith(prefix+"setgame"))
   {
      var game = msg.content.split(" ")[1];
      client.user.setGame(game);
   }});





client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`ولكم نورت السيرفر ضيف البوت راح يعجبك${member} `) 
}).catch(console.error)

});












//inviter
 client.on('message', message => {
        if (message.content === "#inv") {
            if(!message.channel.guild) return;
        let embed = new Discord.RichEmbed()
        .setAuthor(` ${message.author.username} `, message.author.avatarURL)      
        .setTitle(`Click Here`)
        .setURL(`https://discordapp.com/oauth2/authorize?client_id=624845667059236884&permissions=8&scope=bot `)
        .setThumbnail(message.author.avatarURL)
        .addField(':small_blue_diamond:By', "<@" + message.author.id + ">")        
     message.channel.sendEmbed(embed);
       }
   });














//الترحيب



client.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', 'welcome');
    let memberavatar = member.user.avatarURL
      if (!channel) return;
    let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(memberavatar)
        .addField('🎽 | name :  ',`${member}`)
        .addField('📢 | نورت السيرفر يا قلبي' , `Welcome to the server, ${member}`)
        .addField('🆔 | user :', "**[" + `${member.id}` + "]**" )
                .addField('➡| انت العضو رقم',`${member.guild.memberCount}`)
               
                  .addField("Name:",`<@` + `${member.id}` + `>`, true)
                     
                                     .addField(' الـسيرفر', `${member.guild.name}`,true)
                                       
     .setFooter(`${member.guild.name}`)
        .setTimestamp()
   
      channel.sendEmbed(embed);
    });
    
    client.on('guildMemberRemove', member => {
        var embed = new Discord.RichEmbed()
        .setAuthor(member.user.username, member.user.avatarURL)
        .setThumbnail(member.user.avatarURL)
        .setTitle(`الله معاك ✋:skin-tone-1: 😔`)
        .setDescription(`مع السلامه تشرفنا بك ✋:skin-tone-1: 😔 `)
        .addField('👤   تبقي',`**[ ${member.guild.memberCount} ]**`,true)
        .setColor('RED')
        .setFooter(`==== نــتــمــنــآ لــكــم آســتــمـــتــآع ====`, 'https://cdn.discordapp.com/attachments/397818254439219217/399292026782351381/shy.png')
    
    var channel =member.guild.channels.find('name', 'welcome')
    if (!channel) return;
    channel.send({embed : embed});
    })













//كود معلومات البوت

 client.on('message', message => {
     if (message.content === "#bot") {
            if(!message.channel.guild) return message.reply('** This command only for servers **');
     let embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .addField("**اسم السيرفر**", message.guild.name)
  .addField("**عدد السيرفرات الي فيها البوت:**" , client.guilds.size)
  .addField("**المستخدمين:**", client.users.size)
  .addField("**قنوات:**", client.channels.size)
message.channel.sendEmbed(embed);
    }
});












 






//الرد التلقائي


client.on('message', message => {
    if(message.content === '#serverowner'){
        message.channel.send(' اتفضل :https://discord.gg/mDqQXxf ')
    }
});




//الرد التلقائي


client.on('message', message => {
    if(message.content === 'باك'){
        message.channel.send('ولكم ')
    }
});













// بوت عدد الاعضاء

    client.on('message', message => {
              if (!message.channel.guild) return;
      if(message.content =='#member')
      var IzRo = new Discord.RichEmbed()
      .setThumbnail(message.author.avatarURL)
      .setFooter(message.author.username, message.author.avatarURL)
      .setTitle(':tulip:| Members info')
      .addBlankField(true)
      .addField('عدد اعضاء السيرفر',`${message.guild.memberCount}`)
      message.channel.send(IzRo);
    });





client.on('ready', () => {
    console.log('----------------');
    console.log(`✨ Id: _tozx`);
    console.log(`✨ Prefix: Soon`);
    console.log(`✨ Servers: 1`);
    console.log(`✨ Members: 1000`);
    console.log(`✨ Channels: Limtit`);
    console.log('----------------');
    console.log(`Logged in as `);
    client.user.setGame("Welcome To TNM")
    client.user.setStatus("#help")
});









client.on('message', message => {
const prefix = "#";

    if (message.author.id === client.user.id) return;
    if (message.guild) {
   let embed = new Discord.RichEmbed()
    let args = message.content.split(' ').slice(1).join(' ');
if(message.content.split(' ')[0] == prefix + 'bc') {
    if (!args[1]) {
message.channel.send("**تم ارسال البرودكاست**");
return;
}
        message.guild.members.forEach(m => {
   if(!message.member.hasPermission('ADMINISTRATOR')) return;
            var bc = new Discord.RichEmbed()
            .addField('✍ المرسل : ', `${message.author.username}#${message.author.discriminator}`)
                        .addField('---------------------------')
            .addField('📩 الرسالة : ', args)
                                    .addField('---------------------------')
                        .addField('✨ السيرفر :', `${message.guild.name}`)
            .setColor('RANDOM')
            // m.send(`[${m}]`);
            m.send(`${m}`,{embed: bc});
        });
    }
    } else {
        return;
    }
});











//ban

client.on('message', message => { 
	const prefix = "#";
if (message.content.startsWith(prefix + "ban")) {
if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply('**⚠ | `[BAN_MEMBERS]` لا يوجد لديك صلاحية**');
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**لا توجد لدي صلاحيات**")
    let user = message.mentions.users.first();
      let reason = message.content.split(" ").slice(2).join(" ");
                      if (message.mentions.users.size < 1) return message.reply(`**${prefix}ban <user> <reason>**`);
                        if (!message.guild.member(user)
                      .kickable) return message.reply("**can't ban this user!**");
                        message.guild.member(user).ban();
                    
                        const banembed = new Discord.RichEmbed()
                        .setAuthor(user.username, user.displayAvatarURL)
                        .setColor("RANDOM")
                        .setTimestamp()
                        .addField("**The member that got banned:**",  '**[ ' + `${user.tag}` + ' ]**')
                        .addField("**Reason**", '**[ ' + `${reason}` + ' ]**')
                        .setFooter(`By: ${message.author.tag}`)
                        message.channel.send({
                          embed : banembed
                        })
                      }
});












client.on("message", message => {
    const prefix = "#";
 
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix + "clear")) {
   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('⚠ | **لا يوجد لديك صلاحية لمسح الشات**');
        var msg;
        msg = parseInt();
      
      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "Done | تــم مسح الشات",
        color: 0x06DF00,
        description: "تم مسح الرسائل ",
        footer: {
          text: "i5andro"
        }
      }}).then(msg => {msg.delete(3000)});
                          }

     
});





//كود معلومات السيرفر

client.on('message', function(msg) {
         const prefix = "#"
    if(msg.content.startsWith (prefix  + 'server')) {
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .setTitle(`Showing Details Of  **${msg.guild.name}*`)
      .addField('🌐** نوع السيرفر**',`[** __${msg.guild.region}__ **]`,true)
      .addField('🏅** __الرتب__**',`[** __${msg.guild.roles.size}__ **]`,true)
      .addField('🔴**__ عدد الاعضاء__**',`[** __${msg.guild.memberCount}__ **]`,true)
      .addField('🔵**__ عدد الاعضاء الاونلاين__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
      .addField('📝**__ الرومات الكتابية__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
      .addField('🎤**__ رومات الصوت__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
      .addField('👑**__ الأونـر__**',`**${msg.guild.owner}**`,true)
      .addField('🆔**__ ايدي السيرفر__**',`**${msg.guild.id}**`,true)
      .addField('📅**__ تم عمل السيرفر في__**',msg.guild.createdAt.toLocaleString())
      msg.channel.send({embed:embed});
    }
  });










//كود يوريك اذا احد رسل للبوت بلخاص


client.on('message', function(message) {
    if (message.channel.type === "#dm") {
        if (message.author.id === client.user.id) return;
        var norElden = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setTimestamp()
            .setTitle('``رساله جديده في خاص البوت``')
            .setThumbnail(`${message.author.avatarURL}`)
            .setDescription(`\n\n\`\`\`${message.content}\`\`\``)
            .setFooter(`من (@${message.author.tag})  |  (${message.author.id})`)
        client.channels.get("450998014195138560").send({ embed: norElden });
    }
});






//عدد الدعوات

client.on('message', message => {
    if (message.content.startsWith("#invites")) {

    message.guild.fetchInvites()
    .then(invites => message.channel.send(` انت جبت     [${invites.find(invite => invite.inviter.id === message.author.id).uses}]      عضو للسيرفر   `))
         
    }
});











client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === "#help") {
  let embed = new Discord.RichEmbed()
          .setAuthor(message.author.username, message.author.avatarURL)
           .setThumbnail(message.author.avatarURL)
                 .setTimestamp()
    .setDescription(`

  ======== الادارة============
  
   #kick {@user} {reason} | لطرد العضو بسبب :outbox_tray:

   #ban {@user} {reason} | لحظر العضو :no_entry:

   #bc {text} | ليرسل رساله لكل أعضاء السيرفر :mega:

   !clear {NUMBER} | لمسح الرسائل التي ب الشات

   ============
 الأوامر العامه 
   ============

   #invites | لمعرفه انت جبت كم للسيرفر :sparkles: 

   #bcowner | لإرسال رساله لصاحب البوت :envelope_with_arrow: 
 
   #inv | لكي تدعو البوت الى سيرفرك :sparkles: 

   #bot | لعرض البوت في كم سيرفر و كم مستخدم و كم روم  :robot:

   #server | لكي يظهر معلومات السيرفر :no_mouth: 

   #tag | لجعل الكلمه اللي تبيها مزخرفه :dragon_face:
 
   #member | لمعرفة كم شخص ب السيرفر  :thinking:

   !support | رابط سيرفر الدعم الفني

  ======نــتــمــنــآ لــكــم آســتــمـــتــآع ======

`)
.setColor('RANDOM')
message.author.sendEmbed(embed)
}
});


















//ranker
client.on('message', message => {
    if (message.content === "-createroles1") {
    if(!message.channel.guild) return message.channel.send('**This Command Only For Servers !**')
            if (!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(`**${message.author.username} You Dont Have** ``MANAGE_ROLES`` **Premission**`);

		             message.guild.createRole({ name: "King", color: "#ff0000", permissions: [] })
                     message.guild.createRole({ name: "Queen", color: "#fd00f5", permissions: [] })
                     message.guild.createRole({ name: "Owner", color: "#ff0000", permissions: [] })
                     message.guild.createRole({ name: "Co-Owner", color: "#8d00e4", permissions: [] })
                     message.guild.createRole({ name: "Leader", color: "#ff9600", permissions: [] })
                     message.guild.createRole({ name: "Co-Leader", color: "#ff9600", permissions: [] })
                     message.guild.createRole({ name: "DEVELOPER", color: "#f14500", permissions: [] })
                     message.guild.createRole({ name: "MANGERS", color: "#a83100", permissions: [] })
                     message.guild.createRole({ name: "ADMINS", color: "#500097", permissions: [] })
                     message.guild.createRole({ name: "Server Bot", color: "#ffee00", permissions: [] })
                     message.guild.createRole({ name: "MOD", color: "#a600ff", permissions: [] })
                     message.guild.createRole({ name: "Helper", color: "#ff5e00", permissions: [] })
                     message.guild.createRole({ name: "Friend", color: "#00ff48", permissions: [] })
                     message.guild.createRole({ name: "YOUTUBERS++", color: "#ff0000", permissions: [] })
                     message.guild.createRole({ name: "YOUTUBERS+", color: "#ff0000", permissions: [] })
                     message.guild.createRole({ name: "YOUTUBERS", color: "#ff0000", permissions: [] })
                      message.guild.createRole({ name: "Mvp++", color: "#6dff00", permissions: [] })
                     message.guild.createRole({ name: "Mvp+", color: "#187a00", permissions: [] })
                     message.guild.createRole({ name: "Vip++", color: "#aca300", permissions: [] })
                     message.guild.createRole({ name: "Vip+", color: "#aca300", permissions: [] })
                     message.guild.createRole({ name: "ACTIVE CHAT", color: "#00ff40", permissions: [] })
                     message.guild.createRole({ name: "GAME BOT", color: "#b300ff", permissions: [] })
                     message.guild.createRole({ name: "BOT", color: "#b300ff", permissions: [] })
                     message.guild.createRole({ name: "MUSIC BOT", color: "#b300ff", permissions: [] })
                     message.guild.createRole({ name: "Members", color: "#0024ff", permissions: [] })
        

message.channel.sendMessage('**الرجاء الانتظار ريث ما يتم صناعه الرتب **')
}
});




//createcolors
client.on('message', message => {
    if (message.content === "-createcolors") {
    if(!message.channel.guild) return message.channel.send('**This Command Only For Servers !**')
            if (!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(`**${message.author.username} You Dont Have** ``MANAGE_ROLES`` **Premission**`);

                     message.guild.createRole({ name: "1", color: "#cf1111", permissions: [] })
                     message.guild.createRole({ name: "2", color: "#df5d11", permissions: [] })
                     message.guild.createRole({ name: "3", color: "#dfab11", permissions: [] })
                     message.guild.createRole({ name: "4", color: "#dfde11", permissions: [] })
                     message.guild.createRole({ name: "5", color: "#a8df11", permissions: [] })
                     message.guild.createRole({ name: "6", color: "#64c40c", permissions: [] })
                     message.guild.createRole({ name: "7", color: "#38c30c", permissions: [] })
                     message.guild.createRole({ name: "8", color: "#0cc33f", permissions: [] })
                     message.guild.createRole({ name: "9", color: "#0cc36c", permissions: [] })
                     message.guild.createRole({ name: "10", color: "#0cc394", permissions: [] })
                     message.guild.createRole({ name: "11", color: "#0cc3ad", permissions: [] })
                     message.guild.createRole({ name: "12", color: "#0cb1c3", permissions: [] })
                     message.guild.createRole({ name: "13", color: "#0c9ec3", permissions: [] })
                     message.guild.createRole({ name: "14", color: "#0c8ac3", permissions: [] })
                     message.guild.createRole({ name: "15", color: "#0c49c3", permissions: [] })
                     message.guild.createRole({ name: "16", color: "#0c2bc3", permissions: [] })
                     message.guild.createRole({ name: "17", color: "#880cc3", permissions: [] })
                     message.guild.createRole({ name: "18", color: "#b50cc3", permissions: [] })
                     message.guild.createRole({ name: "19", color: "#598e85", permissions: [] })
                     message.guild.createRole({ name: "20", color: "#bed1b1", permissions: [] })
message.channel.sendMessage('**الرجاء الانتظار ريث ما يتم صناعه الالوان **')
}
});














//ranker
client.on('message', message => {
    if (message.content === "-createroles2") {
    if(!message.channel.guild) return message.channel.send('**This Command Only For Servers !**')
            if (!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(`**${message.author.username} You Dont Have** ``create channel`` **Premission**`);

		             message.guild.createRole({ name: "King", color: "#ff0000", permissions: [] })
                     message.guild.createRole({ name: "Queen", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "Owner", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "Co-Owner", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "Leader", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "Co-Leader", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "DEVELOPER", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "MANGERS", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "ADMINS", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "Server Bot", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "MOD", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "Helper", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "Friend", color: "##ffffff", permissions: [] })
                     message.guild.createRole({ name: "YOUTUBERS++", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "YOUTUBERS+", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "YOUTUBERS", color: "#ffffff", permissions: [] })
                      message.guild.createRole({ name: "Mvp++", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "Mvp+", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "Vip++", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "Vip+", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "ACTIVE CHAT", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "GAME BOT", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "BOT", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "MUSIC BOT", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "Members", color: "#ffffff", permissions: [] })
        

message.channel.sendMessage('**الرجاء الانتظار ريث ما يتم صناعه الرتب **')
}
});








//channeler
client.on('message', message => {
    if (message.content === "-createrooms1") {
    if(!message.channel.guild) return message.channel.send('**This Command Only For Servers !**')
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send(`**${message.author.username} You Dont Have** ``MANAGE_CHANNELS`` **Premission**`);

        
	 message.guild.createChannel('『📣swalf』', 'voice')
     message.guild.createChannel('『➺... Cafe☕ ⃖』', 'voice')
     message.guild.createChannel('Music ( 1 ) 🎶', 'voice')
     message.guild.createChannel('Quran ( 1 ) ☪', 'voice')
     message.guild.createChannel('🔴Rec 🔴', 'voice')
     message.guild.createChannel('🔴LiveStream🔴', 'voice')
     message.guild.createChannel('🍏 Minecraft 🍏', 'voice')
     message.guild.createChannel('⛳ Fortnite ⛳', 'voice')
     message.guild.createChannel('🔫 CS GO 🔫', 'voice')
     message.guild.createChannel('⚔ Black Squad  ⚔', 'voice')
     message.guild.createChannel('♠ 🛏 AFK ▪ نائم ♠', 'voice')
	 message.guild.createChannel('🔒PRIVATE🔒', 'voice')
     message.guild.createChannel('🔒PRIVATE🔒', 'voice')
     message.guild.createChannel('🔒PRIVATE🔒', 'voice')
     message.guild.createChannel('🔒PRIVATE🔒', 'voice')
     message.guild.createChannel('♠ 🛏 AFK ▪ نائم ♠', 'voice')
     message.guild.createChannel('welcome', 'text')
     message.guild.createChannel('⚜📗『rules』📗⚜', 'text')
     message.guild.createChannel('📰📃『news』📰📃', 'text')
     message.guild.createChannel('🎖✔『vote』✖🎖', 'text')
     message.guild.createChannel('🎁『invite-𝚁eawds』🎁', 'text')
     message.guild.createChannel('📱🗯『chat』🗯📱', 'text')
     message.guild.createChannel('🎥🎞『yt』🎞🎥', 'text')
     message.guild.createChannel('🎮🏅『games』🎮🏅', 'text')
     message.guild.createChannel('🔰『suggest』🔰', 'text')
     message.guild.createChannel('💲🔰『shop』🔰💲', 'text')
     message.guild.createChannel('🔔『shop-rank』🔔', 'text')
     message.guild.createChannel('🔔『sell』🔔', 'text')
     message.guild.createChannel('🎉『give𝙰way』🎉', 'text')
     message.guild.createChannel('📱🗯『chat』🗯📱', 'text')
     message.guild.createChannel('🎥🎞『yt』🎞🎥', 'text')
     message.guild.createChannel('🎮🏅『games』🎮🏅', 'text')


message.channel.sendMessage('**الرجاء الانتظار ريث ما يتم صناعة الرومات بشكل اسطوري**')
}
});


//channeler
client.on('message', message => {
    if (message.content === "-createrooms2") {
    if(!message.channel.guild) return message.channel.send('**This Command Only For Servers !**')
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send(`**${message.author.username} You Dont Have** ``MANAGE_CHANNELS`` **Premission**`);

        
     message.guild.createChannel('「 O W N E R 」', 'voice')
     message.guild.createChannel('「 C O - L E A D E R 」', 'voice')
     message.guild.createChannel('「ADMINSTRATOR」', 'voice')
     message.guild.createChannel('𖦲₁PARTY | بارتي𖦲', 'voice')
     message.guild.createChannel('𖦲₂PARTY | بارتي𖦲', 'voice')
     message.guild.createChannel('𖦲₂PARTY | بارتي𖦲', 'voice')
     message.guild.createChannel('✬ʝuşτ-1✬', 'voice')
 message.guild.createChannel('✬ʝuşτ-2✬', 'voice')
     message.guild.createChannel('✬ʝuşτ-3✬', 'voice')
     message.guild.createChannel('✬ʝuşτ-4✬', 'voice')
     message.guild.createChannel('✬ʝuşτ-5✬', 'voice')
     message.guild.createChannel('😴sleep', 'voice')
          message.guild.createChannel('༆كَبّـآرَ آلَشّـخٌـصِـيّآتُ༆', 'voice')
     message.guild.createChannel('welcome', 'text')
     message.guild.createChannel('info', 'text')
     message.guild.createChannel('bot', 'text')
     message.guild.createChannel('chat', 'text')
     message.guild.createChannel('Youtube', 'text')
     message.guild.createChannel('bo7', 'text')
     message.guild.createChannel('party', 'text')
     message.guild.createChannel('pic', 'text')


message.channel.sendMessage('**الرجاء الانتظار ريث ما يتم صناعة  الرتب العادية**')
}
});









//delete any thing
client.on('message', msg => {
const prefix = "!";
  if(!msg.guild) return;
   if(!msg.member.hasPermission('MANAGE_CHANNELS')) return message.reply('**⚠ لا يوجد لديك صلاحية**');
   if (msg.content.startsWith(prefix +'sd')) {
let ra3d = new Discord.RichEmbed()
.setColor('RANDOM')
.setThumbnail(msg.author.avatarURL)
.setDescription(`هل انت متاكد من مسح كل شي بالسيرفر ؟\n  ✅  \n  ❌ \n  لديك 60 ثانية للاختيار`)                                                                                                                                                                       
msg.channel.send(ra3d).then(message => {
 message.react('✅').then(r=>{
 message.react('❌').then(r=>{           
 let sd = (reaction, user) => reaction.emoji.name === '✅' && user.id === msg.author.id;
 let nd = (reaction, user) => reaction.emoji.name === '❌' && user.id === msg.author.id;
 let ds  = message.createReactionCollector(sd, { time: 60000 });
 let dn  = message.createReactionCollector(nd, { time: 60000 });
dn.on("collect", r => {
msg.channel.send("`تم الالغاء`")
message.delete();
})
ds.on("collect", r => {
message.guild.roles.forEach(r => { r.delete() }) 
     message.guild.channels.forEach(c => { c.delete() })
     message.guild.createChannel('general', 'text').then(c=> c.send(ra3d));
     let ra3d = new Discord.RichEmbed()
            .setColor('#fd0101')
            .setDescription('`تم حذف كل شي في السيرفر✅`')
           message.channel.sendEmbed(ra3d);
})
})
})
})
}
});











//code kick


client.on('message', message => {
		const prefix = "#";
  if (!message.content.startsWith(prefix)) return;
  var command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
  var args = message.content.split(" ").slice(1);
  if (command == "kick") {
   if(!message.channel.guild) return message.reply('** This command only for servers**');
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
  var user = message.mentions.users.first();
  var reason = message.content.split(" ").slice(2).join(" ");
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user).kickable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");
  const kickembed = new Discord.RichEmbed()
  .setAuthor(`KICKED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({embed : kickembed})
  user.send(reason).then(()=>{
message.guild.member(user).kick();
  })
}
});


//انشاء روم صوتي


client.on("message", (message) => {
if (message.content.startsWith("!cv")) {
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
        let args = message.content.split(" ").slice(1);
    message.guild.createChannel(args.join(' '), 'voice');
    message.channel.sendMessage('تـم إنـشاء روم صـوتي')
    
}
});





const Sra7a = [
     'صراحه  |  صوتك حلوة؟',
     'صراحه  |  التقيت الناس مع وجوهين؟',
     'صراحه  |  شيء وكنت تحقق اللسان؟',
     'صراحه  |  أنا شخص ضعيف عندما؟',
     'صراحه  |  هل ترغب في إظهار حبك ومرفق لشخص أو رؤية هذا الضعف؟',
     'صراحه  |  يدل على أن الكذب مرات تكون ضرورية شي؟',
     'صراحه  |  أشعر بالوحدة على الرغم من أنني تحيط بك كثيرا؟',
     'صراحه  |  كيفية الكشف عن من يكمن عليك؟',
     'صراحه  |  إذا حاول شخص ما أن يكرهه أن يقترب منك ويهتم بك تعطيه فرصة؟',
     'صراحه  |  أشجع شيء حلو في حياتك؟',
     'صراحه  |  طريقة جيدة يقنع حتى لو كانت الفكرة خاطئة" توافق؟',
     'صراحه  |  كيف تتصرف مع من يسيئون فهمك ويأخذ على ذهنه ثم ينتظر أن يرفض؟',
     'صراحه  |  التغيير العادي عندما يكون الشخص الذي يحبه؟',
     'صراحه  |  المواقف الصعبة تضعف لك ولا ترفع؟',
     'صراحه  |  نظرة و يفسد الصداقة؟',
     'صراحه  |  ‏‏إذا أحد قالك كلام سيء بالغالب وش تكون ردة فعلك؟',
     'صراحه  |  شخص معك بالحلوه والمُره؟',
     'صراحه  |  ‏هل تحب إظهار حبك وتعلقك بالشخص أم ترى ذلك ضعف؟',
     'صراحه  |  تأخذ بكلام اللي ينصحك ولا تسوي اللي تبي؟',
     'صراحه  |  وش تتمنى الناس تعرف عليك؟',
     'صراحه  |  ابيع المجرة عشان؟',
     'صراحه  |  أحيانا احس ان الناس ، كمل؟',
     'صراحه  |  مع مين ودك تنام اليوم؟',
     'صراحه  |  صدفة العمر الحلوة هي اني؟',
     'صراحه  |  الكُره العظيم دايم يجي بعد حُب قوي " تتفق؟',
     'صراحه  |  صفة تحبها في نفسك؟',
     'صراحه  |  ‏الفقر فقر العقول ليس الجيوب " ، تتفق؟',
     'صراحه  |  تصلي صلواتك الخمس كلها؟',
     'صراحه  |  ‏تجامل أحد على راحتك؟',
     'صراحه  |  اشجع شيء سويتة بحياتك؟',
     'صراحه  |  وش ناوي تسوي اليوم؟',
     'صراحه  |  وش شعورك لما تشوف المطر؟',
     'صراحه  |  غيرتك هاديه ولا تسوي مشاكل؟',
     'صراحه  |  ما اكثر شي ندمن عليه؟',
     'صراحه  |  اي الدول تتمنى ان تزورها؟',
     'صراحه  |  متى اخر مره بكيت؟',
     'صراحه  |  تقيم حظك ؟ من عشره؟',
     'صراحه  |  هل تعتقد ان حظك سيئ؟',
     'صراحه  |  شـخــص تتمنــي الإنتقــام منـــه؟',
     'صراحه  |  كلمة تود سماعها كل يوم؟',
     'صراحه  |  **هل تُتقن عملك أم تشعر بالممل؟',
     'صراحه  |  هل قمت بانتحال أحد الشخصيات لتكذب على من حولك؟',
     'صراحه  |  متى آخر مرة قمت بعمل مُشكلة كبيرة وتسببت في خسائر؟',
     'صراحه  |  ما هو اسوأ خبر سمعته بحياتك؟',
     '‏صراحه | هل جرحت شخص تحبه من قبل ؟',
     'صراحه  |  ما هي العادة التي تُحب أن تبتعد عنها؟',
     '‏صراحه | هل تحب عائلتك ام تكرههم؟',
     '‏صراحه  |  من هو الشخص الذي يأتي في قلبك بعد الله – سبحانه وتعالى- ورسوله الكريم – صلى الله عليه وسلم؟',
     '‏صراحه  |  هل خجلت من نفسك من قبل؟',
     '‏صراحه  |  ما هو ا الحلم  الذي لم تستطيع ان تحققه؟',
     '‏صراحه  |  ما هو الشخص الذي تحلم به كل ليلة؟',
     '‏صراحه  |  هل تعرضت إلى موقف مُحرج جعلك تكره صاحبهُ؟',
	  '‏صراحه  |  هل قمت بالبكاء أمام من تُحب؟',
     '‏صراحه  |  ماذا تختار حبيبك أم صديقك؟',
     '‏صراحه  | هل حياتك سعيدة أم حزينة؟',
     'صراحه  |  ما هي أجمل سنة عشتها بحياتك؟',
     '‏صراحه  |  ما هو عمرك الحقيقي؟',
     '‏صراحه  |  ما اكثر شي ندمن عليه؟',
	 'صراحه  |  ما هي أمنياتك المُستقبلية؟‏',
]
   client.on('message', message => {
 if (message.content.startsWith('#صراحه')) {
     if(!message.channel.guild) return message.reply('** This command only for servers **');
  var client= new Discord.RichEmbed()
  .setTitle("لعبة صراحة ..")
  .setColor('RANDOM')
  .setDescription(`${Sra7a[Math.floor(Math.random() * Sra7a.length)]}`)
  .setImage("https://cdn.discordapp.com/attachments/371269161470525444/384103927060234242/125.png")
                  .setTimestamp()

   message.channel.sendEmbed(client);
   message.react("??")
 }
});










const secreT = [
  "**الحياة بكل ما فيها تقف دائمًا على حد الوسطية بين اتزان المعنى وضده من حب وكره وحق وباطل وعدل وظلم**.",
  "**كى تعيش عليك ان تتقن فن التجاهل باحتراف**.",
  "**لا تحزن على من اشعرك بان طيبتك غباء امام وقاحته**.",
  "**هناك من يحلم بالنجاح وهناك من يستيقظ باكرا لتحقيقه**.",
  "**ان تعالج ألمك بنفسك تلك هى القوة**.", 
  "**الجميع يسمع ما تقول والاصدقاء ينصتون لما تقول وافضل الاصدقاء ينصتون لما اخفاه سكوتك**.", 
  "**انتهى زمن الفروسية ، لم تنقرض الخيول بل انقرض الفرسان**.", 
  "**ان تكون اخرسا عاقلا خير من ان تكون نطوقا جهولا**.", 
  "**المناقشات العقيمة لا تنجب افكارا**.", 
  "**نحن نكتب ما لا نستطيع ان نقول وما نريد ان يكون**.", 
  "**نحن نكتب ما لا نستطيع ان نقول وما نريد ان يكون**.", 
]


 client.on('message', message => {
   if (message.content.startsWith("!خواطر")) {
                if(!message.channel.guild) return message.reply('** This command only for servers**');
  var embed = new Discord.RichEmbed()
  .setColor('RANDOM')

   .setThumbnail(message.author.avatarURL) 
 .addField('لعبه خواطر' ,
  `${secreT[Math.floor(Math.random() * secreT.length)]}`)
  message.channel.sendEmbed(embed);
  console.log('[id] Send By: ' + message.author.username)
    }
});






const Love = [  "**احبك / عدد قطرات المـــطر والشجر وامواج البحر والنجوم الي تتزاحم مبهورة في جمال القمر**.",  "**ساعزفك وساجعلك لحنا تغني عليه جميع قصائد العشــق**.",  "**احبك موت... لاتسألني ما الدليل ارأيت رصاصه تسأل القتيل؟**.",  "**ربما يبيع الانسان شيئا قد شراه لاكن لا يبيع قلبا قد هواه**.",  "**و ما عجبي موت المحبين في الهوى ........... و لكن بقاء العاشقين عجيب**.",   "**حلفت / لاحشـــد جيوش الحب واحتلك مسكين ربي بلاك بعـــاشق ارهـــابي**.",   "**العيــن تعشق صورتك ... والقلب يجري فيه دمك وكل مااسمع صوتك ...شفايفي تقول احبك**.",   "**ياحظ المكان فيك..ياحظ من هم حواليك ...ياحظ الناس تشوفك ... وانا مشتاق اليك**.",   "**لو كنت دمعة داخل عيوني بغمض عليك وصدقي ما راح افتح...ولو كان الثمن عيوني**.",   "**سهل اموت عشانك لكن الصعب اعيش بدونك سهل احبك لكن صعب انساك**.",   "**أخشى ان انظر لعيناك وأنا فى شوق ولهيب لرؤياك**.",   "**أتمنى ان اكون دمعة تولد بعينيك واعيش على خديك واموت عند شفتيك**.",   "**أحياناً أرى الحياة لا تساوى إبتسامة لكن دائماً إبتسامتك هى كيانى**.",   "**من السهل أن ينسى الانسان نفسه .. لكن من الصعب ان ينسى نفساً سكنت نفسه !**.",   "**نفسى أكون نجمة سماك .. همسة شفاك .. شمعة مساك .. بس تبقى معايا وانا معاك**.",   "**أهنئ قلبى بحبك وصبر عينى فى بعدك وأقول إنك نور عينى يجعل روحى فدى قلبك**.", ]


 client.on('message', message => {
   if (message.content.startsWith("!حب")) {
                if(!message.channel.guild) return message.reply('** This command only for servers**');
  var embed = new Discord.RichEmbed()
  .setColor('RANDOM')
   .setThumbnail(message.author.avatarURL) 
 .addField('لعبة حب' ,
  `${Love[Math.floor(Math.random() * Love.length)]}`)
  message.channel.sendEmbed(embed);
  console.log('[id] Send By: ' + message.author.username)
    }
});





console.log('mariam ra7t tmot al nas');
client.on('ready', () => {
  console.log(`im redey`);
});
const zead = [
   '*** انا اسمي مريم ***',
   '*** مرحباَ ماهو اسمك ؟ ***',
   `*** اهلا بك ! انا تائهه في هذا المكان  ***`,
   '*** هل تود مساعدتي ؟ ***',
   '*** لماذا هل انت قاسي القلب ؟ ***',
   '*** انني اشفق عليك عليك يجب ان تطهر روحك وتحب الخير للجميع ***',
   '*** ابتعد عني قليل انني متعبة ***',
   '*** هل انت نادم على ماقلت ؟ ***',
   '*** ابتعد عني قليل انني متعبة ***',
   '*** هل انت نادم على ماقلت ؟ ***',
   '*** هل تود مساعدتي ؟ ***',
   '*** واو اشكرك انك شخصاَ رائع ! ***',
   '*** ابحث معي عن منزلي لقد كان قريباَ من هنا ***',
   '*** ولاكن عندما حل الليل لم اعد ارى اي شيء ***',
   '*** مذا تظن اين يوجد ؟ يمين او يسار ***',
   '*** هيا اذاَ ***',
   '*** اود ان اسئلك سؤال ونحن في الطريق ***',
   '*** هل تراني فتاة لطيفة ام مخيفة ***',
   '*** اشكرك !  ***',
   '*** لقد وصلنا الى المنزل شكراَ جزيلَ انتطرني ثواني وسوف اعود ***',
   '*** هل انت جاهز ؟ ***',
   '*** لقد اخبرت والدي عنك وهم متحمسين لرؤيتك ***',
   '*** هل تود ان تراهم الان ***',
'*** انا لست الحوت الازرق كما يدعون ***',
   '*** انا لست كاذبة صدقني***',
   '*** لماذا ارى في عينيك الخوف ؟ ***',
   '*** انا مجرد فتاة لطيفة تحب اللعب مع الجميع ***',
   '*** اعرف كل شيء يحدث اسمع ذالك بالراديو ***',
   '*** سمعت ان البشر يقتلون من اجل المال فقط ***',
   '*** لماذا لم تدخل الغرفة ؟ ***',
   '*** ههههههههههههههههههه انت الان مسجون في هذه الغرفة ***',
   '*** لن تخرج حتى اعود لك بعد قليل ***',
   '*** المفتاح معك ! اكتب .مريم  ***',
   '*** مفتاح احمر , هل حصلت عليه ؟ ***',
   '*** ان لم تحصل عليه , اكتب .مريم مرة اخرى ***',
   '*** مفتاح اسود . هل حصلت عليه ؟ ***',
   '*** اين تريد ان تختبئ بسرعة قبل ان تعود ***',
   '*** لقد عادت من جديد الى المنزل ***',
   '*** لا تصدر اي صوت ! ***',
   '*** مريم : لقد عدت ***',
   '*** مريم : يا ايها المخادع اين انت ***',
   '*** مريم : اعلم انك هنا في المنزل ***',
   '*** مريم : ماذا تريد ان تسمع ***',
   '*** مريم : اضغط على الرابط اهداء مني لك | https://www.youtube.com/watch?v=hvSiuQccmtg ***',
   '*** احد ما خرج من المنزل ***',
   '*** انتظر الجزء الثاني عندما يوصل البوت 100 سيرفر , ساعدني في نشر البوت وادخل هذا السيرفر  ***'
]
 client.on('message', message => {
 if (message.content.startsWith('!مريم')) {
  var mariam= new Discord.RichEmbed()
  .setTitle("لعبة مريم ..")
  .setColor('RANDOM')
  .setDescription(`${zead[Math.floor(Math.random() * zead.length)]}`)
  .setImage("https://www.npa-ar.com/wp-content/uploads/2017/08/%D9%84%D8%B9%D8%A8%D8%A9-%D9%85%D8%B1%D9%8A%D9%85-300x200.jpg")
   message.channel.sendEmbed(mariam);
   message.react("??")
  }
});




const kingmas = [
   '*** منشن الجميع وقل انا اكرهكم. ***',
'*** اتصل على امك و قول لها انك تحبها :heart:. ***',
   '***     تصل على الوالده  و تقول لها  احب وحده.***',
   '*** تتصل على شرطي تقول له عندكم مطافي.***',
   '*** صور اي شيء يطلبه منك الاعبين.***',
   '*** اكتب في الشات اي شيء يطلبه منك الاعبين في الخاص. ***',
   '*** اتصل على احد من اخوياك  خوياتك , و اطلب منهم مبلغ على اساس انك صدمت بسيارتك.***',
   '*** اعطي اي احد جنبك كف اذا مافيه احد جنبك اعطي نفسك و نبي نسمع صوت الكف.***',
   '***  تروح عند شخص تقول له احبك. ***',
   '***روح عند اي احد بالخاص و قول له انك تحبه و الخ.***',
   '*** اذهب الى واحد ماتعرفه وقل له انا كيوت وابي بوسه. ***',
   '*** روح الى اي قروب عندك في الواتس اب و اكتب اي شيء يطلبه منك الاعبين  الحد الاقصى 3 رسائل. ***',
   '*** اذا انت ولد اكسر اغلى او احسن عطور عندك اذا انتي بنت اكسري الروج حقك او الميك اب حقك. ***',
   '*** ذي المرة لك لا تعيدها.***',
   '*** ارمي جوالك على الارض بقوة و اذا انكسر صور الجوال و ارسله في الشات العام.***',
   '*** اتصل على ابوك و قول له انك رحت مع بنت و احين هي حامل..... ***',
   '*** تكلم باللهجة السودانية الين يجي دورك مرة ثانية.***',
   '***سو مشهد تمثيلي عن مصرية بتولد.***',
   '*** قول نكتة اذا و لازم احد الاعبين يضحك اذا محد ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية. ***',
   '*** قول نكتة اذا و لازم احد الاعبين يضحك اذا محد ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية.***',
   '*** سامحتك خلاص مافيه عقاب لك :slight_smile:. ***',
   '*** اذهب الى واحد ماتعرفه وقل له انا كيوت وابي بوسه.***',
   '*** تتصل على الوالده  و تقول لها خطفت شخص. ***',
   '*** روح اكل ملح + ليمون اذا مافيه اكل اي شيء من اختيار الي معك.  ***'
]
 client.on('message', message => {
   var prefix = '-';
 if (message.content.startsWith(prefix + 'حكم')) {
  var mariam= new Discord.RichEmbed()
  .setTitle("لعبة حكم ..")
  .setColor('RANDOM')
  .setDescription(`${kingmas[Math.floor(Math.random() * kingmas.length)]}`)
   message.channel.sendEmbed(mariam);
   message.react(":thinking:")
  }
});





//الترحيب



client.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', 'join');
    let memberavatar = member.user.avatarURL
      if (!channel) return;
    let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(memberavatar)
        .addField('🎽 | name :  ',`${member}`)
        .addField('📢 | نورت السيرفر يا قلبي' , `Welcome to the server, ${member}`)
        .addField('🆔 | user :', "**[" + `${member.id}` + "]**" )
                .addField('➡| انت العضو رقم',`${member.guild.memberCount}`)
               
                  .addField("Name:",`<@` + `${member.id}` + `>`, true)
                     
                                     .addField(' الـسيرفر', `${member.guild.name}`,true)
                                       
     .setFooter(`${member.guild.name}`)
        .setTimestamp()
   
      channel.sendEmbed(embed);
    });
    
    client.on('guildMemberRemove', member => {
        var embed = new Discord.RichEmbed()
        .setAuthor(member.user.username, member.user.avatarURL)
        .setThumbnail(member.user.avatarURL)
        .setTitle(`الله معاك ✋:skin-tone-1: 😔`)
        .setDescription(`مع السلامه تشرفنا بك ✋:skin-tone-1: 😔 `)
        .addField('👤   تبقي',`**[ ${member.guild.memberCount} ]**`,true)
        .setColor('RED')
        .setFooter(`==== نــتــمــنــآ لــكــم آســتــمـــتــآع ====`, 'https://cdn.discordapp.com/attachments/397818254439219217/399292026782351381/shy.png')
    
    var channel =member.guild.channels.find('name', 'welcome')
    if (!channel) return;
    channel.send({embed : embed});
    })


//الترحيب



client.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', 'wel');
    let memberavatar = member.user.avatarURL
      if (!channel) return;
    let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(memberavatar)
        .addField('🎽 | name :  ',`${member}`)
        .addField('📢 | نورت السيرفر يا قلبي' , `Welcome to the server, ${member}`)
        .addField('🆔 | user :', "**[" + `${member.id}` + "]**" )
                .addField('➡| انت العضو رقم',`${member.guild.memberCount}`)
               
                  .addField("Name:",`<@` + `${member.id}` + `>`, true)
                     
                                     .addField(' الـسيرفر', `${member.guild.name}`,true)
                                       
     .setFooter(`${member.guild.name}`)
        .setTimestamp()
   
      channel.sendEmbed(embed);
    });
    
    client.on('guildMemberRemove', member => {
        var embed = new Discord.RichEmbed()
        .setAuthor(member.user.username, member.user.avatarURL)
        .setThumbnail(member.user.avatarURL)
        .setTitle(`الله معاك ✋:skin-tone-1: 😔`)
        .setDescription(`مع السلامه تشرفنا بك ✋:skin-tone-1: 😔 `)
        .addField('👤   تبقي',`**[ ${member.guild.memberCount} ]**`,true)
        .setColor('RED')
        .setFooter(`==== نــتــمــنــآ لــكــم آســتــمـــتــآع ====`, 'https://cdn.discordapp.com/attachments/397818254439219217/399292026782351381/shy.png')
    
    var channel =member.guild.channels.find('name', 'welcome')
    if (!channel) return;
    channel.send({embed : embed});
    })


  client.on('message', ReBeeL => {
  var prefix = "!";
    if(ReBeeL.author.bot) return;
      if(ReBeeL.content.startsWith(prefix + "bcowner")) {
        let args = ReBeeL.content.split(" ").slice(1);
           if(!args[0]) {
              ReBeeL.channel.send("** !bcowner <message> **")
                return;
                  }      
                   var rebel = new Discord.RichEmbed()
                      .setColor("#000000")
                        .setDescription(`
تم إرسآل لك رسآلة من السيرفر الخاص بك 
${ReBeeL.guild.name}
الرسآلة 
${args}
        `)
        .setFooter(` بوآسطة ${ReBeeL.author.username}#${ReBeeL.author.discriminator}`)
       ReBeeL.guild.owner.send(rebel);
      ReBeeL.channel.send("**تم إرسآل الرسآلة إلى أونر السيرفر**")
     }
    }
  );

  






 
  
  
  
  
  
  
  
  
  
  
client.login("NjI0ODQ1NjY3MDU5MjM2ODg0.XYXf5A.XTGjTijfTAp_pMvF04KsaQ3FUMU");