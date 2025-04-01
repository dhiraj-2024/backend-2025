import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';


//? HANDLE ES MODULES __filename and __dirname
 
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//? MIDDLEWARE TO LOG ALL REQUEST

const logMiddlewares= (req,res,next)=>{
    const log= `[${new Date().toISOString()}] ${req.method} ${req.url} \n`
    const logFile = path.join(__dirname,"../logs/request.log")

    fs.appendFile(logFile,log,(err)=>{
        if(err) console.error("failed to log request",err)
    });
    next()
}

export default logMiddlewares;