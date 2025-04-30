window.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("theme-container");
  const themeLink = document.getElementById("theme-style");

  const today = new Date();

  // Biến toàn cục để gán trong load_theme
  let layoutPath = "/theme/default/index.html";
  let cssPath = "/theme/default/styles.css";

  if (today >= new Date("2025-04-28") && today <= new Date("2025-05-30")) {
    load_theme("30thang4");
  }

  if (today >= new Date("2025-09-20") && today <= new Date("2025-09-22")) {
    load_theme("sinhnhat");
  }

  // Cập nhật CSS
  themeLink.setAttribute("href", cssPath);

  // Load layout HTML vào container
  fetch(layoutPath)
    .then((res) => res.text())
    .then((html) => {
      container.innerHTML = html;
    })
    .catch((err) => {
      container.innerHTML = "<p>Không thể tải giao diện.</p>";
      console.error("Lỗi load theme:", err);
    });

  function load_theme(name) {
    layoutPath = `/theme/${name}/index.html`;
    cssPath = `/theme/${name}/styles.css`;
  }
});
