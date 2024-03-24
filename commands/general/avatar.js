module.exports = [{
    name: "avatar",
    aliases: "av",
    category: "moderation",
    usage: "{prefix}avatar @user",
    code:`
  
    $sendMessage[{newEmbed:{title:$username[$get[user]]'s user avatar}{description:**Alternate Links**
  [png]($userAvatar[$get[user];4096;true;png]) | [jpg]($userAvatar[$get[user];4096;true;jpg]) | [webp]($userAvatar[$get[user];4096;true;webp]) | [jpeg]($userAvatar[$get[user];4096;true;jpeg]) | [gif]($userAvatar[$get[user];4096;true;gif])}{timestamp}{image:$userAvatar[$get[user]]}}
  ]
  
    $let[user;$findUser[$message[1]]]
  
    
    `
  }]