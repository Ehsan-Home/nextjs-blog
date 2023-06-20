export function parseDate(date) {
  const dateArray = date.split("-");
  const year = dateArray[0];
  const month = new Date(
    dateArray[0],
    dateArray[1] - 1,
    dateArray[2]
  ).toLocaleDateString("en-us", { month: "long" });
  const day = dateArray[2];

  return `${month} ${day}, ${year}`;
}
