export default function settingsModal() {
  const montserrat = document.querySelector(".montserrat");
  const itim = document.querySelector(".itim");
  const firacode = document.querySelector(".firacode");
  const lato = document.querySelector(".lato");
  const comicsans = document.querySelector(".comicneue");
  const roboto = document.querySelector(".roboto");
  const style = document.documentElement.style;
  document.addEventListener("click", (e) => {
    if (e.target == montserrat) {
      style.setProperty("--family", "Montserrat");
      localStorage.setItem("family", "montserrat");
      if (
        localStorage.getItem("dark-mode") === "false" ||
        localStorage.getItem("dark-mode") === null
      ) {
        montserrat.style.setProperty("background", "var(--black)");
        montserrat.style.setProperty("color", "var(--white)");

        itim.style.setProperty("background", "var(--gris)");
        itim.style.setProperty("color", "var(--black)");

        firacode.style.setProperty("background", "var(--gris)");
        firacode.style.setProperty("color", "var(--black)");

        lato.style.setProperty("background", "var(--gris)");
        lato.style.setProperty("color", "var(--black)");

        comicsans.style.setProperty("background", "var(--gris)");
        comicsans.style.setProperty("color", "var(--black)");

        roboto.style.setProperty("background", "var(--gris)");
        roboto.style.setProperty("color", "var(--black)");
      } else {
        montserrat.style.setProperty("background", "var(--white)");
        montserrat.style.setProperty("color", "var(--very-black)");

        itim.style.setProperty("background", "var(--very-black) ");
        itim.style.setProperty("color", "var(--white)");

        firacode.style.setProperty("background", "var(--very-black)");
        firacode.style.setProperty("color", "var(--white)");

        lato.style.setProperty("background", "var(--very-black)");
        lato.style.setProperty("color", "var(--white)");

        comicsans.style.setProperty("background", "var(--very-black)");
        comicsans.style.setProperty("color", "var(--white)");

        roboto.style.setProperty("background", "var(--very-black)");
        roboto.style.setProperty("color", "var(--white)");
      }
    } else if (e.target == itim) {
      style.setProperty("--family", "Itim");
      localStorage.setItem("family", "itim");
      if (
        localStorage.getItem("dark-mode") === "false" ||
        localStorage.getItem("dark-mode") === null
      ) {
        montserrat.style.setProperty("background", "var(--gris)");
        montserrat.style.setProperty("color", "var(--black)");

        itim.style.setProperty("background", "var(--black)");
        itim.style.setProperty("color", "var(--white)");

        firacode.style.setProperty("background", "var(--gris)");
        firacode.style.setProperty("color", "var(--black)");

        lato.style.setProperty("background", "var(--gris)");
        lato.style.setProperty("color", "var(--black)");

        comicsans.style.setProperty("background", "var(--gris)");
        comicsans.style.setProperty("color", "var(--black)");

        roboto.style.setProperty("background", "var(--gris)");
        roboto.style.setProperty("color", "var(--black)");
      } else {
        montserrat.style.setProperty("background", "var(--very-black)");
        montserrat.style.setProperty("color", "var(--white)");

        itim.style.setProperty("background", "var(--white) ");
        itim.style.setProperty("color", "var(--very-black)");

        firacode.style.setProperty("background", "var(--very-black)");
        firacode.style.setProperty("color", "var(--white)");

        lato.style.setProperty("background", "var(--very-black)");
        lato.style.setProperty("color", "var(--white)");

        comicsans.style.setProperty("background", "var(--very-black)");
        comicsans.style.setProperty("color", "var(--white)");

        roboto.style.setProperty("background", "var(--very-black)");
        roboto.style.setProperty("color", "var(--white)");
      }
    } else if (e.target == firacode) {
      style.setProperty("--family", "Fira Code");
      localStorage.setItem("family", "firacode");
      if (
        localStorage.getItem("dark-mode") === "false" ||
        localStorage.getItem("dark-mode") === null
      ) {
        montserrat.style.setProperty("background", "var(--gris)");
        montserrat.style.setProperty("color", "var(--black)");

        itim.style.setProperty("background", "var(--gris)");
        itim.style.setProperty("color", "var(--black)");

        firacode.style.setProperty("background", "var(--black)");
        firacode.style.setProperty("color", "var(--white)");

        lato.style.setProperty("background", "var(--gris)");
        lato.style.setProperty("color", "var(--black)");

        comicsans.style.setProperty("background", "var(--gris)");
        comicsans.style.setProperty("color", "var(--black)");

        roboto.style.setProperty("background", "var(--gris)");
        roboto.style.setProperty("color", "var(--black)");
      } else {
        montserrat.style.setProperty("background", "var(--very-black)");
        montserrat.style.setProperty("color", "var(--white)");

        itim.style.setProperty("background", "var(--very-black) ");
        itim.style.setProperty("color", "var(--white)");

        firacode.style.setProperty("background", "var(--white)");
        firacode.style.setProperty("color", "var(--very-black)");

        lato.style.setProperty("background", "var(--very-black)");
        lato.style.setProperty("color", "var(--white)");

        comicsans.style.setProperty("background", "var(--very-black)");
        comicsans.style.setProperty("color", "var(--white)");

        roboto.style.setProperty("background", "var(--very-black)");
        roboto.style.setProperty("color", "var(--white)");
      }
    } else if (e.target == lato) {
      style.setProperty("--family", "Lato");
      localStorage.setItem("family", "lato");
      if (
        localStorage.getItem("dark-mode") === "false" ||
        localStorage.getItem("dark-mode") === null
      ) {
        montserrat.style.setProperty("background", "var(--gris)");
        montserrat.style.setProperty("color", "var(--black)");

        itim.style.setProperty("background", "var(--gris)");
        itim.style.setProperty("color", "var(--black)");

        firacode.style.setProperty("background", "var(--gris)");
        firacode.style.setProperty("color", "var(--black)");

        lato.style.setProperty("background", "var(--black)");
        lato.style.setProperty("color", "var(--white)");

        comicsans.style.setProperty("background", "var(--gris)");
        comicsans.style.setProperty("color", "var(--black)");

        roboto.style.setProperty("background", "var(--gris)");
        roboto.style.setProperty("color", "var(--black)");
      } else {
        montserrat.style.setProperty("background", "var(--very-black)");
        montserrat.style.setProperty("color", "var(--white)");

        itim.style.setProperty("background", "var(--very-black) ");
        itim.style.setProperty("color", "var(--white)");

        firacode.style.setProperty("background", "var(--very-black)");
        firacode.style.setProperty("color", "var(--white)");

        lato.style.setProperty("background", "var(--white)");
        lato.style.setProperty("color", "var(--very-black)");

        comicsans.style.setProperty("background", "var(--very-black)");
        comicsans.style.setProperty("color", "var(--white)");

        roboto.style.setProperty("background", "var(--very-black)");
        roboto.style.setProperty("color", "var(--white)");
      }
    } else if (e.target == comicsans) {
      style.setProperty("--family", "Comic Neue");
      localStorage.setItem("family", "comic");
      if (
        localStorage.getItem("dark-mode") === "false" ||
        localStorage.getItem("dark-mode") === null
      ) {
        montserrat.style.setProperty("background", "var(--gris)");
        montserrat.style.setProperty("color", "var(--black)");

        itim.style.setProperty("background", "var(--gris)");
        itim.style.setProperty("color", "var(--black)");

        firacode.style.setProperty("background", "var(--gris)");
        firacode.style.setProperty("color", "var(--black)");

        lato.style.setProperty("background", "var(--gris)");
        lato.style.setProperty("color", "var(--black)");

        comicsans.style.setProperty("background", "var(--black)");
        comicsans.style.setProperty("color", "var(--white)");

        roboto.style.setProperty("background", "var(--gris)");
        roboto.style.setProperty("color", "var(--black)");
      } else {
        montserrat.style.setProperty("background", "var(--very-black)");
        montserrat.style.setProperty("color", "var(--white)");

        itim.style.setProperty("background", "var(--very-black) ");
        itim.style.setProperty("color", "var(--white)");

        firacode.style.setProperty("background", "var(--very-black)");
        firacode.style.setProperty("color", "var(--white)");

        lato.style.setProperty("background", "var(--very-black)");
        lato.style.setProperty("color", "var(--white)");

        comicsans.style.setProperty("background", "var(--white)");
        comicsans.style.setProperty("color", "var(--very-black)");

        roboto.style.setProperty("background", "var(--very-black)");
        roboto.style.setProperty("color", "var(--white)");
      }
    } else if (e.target == roboto) {
      style.setProperty("--family", "Roboto");
      localStorage.setItem("family", "roboto");
      if (
        localStorage.getItem("dark-mode") === "false" ||
        localStorage.getItem("dark-mode") === null
      ) {
        montserrat.style.setProperty("background", "var(--gris)");
        montserrat.style.setProperty("color", "var(--black)");

        itim.style.setProperty("background", "var(--gris)");
        itim.style.setProperty("color", "var(--black)");

        firacode.style.setProperty("background", "var(--gris)");
        firacode.style.setProperty("color", "var(--black)");

        lato.style.setProperty("background", "var(--gris)");
        lato.style.setProperty("color", "var(--black)");

        comicsans.style.setProperty("background", "var(--gris)");
        comicsans.style.setProperty("color", "var(--black)");

        roboto.style.setProperty("background", "var(--black)");
        roboto.style.setProperty("color", "var(--white)");
      } else {
        montserrat.style.setProperty("background", "var(--very-black)");
        montserrat.style.setProperty("color", "var(--white)");

        itim.style.setProperty("background", "var(--very-black) ");
        itim.style.setProperty("color", "var(--white)");

        firacode.style.setProperty("background", "var(--very-black)");
        firacode.style.setProperty("color", "var(--white)");

        lato.style.setProperty("background", "var(--very-black)");
        lato.style.setProperty("color", "var(--white)");

        comicsans.style.setProperty("background", "var(--very-black)");
        comicsans.style.setProperty("color", "var(--white)");

        roboto.style.setProperty("background", "var(--white)");
        roboto.style.setProperty("color", "var(--very-black)");
      }
    }
  });
  document.addEventListener("DOMContentLoaded", (e) => {
    if (!localStorage.getItem("family")) {
      style.setProperty("--family", "Montserrat");
      if (
        localStorage.getItem("dark-mode") === "false" ||
        !localStorage.getItem("dark-mode")
      ) {
        montserrat.style.setProperty("background", "var(--black)");
        montserrat.style.setProperty("color", "var(--white)");

        itim.style.setProperty("background", "var(--gris)");
        itim.style.setProperty("color", "var(--black)");

        firacode.style.setProperty("background", "var(--gris)");
        firacode.style.setProperty("color", "var(--black)");

        lato.style.setProperty("background", "var(--gris)");
        lato.style.setProperty("color", "var(--black)");

        comicsans.style.setProperty("background", "var(--gris)");
        comicsans.style.setProperty("color", "var(--black)");

        roboto.style.setProperty("background", "var(--gris)");
        roboto.style.setProperty("color", "var(--black)");
      } else {
        montserrat.style.setProperty("background", "var(--white)");
        montserrat.style.setProperty("color", "var(--very-black)");

        itim.style.setProperty("background", "var(--very-black) ");
        itim.style.setProperty("color", "var(--white)");

        firacode.style.setProperty("background", "var(--very-black)");
        firacode.style.setProperty("color", "var(--white)");

        lato.style.setProperty("background", "var(--very-black)");
        lato.style.setProperty("color", "var(--white)");

        comicsans.style.setProperty("background", "var(--very-black)");
        comicsans.style.setProperty("color", "var(--white)");

        roboto.style.setProperty("background", "var(--very-black)");
        roboto.style.setProperty("color", "var(--white)");
      }
    } else if (localStorage.getItem("family") == "itim") {
      style.setProperty("--family", "Itim");

      if (
        localStorage.getItem("dark-mode") === "false" ||
        localStorage.getItem("dark-mode") === null
      ) {
        montserrat.style.setProperty("background", "var(--gris)");
        montserrat.style.setProperty("color", "var(--black)");

        itim.style.setProperty("background", "var(--black)");
        itim.style.setProperty("color", "var(--white)");

        firacode.style.setProperty("background", "var(--gris)");
        firacode.style.setProperty("color", "var(--black)");

        lato.style.setProperty("background", "var(--gris)");
        lato.style.setProperty("color", "var(--black)");

        comicsans.style.setProperty("background", "var(--gris)");
        comicsans.style.setProperty("color", "var(--black)");

        roboto.style.setProperty("background", "var(--gris)");
        roboto.style.setProperty("color", "var(--black)");
      } else {
        montserrat.style.setProperty("background", "var(--very-black)");
        montserrat.style.setProperty("color", "var(--white)");

        itim.style.setProperty("background", "var(--white) ");
        itim.style.setProperty("color", "var(--very-black)");

        firacode.style.setProperty("background", "var(--very-black)");
        firacode.style.setProperty("color", "var(--white)");

        lato.style.setProperty("background", "var(--very-black)");
        lato.style.setProperty("color", "var(--white)");

        comicsans.style.setProperty("background", "var(--very-black)");
        comicsans.style.setProperty("color", "var(--white)");

        roboto.style.setProperty("background", "var(--very-black)");
        roboto.style.setProperty("color", "var(--white)");
      }
    } else if (localStorage.getItem("family") == "firacode") {
      style.setProperty("--family", "Fira Code");
      if (
        localStorage.getItem("dark-mode") === "false" ||
        localStorage.getItem("dark-mode") === null
      ) {
        montserrat.style.setProperty("background", "var(--gris)");
        montserrat.style.setProperty("color", "var(--black)");

        itim.style.setProperty("background", "var(--gris)");
        itim.style.setProperty("color", "var(--black)");

        firacode.style.setProperty("background", "var(--black)");
        firacode.style.setProperty("color", "var(--white)");

        lato.style.setProperty("background", "var(--gris)");
        lato.style.setProperty("color", "var(--black)");

        comicsans.style.setProperty("background", "var(--gris)");
        comicsans.style.setProperty("color", "var(--black)");

        roboto.style.setProperty("background", "var(--gris)");
        roboto.style.setProperty("color", "var(--black)");
      } else {
        montserrat.style.setProperty("background", "var(--very-black)");
        montserrat.style.setProperty("color", "var(--white)");

        itim.style.setProperty("background", "var(--very-black) ");
        itim.style.setProperty("color", "var(--white)");

        firacode.style.setProperty("background", "var(--white)");
        firacode.style.setProperty("color", "var(--very-black)");

        lato.style.setProperty("background", "var(--very-black)");
        lato.style.setProperty("color", "var(--white)");

        comicsans.style.setProperty("background", "var(--very-black)");
        comicsans.style.setProperty("color", "var(--white)");

        roboto.style.setProperty("background", "var(--very-black)");
        roboto.style.setProperty("color", "var(--white)");
      }
    } else if (localStorage.getItem("family") == "lato") {
      style.setProperty("--family", "Lato");
      if (
        localStorage.getItem("dark-mode") === "false" ||
        localStorage.getItem("dark-mode") === null
      ) {
        montserrat.style.setProperty("background", "var(--gris)");
        montserrat.style.setProperty("color", "var(--black)");

        itim.style.setProperty("background", "var(--gris)");
        itim.style.setProperty("color", "var(--black)");

        firacode.style.setProperty("background", "var(--gris)");
        firacode.style.setProperty("color", "var(--black)");

        lato.style.setProperty("background", "var(--black)");
        lato.style.setProperty("color", "var(--white)");

        comicsans.style.setProperty("background", "var(--gris)");
        comicsans.style.setProperty("color", "var(--black)");

        roboto.style.setProperty("background", "var(--gris)");
        roboto.style.setProperty("color", "var(--black)");
      } else {
        montserrat.style.setProperty("background", "var(--very-black)");
        montserrat.style.setProperty("color", "var(--white)");

        itim.style.setProperty("background", "var(--very-black) ");
        itim.style.setProperty("color", "var(--white)");

        firacode.style.setProperty("background", "var(--very-black)");
        firacode.style.setProperty("color", "var(--white)");

        lato.style.setProperty("background", "var(--white)");
        lato.style.setProperty("color", "var(--very-black)");

        comicsans.style.setProperty("background", "var(--very-black)");
        comicsans.style.setProperty("color", "var(--white)");

        roboto.style.setProperty("background", "var(--very-black)");
        roboto.style.setProperty("color", "var(--white)");
      }
    } else if (localStorage.getItem("family") == "comic") {
      style.setProperty("--family", "Comic Neue");
      if (
        localStorage.getItem("dark-mode") === "false" ||
        localStorage.getItem("dark-mode") === null
      ) {
        montserrat.style.setProperty("background", "var(--gris)");
        montserrat.style.setProperty("color", "var(--black)");

        itim.style.setProperty("background", "var(--gris)");
        itim.style.setProperty("color", "var(--black)");

        firacode.style.setProperty("background", "var(--gris)");
        firacode.style.setProperty("color", "var(--black)");

        lato.style.setProperty("background", "var(--gris)");
        lato.style.setProperty("color", "var(--black)");

        comicsans.style.setProperty("background", "var(--black)");
        comicsans.style.setProperty("color", "var(--white)");

        roboto.style.setProperty("background", "var(--gris)");
        roboto.style.setProperty("color", "var(--black)");
      } else {
        montserrat.style.setProperty("background", "var(--very-black)");
        montserrat.style.setProperty("color", "var(--white)");

        itim.style.setProperty("background", "var(--very-black) ");
        itim.style.setProperty("color", "var(--white)");

        firacode.style.setProperty("background", "var(--very-black)");
        firacode.style.setProperty("color", "var(--white)");

        lato.style.setProperty("background", "var(--very-black)");
        lato.style.setProperty("color", "var(--white)");

        comicsans.style.setProperty("background", "var(--white)");
        comicsans.style.setProperty("color", "var(--very-black)");

        roboto.style.setProperty("background", "var(--very-black)");
        roboto.style.setProperty("color", "var(--white)");
      }
    } else if (
      localStorage.getItem("family") == "roboto" ||
      localStorage.getItem("dark-mode") === null
    ) {
      style.setProperty("--family", "Roboto");
      if (localStorage.getItem("dark-mode") === "false") {
        montserrat.style.setProperty("background", "var(--gris)");
        montserrat.style.setProperty("color", "var(--black)");

        itim.style.setProperty("background", "var(--gris)");
        itim.style.setProperty("color", "var(--black)");

        firacode.style.setProperty("background", "var(--gris)");
        firacode.style.setProperty("color", "var(--black)");

        lato.style.setProperty("background", "var(--gris)");
        lato.style.setProperty("color", "var(--black)");

        comicsans.style.setProperty("background", "var(--gris)");
        comicsans.style.setProperty("color", "var(--black)");

        roboto.style.setProperty("background", "var(--black)");
        roboto.style.setProperty("color", "var(--white)");
      } else {
        montserrat.style.setProperty("background", "var(--very-black)");
        montserrat.style.setProperty("color", "var(--white)");

        itim.style.setProperty("background", "var(--very-black) ");
        itim.style.setProperty("color", "var(--white)");

        firacode.style.setProperty("background", "var(--very-black)");
        firacode.style.setProperty("color", "var(--white)");

        lato.style.setProperty("background", "var(--very-black)");
        lato.style.setProperty("color", "var(--white)");

        comicsans.style.setProperty("background", "var(--very-black)");
        comicsans.style.setProperty("color", "var(--white)");

        roboto.style.setProperty("background", "var(--white)");
        roboto.style.setProperty("color", "var(--very-black)");
      }
    } else if (localStorage.getItem("family") == "montserrat") {
      style.setProperty("--family", "Montserrat");
      if (
        localStorage.getItem("dark-mode") === "false" ||
        localStorage.getItem("dark-mode") === null
      ) {
        montserrat.style.setProperty("background", "var(--black)");
        montserrat.style.setProperty("color", "var(--white)");

        itim.style.setProperty("background", "var(--gris)");
        itim.style.setProperty("color", "var(--black)");

        firacode.style.setProperty("background", "var(--gris)");
        firacode.style.setProperty("color", "var(--black)");

        lato.style.setProperty("background", "var(--gris)");
        lato.style.setProperty("color", "var(--black)");

        comicsans.style.setProperty("background", "var(--gris)");
        comicsans.style.setProperty("color", "var(--black)");

        roboto.style.setProperty("background", "var(--gris)");
        roboto.style.setProperty("color", "var(--black)");
      } else {
        montserrat.style.setProperty("background", "var(--white)");
        montserrat.style.setProperty("color", "var(--very-black)");

        itim.style.setProperty("background", "var(--very-black) ");
        itim.style.setProperty("color", "var(--white)");

        firacode.style.setProperty("background", "var(--very-black)");
        firacode.style.setProperty("color", "var(--white)");

        lato.style.setProperty("background", "var(--very-black)");
        lato.style.setProperty("color", "var(--white)");

        comicsans.style.setProperty("background", "var(--very-black)");
        comicsans.style.setProperty("color", "var(--white)");

        roboto.style.setProperty("background", "var(--very-black)");
        roboto.style.setProperty("color", "var(--white)");
      }
    }
  });
}
