//CRIANDO A VARIAVEL BUTTON PRA MANIPULAR ELE
const button = document.querySelector(".button");

const valor = document.querySelector(".text-field");
const lista = document.querySelector(".third-section");


function criarItem() {
  //CRIA A NOVA DIV PAI
  const divItem = document.createElement("div");
  divItem.className = "item"

  //CRIA O INPUT CHECKBOX
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = `product-${Math.random()}` //ID ÚNICO PARA EVITAR CONFLITOS

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
    lista.append(divItem)

    //ADICIONA A CLASSE PARA EXIBIR O ITEM
    divItem.classList.add("show")

    //LIMPA O VALOR DO CAMPO DE TEXTO
    valor.value ="";
}


//ESCUTA O CLIQUE NO BOTÃO
button.addEventListener("click", criarItem);

// Escuta a tecla Enter no documento
document.addEventListener("keydown", (event) => {
  // Captura a tecla Enter e verifica se o foco está no checkbox ou no label
  if (
    event.key === "Enter" &&
    (document.activeElement.tagName === "LABEL" ||
      document.activeElement.tagName === "INPUT")
  ) {
    criarItem(); // Chama a função para criar o item
  }
});