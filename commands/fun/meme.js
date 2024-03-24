module.exports = {
name: "meme",
code: `
$author[r/$getObjectProperty[api;subreddit] | u/$getObjectProperty[api;author]]
$title[$getObjectProperty[api;title]]
$image[$getObjectProperty[api;url]]
$footer[⬆️ $getObjectProperty[api;ups]]
$color[Random]
$createObject[api;$jsonRequest[https://meme-api.com/gimme]]
`
}