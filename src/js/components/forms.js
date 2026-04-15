import { validateForms } from "../functions/validate-forms.js";
import { clearFields } from "./inputs.js";

const formElements = document.querySelectorAll(".form");

const getFormRules = (form) => {
  const rules = [];

  if (form.querySelector('input[name="Имя"]')) {
    rules.push({
      ruleSelector: 'input[name="Имя"]',
      rules: [
        {
          rule: "required",
          value: true,
          errorMessage: "Введите имя",
        },
        {
          rule: "minLength",
          value: 2,
          errorMessage: "Минимум 2 символа",
        },
      ],
    });
  }

  if (form.querySelector('input[name="Телефон"]')) {
    rules.push({
      ruleSelector: 'input[name="Телефон"]',
      tel: true,
      telError: "Введите корректный телефон",
      rules: [
        {
          rule: "required",
          value: true,
          errorMessage: "Введите телефон",
        },
      ],
    });
  }

  if (form.querySelector('input[name="Бюджет"]')) {
    rules.push({
      ruleSelector: 'input[name="Бюджет"]',
      rules: [
        {
          rule: "required",
          value: true,
          errorMessage: "Введите бюджет",
        },
        {
          rule: "function",
          validator: (value) => /^\d[\d ]*$/.test(value),
          errorMessage: "Только цифры",
        },
      ],
    });
  }

  return rules;
};

const initForms = () => {
  if (!formElements.length) return;

  formElements.forEach((form, index) => {
    const formClass = `js-form-${index + 1}`;
    form.classList.add(formClass);

    const rules = getFormRules(form);
    if (!rules.length) return;

    validateForms(`.${formClass}`, rules, [], () => {
      clearFields();
    });
  });
};

initForms();
