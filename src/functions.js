export const calculateWPM = (start, paragraph, noOfWrongWords) => {
  const totalWords = paragraph.length;
  const correctWords = totalWords - noOfWrongWords;
  const durationMinutes = ((Date.now() - start) / 1000) / 60;

  const drived = correctWords / durationMinutes;
  const rawWPM = totalWords / durationMinutes;
  return { drived, rawWPM };
};
export const buildTypedWordObject = (expected, typed) => {
  const len = Math.max(expected.length, typed.length);
  const charResults = [];

  for (let i = 0; i < len; i++) {
    const expectedChar = expected[i] ?? "";
    const typedChar = typed[i] ?? "";
    const correct = expectedChar === typedChar;

    charResults.push({
      expectedChar,
      typedChar,
      correct,
    });
  }

  return {
    isCorrect: expected === typed,
    charResults,
  };
};

export const compareWords = (paragraph, inputArr) => {
  const expected = paragraph.trim();
  const typed = inputArr.trim();

  return buildTypedWordObject(expected, typed);
};
