const app = require('./app')
const config = require('./app/config/config')

const port = config.app.port
app.listen(
    port ,
    () => {
        console.log(`Server Now Running at Port ${3000}`)
    }
)