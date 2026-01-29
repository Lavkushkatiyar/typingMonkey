import { brightRed, brightYellow, gray } from "jsr:@std/fmt/colors";

const renderUI = (paragraph, userOutput, index) => {
  console.clear();
  console.log(
    userOutput.join("") +
      gray(paragraph.slice(index + 1).join("")),
  );
};

const isNegative = (number) => number < 0;

const performBackSpaceActions = (userOutput, inputArr) => {
  userOutput.pop();
  inputArr.pop();
};

const compareChar = (userChar, paragraphsCharacter) =>
  userChar !== paragraphsCharacter
    ? brightRed(userChar)
    : brightYellow(userChar);

const getUserChar = async () => {
  Deno.stdin.setRaw(true, { cbreak: true });

  const decoder = new TextDecoder();
  const buf = new Uint8Array(1);

  const numberOfBytes = await Deno.stdin.read(buf);
  if (numberOfBytes === null) return;

  return decoder.decode(buf);
};

export const startTypingSession = async (paragraph) => {
  const userOutput = [];
  const characterInputArray = [];

  renderUI(paragraph, userOutput);

  for (let index = 0; index < paragraph.length; index++) {
    const inputChar = await getUserChar();

    if (inputChar === "\x7f") {
      performBackSpaceActions(userOutput, characterInputArray);
      index -= 2;
    } else {
      characterInputArray.push(inputChar);

      userOutput.push(
        compareChar(characterInputArray[index], paragraph[index]),
      );
    }

    if (isNegative(index)) {
      index = -1;
    }

    renderUI(paragraph, userOutput, index);
  }

  return characterInputArray;
};
