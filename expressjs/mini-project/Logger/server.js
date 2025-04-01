import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import publicRoutes from './routes/public.routes.js';
import privateRoutes from './routes/private.routes.js';
import logMiddlewares from './middleware/log.middleware.js';
const app = express();
const PORT = 8000;

//* IN BUILD MIDDLEWARES
app.use(express.json());

//! GLOBAL CUSTOME MIDDLEWARES
app.use(logMiddlewares);

//? MIDDLEWARE TO ROUTES
app.use("/public",publicRoutes);
app.use("/private",privateRoutes)


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

if (!fs.existsSync(path.join(__dirname,"logs")))
{
    fs.mkdirSync(path.join(__dirname,"logs"))
}

app.listen(PORT,(req,res)=>{
    console.log(`server is running on 🔥 http://localhost:${PORT}`)
})