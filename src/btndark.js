export default function btn() {
  const $onMobile = document.getElementById("darkmodeMobileOn");
  const $offMobile = document.getElementById("darkmodeMobileOff");
  const $darkMode = document.getElementById("darkMode");
  const $loader = document.getElementById("changeLoader");
  const changeLetter = () => {
    document.body.classList.toggle("dark");
  };
  $darkMode.addEventListener("click", (e) => {
    changeLetter();
    if (document.body.classList.contains("dark")) {
      localStorage.setItem("dark-mode", "true");
    } else {
      localStorage.setItem("dark-mode", "false");
    }
    $loader.style.display = "grid";
    location.reload();
    window.addEventListener("load", (e) => ($loader.style.display = "none"));
  });
  if (localStorage.getItem("dark-mode") === "true") {
    document.body.classList.add("dark");
    $onMobile.style.background = "var(--black)";
    $onMobile.style.color = "var(--white)";
    $offMobile.style.background = "var(--gris)";
    $offMobile.style.color = "var(--black)";
  } else {
    document.body.classList.remove("dark");
    $onMobile.style.background = "var(--gris)";
    $onMobile.style.color = "var(--black)";
    $offMobile.style.background = "var(--black)";
    $offMobile.style.color = "var(--white)";
  }
  //mobile
  $onMobile.addEventListener("click", (e) => {
    document.body.classList.add("dark");
    if (localStorage.getItem("dark-mode") === "false") {
      $onMobile.style.background = "var(--black)";
      $onMobile.style.color = "var(--white)";
      $offMobile.style.background = "var(--gris)";
      $offMobile.style.color = "var(--black)";
    } else {
      $onMobile.style.background = "var(--white)";
      $onMobile.style.color = "var(--very-black)";
      $offMobile.style.background = "var(--very-black)";
      $offMobile.style.color = "var(--white)";
    }
    if (document.body.classList.contains("dark")) {
      localStorage.setItem("dark-mode", "true");
    } else {
      localStorage.setItem("dark-mode", "false");
    }
    $loader.style.display = "grid";
    location.reload();
    window.addEventListener("load", (e) => ($loader.style.display = "none"));
  });
  $offMobile.addEventListener("click", (e) => {
    document.body.classList.remove("dark");
    if (
      localStorage.getItem("dark-mode") === "false" ||
      !localStorage.getItem("dark-mode")
    ) {
      $onMobile.style.background = "var(--gris)";
      $onMobile.style.color = "var(--black)";
      $offMobile.style.background = "var(--black)";
      $offMobile.style.color = "var(--white)";
    } else {
      $onMobile.style.background = "var(--white)";
      $onMobile.style.color = "var(--very-black)";
      $offMobile.style.background = "var(--very-black)";
      $offMobile.style.color = "var(--white)";
    }
    if (document.body.classList.contains("dark")) {
      localStorage.setItem("dark-mode", "true");
    } else {
      localStorage.setItem("dark-mode", "false");
    }
    $loader.style.display = "grid";
    location.reload();
    window.addEventListener("load", (e) => ($loader.style.display = "none"));
  });
  document.addEventListener("DOMContentLoaded", (e) => {
    if (
      localStorage.getItem("dark-mode") === "false" ||
      !localStorage.getItem("dark-mode")
    ) {
      $onMobile.style.background = "var(--gris)";
      $onMobile.style.color = "var(--black)";
      $offMobile.style.background = "var(--black)";
      $offMobile.style.color = "var(--white)";
    } else {
      $onMobile.style.background = "var(--white)";
      $onMobile.style.color = "var(--very-black)";
      $offMobile.style.background = "var(--very-black)";
      $offMobile.style.color = "var(--white)";
    }
  });
}
