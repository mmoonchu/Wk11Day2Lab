const express = require('express');
const app = express();
app.listen('3000', (req, res) => {
    console.log("Server is currently running on port 3000");
})

app.get( '/', (req, res) => {
    res.send('<h1>Yello World</h1>');
} );
app.get( '/greeting/:name', (req, res) => {
    res.send(`<h1>Hello, ${req.params.name}</h1>`);
})

app.get( '/tip/:total/:tipPercentage', (req, res) => {
    function calcTip(total, percentage) {
        return (total*(percentage/100));
    }
    res.send(`<h1>${calcTip(req.params.total, req.params.tipPercentage)}</h1>`)
})