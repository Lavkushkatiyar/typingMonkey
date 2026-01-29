const para1 =
  "A small café on the corner sold fresh bread every morning. Customers arrived with newspapers and umbrellas, traded stories with the baker, and left with paper bags warm from the oven.";

const para2 =
  "The quick brown fox jumps over the lazy dog while morning light spills across the quiet street, and a distant bell marks the hour.";

const para3 =
  "Typing practice builds speed and accuracy. Focus on correct finger placement, maintain rhythm, and improve one small step each day.";

export const paragraphs = [para1, para2, para3];

const getLocalParagraph = (length = 40) => {
  const text = paragraphs[Math.floor(Math.random() * paragraphs.length)];
  console.log(text);
  return text.slice(0, length);
};

const parseResponse = async (response) => {
  const data = await response.json();
  return data[0].q.trim().split(" ");
};

const buildWords = (text, length) => text.slice(0, length).join(" ");

export const getParagraph = async (length = 40) => {
  try {
    const url = "https://zenquotes.io/api/random";
    const response = await fetch(url);

    if (!response.ok) {
      return getLocalParagraph(length);
    }

    const text = await parseResponse(response);
    return buildWords(text, length);
  } catch {
    return getLocalParagraph(length);
  }
};
