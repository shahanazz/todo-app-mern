import express from 'express';
import dotenv from 'dotenv';

import { connectDB } from './config/db.js';
import todoRoute from '../src/routes/todoRoute.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 9000;  

connectDB();

app.use(express.json());

app.use('/' , todoRoute);


app.listen(PORT, () =>{
    console.log(`server starts listening on PORT : https://localhost:${PORT}`);
})