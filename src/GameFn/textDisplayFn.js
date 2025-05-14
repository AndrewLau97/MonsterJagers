function scrollText (text) {
  const splitText = text.split("");
  const shownGameText = document.getElementById("text");
  let startTick=false
  if(shownGameText){
    shownGameText.innerHTML = "";
    for (let i = 0; i < splitText.length; i++) {
      shownGameText.innerHTML += "<span>" + splitText[i] + "</span>";
    }
    
    let char = 0;
    let timer = setInterval(onTick, 10);
    button1.setAttribute("disabled", "");
    button2.setAttribute("disabled", "");
    button3.setAttribute("disabled", "");
    button4.setAttribute("disabled", "");
    function onTick() {
      const span = shownGameText.querySelectorAll("span")[char];
      if(char===0||startTick===true){
        startTick=true
        if(span){
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
      startTick=false
    }
  
  }
}

export { scrollText };