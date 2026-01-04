const para2 =
  `The quick brown fox jumps over the lazy dog while morning light spills across the quiet street, and a distant bell marks the hour.`;
const para1 =
  `A small café on the corner sold fresh bread every morning. Customers arrived with newspapers and umbrellas, traded stories with the baker, and left with paper bags warm from the oven. Outside, children chased pigeons along the square while sunlight painted long shadows on the cobblestones.`;
const para3 = ["my", "name", "is", "Lovekush"];

export const paragraphs = [para1, para2, para3];
export const getNeutralParagraph = async () => {
  const topics = [
    "Algorithm",
    "Computer",
    "Database",
    "Electricity",
    "Climate",
    "Internet",
    "Mathematics",
    "Physics",
  ];

  const topic = topics[Math.floor(Math.random() * topics.length)];
  const res = await fetch(
    `https://en.wikipedia.org/api/rest_v1/page/summary/${topic}`,
  );

  const data = await res.json();

  const words = data.extract
    .replace(/\s+/g, " ")
    .split(" ");

  return words.slice(0, 10).join(" ");
};
