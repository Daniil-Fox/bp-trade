const fields = document.querySelectorAll(".form__field");

const formatBudgetValue = (value) => {
  const digitsOnlyValue = value.replace(/\D/g, "");
  return digitsOnlyValue.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
};

if (fields.length > 0) {
  fields.forEach((field) => {
    const input = field.querySelector(".form__input");

    if (input) {
      input.addEventListener("focus", (e) => {
        field.classList.add("focus");
      });
      input.addEventListener("input", () => {
        if (input.matches('input[name="Бюджет"]')) {
          input.value = formatBudgetValue(input.value);
        }

        field.classList.add("filled");

        if (input.value === "") {
          field.classList.remove("filled");
        }
      });

      input.addEventListener("blur", () => {
        field.classList.remove("focus");
        if (input.value === "") {
          field.classList.remove("filled");
        }
      });
    }
  });
}

export const clearFields = () => {
  fields.forEach((field) => {
    field.classList.remove("filled");
  });
};
