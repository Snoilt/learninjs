function makebig() {
  const textman = document.querySelector("#stupid")
  const all = document.querySelector("#things")

  if (textman.style.fontSize === "") { //checks for initial state
    textman.style.fontSize = "140px"
    all.style.height = "400px"
    all.style.width = "1000px"
    all.src = "dick.png"
  }
  else {
    textman.style.fontSize = ""
    all.style.width = "500px"
    all.style.height = "300px"
    all.src = "allthingsmustgo.png"
  }
}



