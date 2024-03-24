module.exports = {
    name: "play",
    aliases: "p",
    code: `
  Now Playing! **$songInfo[title]**
  $playTrack[$message;youtube]
  $joinVC[$voiceID;yes;no;yes;default;no]
  $onlyIf[$checkContains[$message;fuck;sex;nigger;fucking;nigga]==false;**Please don't use prohibited language**]
  ` 

}