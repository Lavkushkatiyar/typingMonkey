import { getParagraph } from "./src/paragraph .js";
import { calculateWPM, countWrongWords, displayWPM } from "./src/functions.js";
import { startTypingSession } from "./src/rawModeTyping.js";

const main = async (length) => {
  const paragraph = await getParagraph(length);
  const startTime = Date.now();
  const userTypedWords = await startTypingSession(paragraph.split(""));
  const noOfWrongWords = countWrongWords(userTypedWords, paragraph);
  const typingResult = calculateWPM(startTime, paragraph, noOfWrongWords);
  displayWPM(typingResult);
};
main(Number(Deno.args) || 20);
