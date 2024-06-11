import express from 'express'
const app = express()
const port = 3000

app.get('/howitworks', (req, res) => res.send('Hello World!'));
app.get('/'), (req, res) => { }
app.listen(port, () => console.log(`App listening on port ${port}!`))