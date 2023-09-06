import express from 'express';
import cors from 'cors';
import { connectMongoose } from './util/connectMongoose.js';
import phoneBookRouter from './routes/generalRouter.js'

const PORT = process.env.PORT || 4000;
const app = express()
app.use(cors())

app.use(express.json())

 app.use(phoneBookRouter)


const mongooseConnected = await connectMongoose()

if(mongooseConnected) {
    app.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`);
    })
} else {
    console.error("Datenbankverbindung hat nicht geklappt.");
}