module.exports = ({
    name: 'withdraw',
    aliases: 'with',
    $if: "old",
    code: 
    `
    $if[$message[1]==all]
$setGlobalUserVar[Bank;$sub[$getGlobalUserVar[Bank];$getGlobalUserVar[Bank]]]
$setGlobalUserVar[Money;$sum[$getGlobalUserVar[Bank];$getGlobalUserVar[Money]]]
$title[Withdrew]
$thumbnail[$userAvatar[$authorID]]
$color[Random]
$description[$username You withdrew all of your bank balance!]
$argsCheck[1;How much are you withdrawing?]
  $onlyIf[$getGlobalUserVar[Bank;$authorID]>0;There's nothing to withdraw!]
$else
$setGlobalUserVar[Money;$sum[$getGlobalUserVar[Money;$authorID];$message];$authorID]
  $setGlobalUserVar[Bank;$sub[$getGlobalUserVar[Bank;$authorID];$message];$authorID]
  $title[Withdrew]
  $thumbnail[$userAvatar[$authorID]]
  $color[Random]
  $description[
  $username, you withdrew $customEmoji[cosmiccoin;970674100982906931]$numberSeparator[$message] from your bank!]
  $onlyIf[$message[1]<=$getGlobalUserVar[Bank;$authorID];Cannot withdraw more than what's in your bank!]
  $onlyIf[$isNumber[$message[1]]==true;That's not a number!]
  $argsCheck[1;How much are you withdrawing?]
  $onlyIf[$getGlobalUserVar[Bank;$authorID]>0;There's nothing to withdraw!]
  $endIf`
  })