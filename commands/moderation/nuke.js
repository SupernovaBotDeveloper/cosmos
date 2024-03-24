module.exports = [{
    name: "nuke",
    description: "KAA BOOM",
    code: `$title[1;Are You Sure You Want To Nuke?]
    $description[1;:warning: This action will delete current channel and clone another one, are you sure you want to do it?]
    $color[1;Orange]
    $addButton[1;No;danger;nukeno;false]
    $addButton[1;Yes;success;nukeyes;false]
    $onlyClientPerms[managechannels;I need "Manage Channels" permission.]
    $onlyPerms[managechannels;You need "Manage Channels" permission.]`
    },{
        name: "nukeyes",
        type: "interaction",
        prototype: "button",
        code: `$deleteMessage[$get[msgid];$get[id]]
    $wait[5s]
    $let[msgid;$channelSendMessage[$get[id];{newEmbed: {title:Nuked}{description:Successfully nuked <#$get[id]>}{color:Blue}};true]]
    $deleteChannel[$channelID]
    $let[id;$cloneChannel[$channelID;$channelName[$channelID];true]]
    $wait[2s]
    $sendMessage[$interactionUpdate[;{newEmbed: {title:Nuking Channel...}{description:Nuking <#$channelID>, please wait....}{color:Green}};{actionRow: {button:Yes:success:nukeyes:true}{button:No:danger:nukeno:true}};;everyone;false]]`
    },{
        name: "nukeno",
        type: "interaction",
        prototype: "button",
        code: `$interactionUpdate[;{newEmbed: {title:Nuke Canceled}{description:Canceled the nuke.}{color:Red}};{actionRow: {button:Yes:success:nukeyes:true}{button:No:danger:nukeno:true}};;everyone;false]`
    }]