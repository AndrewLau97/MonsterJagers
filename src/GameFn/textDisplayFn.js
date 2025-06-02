import shopBG from "../assets/Background_images/Shop.jpg";
import blacksmithBG from "../assets/Background_images/Blacksmith.jpg";
import enchantedWeaponBG from "../assets/Background_images/EnchantedWeapons.jpg";
import magicBG from "../assets/Background_images/MagicBooks.jpg";
import potionsBG from "../assets/Background_images/Potions.jpg";
import VillageOneBG from "../assets/Background_images/VillageOne.jpg";
import VillageTwoBG from "../assets/Background_images/VillageTwo.jpg";
import VillageThreeBG from "../assets/Background_images/VillageThree.jpg";
import innBG from "../assets/Background_images/Inn.jpg";
import outskirtsBG from "../assets/Background_images/Outskirts.jpg";
import slimeBG from "../assets/Background_images/SlimeHabitat.jpg"
import wizardBG from "../assets/Background_images/WizardsTower.jpg";
import elementalBG from  "../assets/Background_images/ElementalPlane.jpg"

function scrollText(text) {
  const splitText = text.split("");
  const shownGameText = document.getElementById("text");
  let startTick = false;
  if (shownGameText) {
    shownGameText.innerHTML = "";
    for (let i = 0; i < splitText.length; i++) {
      shownGameText.innerHTML += "<span>" + splitText[i] + "</span>";
    }

    let char = 0;
    let timer = setInterval(onTick, 1);
    button1.setAttribute("disabled", "");
    button2.setAttribute("disabled", "");
    button3.setAttribute("disabled", "");
    button4.setAttribute("disabled", "");
    function onTick() {
      const span = shownGameText.querySelectorAll("span")[char];
      if (char === 0 || startTick === true) {
        startTick = true;
        if (span) {
          span.classList.add("fade");
          char++;
          if (char === splitText.length) {
            complete();
            return;
          }
        }
      }
    }

    function complete() {
      button1.removeAttribute("disabled");
      button2.removeAttribute("disabled");
      button3.removeAttribute("disabled");
      button4.removeAttribute("disabled");
      clearInterval(timer);
      timer = null;
      startTick = false;
    }
  }
}

function disableButtons(...buttons) {
  // window[`button`+button].style.display='none'
  // window[`button`+button].setAttribute('disabled','')
  if (buttons.length > 0) {
    const disableButton = buttons.shift();
    window[`button` + disableButton].style.display = "none";
    window[`button` + disableButton].setAttribute("disabled", "");
    disableButtons(...buttons);
  }
}

function enableButtons(...buttons) {
  if (buttons.length > 0) {
    const enableButton = buttons.shift();
    window[`button` + enableButton].style.display = "inline";
    window[`button` + enableButton].removeAttribute("disabled");
    enableButtons(...buttons)
  }
  // window["button" + button].style.display = "inline";
  // window[`button` + button].removeAttribute("disabled");
}

function changeBG(chosenBG, allBackgrounds){
  const background=document.getElementById('background');
  background.style.backgroundImage=`url(${allBackgrounds[chosenBG]})`
}

export { scrollText, disableButtons, enableButtons, changeBG };
