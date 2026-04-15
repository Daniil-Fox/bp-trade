const modalActiveClass = "modal_active";
const modals = document.querySelectorAll(".modal");

const normalizeText = (text) => text.toLowerCase().replace(/\s+/g, " ").trim();

const getModalIdByButtonText = (text) => {
  const normalized = normalizeText(text);

  if (normalized.includes("заказать авто")) {
    return "modal-order";
  }

  if (
    normalized.includes("консультац") ||
    normalized.includes("обратный звонок")
  ) {
    return "modal-consult";
  }

  return null;
};

const closeModal = (modal) => {
  if (!modal) return;

  modal.classList.remove(modalActiveClass);
  document.body.style.overflow = "auto";
};

const openModal = (modalId) => {
  const targetModal = document.getElementById(modalId);
  if (!targetModal) return;

  modals.forEach((modal) => {
    modal.classList.remove(modalActiveClass);
  });

  targetModal.classList.add(modalActiveClass);
  document.body.style.overflow = "hidden";
};

const bindOpenEvents = () => {
  const triggerElements = document.querySelectorAll("button, a");

  triggerElements.forEach((element) => {
    if (element.closest(".modal")) return;

    const modalId = getModalIdByButtonText(element.textContent || "");
    if (!modalId) return;

    element.addEventListener("click", (event) => {
      if (element.tagName === "A") {
        event.preventDefault();
      }

      openModal(modalId);
    });
  });
};

const bindCloseEvents = () => {
  document.addEventListener("click", (event) => {
    const closeButton = event.target.closest(".modal__close");
    if (closeButton) {
      closeModal(closeButton.closest(".modal"));
      return;
    }

    const openedModal = document.querySelector(`.modal.${modalActiveClass}`);
    if (!openedModal) return;

    if (event.target === openedModal) {
      closeModal(openedModal);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;

    const openedModal = document.querySelector(`.modal.${modalActiveClass}`);
    if (!openedModal) return;

    closeModal(openedModal);
  });
};

const initModals = () => {
  if (!modals.length) return;

  bindOpenEvents();
  bindCloseEvents();
};

initModals();
