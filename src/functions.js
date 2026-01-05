import * as cl from "./colors.js";

export const inputArr = [];
const highlightMismatch = (char) => cl.bold(cl.red(char));

export const calculateWPM = (start, noOfWrongWords) => {
  const totalWords = inputArr.length;
  const correctWords = totalWords - noOfWrongWords;
  const durationMinutes = ((Date.now() - start) / 1000) / 60;

  const drived = correctWords / durationMinutes;
  const rawWPM = totalWords / durationMinutes;

  return { drived, rawWPM };
};

export const extraCharacter = (userWord, index, outputArr) => {
  if (index < userWord.length) {
    outputArr.push(highlightMismatch(userWord.slice(index)));
    return true;
  }
  return false;
};

export const lessCharacter = (ogWord, index, outputArr) => {
  if (index < ogWord.length) {
    outputArr.push(highlightMismatch(ogWord.slice(index)));
    return true;
  }
  return false;
};

const wordValidate = (ogWord, userWord, outputArr) => {
  let flag = true;
  let i = 0;

  while (i < Math.min(ogWord.length, userWord.length)) {
    if (ogWord[i] !== userWord[i]) {
      flag = false;
      outputArr.push(highlightMismatch(userWord[i]));
    } else outputArr.push(userWord[i]);
    i++;
  }
  return { i, flag };
};

const buildValidatedWord = (ogWord, userWord) => {
  const outputArr = [];

  let { index, flag } = wordValidate(ogWord, userWord, outputArr);

  if (extraCharacter(userWord, index, outputArr)) flag = false;

  if (lessCharacter(ogWord, index, outputArr)) flag = false;

  return { flag, output: outputArr.join("") };
};

export const wordValidator = (paragraph, inputArr, index) => {
  const ogWord = paragraph[index].trim();
  const userWord = inputArr[index].trim();

  const { flag, output } = buildValidatedWord(ogWord, userWord);
  inputArr[index] = output;

  return flag;
};
