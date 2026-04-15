import "./_components.js";
(function () {
  const dropdown = document.getElementById("phoneDropdown");
  const trigger = document.getElementById("phoneTrigger");
  const menu = document.getElementById("phoneMenu");
  const arrow = document.getElementById("phoneArrow");

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

(function () {
  const header = document.querySelector(".header");
  if (!header) return;
  let lastScroll = window.scrollY;
  let ticking = false;
  let headerHeight = 0;
  let isFixed = false;
  let hideTimeout = null;

  function getHeaderFullHeight() {
    const style = window.getComputedStyle(header);
    const marginTop = parseFloat(style.marginTop) || 0;
    const marginBottom = parseFloat(style.marginBottom) || 0;
    return header.offsetHeight + marginTop + marginBottom;
  }

  function onScroll() {
    const currentScroll = window.scrollY;
    if (currentScroll < 30) {
      // Почти в самом верху — возвращаем header в исходное состояние
      header.classList.remove("header--fixed", "header--hidden");

      isFixed = false;
      if (hideTimeout) {
        clearTimeout(hideTimeout);
        hideTimeout = null;
      }
    } else if (currentScroll > lastScroll && currentScroll > 50) {
      // Скролл вниз — скрываем
      header.classList.add("header--hidden");
      if (hideTimeout) clearTimeout(hideTimeout);
      hideTimeout = setTimeout(() => {
        header.classList.remove("header--fixed");

        isFixed = false;
      }, 300); // 300ms = transition
    } else if (currentScroll < lastScroll) {
      // Скролл вверх — показываем
      if (hideTimeout) {
        clearTimeout(hideTimeout);
        hideTimeout = null;
      }
      header.classList.remove("header--hidden");
      if (!isFixed) {
        header.classList.add("header--fixed");

        isFixed = true;
      }
    }
    lastScroll = currentScroll;
    ticking = false;
  }

  window.addEventListener("scroll", function () {
    if (!ticking) {
      window.requestAnimationFrame(onScroll);
      ticking = true;
    }
  });
})();
