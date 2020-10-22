const fs = require("fs")

fs.writeFile("nigger", "u sinky haha", function bruv(err, file){
  if (err) console.log("error", err)
  else console.log("it worked, open it bitch")
})


fs.readdir("./", function (err, files) {
  if (err) console.log("error", err)
  else console.log("Result", files)
})
