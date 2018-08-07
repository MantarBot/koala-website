   const http = require('http');
const express = require('express');
const app = express();

const Discord = require('discord.js');
const client = new Discord.Client()

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static('public'));
app.get("/", function(request, response) {
    response.sendFile(__dirname + '/main.html');
});

var listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
/*app.get('/api/stats', (req, res) => {
    res.send({guildCount: bot.guilds.size, uptime: bot.uptime, ping: bot.ping, userCount: bot.users.size, messages: bot.messages, start: bot.startedAt, channels: bot.channels.size, data: client });
});*/
app.get('/dev', (req, res) => {
    res.send({guildCount: bot.guilds.size, uptime: bot.uptime, ping: bot.ping, userCount: bot.users.size, messages: bot.messages, start: bot.startedAt, channels: bot.channels.size,dev: "My owner is Tea Cup#9999"});
});



app.get('/stats/styles', (req, res) => {
    res.sendFile(process.cwd() + '/web/htmlCss/stats/index.css');
});

app.get('/stats/js', (req, res) => {
    res.sendFile(process.cwd() + '/web/htmlCss/stats/index.js');
});
app.get("/commands", function(request, response) {
    response.sendFile(__dirname + '/public/commands.html');
})
app.get("/bc", function(request, response) {
    response.sendFile(__dirname + '/public/bc.html');
});
app.get("/eco", function(request, response) {
    response.sendFile(__dirname + '/public/eco.html');
});
app.get("/mod", function(request, response) {
    response.sendFile(__dirname + '/public/mod.html');
});
app.get("/wiki", function(request, response) {
    response.sendFile(__dirname + '/public/wiki.html');
});
app.get("/list", function(request, response) {
    response.sendFile(__dirname + '/public/list.html');
});
const DBL = require("dblapi.js");
const dbl = new DBL('DBL_TOKEN', client);

 dbl.getBot
  (`453601455698608139`
            ).then(async b => {
    console.log(`Votes: ${b.points}`)
   app.get('/stats', (req, res) => {
    res.render(process.cwd() + '/web/htmlCss/stats/index.ejs', {guildCount: bot.guilds.size, uptime: bot.uptime,  upvoteCount: b.points, data: client.user, user: client, ping: bot.ping, userCount: bot.users.size, messages: bot.messages, process: process, os: require('os')});
   })
   });



app.get('/styles', (req, res) => {
    res.sendFile(process.cwd() + '/web/htmlCss/index.css');
});






app.get('/invite', (req, res) => {
    res.redirect('https://discordapp.com/oauth2/authorize?client_id=453601455698608139&permissions=46958591&redirect_uri=https%3A%2F%2Fdiscordbots.org%2Fbot%2F453601455698608139&scope=bot');
});
app.get('/server', (req, res) => {
    res.redirect('https://discord.gg/fp4PMrT');
});
app.get("/", (request, response) => {
    console.log(Date.now() + " Ping Received");
    response.sendStatus(200);
});

setInterval(() => {
    http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

client.on('ready', ()=> {
  web = require('./web/index.js')(bot);
  });
  
  client.login("BOT_TOKEN")