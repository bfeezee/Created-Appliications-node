const express = require('express');
const app = express ();


app.get('/', (req, res) => {
    res.send('<h1>Express Demo App</h1> <h4>With Node JS</h4> <p>Being updated via Elastic Beanstalk in AWS</p>');
});

const port = process.env.port || 3000;
app.listen(port, ()=> {
    console.log('Demo app is up and listening to port: ${port}');
});
