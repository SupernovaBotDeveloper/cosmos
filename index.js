const { AoiClient } = require("aoi.js");
const { AoiVoice, PlayerEvents, PluginName, Cacher, Filter } = require("@akarui/aoi.music");

 const client = new AoiClient({
  token: "",
  prefix: "$getGuildVar[prefix]",
  intents: ["MessageContent", "Guilds", "GuildMessages", "GuildVoiceStates"],
  events: ["onMessage", "onInteractionCreate"],
  database: {
    type: "aoi.db",
    db: require("@akarui/aoi.db"),
    dbType: "KeyValue",
    tables: ["main"],
    securityKey: "akshayalok123456789akshayalok123",
  }
 });

 require('dotenv').config()

 const voice = new AoiVoice(client, {
  searchOptions: {
    soundcloudClientId: "", // optional
    youtubegl: "US",
  },
  requestOptions: {
    offsetTimeout: 0,
    soundcloudLikeTrackLimit: 200,
  },
});

 client.loadCommands("./commands/", true);

 client.variables(
  {
        afk: false,
        afkmsg: "None",
        time: "",
        prefix: "c!",
        muterole: "",
        warn: "0",
        Money: "",
        Bank: "",
        BankLimit: "10000",
        BankIncrease: "0",
    
        
  }
 );

  client.interactionCommand({
    name: "help",
    prototype: "slash", // button/selectMenu/slash
    code: `
    $interactionReply[Hello! $username

    **These are the Available commands for now!:-**

    **🛠️Moderation**
    \`ban,createmuterole,kick,mute,nuke,purge,setmuterole,setprefix,unban,warn\`

    **⚙️General**
    \`afk,avatar,botinfo,help,ping,poll,remind,serverinfo\`

    **💵Economy**
    \`balance,beg,daily,dep,lb,with,work\`

    **🎵Music**
    \`leavevc,loop,pause,play,queue,resume,setvolume,volume,stop\`
    ;;;;everyone;false]

    `
  });

  client.interactionCommand({
    name: "ping",
    prototype: "slash", // button/selectMenu/slash
    code: `
    $interactionReply[**$pingms**;;;;everyone;false]

    `
  });

  client.interactionCommand({
    name: "example",
    prototype: "slash",
    code: `
    $interactionReply[**Hello, Welcome to Cosmos! Get Started by using \`/help\` or \`$getGuildVar[prefix]help\`**]`
  })

  client.status({
    name: "c!help | $guildCount Servers",
    type: "PLAYING",
    time: 12,
  });


  voice.addPlugin(PluginName.Cacher, new Cacher("memory" /* or "disk" */));
  voice.addPlugin(
    PluginName.Filter,
    new Filter({
      filterFromStart: false,
    }),
  );

  voice.bindExecutor(client.functionManager.interpreter);
