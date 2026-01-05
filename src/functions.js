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

// diff
// {value: "something", hasDiff: true}
// outputArr.push(formatDiff(diff))
export const differentWord = (word, index) => {
  if (index < word.length) {
    return {
      isValidWord: false,
      missedCharacter: highlightMismatch(word.slice(index)),
    };
  }
  return { isValidWord: true, missedCharacter: "" };
};

// {valid: true/false, diff: "something"}
// const validateWord = (originalWord, userWord) => {
// };

const wordValidate = (originalWord, userWord, outputArr) => {
  let isValidWord = true;
  let coveredLen = 0;
  const wordLenght = Math.min(originalWord.length, userWord.length);

  for (let index = 0; index < wordLenght; index++) {
    if (originalWord[index] !== userWord[index]) {
      isValidWord = false;
      outputArr.push(highlightMismatch(userWord[index]));
    } else outputArr.push(userWord[index]);

    coveredLen++;
  }
  return { index: coveredLen, isValidWord };
};

const buildValidatedWord = (originalWord, userWord) => {
  const outputArr = [];

  let { index, isValidWord } = wordValidate(originalWord, userWord, outputArr);

  const extraCharcterInWord = differentWord(userWord, index, outputArr);

  const lessCharacterInWord = differentWord(originalWord, index, outputArr);

  if (!extraCharcterInWord.isValidWord || !lessCharacterInWord.isValidWord) {
    isValidWord = false;

    outputArr.push(
      extraCharcterInWord.missedCharacter ||
        lessCharacterInWord.missedCharacter,
    );
  }

  return { isValidWord, outputArr };
};

export const wordValidator = (paragraph, inputArr, index) => {
  const originalWord = paragraph[index].trim();
  const userWord = inputArr[index].trim();

  const { isValidWord, outputArr } = buildValidatedWord(originalWord, userWord);
  console.log(isValidWord);
  inputArr[index] = outputArr.join("");
  return isValidWord;
};
