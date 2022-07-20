export default function timerPomo() {
  const breakFather = document.querySelector(".break-pomo");
  const workFather = document.querySelector(".work-pomo");
  const countFather = document.querySelector(".cycles-pomo");
  const min = document.getElementById("min");
  const sec = document.getElementById("sec");
  const start = document.getElementById("start");
  const minBreak = document.getElementById("min_b");
  const secBreak = document.getElementById("sec_b");
  const count = document.createElement("span");
  const titleHtml = document.getElementById("titlePomo");
  const $stopPomo = document.getElementById("stop");
  const $resetPomo = document.getElementById("reset");
  const $continuePomo = document.getElementById("continue");
  const $menuAllPomo = document.getElementById("menuAll");
  const $settingPomodoro = document.getElementById("SettingPomodoro");
  const $loader = document.getElementById("changeLoader");
  /*button*/
  const $seis = document.getElementById("six");
  const $tres = document.getElementById("three");
  const $cinco = document.getElementById("five");
  const $veinte = document.getElementById("twenty");
  const $cincuenta = document.getElementById("fifty");
  const $cuarenta = document.getElementById("fourty");

  /*end button*/

  const $progressBar = document.getElementById("progresPomo");
  let restProgress = 0.0666666666666667;
  let startProgress = 0;
  if (!localStorage.getItem("progressPomo")) {
    startProgress = 0;
  } else {
    startProgress = parseInt(localStorage.getItem("progressPomo"));
  }
  /*var work and rest*/
  let minWorking = 25;
  let secWorking = "00";
  let minRest = 5;
  let secRest = "00";

  count.className = "cycle-pomo-pomo";
  let startTimer;

  const myFun = () => {
    if (sec.innerText != 0) {
      sec.innerText--;
      localStorage.setItem("minutePomo", `${min.innerText}`);
      localStorage.setItem("secondPomo", `${sec.innerText}`);
      let minuteTempo = localStorage.getItem("minutePomo");
      let secondTempo = localStorage.getItem("secondPomo");
      titleHtml.innerHTML = `${minuteTempo}:${secondTempo}`;
    } else if (min.innerText != 0 && sec.innerText == 0) {
      sec.innerText = 59;
      min.innerText--;
      localStorage.setItem("minutePomo", `${min.innerText}`);
      localStorage.setItem("secondPomo", `${sec.innerText}`);
      let minuteTempo = localStorage.getItem("minutePomo");
      let secondTempo = localStorage.getItem("secondPomo");
      titleHtml.innerHTML = `${minuteTempo}:${secondTempo}`;
    }
    startProgress = startProgress + restProgress;
    if (
      !localStorage.getItem("dark-mode") ||
      localStorage.getItem("dark-mode") == "false"
    ) {
      $progressBar.style.setProperty(
        "background",
        `conic-gradient(var(--black) ${startProgress}%, transparent 0)`
      );
    } else {
      $progressBar.style.setProperty(
        "background",
        `conic-gradient(var(--white) ${startProgress}%, transparent 0)`
      );
    }
    localStorage.setItem("progressPomo", `${startProgress}`);
    if (min.innerText == 0 && sec.innerText == 0) {
      breakFather.style.setProperty("opacity", "1");
      breakFather.style.setProperty("position", "static");
      workFather.style.setProperty("opacity", "0");
      workFather.style.setProperty("position", "absolute");

      if (secBreak != 0) {
        secBreak.innerText--;
      }
      if (minBreak.innerText != 0 && secBreak.innerText == 0) {
        secBreak.innerText = 59;
        minBreak.innerText--;
      }
    }
    if (
      min.innerText == 0 &&
      sec.innerText == 0 &&
      minBreak.innerText == 0 &&
      secBreak.innerText == 0
    ) {
      workFather.style.setProperty("opacity", "1");
      workFather.style.setProperty("position", "static");
      breakFather.style.setProperty("opacity", "0");
      breakFather.style.setProperty("position", "absolute");
      min.innerText = minWorking;
      sec.innerText = secWorking;
      minBreak.innerText = minRest;
      secBreak.innerText = secRest;
      countFather.appendChild(count);
    }
  };
  start.addEventListener("click", (e) => {
    if (startTimer === undefined) {
      startTimer = setInterval(myFun, 1000);
      $stopPomo.style.display = "block";
      $resetPomo.style.display = "block";
      start.style.display = "none";
    }
  });
  $stopPomo.addEventListener("click", (e) => {
    $continuePomo.style.display = "block";
    $stopPomo.style.display = "none";
    clearInterval(startTimer);
  });
  $continuePomo.addEventListener("click", (e) => {
    startTimer = setInterval(myFun, 1000);
    $stopPomo.style.display = "block";
    $continuePomo.style.display = "none";
  });
  $resetPomo.addEventListener("click", (e) => {
    clearInterval(startTimer);
    localStorage.removeItem("minutePomo");
    localStorage.removeItem("secondPomo");
    localStorage.removeItem("progressPomo");
    $loader.style.display = "grid";
    location.reload();
    window.addEventListener("load", (e) => ($loader.style.display = "none"));
  });

  function activeOrDeactive(active) {
    if (
      localStorage.getItem("dark-mode") === "false" ||
      !localStorage.getItem("dark-mode")
    ) {
      $seis.style.setProperty("background", "var(--gris)");
      $seis.style.setProperty("color", "var(--black)");

      $tres.style.setProperty("background", "var(--gris)");
      $tres.style.setProperty("color", "var(--black)");

      $cinco.style.setProperty("background", "var(--gris)");
      $cinco.style.setProperty("color", "var(--black)");

      $veinte.style.setProperty("background", "var(--gris)");
      $veinte.style.setProperty("color", "var(--black)");

      $cincuenta.style.setProperty("background", "var(--gris)");
      $cincuenta.style.setProperty("color", "var(--black)");

      $cuarenta.style.setProperty("background", "var(--gris)");
      $cuarenta.style.setProperty("color", "var(--black)");

      active.style.setProperty("background", "var(--black)");
      active.style.setProperty("color", "var(--white)");
      clearInterval(startTimer);
    } else {
      $seis.style.setProperty("background", "var(--very-black)");
      $seis.style.setProperty("color", "var(--white)");

      $tres.style.setProperty("background", "var(--very-black) ");
      $tres.style.setProperty("color", "var(--white)");

      $cinco.style.setProperty("background", "var(--very-black)");
      $cinco.style.setProperty("color", "var(--white)");

      $veinte.style.setProperty("background", "var(--very-black)");
      $veinte.style.setProperty("color", "var(--white)");

      $cincuenta.style.setProperty("background", "var(--very-black)");
      $cincuenta.style.setProperty("color", "var(--white)");

      $cuarenta.style.setProperty("background", "var(--very-black)");
      $cuarenta.style.setProperty("color", "var(--white)");

      active.style.setProperty("background", "var(--white)");
      active.style.setProperty("color", "var(--very-black)");
      clearInterval(startTimer);
    }
  }
  document.addEventListener("click", (e) => {
    if (e.target == $seis) {
      activeOrDeactive($seis);
      localStorage.setItem("timer", "60/10");
      minWorking = 60;
      secWorking = "00";
      minRest = 9;
      secRest = 59;
      min.innerText = 60;
      sec.innerText = "00";
      minBreak.innerText = 9;
      secBreak.innerText = 59;
      restProgress = 0.0277777777777778;
      localStorage.removeItem("minutePomo");
      localStorage.removeItem("secondPomo");
      localStorage.removeItem("progressPomo");
      $loader.style.display = "grid";
      location.reload();
      window.addEventListener("load", (e) => ($loader.style.display = "none"));
    } else if (e.target == $tres) {
      activeOrDeactive($tres);
      localStorage.setItem("timer", "30/5");
      minWorking = 30;
      secWorking = "00";
      minRest = 4;
      secRest = 59;
      min.innerText = 30;
      sec.innerText = "00";
      minBreak.innerText = 4;
      secBreak.innerText = 59;
      restProgress = 0.0555555555555556;
      localStorage.removeItem("minutePomo");
      localStorage.removeItem("secondPomo");
      localStorage.removeItem("progressPomo");
      $loader.style.display = "grid";
      location.reload();
      window.addEventListener("load", (e) => ($loader.style.display = "none"));
    } else if (e.target == $cinco) {
      activeOrDeactive($cinco);
      localStorage.setItem("timer", "5/5");
      minWorking = 5;
      secWorking = "00";
      minRest = 4;
      secRest = 59;
      min.innerText = 5;
      sec.innerText = "00";
      minBreak.innerText = 4;
      secBreak.innerText = 59;
      restProgress = 0.3333333333333333;
      localStorage.removeItem("minutePomo");
      localStorage.removeItem("secondPomo");
      localStorage.removeItem("progressPomo");
      $loader.style.display = "grid";
      location.reload();
      window.addEventListener("load", (e) => ($loader.style.display = "none"));
    } else if (e.target == $veinte) {
      activeOrDeactive($veinte);
      localStorage.setItem("timer", "25/5");
      minWorking = 25;
      secWorking = "00";
      minRest = 4;
      secRest = 59;
      min.innerText = 25;
      sec.innerText = "00";
      minBreak.innerText = 4;
      secBreak.innerText = 59;
      restProgress = 0.0666666666666667;
      localStorage.removeItem("minutePomo");
      localStorage.removeItem("secondPomo");
      localStorage.removeItem("progressPomo");
      $loader.style.display = "grid";
      location.reload();
      window.addEventListener("load", (e) => ($loader.style.display = "none"));
    } else if (e.target == $cincuenta) {
      activeOrDeactive($cincuenta);
      localStorage.setItem("timer", "50/10");
      minWorking = 50;
      secWorking = "00";
      minRest = 9;
      secRest = 59;
      min.innerText = 50;
      sec.innerText = "00";
      minBreak.innerText = 9;
      secBreak.innerText = 59;
      restProgress = 0.0333333333333333;
      localStorage.removeItem("minutePomo");
      localStorage.removeItem("secondPomo");
      localStorage.removeItem("progressPomo");
      $loader.style.display = "grid";
      location.reload();
      window.addEventListener("load", (e) => ($loader.style.display = "none"));
    } else if (e.target == $cuarenta) {
      activeOrDeactive($cuarenta);
      localStorage.setItem("timer", "40/10");
      minWorking = 40;
      secWorking = "00";
      minRest = 9;
      secRest = 59;
      min.innerText = 40;
      sec.innerText = "00";
      minBreak.innerText = 9;
      secBreak.innerText = 59;
      restProgress = 0.0416666666666667;
      localStorage.removeItem("minutePomo");
      localStorage.removeItem("secondPomo");
      localStorage.removeItem("progressPomo");
      $loader.style.display = "grid";
      location.reload();
      window.addEventListener("load", (e) => ($loader.style.display = "none"));
    }
  });
  document.addEventListener("DOMContentLoaded", (e) => {
    if (localStorage.getItem("timer") == "60/10") {
      activeOrDeactive($seis);
      minWorking = 60;
      secWorking = "00";
      minRest = 9;
      secRest = 59;
      min.innerText = 60;
      sec.innerText = "00";
      minBreak.innerText = 9;
      secBreak.innerText = 59;
      restProgress = 0.0277777777777778;
    } else if (localStorage.getItem("timer") == "30/5") {
      activeOrDeactive($tres);
      minWorking = 30;
      secWorking = "00";
      minRest = 4;
      secRest = 59;
      min.innerText = 30;
      sec.innerText = "00";
      minBreak.innerText = 4;
      secBreak.innerText = 59;
      restProgress = 0.0555555555555556;
    } else if (localStorage.getItem("timer") == "5/5") {
      activeOrDeactive($cinco);
      minWorking = 5;
      secWorking = "00";
      minRest = 4;
      secRest = 59;
      min.innerText = 5;
      sec.innerText = "00";
      minBreak.innerText = 4;
      secBreak.innerText = 59;
      restProgress = 0.3333333333333333;
    } else if (localStorage.getItem("timer") == "25/5") {
      activeOrDeactive($veinte);
      minWorking = 25;
      secWorking = "00";
      minRest = 4;
      secRest = 59;
      min.innerText = 25;
      sec.innerText = "00";
      minBreak.innerText = 4;
      secBreak.innerText = 59;
      restProgress = 0.0666666666666667;
    } else if (localStorage.getItem("timer") == "50/10") {
      activeOrDeactive($cincuenta);
      minWorking = 50;
      secWorking = "00";
      minRest = 9;
      secRest = 59;
      min.innerText = 50;
      sec.innerText = "00";
      minBreak.innerText = 9;
      secBreak.innerText = 59;
      restProgress = 0.0333333333333333;
    } else if (localStorage.getItem("timer") == "40/10") {
      activeOrDeactive($cuarenta);
      minWorking = 40;
      secWorking = "00";
      minRest = 9;
      secRest = 59;
      min.innerText = 40;
      sec.innerText = "00";
      minBreak.innerText = 9;
      secBreak.innerText = 59;
      restProgress = 0.0416666666666667;
    } else {
      activeOrDeactive($veinte);
      minWorking = 25;
      secWorking = "00";
      minRest = 4;
      secRest = 59;
      min.innerText = 25;
      sec.innerText = "00";
      minBreak.innerText = 4;
      secBreak.innerText = 59;
      restProgress = 0.0666666666666667;
    }
  });

  if (localStorage.getItem("minutePomo")) {
    let minuteTempo = localStorage.getItem("minutePomo");
    let secondTempo = localStorage.getItem("secondPomo");
    titleHtml.innerHTML = `${minuteTempo}:${secondTempo}`;
  } else {
    titleHtml.innerHTML = `my-task-app`;
  }
  document.addEventListener("DOMContentLoaded", (e) => {
    if (localStorage.getItem("minutePomo") == null) {
      console.clear();
    } else {
      min.innerText = parseInt(localStorage.getItem("minutePomo"));
      sec.innerText = parseInt(localStorage.getItem("secondPomo"));
      startTimer = setInterval(myFun, 1000);
      $stopPomo.style.display = "block";
      $resetPomo.style.display = "block";
      start.style.display = "none";
    }
  });
  $settingPomodoro.addEventListener("click", (e) => {
    $menuAllPomo.style.left = "0vw";
  });
}
