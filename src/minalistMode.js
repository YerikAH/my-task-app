function MinalistMode() {
  const $minimaOn = document.getElementById("minimaOn");
  const $minimaOff = document.getElementById("minimaOff");
  //Element On
  const $infoChild = document.getElementById("InfoChildGrid");
  const $NameChild = document.getElementById("NameChildGrid");
  const $darkModeChild = document.getElementById("MinimalistDark");
  //Element Off
  const $socialMediaChild = document.getElementById("socialMediaMinina");
  const $versionFooter = document.getElementById("versionFooter");
  const $logoFooterDesktop = document.getElementById("logoFooter");
  const $darkModebutton = document.getElementById("darkMode");
  const $settingsNoMinimalist = document.getElementById("toolsUser");
  const $nameMinimalist = document.getElementById("tools-user-name");
  const $minalistPositionFoot = document.getElementById("minalistPositionFoot");
  const $noSoportMobile = document.getElementById("minimaOff");
  const $noSoportMobileTwo = document.getElementById("minimaOn");
  //active setting
  const $hamActive = document.getElementById("settingsMobile");
  function switchMinimalist(active, deactivate) {
    $infoChild.style.display = active;
    $NameChild.style.display = active;
    $darkModeChild.style.display = active;
    $hamActive.style.display = active;
    //deactivate
    $socialMediaChild.style.display = deactivate;
    $versionFooter.style.display = deactivate;
    $logoFooterDesktop.style.display = deactivate;
    $darkModebutton.style.display = deactivate;
    $settingsNoMinimalist.style.display = deactivate;
    $nameMinimalist.style.display = deactivate;
  }
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
  $minimaOn.addEventListener("click", (e) => {
    switchColor($minimaOn, $minimaOff);
    localStorage.setItem("minimalist", "true");
    switchMinimalist("grid", "none");
    if (document.documentElement.clientHeight > 1000) {
      $minalistPositionFoot.style.position = "absolute";
      $minalistPositionFoot.style.width = "87%";
    } else {
      $minalistPositionFoot.style.position = "static";
      $minalistPositionFoot.style.width = "100%";
    }
  });

  $minimaOff.addEventListener("click", (e) => {
    switchColor($minimaOff, $minimaOn);
    localStorage.setItem("minimalist", "false");
    switchMinimalist("none", "block");
    if (document.documentElement.clientHeight < 650) {
      $minalistPositionFoot.style.position = "static";
      $minalistPositionFoot.style.width = "100%";
    } else {
      $minalistPositionFoot.style.position = "absolute";
      $minalistPositionFoot.style.width = "87%";
    }

    $darkModebutton.style.display = "flex";
    $socialMediaChild.style.display = "flex";
    $settingsNoMinimalist.style.display = "flex";
    $versionFooter.style.display = "flex";
    $logoFooterDesktop.style.display = "flex";
  });

  document.addEventListener("DOMContentLoaded", (e) => {
    if (window.matchMedia("(min-width: 810px)").matches) {
      if (
        localStorage.getItem("minimalist") === "false" ||
        !localStorage.getItem("minimalist")
      ) {
        switchColor($minimaOff, $minimaOn);
        switchMinimalist("none", "block");
        $noSoportMobile.removeAttribute("disabled");
        $noSoportMobileTwo.removeAttribute("disabled");
        if (document.documentElement.clientHeight < 650) {
          $minalistPositionFoot.style.position = "static";
          $minalistPositionFoot.style.width = "100%";
        } else {
          $minalistPositionFoot.style.position = "absolute";
          $minalistPositionFoot.style.width = "87%";
        }

        $darkModebutton.style.display = "flex";
        $socialMediaChild.style.display = "flex";
        $settingsNoMinimalist.style.display = "flex";
        $versionFooter.style.display = "flex";
        $logoFooterDesktop.style.display = "flex";
      } else {
        switchColor($minimaOn, $minimaOff);
        switchMinimalist("grid", "none");

        $noSoportMobile.removeAttribute("disabled");
        $noSoportMobileTwo.removeAttribute("disabled");

        $minalistPositionFoot.style.position = "static";
        $minalistPositionFoot.style.width = "100%";
      }
    } else {
      if (
        localStorage.getItem("minimalist") === "false" ||
        !localStorage.getItem("minimalist")
      ) {
        switchColor($minimaOn, $minimaOff);
        switchMinimalist("grid", "none");

        $noSoportMobile.setAttribute("disabled", "true");
        $noSoportMobileTwo.setAttribute("disabled", "true");

        $minalistPositionFoot.style.position = "static";
        $minalistPositionFoot.style.width = "100%";
      }
    }
  });
  window.addEventListener("resize", (e) => {
    if (document.documentElement.clientWidth < 810) {
      switchColor($minimaOn, $minimaOff);
      switchMinimalist("grid", "none");

      $noSoportMobile.setAttribute("disabled", "true");
      $noSoportMobileTwo.setAttribute("disabled", "true");

      $minalistPositionFoot.style.position = "static";
      $minalistPositionFoot.style.width = "100%";
    } else {
      if (
        localStorage.getItem("minimalist") === "false" ||
        !localStorage.getItem("minimalist")
      ) {
        switchColor($minimaOff, $minimaOn);
        switchMinimalist("none", "block");

        $noSoportMobile.removeAttribute("disabled");
        $noSoportMobileTwo.removeAttribute("disabled");

        if (document.documentElement.clientHeight < 650) {
          $minalistPositionFoot.style.position = "static";
          $minalistPositionFoot.style.width = "100%";
        } else {
          $minalistPositionFoot.style.position = "absolute";
          $minalistPositionFoot.style.width = "87%";
        }

        $darkModebutton.style.display = "flex";
        $socialMediaChild.style.display = "flex";
        $settingsNoMinimalist.style.display = "flex";
        $versionFooter.style.display = "flex";
        $logoFooterDesktop.style.display = "flex";
      } else {
        switchColor($minimaOn, $minimaOff);
        switchMinimalist("grid", "none");

        $noSoportMobile.removeAttribute("disabled");
        $noSoportMobileTwo.removeAttribute("disabled");

        $minalistPositionFoot.style.position = "static";
        $minalistPositionFoot.style.width = "100%";
      }
    }
  });
}

export default MinalistMode;
