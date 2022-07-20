function AdviceGenerator() {
  const $adviceOn = document.getElementById("adviceOn");
  const $adviceOff = document.getElementById("adviceOff");
  const $adviceText = document.getElementById("adviceText");
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
  async function getAdvice() {
    try {
      let res = await fetch("https://api.adviceslip.com/advice");
      let json = await res.json();
      if (!res.ok) throw { statusText: res.statusText, status: res.status };
      let advice = json.slip.advice;
      $adviceText.textContent = `${advice}`;
    } catch (err) {
      $adviceText.textContent = `Sorry, an error occurred :(`;
    }
  }
  $adviceOn.addEventListener("click", (e) => {
    switchColor($adviceOn, $adviceOff);
    localStorage.setItem("advice", "true");
    getAdvice();
  });
  $adviceOff.addEventListener("click", (e) => {
    switchColor($adviceOff, $adviceOn);
    localStorage.setItem("advice", "false");
    $adviceText.textContent = "You don't have tasks to do yet ";
  });
  document.addEventListener("DOMContentLoaded", (e) => {
    if (
      localStorage.getItem("advice") === "false" ||
      !localStorage.getItem("advice")
    ) {
      switchColor($adviceOff, $adviceOn);
    } else {
      switchColor($adviceOn, $adviceOff);
      getAdvice();
    }
  });
}

export default AdviceGenerator;
