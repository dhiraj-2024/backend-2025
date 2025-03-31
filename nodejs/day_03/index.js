const EventEmitter = require('events');
const fs = require('fs');
const { json } = require('stream/consumers');
const userEmitter = new EventEmitter; 


let eventCounts={
    login: 0,
    logout: 0,
    purchased: 0,
    updated:0,

}

const LogFile="eventlog.json"
if(fs.existsSync(LogFile)){
const data = fs.readFileSync(LogFile, 'utf-8')
Object.assign(eventCounts, JSON.parse(data))
}

function saveCounts(){
    fs.writeFileSync(LogFile,JSON.stringify(eventCounts,null,2)) 
}


// creating a events for

userEmitter.on("LOGIN",(username)=>{
    eventCounts.login++;
    console.log(`hello ${username} you are logged in`);
    saveCounts()
})
userEmitter.on("LOGOUT",(username)=>{
    eventCounts.logout++;
    console.log(` ${username} was logged out`);
    saveCounts()
})
userEmitter.on("PURCHASED",(username,item)=>{
    eventCounts.purchased++;
    console.log(` ${username} purchased a ${item} `);
    saveCounts()
})
userEmitter.on("UPDATED",(username,field)=>{
    eventCounts.updated++;
    console.log(`${username} updated the : ${field}`);
    saveCounts()
})

userEmitter.emit("LOGIN","dhiraj")
userEmitter.emit("LOGOUT","dhiraj")
userEmitter.emit("PURCHASED","dhiraj","SCODA")
userEmitter.emit("UPDATED","dhiraj","BIO")
console.log(eventCounts)