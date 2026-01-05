import * as cl from "./colors.js";
import { compareWords } from "./functions.js";

const render = (paragraph, inputArr) => {
  console.clear();
  console.log(cl.bold(paragraph.join(" ")));
  console.log(inputArr.join(" "));
};
export const startTypingSession = (paragraphWords) => {
  const typedWords = [];
  let wrongWordCount = 0;

  render(paragraphWords, typedWords);

  for (let i = 0; i < paragraphWords.length; i++) {
    const inputWord = prompt("");
    const comparison = compareWords(paragraphWords[i], inputWord);

    typedWords.push({
      text: inputWord,
      charResults: comparison.charResults,
      isCorrect: comparison.isCorrect,
    });

    if (!comparison.isCorrect) wrongWordCount++;

    render(paragraphWords, typedWords);
  }

  return wrongWordCount;
};
