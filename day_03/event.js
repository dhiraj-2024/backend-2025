const EventEmitter = require('events')
const emitter = new EventEmitter;

// on for creating 
//emit for executing


emitter.on("GREET",(args)=>{
    console.log(`hello welcome ${args.username} you booking no is :${args.bookingNo}`)
})

emitter.emit("GREET",{
    username:"Rahul",
    bookingNo:123
})