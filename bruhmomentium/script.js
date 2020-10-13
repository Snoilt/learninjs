ree = document.querySelector(".inputnigger")
ree.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault()
    document.querySelector(".cock").click()
  }
})

function setxt() {
  problem = document.querySelector(".inputnigger").value
  bruhmoment = problem.split("")
  meths = ["+", "-", "/", "*"]
  sign = meths.find((i) => bruhmoment.includes(i))
}

function chech() {
  if (meths.some((i) => bruhmoment.includes(i) === true)) {
    calculate()
  }
  else {
    alert("bruh u stupid lmao")
  }
}

function calculate() {
  pos = bruhmoment.indexOf(meths.find((i) => bruhmoment.includes(i)))
  val1 = parseInt(bruhmoment.slice("", pos).join(""))
  val2 = parseInt(bruhmoment.slice(pos + 1).join(""))
  let neggar = document.querySelector(".inputnigger")

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

  document.querySelector(".inputnigger").value = manyea
}

