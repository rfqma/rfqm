// set the line spacing for equal distance between the lines and the letters (use em to fit the font size)
const lineSpacing = 0.25;
// set the line height for equal distance between the lines and the letters (use em to fit the font size)
const lineHeight = 0.8;

const calculateApplyFontSize = ({
  preTag,
  charsPerLine,
  charsPerColumn,
  parentWidth,
  parentHeight,
}: {
  preTag: HTMLPreElement;
  charsPerLine: number;
  charsPerColumn: number;
  parentWidth: number;
  parentHeight: number;
}) => {
  // the value to increment the font size with
  const incrementFontValue = 0.1;
  // set init font size for calculation (a value too small will make the text not visible on some devices)
  const initFontSize = 1.0;
  let fontSize = initFontSize;

  const filledStringLine = String("W").repeat(charsPerLine);

  // create a pre element to calculate the height of the text
  const preElementBuffer = document.createElement("pre");
  preElementBuffer.style.fontSize = `${fontSize}px`;
  preElementBuffer.style.fontFamily = "monospace";
  preElementBuffer.style.letterSpacing = `${lineSpacing}em`;
  preElementBuffer.style.lineHeight = `${lineHeight}em`;
  // hide the pre buffer element
  preElementBuffer.style.position = "absolute";

  // fill the pre buffer element with `filledStringLine` for each line
  for (let i = 0; i < charsPerColumn; i++) {
    preElementBuffer.append(filledStringLine);
    preElementBuffer.append("\n");
  }

  // Append the pre element to the DOM to calculate the width and height
  document.body.appendChild(preElementBuffer);

  // Calculate width and height of the pre element
  // let preWidth = preElementBuffer.offsetWidth;
  let preWidth = preElementBuffer.getBoundingClientRect().width;
  // let preHeight = preElementBuffer.offsetHeight;
  let preHeight = preElementBuffer.getBoundingClientRect().height;

  // Increase the font size until the text is wider than the screen in width or height
  while (preWidth < parentWidth && preHeight < parentHeight) {
    fontSize += incrementFontValue;
    preElementBuffer.style.fontSize = `${fontSize}px`;
    preWidth = preElementBuffer.getBoundingClientRect().width;
    preHeight = preElementBuffer.getBoundingClientRect().height;
  }

  // Remove the pre tag buffer
  preElementBuffer.remove();

  // Decrease the font size by one to get the correct size
  fontSize -= incrementFontValue;

  // Set the font size
  preTag.style.fontSize = `${fontSize}px`;

  // Debug
  console.log("calculateAndSetFontSize");
  console.log(`Setting font size to ${fontSize}`);
  console.log(`parentHeight: ${parentHeight}, preHeight: ${preHeight}`);
  console.log(`parentWidth: ${parentWidth}, preWidth: ${preWidth}`);
};

const pixelToAsciiChar = (intensity: number, asciiChars: string) => {
  return asciiChars[Math.floor((intensity / 256) * asciiChars.length)];
};

const pixelToAsciiCharColor = (
  red: number,
  green: number,
  blue: number,
  asciiChars: string,
) => {
  const color = `rgb(${red}, ${green}, ${blue})`;
  const colorIndex = Math.floor(
    ((red + green + blue) / 3 / 256) * asciiChars.length,
  );
  const asciiChar = asciiChars[colorIndex];
  return `<span style="color: ${color}">${asciiChar}</span>`;
};

const getAsciiFromImage = (imageData: ImageData, asciiChars: string) => {
  const { width } = imageData;
  const { height } = imageData;
  const pixels = imageData.data;

  let asciiImage = "";
  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x++) {
      const index = (y * width + x) * 4;
      const intensity =
        (pixels[index] + pixels[index + 1] + pixels[index + 2]) / 3;
      asciiImage += pixelToAsciiChar(intensity, asciiChars);
    }

    asciiImage += "\n";
  }

  return asciiImage;
};

const getAsciiFromImageColor = (imageData: ImageData, asciiChars: string) => {
  const { width } = imageData;
  const { height } = imageData;
  const pixels = imageData.data;

  let asciiImage = "";
  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x++) {
      const index = (y * width + x) * 4;
      asciiImage += pixelToAsciiCharColor(
        pixels[index],
        pixels[index + 1],
        pixels[index + 2],
        asciiChars,
      );
    }

    asciiImage += "\n";
  }

  return asciiImage;
};

const canvasImgToUrl = (canvas: HTMLCanvasElement) => {
  const img = new Image();
  img.src = canvas.toDataURL();
  return img;
};

const videoImgToUrl = (video: HTMLVideoElement) => {
  const canvas = document.createElement("canvas");
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  const context = canvas.getContext("2d")!;
  context.drawImage(video, 0, 0, canvas.width, canvas.height);
  return canvasImgToUrl(canvas);
};

export {
  getAsciiFromImage,
  calculateApplyFontSize,
  getAsciiFromImageColor,
  lineSpacing,
  canvasImgToUrl,
  videoImgToUrl,
  lineHeight,
};
