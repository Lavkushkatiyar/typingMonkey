import { calculateWPM } from "./functions.js";
import { getParagraph } from "./paragraph .js";
import { startTypingSession } from "./typingsession.js";

const main = async (length) => {
  const paragraph = await getParagraph(length);
  const words = paragraph.split(" ");

  const start = Date.now();

  const noOfWrongWords = startTypingSession(words);

  const { drived, rawWPM } = calculateWPM(start, noOfWrongWords);
  console.log("WPM -->", Number(drived).toFixed(2));
  console.log("RawWPM -->", Number(rawWPM).toFixed(2));
};

main(Number(Deno.args[0]) || 10);
