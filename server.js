const express = require('express');
const app = express();
app.listen('3000', (req, res) => {
    console.log("Server is currently running on port 3000");
})

// Greetings
app.get( '/greeting/:name', (req, res) => {
    res.send(`<h1>Hello, ${req.params.name}</h1>`);
})

// Tip Calculator
app.get( '/tip/:total/:tipPercentage', (req, res) => {
    function calcTip(total, percentage) {
        return (total*(percentage/100));
    }
    res.send(`<h1>${calcTip(req.params.total, req.params.tipPercentage)}</h1>`)
})

// Magic 8 Ball
const magic8BallResponses = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"];
app.get( '/magic/:question', (req, res) => {
    function stringifyQuestion(question) {
        return question.split('%20').join(' ');
    }
    function getRandomResponse() {
        return magic8BallResponses[Math.floor(Math.random() * magic8BallResponses.length)];
    }
    res.send(`<h2>${stringifyQuestion(req.params.question)}</h2><br/>
    <h1>${getRandomResponse()}</h1>`)
})