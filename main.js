import { getParagraph } from "./src/paragraph .js";
import { countWrongWords, displayWPM } from "./src/functions.js";
import { startTypingSession } from "./src/rawModeTyping.js";

const main = async (length) => {
  const paragraph = await getParagraph(length);
  const startTime = Date.now();
  const userTypedWords = await startTypingSession(paragraph.split(""));
  const noOfWrongWords = countWrongWords(userTypedWords, paragraph);
  displayWPM(startTime, paragraph, noOfWrongWords);
};
main(Number(Deno.args) || 20);
