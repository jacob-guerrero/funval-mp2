export default function getForecast(response) {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const today = new Date();

  let last = today.toLocaleDateString("eng-GB", options);
  let filtered = response?.list?.filter((item) => {
    const date = new Date(item.dt * 1000);
    const formated = date.toLocaleDateString("eng-GB", options);
    if (formated !== last) {
      last = formated;
      return true;
    }
    return false;
  });

  return filtered;
}
