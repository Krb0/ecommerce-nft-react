const sortHandler = (last, next, option) => {
  if (option === "lowestPrice") {
    if (last === next) return 0;

    return last.price < next.price ? -1 : 1;
  } else if (option === "highestPrice") {
    if (last === next) return 0;

    return last.price > next.price ? -1 : 1;
  } else if (option === "alphabeticalAsc") {
    if (last === next) return 0;

    return last.name.toLowerCase() < next.name.toLowerCase() ? -1 : 1;
  } else if (option === "alphabeticalDesc") {
    if (last === next) return 0;

    return last.name.toLowerCase() > next.name.toLowerCase() ? -1 : 1;
  }
};
export default sortHandler;
