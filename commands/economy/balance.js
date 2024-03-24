module.exports = ({
    name: "balance", 
    aliases: "bal",
    description: "Check your or someone's balance",
    code: `$thumbnail[$userAvatar[$mentioned[1;true]]]
    $color[Random]
    $title[$username[$mentioned[1;true]]'s Balance]
    $description[
    $addField[$customEmoji[cash;970674100982906931] Net Worth;
    **$numberSeparator[$sum[$getGlobalUserVar[Money;$mentioned[1;true]];$getGlobalUserVar[Bank;$mentioned[1;true]]]

$addField[$customEmoji[bankcosmic;970674100982906931] Bank;
**$numberSeparator[$getGlobalUserVar[Bank;$mentioned[1;true]]]**
]
    
$addField[$customEmoji[cosmiccoin;970674100982906931] Cosmic Coins;
    **$numberSeparator[$getGlobalUserVar[Money;$mentioned[1;true]]]**
    ]]**
    ]]`
    })