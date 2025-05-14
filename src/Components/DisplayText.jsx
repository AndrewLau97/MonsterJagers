import { useEffect } from "react";
import { scrollText } from "../GameFn/textDisplayFn";

const DisplayText = ({gameText}) => {

    useEffect(()=>{
      scrollText(gameText)
    },[gameText])
  return (
    <>
      <div id="text">{/* {gameText} */}</div>
    </>
  );
};

export default DisplayText;
