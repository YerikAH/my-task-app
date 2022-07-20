function Ham() {
  const $ham = document.getElementById("settingsMobile");
  const $exitHam = document.getElementById("exitHamSettings");
  const $menuAll = document.getElementById("menuAll");
  const $hamDes = document.getElementById("settingsDesk");
  $ham.addEventListener("click", (e) => {
    $menuAll.style.left = "0vw";
  });
  $exitHam.addEventListener("click", (e) => {
    $menuAll.style.left = "-300vw";
  });
  $hamDes.addEventListener("click", (e) => {
    $menuAll.style.left = "0vw";
  });
}

export default Ham;
