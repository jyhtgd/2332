import express, { response } from "express"
import hbs from 'hbs'

const app = express()

const helpers = {
    getTime: (text) => {
        return text.toUpperCase()
    }
}
app.engine('hbs', handlebars.engine({
    defaultLayout: 'global',
    layoutDir:import.meta.dirname + '/views/layouts',
    partialsDir:import.meta.dirname + '/views/partials',
    extname: 'hbs'
}))

app.set('view engine', 'hbs')

app.get('/', (_, response) => {
    response.render('index', {
        content: 'HBS',
        isEmailVisible: true
        ,
        emails: ['user@example', 'admin@example']
    })
})

app.listen(3000)