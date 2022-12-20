let btnEncrypt = document.querySelector("#encrypt");
let btnDecrypt = document.querySelector("#decrypt");
let btnCopy = document.querySelector("#copy");
let messageTitle = document.querySelector(".message-title");
let doll = document.querySelector("#doll");
let messageContainer = document.querySelector("#message-container");
let textResult = document.querySelector("#text-result");
let modalContainer = document.querySelector(".modal-container");
let modal = document.querySelector(".modal");

function encrypt() {
  let textArea = document.querySelector("#textArea").value.toLowerCase();
  if (
    textArea == "" ||
    textArea == " " ||
    textArea == "  " ||
    textArea == "   " ||
    textArea == "    " ||
    textArea.includes("á") ||
    textArea.includes("é") ||
    textArea.includes("í") ||
    textArea.includes("ó") ||
    textArea.includes("ú") ||
    textArea.includes("ý") ||
    textArea.includes("\\") ||
    textArea.includes("-") ||
    textArea.includes("~") ||
    textArea.includes("#") ||
    textArea.includes("@") ||
    textArea.includes("|") ||
    textArea.includes("!") ||
    textArea.includes('"') ||
    textArea.includes("$") ||
    textArea.includes("%") ||
    textArea.includes("&") ||
    textArea.includes("/") ||
    textArea.includes("(") ||
    textArea.includes(")") ||
    textArea.includes("'") ||
    textArea.includes("[") ||
    textArea.includes("^") ||
    textArea.includes("`") ||
    textArea.includes("]") ||
    textArea.includes("+") ||
    textArea.includes("}") ||
    textArea.includes("{") ||
    textArea.includes(">") ||
    textArea.includes("*") ||
    textArea.includes("`") ||
    textArea.includes("_") ||
    textArea.includes("<")
  ) {
    modalContainer.style.visibility = "visible";
    modal.classList.toggle("modal-close");
  } else {
    doll.style.display = "none";
    btnCopy.style.display = "block";
    messageContainer.classList.add("message-container");
    messageTitle.style.display = "none";
    textResult.innerHTML = textEncrypt(text());
  }
}

window.addEventListener("click", function (e) {
  if (e.target == modalContainer) {
    modal.classList.toggle("modal-close");
    setTimeout(function () {
      modalContainer.style.visibility = "hidden";
    }, 400);
  }
});

function decrypt() {
  doll.style.display = "none";
  btnCopy.style.display = "block";
  messageContainer.classList.add("message-container");
  messageTitle.style.display = "none";
  textResult.innerHTML = textDecrypt(text());
}

function text() {
  let textArea = document.querySelector("#textArea").value.toLowerCase();
  return textArea;
}

function textEncrypt(message) {
  let text = message;
  let finalText = "";

  for (let i = 0; i < text.length; i++) {
    if (text[i] == "a") {
      finalText = `${finalText}ai`;
    } else if (text[i] == "e") {
      finalText = `${finalText}enter`;
    } else if (text[i] == "i") {
      finalText = `${finalText}imes`;
    } else if (text[i] == "o") {
      finalText = `${finalText}ober`;
    } else if (text[i] == "u") {
      finalText = `${finalText}ufat`;
    } else {
      finalText = `${finalText}${text[i]}`;
    }
  }
  return finalText;
}
function textDecrypt(message) {
  let text = message;
  let finalText = "";

  for (let i = 0; i < text.length; i++) {
    if (text[i] == "a") {
      finalText = `${finalText}a`;
      i += 1;
    } else if (text[i] == "e") {
      finalText = `${finalText}e`;
      i += 4;
    } else if (text[i] == "i") {
      finalText = `${finalText}i`;
      i += 3;
    } else if (text[i] == "o") {
      finalText = `${finalText}o`;
      i += 3;
    } else if (text[i] == "u") {
      finalText = `${finalText}u`;
      i += 3;
    } else {
      finalText = `${finalText}${text[i]}`;
    }
  }
  return finalText;
}

function copyText() {
  navigator.clipboard.writeText(textResult.innerHTML);
  textResult.focus();
}

btnEncrypt.addEventListener("click", encrypt);
btnDecrypt.addEventListener("click", decrypt);
btnCopy.addEventListener("click", copyText);
