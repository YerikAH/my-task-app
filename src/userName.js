export default function nameUser() {
  const $window = document.querySelector(".window");
  const $user = document.getElementById("tools-user-user");
  const $modal = document.querySelector(".modal-user-name-center");
  const $save = document.getElementById("modal-user-name-modal");
  const $input = document.getElementById("modal-user-name-input");
  const $alertError = document.getElementById("modal-user-name-input-error");
  const $name = document.getElementById("tools-user-name");
  const $nameMobile = document.getElementById("nameMobilePost");
  const $exitModal = document.getElementById("quitModalName");
  const $menuAllSettingsTwo = document.getElementById("menuAll");
  //mobile
  const $inputMobileName = document.getElementById("nameMobilUser");
  const $saveMobileName = document.getElementById("nameMobilSubmit");
  const $errorMobileName = document.getElementById("nameMobilError");
  $user.addEventListener("click", (e) => {
    $window.style.setProperty("display", "block");
    $modal.style.setProperty("top", "0");
    $menuAllSettingsTwo.style.left = "-300vw";
  });
  function logicName(theInput, inputError, nameShow, dupliShow) {
    if (theInput.value.length > 10) {
      inputError.innerHTML = `Hey do not put a name with more than 10 letters`;
      setTimeout(() => {
        inputError.innerHTML = ``;
      }, 2000);
    } else if (theInput.value == "") {
      inputError.innerHTML = `Hey I didn't put any name`;
      setTimeout(() => {
        inputError.innerHTML = ``;
      }, 2000);
    } else {
      nameShow.innerHTML = `${theInput.value}`;
      dupliShow.innerHTML = `${theInput.value}`;
      if (nameShow.length == 0) {
        localStorage.setItem("name", "false");
      } else {
        localStorage.setItem("name", `${theInput.value}`);
      }
      $window.style.setProperty("display", "none");
      $modal.style.setProperty("top", "-100vw");
    }
  }
  $save.addEventListener("click", (e) => {
    e.preventDefault;
    logicName($input, $alertError, $name, $nameMobile);
  });
  $exitModal.addEventListener("click", (e) => {
    $window.style.setProperty("display", "none");
    $modal.style.setProperty("top", "-100vw");
  });
  $saveMobileName.addEventListener("click", (e) => {
    e.preventDefault;
    logicName($inputMobileName, $errorMobileName, $nameMobile, $name);
  });
  document.addEventListener("DOMContentLoaded", (e) => {
    if (
      !localStorage.getItem("name") ||
      localStorage.getItem("name") == "false"
    ) {
      $name.innerHTML = ``;
      $nameMobile.innerHTML = ``;
    } else {
      $name.innerHTML = localStorage.getItem("name");
      $nameMobile.innerHTML = localStorage.getItem("name");
    }
  });
}
