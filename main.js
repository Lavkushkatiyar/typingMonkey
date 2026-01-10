import { getParagraph } from "./src/paragraph .js";
import { countWrongWords, displayWPM } from "./src/functions.js";
import { startTypingSession } from "./src/rawModeTyping.js";

const main = async (length) => {
  const paragraph = await getParagraph(length);
  const start = Date.now();
  const outputArr = await startTypingSession(paragraph.split(""));
  const noOfWrongWords = countWrongWords(outputArr, paragraph);
  displayWPM(start, paragraph, noOfWrongWords);
};
main(Number(Deno.args) || 10);
