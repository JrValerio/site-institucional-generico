function handleModal() {
  const button = document.querySelector("#headerButton");
  const faqButton = document.querySelector("#faqButton");
  const modalContainer = document.querySelector("#modalContainer");

  button.addEventListener("click", () => {
    modalContainer.showModal();    
  });

  faqButton.addEventListener("click", () => {
    modalContainer.showModal();    
  });

  modalContainer.addEventListener("close", () => {
    closeModal();    
  });
}

function closeModal() {
  const buttonClose = document.querySelector("#closeModal");
  const modalContainer = document.querySelector("#modalContainer");

  buttonClose.addEventListener("click", () => {
    modalContainer.close();
  });
}

handleModal();
closeModal();

modalContainer.addEventListener("click", (event) => {
    if (event.target === modalContainer) {
      closeModal();
    }
  });
  