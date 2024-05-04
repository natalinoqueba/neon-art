function updateParagraph() {
  // Obter o valor atualizado do campo de entrada
  var inputText = document.getElementById("text--input").value;

  // Obter a cor selecionada
  var color = document.getElementById("color").value;

  // Obter a fonte selecionada
  var font = document.getElementById("font").value;

  // Atualizar o estilo do parágrafo com a cor e a fonte selecionadas
  var outputPara = document.getElementById("output");
  outputPara.innerText = inputText;
  outputPara.style.color = "white";
  outputPara.style.fontFamily = font;
  outputPara.style.textShadow = `0 0 5px #fff, 0 0 5px #fff, 0 0 10px ${color}, 0 0 20px ${color}, 0 0 40px ${color}, 0 0 90px ${color}, 0 0 100px ${color}, 0 0 150px ${color}`;
}

function changeBack(back) {
  let sect = document.querySelector("section");
  sect.style.backgroundImage = `url(images/fundo-${back}.jpg)`;
}
