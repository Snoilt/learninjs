
function makebig() {
  const textman = document.querySelector("#stupid")
  const all = document.querySelector("#things")

  if (textman.style.fontSize === "") { //checks for initial state
    textman.style.fontSize = "140px" //mak bru bick
    all.style.height = "400px"
    all.style.width = "1000px"  //img size
    all.src = "dick.png"
  }
  else {                                  //if everything big this makes smol
    textman.style.fontSize = ""
    all.style.width = "500px"
    all.style.height = "300px"
    all.src = "allthingsmustgo.png"
  }
}

const database = firebase.database() //firebase told me to do this
function bruhmoment(userId, name, email, imageUrl) {  //first test basically firebase example

  name = document.querySelector("#username").value
  email = document.querySelector("#email").value
  imageUrl = document.querySelector("#imageUrl").value
  userId = document.querySelector("#userId").value

  database.ref("users/" + userId).set({
    username: name,
    email: email,
    profile_picture: imageUrl,
  })
}




