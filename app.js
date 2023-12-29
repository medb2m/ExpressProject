const express = require('express')
const morgan = require('morgan')

const app = express()


const hostname = '127.0.0.1'
const port = process.env.PORT || 9090

app.use(morgan('dev'))

// Definition du moteur d'affichage
app.set('view engine', 'ejs')
app.set('views', 'IHM')


app.get('/', (req,res) => {
    const name = "Med ben Med"
    const Marks = [{Subject : "Math", Note : "80"},{Subject : "JS", Mark : "99"},]
    res.status(200).render('home', {name, Marks})
})

app.get('/about', (req,res) => {
    res.status(200).render('about')
})

app.use('/home',(req,res)=>{
    res.redirect('/')
})

app.use((req,res)=>{
    res.status(404).render('notFound')
})

app.listen(port, hostname, ()=> {
    console.log(`Server running at http://${hostname}:${port}/`)
})