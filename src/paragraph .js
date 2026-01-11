const para1 =
  "A small café on the corner sold fresh bread every morning. Customers arrived with newspapers and umbrellas, traded stories with the baker, and left with paper bags warm from the oven.";

const para2 =
  "The quick brown fox jumps over the lazy dog while morning light spills across the quiet street, and a distant bell marks the hour.";

const para3 =
  "Typing practice builds speed and accuracy. Focus on correct finger placement, maintain rhythm, and improve one small step each day.";

export const paragraphs = [para1, para2, para3];

const getLocalParagraph = (length = 40) => {
  const text = paragraphs[Math.floor(Math.random() * paragraphs.length)];

  return text.slice(0, length).join(" ");
};

export const getParagraph = async (length = 40) => {
  try {
    const res = await fetch("https://zenquotes.io/api/random");

    if (!res.ok) return getLocalParagraph(length);

    const data = await res.json();

    const words = data[0].q
      .replace(/\s+/g, " ")
      .replace(/[“”]/g, '"')
      .replace(/[‘’]/g, "'")
      .trim()
      .split(" ");
    return words.slice(0, length).join(" ");
  } catch {
    return getLocalParagraph(length);
  }
};
