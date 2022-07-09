
// Imports
const express = require('express')
const app = express()
const port = process.env.PORT || 8080

// Static Files
app.use(express.static('public'));


// Set View's
app.set('views', './views');
app.set('view engine', 'ejs');

// Navigation
app.get('', (req, res) => {
    res.render('index',{text : 'Hello stdimitrov05 👨‍💻'})
})

app.get('/contact', (req, res) => {
   res.sendFile(__dirname + '/views/contact.html')
})


app.listen(port, () => console.info(`App listening on port ${port}`))