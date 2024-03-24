module.exports = ({
    name: "kick",
    code: `
    $description[**<@$mentioned[1]> was kicked by <@$authorID>!**]
    $color[Red]
    $kick[$guildID;$mentioned[1];]
    $argsCheck[>0;**Please Mention someone to kick**]
    $onlyPerms[kickmembers;**You don't have permission to kick**]
    $onlyClientPerms[kickmembers;**I don't have Permission to kick**]
    $suppressErrors[**An Error Occured!**]
    `
})