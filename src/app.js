const path = require('path')
var hbs = require('hbs')
const express = require('express')
const forcast = require('../src/Utils/forecast.js')

const app = express()

//Define PAth For Express Config 
const publicDirPath = path.join(__dirname, '../public')
const viewPath = path.join(__dirname, '../template/views')
const partialsPath = path.join(__dirname, '../template/partials')

//Setup Handebar enfine and loaction for files for view
app.set('view engine', 'hbs')
app.set('views', viewPath)
hbs.registerPartials(partialsPath)


//Setup Static Directory to serve
app.use(express.static(publicDirPath))

app.get('/', (req, res)=>{ 
    res.render('index', {
        title : 'wather',
        name: 'Sunny Bhandare'
    })
})

//about page 
app.get('/about', (req, res)=>{
    res.render('about', {
        name: 'Sunny BHandare  ',
        title: 'About'
    })
})

//help page 
app.get('/help', (req, res)=>{
    res.render('help', {
        massage: 'if you wanna help plese Call',
        title: 'help',
        contact: '9623732884',
        name: 'sunny Bhadnare'
    })
})


//Wather rout 
app.get('/weather', (req, res)=>{

    if (!req.query.adress){
        return res.send({
            error: 'You must provide an address'
        })
    }


    const adress = req.query.adress;
    forcast(req.query.adress, (error, body)=>{
        // if(error){
        //     console.log('Something went wrong with forcast function may be adress')
        //     return;
        // }
        // else{
            const forcastWeather = "Coords for location = Lon :- " +body.coord.lon + " Lat :- " +body.coord.lat+ " Weather is :-  " + body.weather[0].main +  " Wind :- " +body.wind.speed+ " sunrise at :- " +body.sys.sunrise + " And Sunset at :- " +body.sys.sunset+" ";                                                     
            res.send({
                Location: body.name,
                forcast: forcastWeather
            })
            console.log(body.name)
        //}
    })

    // res.send({
    //     forcast: 'location',
    //     location: 'somethins',
    //     adress: adress.toString()
    // })


})

app.get('/product', (req, res)=>{
    if (!req.query.search){
        return res.send({
            error: 'you must provide a serch item '
        })
    }
    console.log(req.query.search)
    res.send({
        product: []
    })
})



app.get('/help/*', (req, res)=>{
    res.render('ErrorPage', {
        error: 'help Article not found' 
    })
})

app.get('*', (req, res)=>{
    res.render('ErrorPage', {
        error: 'page Not Found' 
    })
})

app.listen(3000, ()=>{
    console.log('Sever is up on port 3000')
})



