module.exports = ({
    name: "poll",
    aliases: ['survey'],
    description: "Make a poll! (Up to 10 options only)",
    usage: "poll <question/option 1/option 2/...>",
    category: "miscellaneous",
    code: `$color[Random]
    $author[Made by $userTag;$authorAvatar]
    $addField[Options; 
 1️⃣ - $replaceText[$replaceText[$checkCondition[$splitText[2]==];false;$splitText[2]];true;None] 2️⃣ - $replaceText[$replaceText[$checkCondition[$splitText[3]==];false;$splitText[3]];true;None]
  $replaceText[$replaceText[$checkCondition[$splitText[4]==];false;3️⃣ - $splitText[4]];true;]
  $replaceText[$replaceText[$checkCondition[$splitText[5]==];false;4️⃣ - $splitText[5]];true;]
  $replaceText[$replaceText[$checkCondition[$splitText[6]==];false;5️⃣ - $splitText[6]];true;]
  $replaceText[$replaceText[$checkCondition[$splitText[7]==];false;6️⃣ - $splitText[7]];true;]
  $replaceText[$replaceText[$checkCondition[$splitText[8]==];false;7️⃣ - $splitText[8]];true;]
  $replaceText[$replaceText[$checkCondition[$splitText[9]==];false;8️⃣ - $splitText[9]];true;]
  $replaceText[$replaceText[$checkCondition[$splitText[10]==];false;9️⃣ - $splitText[10]];true;]
  $replaceText[$replaceText[$checkCondition[$splitText[11]==];false;🔟 - $splitText[11]];true;]]
    $addField[Question; $splitText[1]]
    $addTimestamp
    $addclientreactions[$channelid;$messageid;1️⃣;2️⃣;$replaceText[$replaceText[$checkCondition[$splitText[4]==];false;3️⃣];true;];$replaceText[$replaceText[$checkCondition[$splitText[5]==];false;4️⃣];true;];$replaceText[$replaceText[$checkCondition[$splitText[6]==];false;5️⃣];true;];$replaceText[$replaceText[$checkCondition[$splitText[7]==];false;6️⃣];true;];$replaceText[$replaceText[$checkCondition[$splitText[8]==];false;7️⃣];true;];$replaceText[$replaceText[$checkCondition[$splitText[9]==];false;8️⃣];true;];$replaceText[$replaceText[$checkCondition[$splitText[10]==];false;9️⃣];true;];$replaceText[$replaceText[$checkCondition[$splitText[11]==];false;🔟]
    $deletecommand
    $textSplit[$message;/]
    $onlyIf[$splitText[12]!=false;**You can have only up to 10 Options**]
    $onlyIf[$message!=;**Specify a message to make a poll**]
    $onlyClientPerms[addreactions;❌ I require these permissions - **Add Reactions**]
     $onlyPerms[managemessages;❌ You require these permissions - **Manage Messages**]
     $onlyIf[$checkContains[$channelType;text;news]==true;]
    `
 })