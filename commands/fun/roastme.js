module.exports = ({
    name: "roastme",
    code: `
      $reply
      $jsonRequest[https://evilinsult.com/generate_insult.php?lang=en&type=json;insult;error]
      `
  });