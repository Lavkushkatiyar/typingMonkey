import * as cl from "./colors.js";
import { compareWords } from "./functions.js";
const formatCharacter = (typedObject) => {
  if (typedObject.correct) return typedObject.typedChar;
  if (typedObject.typedChar === "") return cl.red(typedObject.expectedChar);
  return cl.red(typedObject.typedChar);
};
const printUserInput = (charResults, outputArr) => {
  for (const result of charResults) {
    outputArr.push(result.map(formatCharacter).join(""));
  }
  console.log(outputArr.join(" "));
};

const renderUI = (paragraph, typedObject) => {
  const outputArr = [];
  console.clear();
  console.log(cl.bold(paragraph.join(" ")));
  const charResults = typedObject.map((x) => x.charResults);
  printUserInput(charResults, outputArr);
};
export const startTypingSession = (paragraphWords) => {
  const typedWords = [];
  let wrongWordCount = 0;

  renderUI(paragraphWords, typedWords);

  for (let i = 0; i < paragraphWords.length; i++) {
    const inputWord = prompt("");
    const comparison = compareWords(paragraphWords[i], inputWord);

    typedWords.push({
      text: inputWord,
      charResults: comparison.charResults,
      isCorrect: comparison.isCorrect,
    });

    if (!comparison.isCorrect) wrongWordCount++;

    renderUI(paragraphWords, typedWords);
  }

  return wrongWordCount;
};
