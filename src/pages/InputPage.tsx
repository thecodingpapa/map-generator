import { useHookstate } from "@hookstate/core";
import CountryList from "./CountryList";
import { globalSvgState } from "../CountryMap";

import { Canvg } from "canvg";

function InputPage() {
  const svgState = useHookstate(globalSvgState);

  const handleClick = async () => {
    //width="3008" height="1536"
    const svgText = svgState.get();

    // Create a canvas element
    const canvas = document.createElement("canvas");
    canvas.width = 6016;
    canvas.height = 3072;
    const ctx = canvas.getContext("2d")!;

    const v = await Canvg.from(ctx, svgText);
    // Render the SVG into the canvas
    await v.render();

    // Use the canvas for further processing, such as saving as an image
    const image = canvas.toDataURL("image/png");
    //download image
    const link = document.createElement("a");
    link.download = "image.png";
    link.href = image;
    link.click();
  };

  return (
    <div>
      <CountryList />
      <br></br>
      <button onClick={handleClick}>Download Map</button>
    </div>
  );
}

export default InputPage;
