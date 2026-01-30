import { getParagraph } from "./src/paragraph .js";
import { startTypingSession } from "./src/typingSimulator.js";
import { calculateWPM, countIncorrectWords, displayWPM } from "./src/utils.js";

const main = async (length) => {
  const paragraph = await getParagraph(length);
  const startTime = Date.now();

  const userTypedWords = await startTypingSession(paragraph.split(""));

  const endTime = Date.now();

  const incorrectWords = countIncorrectWords(userTypedWords, paragraph);

  const typingMetrics = calculateWPM(
    startTime,
    endTime,
    paragraph,
    incorrectWords,
  );

  displayWPM(typingMetrics);
};

main(Number(Deno.args[0]));
