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
app.get("/",  (req, res) => {
let e =bot.guilds.get("453600107191861271") 
let mem = client.users.size
let ava = "https://cdn.discordapp.com/icons/453600107191861271/24fdefe13c1abcf811d6d3baf1e900ae.jpg"

console.log(`Someone is looking at the website!`)
let guilds = client.guilds.size
  res.render(process.cwd() + '/views/main.ejs', {members: mem , icon: ava , g: guilds});
})

var listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
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
app.get('/feedback', (req, res) => {
    res.redirect('https://koalainc.glitch.me/login');
});
app.get("/partners", function(request, response) {
    response.sendFile(__dirname + '/public/partners.html');
});
app.get('/invite', (req, res) => {
    res.redirect('https://discordapp.com/oauth2/authorize?client_id=453601455698608139&scope=bot&permissions=2146958847');
});
app.get('/server', (req, res) => {
    res.redirect('https://discord.gg/fp4PMrT');
});
app.get("/", (request, response) => {
    console.log(Date.now() + " Ping Received");
    response.sendStatus(200);
});

app.get('/profile/:id', (req, res) => {
bot.fetchUser(req.params.id).then(async e => {
let username =e.username
let  ava = e.displayAvatarURL.split('?')[0]
let id = e.id
let b;

let balanc = await db.fetch(`userBalance_${id}`)
if(balanc === null)balanc = "0";
 let des = await db.fetch(`desc_${id}`);
  if(des === null) des = "No Description Set";
  
   sql.get(`SELECT * FROM scores WHERE userId ="${id}"`).then(async row => {
  
     let p = row.points
   let l = row.level
   
   if(p === undefined)p = "1";
  if(l === undefined)l = "0"
  let rank= `${p} points | ${l} Level`
  let rank2 ;
  if(id === "338192747754160138") rank2 = "Special Rank: Koala's Owner"; //tea
  if(id === "293140948416856064") rank2 = "Special Rank: Koala's mentor"; //shadat
  if(id === "244492419196911616") rank2 = "Special Rank: Koala Staff"; //normalmonkey
  if(id === "364007557045551106") rank2 = "Special Rank: Head Of Staff"; //end
  if(id === "478309013512126483") rank2 = "Special Rank: Proficient"; //noneoftheabove

    res.render(process.cwd() + '/web/htmlCss/profile/index.ejs', {user: username , balance: balanc , avatar: ava , rank: rank , desc: des , rank2: rank2});
})
})
});

app.get('/partner/example', (req, res) => {
bot.fetchUser("453601455698608139").then(async e => { //serifix
  bot.fetchUser("338192747754160138").then(async d => { //shadat
let username =e.username
let  ava = e.displayAvatarURL.split('?')[0]
let id = e.id

let dev = d.tag
let da = d.displayAvatarURL.split('?')[0]
let did = d.id
let t = `Bot: ${username}`;
let des = "Your server!";
    let i ="https://discord.gg/n5yccu9"
   //out = out.sort(function(a, b){return b.balance - a.balance})
    res.render(process.cwd() + '/web/htmlCss/partner/index.ejs', {user: username , dev: dev , avatar: ava , da: da , di: did , desc: des , t:t , i:i});
})
  })

});

app.get('/about', (req, res) => {

let o =bot.guilds.get("453600107191861271")
let s = bot.guilds.get("412367258694975499")
console.log("Someone just used ABOUT!")
bot.fetchUser("293140948416856064").then(async d => { //shadat
bot.fetchUser("338192747754160138").then(async f => { //teacup
bot.fetchUser("364007557045551106").then(async g => { //end
  
let tavatar = f.displayAvatarURL.split('?')[0]
let savatar = d.displayAvatarURL.split('?')[0]
let eavatar = g.displayAvatarURL.split('?')[0]

let sev = o.iconURL
let eva = s.iconURL
  res.render(process.cwd() + '/web/htmlCss/about/index.ejs', {tavatar: tavatar , savatar: savatar , eavatar: eavatar ,  sev: sev , eva: eva});
})
  
})
  })

});


app.get("/updates", function(request, response) {
    response.sendFile(__dirname + '/public/updates.html');
});

const DBL = require("dblapi.js");
const dbl = new DBL('DBL_TOKEN', client); // Go here for the token https://discordbots.org/

 dbl.getBot
  (`453601455698608139`
            ).then(async b => {
    console.log(`Votes: ${b.points}`)
   app.get('/stats', (req, res) => {
    res.render(process.cwd() + '/web/htmlCss/stats/index.ejs', {guildCount: bot.guilds.size, uptime: bot.uptime,  upvoteCount: b.points, data: client.user, user: client, ping: bot.ping, userCount: bot.users.size, messages: bot.messages, process: process, os: require('os')});
   })
   });





setInterval(() => {
    http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

client.on('ready', ()=> {
  web = require('./web/index.js')(bot);
  });
  
  client.login("BOT_TOKEN")
