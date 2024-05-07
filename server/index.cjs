import express from 'express'
import indexRoutes from './routers/index.routes.cjs'
import fileUpload from 'express-fileupload'
import imagesRoutes from'./routers/images.routes.cjs'
import config from './config.cjs'
import './database.cjs'

const app =express()

app.set('port', process.env.PORT || 4000);

//cargar el archivo para subir al servidor
app.use(fileUpload({
    tempFileDir :'/temp'
}))


//usar direcciones  funciones de las clases image.Routers y index.Routes
app.use(indexRoutes)
app.use(imagesRoutes)
app.listen(app.get('port'));
console.log('server on port: ',app.get('port'))

