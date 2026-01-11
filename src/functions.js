const calculateWPM = (start, paragraph, noOfWrongWords) => {
  const totalWords = paragraph.length;
  const correctWords = totalWords - noOfWrongWords;
  const durationMinutes = ((Date.now() - start + 500) / 1000) / 60;

  const grossWPM = correctWords / durationMinutes;
  const rawWPM = totalWords / durationMinutes;
  const accuracy = correctWords / totalWords * 100;
  return { grossWPM, rawWPM, accuracy };
};

export const displayWPM = (startTime, paragraph, noOfWrongWords) => {
  const { grossWPM, rawWPM, accuracy } = calculateWPM(
    startTime,
    paragraph.split(" "),
    noOfWrongWords,
  );
  console.log(
    `Typing Results:\n` +
      `Gross WPM : ${grossWPM.toFixed(2)} WPM\n` +
      `Raw WPM   : ${rawWPM.toFixed(2)} WPM\n` +
      `Accuracy  : ${accuracy} %`,
  );
};

export const countWrongWords = (userInputs, paragraph) => {
  userInputs = userInputs.join("");
  let noOfWrongWords = 0;
  for (let i = 0; i < userInputs.length; i++) {
    if (userInputs[i] !== paragraph[i]) noOfWrongWords++;
  }
  return noOfWrongWords;
};
