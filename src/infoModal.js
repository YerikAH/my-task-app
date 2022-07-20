export default function infoModal() {
  const btnInfo = document.getElementById("tools-user-info");
  const foud = document.querySelector(".info-center");
  const closeBtnInfo = document.querySelector(".info-btn");
  const $window = document.querySelector(".window");
  const $quitInfo = document.getElementById("quitModalInfo");
  const $menuAllSettings = document.getElementById("menuAll");
  btnInfo.addEventListener("click", (e) => {
    foud.style.setProperty("top", "0vh");
    $window.style.setProperty("display", "block");
    $menuAllSettings.style.left = "-300vw";
  });
  closeBtnInfo.addEventListener("click", (e) => {
    foud.style.setProperty("top", "-100vh");
    $window.style.setProperty("display", "none");
  });
  $quitInfo.addEventListener("click", (e) => {
    foud.style.setProperty("top", "-100vh");
    $window.style.setProperty("display", "none");
  });
}
