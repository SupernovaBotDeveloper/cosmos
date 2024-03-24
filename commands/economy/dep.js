module.exports = ({
    name: "deposit",
    aliases: 'dep',
    $if: "old",
    code: `
    $if[$message[1]==all]
    $setGlobalUserVar[Money;$sub[$getGlobalUserVar[Money];$getGlobalUserVar[Money]]]
$setGlobalUserVar[Bank;$sum[$getGlobalUserVar[Bank];$getGlobalUserVar[Money]]]

$title[Deposited]
$thumbnail[$userAvatar[$authorID]]
$color[Random]
$description[$username, You deposited everything in your account!]
$onlyIf[$getGlobalUserVar[Money;$authorID]>0;There's nothing to deposit]
$argsCheck[1;How much are you depositing? Try this: \`$getGuildVar[prefix]dep <amount>/all\`]
$else
$setGlobalUserVar[Bank;$sum[$getGlobalUserVar[Bank;$authorID];$message];$authorID] $setGlobalUserVar[Money;$sub[$getGlobalUserVar[Money;$authorID];$message];$authorID]
    $title[Deposited]
    $thumbnail[$userAvatar[$authorID]]
    $color[Random]
    $description[
    $username, you deposited $customEmoji[cosmiccoin;970674100982906931]$numberSeparator[$message] into your bank!]
    $onlyIf[$isNumber[$message[1]]==true;That's not a number!]
    $onlyIf[$message[1]<=$getGlobalUserVar[Money;$authorID];Cannot deposit more than what's in your wallet!]
    $argsCheck[1;How much are you depositing? Try this: \`$getGuildVar[prefix]dep <amount>\`]
    $onlyIf[$getGlobalUserVar[Money;$authorID]>0;There's nothing to deposit]
    $endIf`
    })