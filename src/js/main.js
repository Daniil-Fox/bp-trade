import "./_components.js";
(function () {
  const dropdown = document.getElementById("phoneDropdown");
  const trigger = document.getElementById("phoneTrigger");
  const menu = document.getElementById("phoneMenu");
  const arrow = document.getElementById("phoneArrow");
  const callbackButton = document.getElementById("callbackButton");

  if (trigger) {
    let isOpen = false;
    let isMobile = window.innerWidth <= 576;

    // Проверка мобильного устройства
    function checkMobile() {
      isMobile = window.innerWidth <= 576;
    }

    // Открытие меню
    function openMenu() {
      isOpen = true;
      menu.classList.add("phone-dropdown__menu--open");
      arrow.classList.add("phone-dropdown__arrow--open");
    }

    // Закрытие меню
    function closeMenu() {
      isOpen = false;
      menu.classList.remove("phone-dropdown__menu--open");
      arrow.classList.remove("phone-dropdown__arrow--open");
    }

    // Переключение меню
    function toggleMenu() {
      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    }

    // Обработка клика на триггер (для мобильных)
    trigger.addEventListener("click", function (e) {
      if (isMobile) {
        e.stopPropagation();
        toggleMenu();
      }
    });

    // Обработка наведения (для десктопа)
    dropdown.addEventListener("mouseenter", function () {
      if (!isMobile) {
        openMenu();
      }
    });

    dropdown.addEventListener("mouseleave", function () {
      if (!isMobile) {
        closeMenu();
      }
    });

    // Закрытие при клике вне области (для мобильных)
    document.addEventListener("click", function (e) {
      if (isMobile && isOpen && !dropdown.contains(e.target)) {
        closeMenu();
      }
    });

    // Обработка кнопки обратного звонка
    callbackButton.addEventListener("click", function () {
      // Здесь можно добавить логику открытия модального окна
      // или перехода на страницу с формой
      window.location.href = "tel:+78002006965";
      closeMenu();
    });

    // Обработка изменения размера окна
    window.addEventListener("resize", function () {
      checkMobile();

      // Закрываем меню при смене режима
      if (isOpen) {
        closeMenu();
      }
    });

    // Инициализация
    checkMobile();
  }
})();
