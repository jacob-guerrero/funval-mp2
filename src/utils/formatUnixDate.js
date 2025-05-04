export default function formatUnixDate(unixTimestamp) {
  if (!unixTimestamp) return "";

  const date = new Date(unixTimestamp * 1000);
  const options = { weekday: "short", day: "numeric", month: "short" };
  return date.toLocaleDateString("eng-GB", options);
}
