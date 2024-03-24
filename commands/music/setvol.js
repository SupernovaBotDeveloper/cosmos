module.exports = {
    name: "setvolume",
    aliases: "setvol",
    code: `
    **Set the Volume to $message[1]**
    $volume[$message[1]]
    $onlyIf[$isNumber[$message[1]]==true;That's not a number!]`
}