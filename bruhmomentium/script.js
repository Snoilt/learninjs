ree = document.querySelector(".inputnigger")       
//listens for enter key(ion rly get this jus copied it and it wrok)     
ree.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault()
    document.querySelector(".cock").click()
  }
})
//updates input and makes array and sets all stuff to get goin
function setxt() {
  problem = document.querySelector(".inputnigger").value
  bruhmoment = problem.split("")
  meths = ["+", "-", "/", "*"]
  sign = meths.find((i) => bruhmoment.includes(i))
}
//checks for math (tf do (i) mean????)
function chech() {
  if (meths.some((i) => bruhmoment.includes(i) === true)) {
    calculate()
  }
  else {
    alert("bruh u stupid lmao")
  }
}
//calculates
function calculate() {
  //checks for position of math sign in equation
  pos = bruhmoment.indexOf(meths.find((i) => bruhmoment.includes(i)))
  //combines values before and after math sign into integers
  val1 = parseInt(bruhmoment.slice("", pos).join(""))
  val2 = parseInt(bruhmoment.slice(pos + 1).join(""))
  //jus if statements for calculus
  if(sign == "+") {
    manyea = val1 + val2
  }
  else if(sign == "-") {
    manyea = val1 - val2
  }
  else if(sign == "*") {
    manyea = val1 * val2
  }
  else if (sign == "/") {
    manyea = val1 / val2
  }
//change input value to result
  ree.value = manyea
}

