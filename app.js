const btns = document.querySelectorAll(".btn");

let contador = 0;

const setValor = (event) => {
  let btnValor = event.target.classList;
  let btnColor = (window.valor.style.color = "");

  btnValor.contains("menos")
    ? contador--
    : btnValor.contains("mas")
    ? contador++
    : (contador = 0);

  contador > 0
    ? (btnColor = "green")
    : contador < 0
    ? (btnColor = "red")
    : (btnColor = "black");

  window.valor.textContent = contador;
  window.valor.style.color = btnColor;
};

btns.forEach((btn) => {
  btn.addEventListener("click", setValor);
});
