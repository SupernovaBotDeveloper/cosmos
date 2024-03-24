module.exports = [{
    name: "mute",
    description: "This command allows moderators to mute the member they mentioned, this command require 'Manage Roles' permission to be execute.",
    usage: ".mute @user",
    code: `$ifAwaited[$isBot[$mentioned[1;false]]==true;{execute:mutebot};{execute:mutemember}]
    $title[1;Muted Member]
    $description[1;<@$mentioned[1;false]> have been muted by <@$authorID>\nReason: $replaceText[$replaceText[$checkCondition[$noMentionMessage==];true;None];false;$noMentionMessage]]
    $color[1;Red]
    $giveRole[$guildID;$mentioned[1;false];$getGuildVar[muterole];$replaceText[$replaceText[$checkCondition[$noMentionMessage==];true;None];false;$noMentionMessage]]
    $onlyIf[$hasRoles[$guildID;$mentioned[1;false];$getGuildVar[muterole]]!=true;That member have already been muted!]
    $onlyIf[$getGuildVar[muterole]!=0;{newEmbed: {title:Mute Role}{description:Please setup your mute role by typing \`\`$getGuildVar[prefix]muterole\`\`\nOr type \`\`$getGuildVar[prefix]createmute\`\`}{color:Red}}]
    $onlyIf[$rolePosition[$userHighestRole[$clientID;$guildID;id];$guildID]!=$rolePosition[$userHighestRole[$mentioned[1;false];$guildID;id];$guildID];Unable to mute someone that have same role position with me.]
    $onlyIf[$rolePosition[$userHighestRole[$authorID;$guildID;id];$guildID]!=$rolePosition[$userHighestRole[$mentioned[1;false];$guildID;id];$guildID];Unable to mute someone that have same role position with you.]
    $onlyIf[$rolePosition[$userHighestRole[$clientID;$guildID;id];$guildID]<=$rolePosition[$userHighestRole[$mentioned[1;false];$guildID;id];$guildID];Unable to mute someone that have higher role position than me.]
    $onlyIf[$rolePosition[$userHighestRole[$authorID;$guildID;id];$guildID]<=$rolePosition[$userHighestRole[$mentioned[1;false];$guildID;id];$guildID];Unable to mute someone that have higher role position than you.]
    $onlyIf[$mentioned[1;false]!=$clientID;{newEmbed: {title:Mute Fail}{description:I can't mute myself!}{color:Red}}]
    $onlyIf[$mentioned[1;false]!=$authorID;{newEmbed: {title:Mute Fail}{description:You can't mute yourself!}{color:Red}}]
    $onlyIf[$mentioned[1;false]!=undefined;{newEmbed: {title:Invalid Member}{description:Please mention a valid members that are on the server!}{color:Red}}]
    $onlyClientPerms[manageroles;{newEmbed:{title:Missing Permission}{description:In this command I'm require to have "Manage Roles" permission to do that.}{color:Red}}]
    $onlyPerms[manageroles;{newEmbed:{title:Missing Permission}{description:This command user are required to have "Manage Roles" permission to be execute.}{color:Red}}]
    `
    },{
        name: "mutebot",
        type: "awaited",
        code: `$log[Unable to send dm message to a bot, Bot ID: $mentioned[1;false] Bot Name: $userTag[$mentioned[1;false]]]`
    },{
        name: "mutemember",
        type: "awaited",
        code: `$sendDm[You've been muted by <@$authorID> on **$guildName**\nReason: *$replaceText[$replaceText[$checkCondition[$noMentionMessage==];true;None];false;$noMentionMessage]*;$mentioned[1;false]]`
    }]