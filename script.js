//CRIAÇÃO DAS VARIÁVEIS
const button = document.querySelector(".button");
const valor = document.querySelector(".text-field");
const list = document.querySelector(".third-section");
const alerta = document.querySelector("#alerta")

//DIZENDO QUE SÓ PODE USAR LETRA OU ESPAÇO
valor.addEventListener("input", (event) => {
  event.target.value = event.target.value.replace(/[^a-zA-ZÀ-ÿ\s]/g, "");
});


//FUNÇÃO PRINCIPAL
function createItem() {

  const text = valor.value.trim(); // Pega o texto e remove espaços extras

  if (!text) {
    alert("O texto não pode estar vazio!"); // Exibe uma mensagem de erro
    return; // Impede a criação do item
  }

  //CRIA A NOVA DIV PAI
  var divItem = document.createElement("div");
  divItem.className = "item";

  //CRIA O INPUT CHECKBOX
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = `product-${Math.random()}`; //ID ÚNICO PARA EVITAR CONFLITOS

  //CRIA O LABEL VINCULADO AO CHECKBOX
  const label = document.createElement("label");
  label.htmlFor = checkbox.id;
  label.textContent = valor.value;

  //CRIA O ÍCONE DE DELETAR
  const deleteIcon = document.createElement("img");
  deleteIcon.src = "assets/icons/bin.svg";
  deleteIcon.className = "delete-btn";

  //ADICIONA OS ELEMENTOS DENTRO DA DIV PAI
  divItem.appendChild(checkbox);
  divItem.appendChild(label);
  divItem.appendChild(deleteIcon);

  //ADICIONA A NOVA DIV A LISTA
  list.append(divItem);

  //ADICIONA A CLASSE PARA EXIBIR O ITEM
  divItem.classList.add("show");

  //LIMPA O VALOR DO CAMPO DE TEXTO
  valor.value = "";
}


//ESCUTA O CLIQUE NO BOTÃO
button.addEventListener("click", createItem);


// ESCUTA A TECLA ENTER NO DOCUMENTO
document.addEventListener("keydown", (event) => {
  //CAPTURA A TECLA ENTER E VERIFICA SE O FOCO ESTÁ NO CHECKBOX OU NO LABEL
  if (
    event.key === "Enter" &&
    (document.activeElement.tagName === "LABEL" ||
      document.activeElement.tagName === "INPUT")
  ) {
    createItem(); // Chama a função para criar o item
  }
});


list.addEventListener("click", (event) => {
  // VERIFICA SE O CLIQUE NO DELETE
  if (event.target.classList.contains("delete-btn")) {
    // ACESSA O ELEMENTO PAI (DIViTEM) E REMOVE O ITEM
    const divItem = event.target.closest(".item");
    divItem.remove(); // Remove a div do DOM
    alerta.classList.add("show")

    setTimeout(() => {
      alerta.classList.remove("show");
    }, 1800)
  }
});


