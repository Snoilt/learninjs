const EventEmitter = require("events")
const emitter = new EventEmitter()

emitter.on("messagelogged", (arg) =>{
  console.log(`listener called`, arg)
})

emitter.emit("messagelogged", {id: 1, url:"http://"})