import * as cl from "./colors.js";
import { getParagraph } from "./paragraph .js";
import { calculateWPM, inputArr, wordValidator } from "./functions.js";

const render = (paragraph, inputArr) => {
  console.clear();
  console.log(cl.bold(paragraph.join(" ")));
  console.log(inputArr.join(" "));
};

const validateWord = (paragraph, i, input, noOfWrongWords) => {
  inputArr.push(input);
  if (!wordValidator(paragraph, inputArr, i, noOfWrongWords)) {
    return true;
  }
  return false;
};

const startProgram = (paragraph) => {
  let noOfWrongWords = 0;
  render(paragraph, inputArr);

  for (let i = 0; i < paragraph.length; i++) {
    const inputWord = prompt("");
    if (validateWord(paragraph, i, inputWord, noOfWrongWords)) {
      noOfWrongWords++;
    }

    render(paragraph, inputArr);
  }
  return noOfWrongWords;
};

const main = async (length) => {
  const paragraph = await getParagraph(length);
  const words = paragraph.split(" ");

  const start = Date.now();

  const noOfWrongWords = startProgram(words);

  const { drived, rawWPM } = calculateWPM(start, noOfWrongWords);
  console.log("WPM -->", Number(drived).toFixed(2));
  console.log("RawWPM -->", Number(rawWPM).toFixed(2));
};

main(Number(Deno.args[0]) || 10);
