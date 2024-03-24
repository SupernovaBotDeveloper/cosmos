module.exports = ({
    name: "weather",
    code: `
 $title[1;Temperature Requested]
 $description[1;Current temperature of $message: $getObjectProperty[temperature;temp_c] °C]
 $footer[1;$if[$checkCondition[$getObjectProperty[temperature;temp_c]>=30]==true;Sweatin' Day! :fire:innit?;$if[$checkCondition[$getObjectProperty[temperature;temp_c]>=20]==true;Beautiful Day :cherry_blossom:;$if[$checkCondition[$getObjectProperty[temperature;temp_c]<=10]==true;Geez, a cold day! :snowflake:; $if[$checkCondition[$getObjectProperty[temperature;temp_c]<=29]==true;Breezy day innit? :leaves:]]]]
 
 $color[#ECE0D1]
 $createObject[temperature;$getObjectProperty[weather;current]]
 $createObject[weather;$jsonRequest[http://api.weatherapi.com/v1/current.json?key=6503ff348e4649a28e5162811242403  &q=$noMentionMessage&aqi=no]  
 $suppressErrors[Invalid City/Country Name]
 `
 })