import * as cl from "./colors.js";
import { getNeutralParagraph } from "./paragraph .js";
import { calculateWPM, inputArr, wordValidator } from "./functions.js";

let noOfWrongWords = 0;

const render = (paragraph, inputArr) => {
  console.clear();
  console.log(cl.bold(paragraph.join(" ")));
  console.log(inputArr.join(" "));
};

const userInput = (paragraph) => {
  let i = 0;

  while (i !== paragraph.length) {
    render(paragraph, inputArr);

    inputArr.push(prompt(""));

    if (!wordValidator(paragraph, inputArr, i, noOfWrongWords)) {
      noOfWrongWords++;
    }

    i++;
  }

  render(paragraph, inputArr);
};

const main = async () => {
  const paragraph = await getNeutralParagraph();
  const words = paragraph.split(" ");

  const start = Date.now();
  userInput(words);

  const { drived, rawWPM } = calculateWPM(start, noOfWrongWords);
  console.log("WPM -->", Number(drived).toFixed(2));
  console.log("RawWPM -->", Number(rawWPM).toFixed(2));
};

main();
