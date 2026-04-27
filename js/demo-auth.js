(() => {
  const STORAGE_KEY = "sahaj_demo_user";
  const DEFAULT_USER = {
    name: "Demo User",
    email: "demo@example.com",
  };

  function pathName() {
    return window.location.pathname.replace(/\\/g, "/").toLowerCase();
  }

  function isLoginPage() {
    return pathName().endsWith("/pages/auth/login.html");
  }

  function isSignupPage() {
    return pathName().endsWith("/pages/auth/signup.html");
  }

  function isDashboardPage() {
    return pathName().includes("/pages/dashboard/");
  }

  function initialsFromName(name) {
    const parts = String(name || "")
      .trim()
      .split(/\s+/)
      .filter(Boolean);

    if (!parts.length) {
      return "DU";
    }

    return parts
      .slice(0, 2)
      .map((part) => part.charAt(0).toUpperCase())
      .join("");
  }

  function normalizeName(name, fallbackEmail) {
    const trimmed = String(name || "").trim();
    if (trimmed) {
      return trimmed;
    }

    const emailPrefix = String(fallbackEmail || "").split("@")[0].trim();
    if (!emailPrefix) {
      return DEFAULT_USER.name;
    }

    return emailPrefix
      .split(/[._-]+/)
      .filter(Boolean)
      .map((chunk) => chunk.charAt(0).toUpperCase() + chunk.slice(1))
      .join(" ");
  }

  function saveUser(user) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
  }

  function getUser() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? { ...DEFAULT_USER, ...JSON.parse(raw) } : null;
    } catch (error) {
      return null;
    }
  }

  function clearUser() {
    localStorage.removeItem(STORAGE_KEY);
  }

  function updateText(selector, value) {
    document.querySelectorAll(selector).forEach((node) => {
      node.textContent = value;
    });
  }

  function updateValue(selector, value) {
    document.querySelectorAll(selector).forEach((node) => {
      node.value = value;
    });
  }

  function applyUserToDashboard(user) {
    const activeUser = user || DEFAULT_USER;
    const initials = initialsFromName(activeUser.name);

    updateText(".user-name", activeUser.name);
    updateText(".user-avatar", initials);
    updateText(".topbar-avatar", initials);
    updateText(".profile-avatar-lg", initials);
    updateText("[data-demo-user-name]", activeUser.name);
    updateValue("[data-demo-user-input]", activeUser.name);
  }

  function wireLogout() {
    document.querySelectorAll(".logout-btn").forEach((button) => {
      button.addEventListener("click", (event) => {
        event.preventDefault();
        clearUser();
        window.location.href = "../auth/login.html";
      });
    });
  }

  function wireLoginForm() {
    const form = document.querySelector("form");
    if (!form) {
      return;
    }

    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const nameInput = document.getElementById("login-name");
      const emailInput = document.getElementById("email");
      const existingUser = getUser();
      const email = emailInput ? emailInput.value.trim() : existingUser?.email;
      const name = normalizeName(
        nameInput ? nameInput.value : existingUser?.name,
        email,
      );

      saveUser({
        name,
        email: email || DEFAULT_USER.email,
      });

      alert("Logged in successfully");
      window.location.href = "../dashboard/home.html";
    });
  }

  function wireSignupForm() {
    const form = document.querySelector("form");
    if (!form) {
      return;
    }

    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const nameInput = document.getElementById("signup-name");
      const emailInput = document.getElementById("signup-email");
      const email = emailInput ? emailInput.value.trim() : DEFAULT_USER.email;
      const name = normalizeName(nameInput ? nameInput.value : "", email);

      saveUser({
        name,
        email: email || DEFAULT_USER.email,
      });

      alert("Signed up successfully");
      window.location.href = "../dashboard/home.html";
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    if (isLoginPage()) {
      wireLoginForm();
      return;
    }

    if (isSignupPage()) {
      wireSignupForm();
      return;
    }

    if (isDashboardPage()) {
      applyUserToDashboard(getUser());
      wireLogout();
    }
  });
})();
