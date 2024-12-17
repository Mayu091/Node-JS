const express = require ('express')
const app = express();

app.get('', (req, resp) => {
    resp.send(`
        <h1>Welcome to the Home Page</h1>
        <a href = "/about"> Go to about page </a>
         `);
})

app.get('/About', (req, resp) => {
    resp.send(`
        <input type = "text" placeholder = "user name" />
        <button>Click here</button>
        <a href = "/"> Go to home page </a>
        `);
})

app.get('/Contact', (req, resp) => {
    resp.send([
        {
        name: 'koto',
        contact: '9999'
    },
    {
        name: 'gumi',
        contact: '9090'
    }
]);
})


app.listen(5000);