const input = document.querySelector(".input-m-width")
const errorMessage = document.querySelector(".errormessage")

function errorChecker() {
    if (input.value === "2") {
        errorMessage.textContent = "Value should be larger than 0"
    } else {
        errorMessage.textContent = ""
    }
}

input.addEventListener("input", errorChecker)