ree = document.querySelector(".inputnigger")
//listens for enter key(ion rly get this jus copied it and it wrok)
ree.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault()
    document.querySelector(".cock").click()
  }
})
//updates input and makes array and sets all stuff to get goin (theres prolly a better way idk)
function setxt() {
  problem = document.querySelector(".inputnigger").value
  bruhmoment = problem.split("")
  meths = ["+", "-", "/", "*"]
  sign = meths.find((i) => bruhmoment.includes(i))
  klammer = ["(",")"]
}
//checks for math (tf do (i) mean????)
function chech() {
  if (meths.some((i) => bruhmoment.includes(i) === true)) {
    calculate()
  }
  else if (rooms.includes(problem) == true) {
    document.cookie = problem
    identify(rooms)

  }
  else if (problem == "clear") {
    var roomclearer = firebase.database().ref("Rooms/" + document.cookie)
    roomclearer.child(enrdaddys[1]).remove()
  }
}
  //calculates
  function calculate() {
    //checks for position of math sign in equation
    pos = bruhmoment.indexOf(meths.find((i) => bruhmoment.includes(i)))
    //combines values before and after math sign into integers
    val1 = Number(bruhmoment.slice("", pos).join(""))
    val2 = Number(bruhmoment.slice(pos + 1).join(""))
    //jus if statements for calculus
    if (sign == "+") {
      manyea = val1 + val2
    }
    else if (sign == "-") {
      manyea = val1 - val2
    }
    else if (sign == "*") {
      manyea = val1 * val2
    }
    else if (sign == "/") {
      manyea = val1 / val2
    }

    let randomnumber = Math.floor(1000 + Math.random() * 9000)

    if (document.querySelector(".roomcode").innerHTML == "") {
      document.querySelector(".roomcode").innerHTML = randomnumber
      document.cookie = randomnumber
    }

    roomcode = document.querySelector(".roomcode").innerHTML
    pushsolution(problem, manyea, roomcode)
  }

  function pushsolution(problem, manyea, roomcode) {
    firebase.database().ref("Rooms/" + roomcode).push({
      equation: problem,
      result: manyea
    })

  }

  getdatabaserooms()

  function getdatabaserooms() {
    firebase.database().ref("Rooms/").on("value", function givroomtags(data) {
      rooms = Object.getOwnPropertyNames(data.val())
      identify(rooms)
    })
  }
  enr = []

  function identify(rooms) {
    if (rooms.includes(document.cookie)) {
      document.querySelector(".roomcode").innerHTML = document.cookie
      firebase.database().ref("Rooms/").on("value", function historyappear(numbrs) {
        uselessshite = numbrs.val()
        closetoequations = uselessshite[document.cookie]
        enrdaddys = Object.getOwnPropertyNames(closetoequations)
      })
    }

    for (i = 0; i < enrdaddys.length; i++) {
      enr.length = i
      enr.push(closetoequations[enrdaddys[i]].equation + "=" + closetoequations[enrdaddys[i]].result + " <br> ")
    }
    document.querySelector(".results").innerHTML = enr.join("")
  }

