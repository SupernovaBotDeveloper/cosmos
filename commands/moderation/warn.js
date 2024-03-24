module.exports = [{
    name: "warn",
    description: "This command allows moderators to warn the member they mentioned, this command require 'Manage Messages' permission to be execute.",
    usage: ".warn @user",
    code: `
    $sendDm[You've been warned by <@$authorID> on **$guildName**\nReason: *$replaceText[$replaceText[$checkCondition[$noMentionMessage==];true;None];false;$noMentionMessage]*;$mentioned[1;false]]
    $onlyIf[$isBot[$mentioned[1;false]]==false;]
    $title[1;User Warned]
    $description[1;<@$mentioned[1;false]> have been warned by <@$authorID>\nReason: $replaceText[$replaceText[$checkCondition[$noMentionMessage==];true;None];false;$noMentionMessage] ]
    $color[1;Red]
    $setUserVar[warn;$sum[$getUserVar[warn;$mentioned[1;false]];1];$mentioned[1;false]]
    $onlyIf[$mentioned[1;false]!=$clientID;{newEmbed: {title:Warn Fail}{description:I can't warn myself!}{color:Red}}]
    $onlyIf[$mentioned[1;false]!=$authorID;{newEmbed: {title:Warn Fail}{description:You can't warn yourself!}{color:Red}}]
    $onlyIf[$mentioned[1;false]!=undefined;{newEmbed: {title:Unknown User}{description:Please mention a valid user that are on the server!}{color:Red}}]
    $onlyPerms[managemessages;{newEmbed:{title:Missing Permission}{description:This command user are required to have "Manage Messages" permission to be execute.}{color:Red}}]`
    }]