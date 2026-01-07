document.addEventListener("DOMContentLoaded", () => {
  const title = document.querySelector("h1");
  const nav = document.querySelector("nav");
  const header = document.querySelector("header");
  const h2List = document.querySelectorAll("h2");
  const headerSubtitle = header ? header.querySelector("p") : null;

  const themeBtn = document.getElementById("toggleTheme");
  const greetBtn = document.getElementById("greetBtn");
  const greetingText = document.getElementById("greeting");

  const textTitle = "Selamat datang di blog pribadi saya";
  let index = 0;
  let modeAnimasi = false;
  let typingTimeout = null;

  function ketikJudul() {
    if (!title) return;
    if (index < textTitle.length) {
      title.textContent += textTitle.charAt(index);
      index++;
      typingTimeout = setTimeout(ketikJudul, 60);
    } else {
      typingTimeout = null;
    }
  }

  if (title) title.textContent = title.textContent;

  if (header) {
    header.addEventListener("click", () => {
      if (nav) nav.classList.toggle("show-nav");

      if (modeAnimasi) {
        modeAnimasi = false;
        if (typingTimeout) clearTimeout(typingTimeout);
        if (title) title.textContent = "klik lagi";
        if (headerSubtitle) headerSubtitle.style.display = "block";
        return;
      }

      modeAnimasi = true;
      index = 0;

      if (headerSubtitle) headerSubtitle.style.display = "none";
      if (title) {
        title.textContent = "";
        ketikJudul();
      }
    });

    header.addEventListener("mouseover", () => {
      // warna ungu saat hover
      header.style.backgroundColor = "#9b59b6";
    });

    header.addEventListener("mouseout", () => {
      header.style.backgroundColor = "";
    });
  }

  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");

      themeBtn.innerText = document.body.classList.contains("dark-mode")
        ? "Ubah ke Light Mode"
        : "Ubah ke Dark Mode";
    });
  }

  document.addEventListener("keydown", (event) => {
    if (event.key.toLowerCase() === "d") {
      document.body.classList.toggle("dark-mode");
      if (themeBtn) themeBtn.innerText = document.body.classList.contains("dark-mode")
        ? "Ubah ke Light Mode"
        : "Ubah ke Dark Mode";
    }

    if (event.key.toLowerCase() === "f") {
      h2List.forEach((h2) => {
        h2.style.fontSize = h2.style.fontSize === "28px" ? "" : "28px";
      });
    }
  });

  if (greetBtn && greetingText) {
    greetBtn.addEventListener("click", () => {
      const nama = prompt("Siapa nama kamu?");
      greetingText.innerText = nama && nama.trim() !== ""
        ? `Halo, ${nama.trim()}! 💜`
        : "Halo, pengunjung! 💜";
    });
  }

  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      document.body.style.background =
        "linear-gradient(135deg, #7d3c98, #8e44ad, #9b59b6)";
    } else {
      document.body.style.background = "";
    }
  });
});
