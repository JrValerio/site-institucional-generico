function handleModal() {
  const button = document.querySelector("#headerButton");
  const faqButton = document.querySelector("#faqButton");
  const modalContainer = document.querySelector("#modalContainer");

  modalContainer.removeAttribute("open");

  button.addEventListener("click", () => {
    modalContainer.showModal();
  });

  faqButton.addEventListener("click", () => {
    modalContainer.showModal();
  });

  modalContainer.addEventListener("close", () => {
    button.remove();
    modalContainer.innerHTML = "";

    resetModalContent();
  });

  closeModal();
  
}

function closeModal() {
  const button = document.querySelector("#closeModal");
  const modalContainer = document.querySelector("#modalContainer");

  button.addEventListener("click", () => {
    modalContainer.close();
  });
}

handleModal();
