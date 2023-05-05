import cipher from "./cipher.js";

const btnCipher = document.querySelector("#sendText");
btnCipher.addEventListener("click", function () {
  // obter text action offset

  // validar os dados
  const actionElement = document.querySelector('input[name="action"]:checked');
  if (!actionElement) {
    alert("Selecione se deseja codificar ou decodificar");
    return;
  }
  const text = document.querySelector("#insertTextBox").value;
  if (!text) {
    alert("Digite o texto");
    return;
  }
  const offset = document.querySelector("#numBox").valueAsNumber;
  if (!offset) {
    alert("Selecione o número de posições que deseja deslocar");
    return;
  }

  // chamar as funcoes de acordo com a acao (encode, decode)
  const action = actionElement.value;
  let result = undefined;
  if (action === "encode") {
    result = cipher.encode(offset, text);
  } else {
    result = cipher.decode(offset, text);
  }
  const finalText = document.querySelector("#resultArea");
  finalText.value = result;
});
