import { getParagraph } from "./src/paragraph .js";
import { calculateWPM, countWrongWords } from "./src/functions.js";
import { startTypingSession } from "./rawTyping.js";

const main = async (length) => {
  const paragraph = await getParagraph(length);
  console.log(paragraph.split(""));
  const start = Date.now();
  const outputArr = await startTypingSession(paragraph.split(""));
  const noOfWrongWords = countWrongWords(outputArr, paragraph);
  console.log(
    "wpm",
    calculateWPM(start, paragraph.split(" "), noOfWrongWords),
  );
};
main(10);
