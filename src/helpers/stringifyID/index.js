export function stringifyID(id) {
  let result = `${id}`;
  while (result.length < 3) {
    result = `0${result}`;
  }
  return result;
}
