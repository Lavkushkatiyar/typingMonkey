import * as cl from "./colors.js";

const renderUI = (paragraph, userOutput) => {
  console.clear();
  console.log(cl.bold(paragraph.join("")));
  console.log(cl.bold(userOutput.join("")));
};

const performBackSpaceActions = (userOutput, inputArr) => {
  userOutput.pop();
  inputArr.pop();
};

const compareChar = (userChar, ogChar) =>
  userChar !== ogChar ? cl.bold(cl.red(userChar)) : cl.yellow(userChar);

const getUserChar = async () => {
  Deno.stdin.setRaw(true, { cbreak: true });

  const decoder = new TextDecoder();
  const buf = new Uint8Array(1);

  const n = await Deno.stdin.read(buf);
  if (n === null) return;

  return decoder.decode(buf);
};

export const startTypingSession = async (paragraph) => {
  const userOutput = [];
  const inputArr = [];

  renderUI(paragraph, userOutput);

  for (let i = 0; i < paragraph.length; i++) {
    const inputChar = await getUserChar();

    if (inputChar === "\x7f") {
      performBackSpaceActions(userOutput, inputArr);
      i -= 2;
    } else {
      inputArr.push(inputChar);
      userOutput.push(compareChar(inputArr[i], paragraph[i]));
    }

    renderUI(paragraph, userOutput);
  }

  return inputArr;
};
