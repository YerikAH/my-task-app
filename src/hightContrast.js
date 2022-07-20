function HightContrast() {
  const $contrastOff = document.getElementById("contrastOff");
  const $contrastOn = document.getElementById("contrastOn");
  const style = document.documentElement.style;
  function switchColor(claseActive, claseDeactivate) {
    if (
      localStorage.getItem("dark-mode") === "false" ||
      !localStorage.getItem("dark-mode")
    ) {
      claseActive.style.background = "var(--black)";
      claseActive.style.color = "var(--white)";
      claseDeactivate.style.background = "var(--gris)";
      claseDeactivate.style.color = "var(--black)";
    } else {
      claseActive.style.background = "var(--white)";
      claseActive.style.color = "var(--very-black)";
      claseDeactivate.style.background = "var(--very-black)";
      claseDeactivate.style.color = "var(--white)";
    }
  }
  function hightContrastChange() {
    style.setProperty("--black", "#151515");
    style.setProperty("--white", "#F9F9F9");
    style.setProperty("--very-black", "#222222");
  }
  function normalChange() {
    style.setProperty("--black", "#333333");
    style.setProperty("--white", "#FFFFFF");
    style.setProperty("--very-black", "#262626");
  }
  $contrastOn.addEventListener("click", (e) => {
    switchColor($contrastOn, $contrastOff);
    localStorage.setItem("hight", "true");
    hightContrastChange();
  });
  $contrastOff.addEventListener("click", (e) => {
    switchColor($contrastOff, $contrastOn);
    localStorage.setItem("hight", "false");
    normalChange();
  });
  document.addEventListener("DOMContentLoaded", (e) => {
    if (
      localStorage.getItem("hight") === "false" ||
      !localStorage.getItem("hight")
    ) {
      switchColor($contrastOff, $contrastOn);
      normalChange();
    } else {
      switchColor($contrastOn, $contrastOff);
      hightContrastChange();
    }
  });
}

export default HightContrast;
