import { useEffect } from "react";
import locations from "../GameData/Locations";

const Control = ({ locationInfo, setLocationInfo, saveFile, setGameText }) => { 
  const keyPress = (event) => {
    if (event.key === "1" && !button1.hasAttribute("disabled")) {
      handleBtnClick(0);
    } else if (event.key === "2" && !button2.hasAttribute("disabled")) {
      handleBtnClick(1);
    } else if (event.key === "3" && !button3.hasAttribute("disabled")) {
      handleBtnClick(2);
    } else if (event.key === "4" && !button4.hasAttribute("disabled")) {
      handleBtnClick(3);
    }
  };

  const handleBtnClick = (e) => {
    let button;
  if(typeof e ==="number"){
    button = e;
  }else{
    button = Number(e.target.id.replace("button", "")) - 1;
  }
    if (locationInfo !== null) {
      locations[locationInfo]["button functions"][button](
        setLocationInfo,
        saveFile,
        setGameText
      );
    } else {
      locations[0]["button functions"][button](
        setLocationInfo,
        saveFile,
        setGameText
      );
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return function () {
      document.removeEventListener("keydown", keyPress);
    };
  }, [keyPress]);

  return (
    <>
      {" "}
      {locationInfo !== null ? (
        <>
          <div id="controls">
            <button id="button1" onClick={handleBtnClick}>
              {locations[locationInfo]["button text"][0]}
            </button>
            <button id="button2" onClick={handleBtnClick}>
              {locations[locationInfo]["button text"][1]}
            </button>
            <button id="button3" onClick={handleBtnClick}>
              {locations[locationInfo]["button text"][2]}
            </button>
            {locations[locationInfo]["button text"][3] ? (
              <button id="button4" onClick={handleBtnClick}>
                {locations[locationInfo]["button text"][3]}
              </button>
            ) : (
              <button id="button4" onClick={handleBtnClick} disabled>
                {locations[locationInfo]["button text"][3]}
              </button>
            )}
          </div>
        </>
      ) : (
        <>
          <div id="controls">
            <button id="button1" onClick={handleBtnClick}>
              Shop
            </button>
            <button id="button2" onClick={handleBtnClick}>
              Walk through town
            </button>
            <button id="button3" onClick={handleBtnClick}>
              Continue onwards to town2 name undecided
            </button>
            <button id="button4" disabled>
              Leave Store
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default Control;
