module.exports = [{
    name: "purge",
    aliases: "clear",
    description: "This command allows moderators to purge the messages on current channel or the channel they have mentioned, this command require 'Manage Messages' permission to be execute.",
    usage: ".purge <amount> #channel(optional)",
    code: `
    Purged $noMentionMessage message(s) on <#$mentionedChannels[1;true]>
    $clear[$channelID;$nomentionmessage;everyone;false]
    $onlyIf[$noMentionMessage<=500;{newEmbed: {title:Error}{description:Unable to clear over 500 messages!}{color:Red}}]
    $onlyIf[$noMentionMessage>0;{newEmbed: {title:Minimun Amount}{description:Must atleast purge 1 message!}{color:Red}}]
    $onlyIf[$isNumber[$noMentionMessage]!=false;{newEmbed: {title:Not A Valid Numbers}{description:Please type a valid numbers!}{color:Red}}}]
    $argsCheck[>0;{newEmbed: {title:Invalid Arguments}{description:$getGuildVar[prefix]purge 10}{color:Red}}}]
    $onlyClientPerms[managemessages;{newEmbed:{title:Missing Permission}{description:In this command I'm require to have "Manage Messages" permission to do that.}{color:Red}}]
    $onlyPerms[managemessages;{newEmbed:{title:Missing Permission}{description:This command user are required to have "Manage Messages" permission to be execute.}{color:Red}}]`
    }]