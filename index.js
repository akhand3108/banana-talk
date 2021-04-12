const inputBox = document.querySelector("#text-input")
const outputBox = document.querySelector("#text-output")
const translateButton = document.querySelector("#button-translate")
const clearButton = document.querySelector("#button-clear")

translateButton.addEventListener("click", translateHandler)
clearButton.addEventListener("click", clearHandler)

function translateHandler(event) {
  let input = inputBox.value
  let toFetchUrl =
    "https://api.funtranslations.com/translate/minion.json?text=" +
    encodeURI(input)

  console.log(toFetchUrl)

  fetch(toFetchUrl)
    .then((response) => response.json())
    .then((data) => {
      console.log("data", data)
      outputBox.innerText = data.contents.translated
    })
    .catch((error) => {
      alert(error.message), console.log(error)
    })
}

function clearHandler(event) {
  inputBox.value = ""
  outputBox.innerText = ""
}
