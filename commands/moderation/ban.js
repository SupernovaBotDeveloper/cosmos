module.exports = ({
    name: "ban",
    code: `
    $description[**<@$mentioned[1]> was banned by <@$authorID>!**]
    $color[Red]
    $ban[$guildID;$mentioned[1];7;]
    $argsCheck[1;**Please Mention someone to ban**]
    $onlyPerms[banmembers;**You don't have permission to ban**]
    $onlyClientPerms[banmembers;**I don't have Permission to ban**]
    $suppressErrors[**An Error Occured!**]
    `
})