import * as cl from "./colors.js";

export const inputArr = [];

export const calculateWPM = (start, noOfWrongWords) => {
  const totalWords = inputArr.length;
  const correctWords = totalWords - noOfWrongWords;
  const durationMinutes = ((Date.now() - start) / 1000) / 60;

  const drived = correctWords / durationMinutes;
  const rawWPM = totalWords / durationMinutes;

  return { drived, rawWPM };
};

const highlightMismatch = (char) => cl.bold(cl.red(char));

const buildValidatedWord = (ogWord, userWord) => {
  let flag = true;
  const outputArr = [];
  let i = 0;

  while (i < Math.min(ogWord.length, userWord.length)) {
    if (ogWord[i] !== userWord[i]) {
      flag = false;
      outputArr.push(highlightMismatch(userWord[i]));
    } else {
      outputArr.push(userWord[i]);
    }
    i++;
  }

  if (i < userWord.length) {
    flag = false;
    outputArr.push(highlightMismatch(userWord.slice(i)));
  }

  if (i < ogWord.length) {
    flag = false;
    outputArr.push(highlightMismatch(ogWord.slice(i)));
  }

  return { flag, output: outputArr.join("") };
};

export const wordValidator = (paragraph, inputArr, index) => {
  const ogWord = paragraph[index].trim();
  const userWord = inputArr[index].trim();

  const { flag, output } = buildValidatedWord(ogWord, userWord);
  inputArr[index] = output;

  return flag;
};
