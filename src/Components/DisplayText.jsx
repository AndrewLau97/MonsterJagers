import { useEffect } from "react";
import { scrollText } from "../GameFn/textDisplayFn";

const DisplayText = ({gameText}) => {

    useEffect(()=>{
      scrollText(gameText)
    },[gameText])
  return (
    <>
      <div id="text" className='rpgui-container framed-golden'>{/* {gameText} */}</div>
    </>
  );
};

export default DisplayText;
