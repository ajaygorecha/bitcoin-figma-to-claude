document.addEventListener("DOMContentLoaded", () => {
  function setError(input, hasError) {
    input.classList.toggle("is-error", hasError);
  }

  function isValidEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  function togglePasswordVisibility(btn) {
    const targetId = btn.dataset.target;
    const input = document.getElementById(targetId);
    const icon = btn.querySelector("i");
    if (!input) return;

    if (input.type === "password") {
      input.type = "text";
      icon.classList.replace("ri-eye-off-line", "ri-eye-line");
    } else {
      input.type = "password";
      icon.classList.replace("ri-eye-line", "ri-eye-off-line");
    }
  }

  // Password toggle buttons (used on register page)
  document.querySelectorAll(".input-icon-btn").forEach((btn) => {
    btn.addEventListener("click", () => togglePasswordVisibility(btn));
  });

  // --- Login Form ---
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const rememberCheckbox = document.getElementById("rememberMe");

    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const email = emailInput.value.trim();
      const password = passwordInput.value;
      let valid = true;

      if (!email || !isValidEmail(email)) {
        setError(emailInput, true);
        valid = false;
      } else {
        setError(emailInput, false);
      }

      if (!password) {
        setError(passwordInput, true);
        valid = false;
      } else {
        setError(passwordInput, false);
      }

      if (!valid) return;

      console.log("Sign in payload:", {
        email,
        rememberMe: rememberCheckbox.checked,
      });
    });

    emailInput.addEventListener("input", () => setError(emailInput, false));
    passwordInput.addEventListener("input", () =>
      setError(passwordInput, false)
    );
  }

  // --- Reset Password Form ---
  const resetForm = document.getElementById("resetForm");
  if (resetForm) {
    const emailInput = document.getElementById("email");

    resetForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const email = emailInput.value.trim();

      if (!email || !isValidEmail(email)) {
        setError(emailInput, true);
        return;
      }

      setError(emailInput, false);
      console.log("Reset password payload:", { email });
    });

    emailInput.addEventListener("input", () => setError(emailInput, false));
  }

  // --- Register Form ---
  const registerForm = document.getElementById("registerForm");
  if (registerForm) {
    const fullNameInput = document.getElementById("fullName");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirmPassword");

    registerForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const fullName = fullNameInput.value.trim();
      const email = emailInput.value.trim();
      const password = passwordInput.value;
      const confirmPassword = confirmPasswordInput.value;
      let valid = true;

      if (!fullName) {
        setError(fullNameInput, true);
        valid = false;
      } else {
        setError(fullNameInput, false);
      }

      if (!email || !isValidEmail(email)) {
        setError(emailInput, true);
        valid = false;
      } else {
        setError(emailInput, false);
      }

      if (!password) {
        setError(passwordInput, true);
        valid = false;
      } else {
        setError(passwordInput, false);
      }

      if (!confirmPassword || confirmPassword !== password) {
        setError(confirmPasswordInput, true);
        valid = false;
      } else {
        setError(confirmPasswordInput, false);
      }

      if (!valid) return;

      console.log("Register payload:", { fullName, email });
    });

    [fullNameInput, emailInput, passwordInput, confirmPasswordInput].forEach(
      (input) => input.addEventListener("input", () => setError(input, false))
    );
  }

  // --- Dashboard: Transaction month filter ---
  const monthBtns = document.querySelectorAll(".tx-filter-month");
  if (monthBtns.length) {
    monthBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        monthBtns.forEach((b) => b.classList.remove("tx-filter-month--active"));
        btn.classList.add("tx-filter-month--active");
      });
    });
  }

  // --- Buy & Sell: Profile dropdown toggle ---
  const userProfileBtn = document.getElementById("userProfileBtn");
  const profileDropdown = document.getElementById("profileDropdown");

  if (userProfileBtn && profileDropdown) {
    userProfileBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      const isOpen = profileDropdown.classList.toggle("is-open");
      userProfileBtn.setAttribute("aria-expanded", String(isOpen));
      profileDropdown.setAttribute("aria-hidden", String(!isOpen));
    });

    document.addEventListener("click", () => {
      profileDropdown.classList.remove("is-open");
      userProfileBtn.setAttribute("aria-expanded", "false");
      profileDropdown.setAttribute("aria-hidden", "true");
    });

    profileDropdown.addEventListener("click", (e) => e.stopPropagation());
  }

  // --- Buy & Sell: Tab switching ---
  const tabBuy = document.getElementById("tabBuy");
  const tabSell = document.getElementById("tabSell");
  const bsSubmitBtn = document.getElementById("bsSubmitBtn");

  if (tabBuy && tabSell) {
    function setActiveTab(activeTab, label) {
      [tabBuy, tabSell].forEach((t) => {
        t.classList.remove("bs-tab--active");
        t.setAttribute("aria-selected", "false");
      });
      activeTab.classList.add("bs-tab--active");
      activeTab.setAttribute("aria-selected", "true");
      if (bsSubmitBtn) {
        const amountInput = document.getElementById("amountInput");
        const amount = amountInput ? Number(amountInput.value).toFixed(2) : "708.83";
        bsSubmitBtn.textContent = `${label} Bitcoin - $${amount}`;
      }
    }

    tabBuy.addEventListener("click", () => setActiveTab(tabBuy, "Buy"));
    tabSell.addEventListener("click", () => setActiveTab(tabSell, "Sell"));
  }

  // --- Buy & Sell: Update button label on amount change ---
  const amountInput = document.getElementById("amountInput");
  if (amountInput && bsSubmitBtn) {
    amountInput.addEventListener("input", () => {
      const activeTab = document.querySelector(".bs-tab--active");
      const label = activeTab ? activeTab.textContent.trim() : "Buy";
      const amount = Number(amountInput.value) > 0
        ? Number(amountInput.value).toFixed(2)
        : "0.00";
      bsSubmitBtn.textContent = `${label} Bitcoin - $${amount}`;
    });
  }

  // --- Buy & Sell: Form submit ---
  const buySellForm = document.getElementById("buySellForm");
  if (buySellForm) {
    buySellForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const amount = amountInput ? amountInput.value : "";
      if (!amount || Number(amount) <= 0) {
        amountInput && amountInput.classList.add("is-error");
        return;
      }
      amountInput && amountInput.classList.remove("is-error");
      console.log("Buy/Sell submitted:", { amount });
    });

    if (amountInput) {
      amountInput.addEventListener("input", () =>
        amountInput.classList.remove("is-error")
      );
    }
  }

  // --- Confirmation: Toast notification ---
  const toastEl = document.getElementById("toastNotification");
  const toastCloseBtn = document.getElementById("toastClose");
  const toastProgressBar = document.getElementById("toastProgressBar");

  if (toastEl) {
    function dismissToast() {
      toastEl.classList.add("is-hidden");
    }

    if (toastCloseBtn) {
      toastCloseBtn.addEventListener("click", dismissToast);
    }

    if (toastProgressBar) {
      requestAnimationFrame(() => {
        toastProgressBar.style.width = "0%";
      });
    }

    setTimeout(dismissToast, 4000);
  }
});
