const express = require('express');
const app = express ();


app.get('/', (req, res) => {
    res.send('<h1>Express Demo App</h1> <h4>With Node JS</h4> <p>Being updated via Elastic Beanstalk in AWS</p>');
});

const port = process.env.port || 4000;
app.listen(port, ()=> {
    console.log("This is the 4th version of this node application");
});
