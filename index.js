const inputTextBox = document.querySelector("#text-input")
const outputTextBox = document.querySelector("#text-output")
const translateButton = document.querySelector("#button-translate")
const clearTextButton = document.querySelector("#button-clear")

translateButton.addEventListener("click", translateHandler)
clearTextButton.addEventListener("click", clearHandler)

function translateHandler(event) {
  let input = inputTextBox.value
  let encodeURIString = encodeURI(input)
  let toFetchUrl =
    "https://api.funtranslations.com/translate/minion.json?text=" +
    encodeURIString

  console.log(toFetchUrl)

  fetch(toFetchUrl)
    .then((response) => response.json())
    .then((data) => {
      outputTextBox.innerText = data.contents.translated
    })
    .catch((error) => {
      alert(error.message), console.log(error)
    })
}

function clearHandler(event) {
  inputTextBox.value = ""
  outputTextBox.innerText = ""
}
