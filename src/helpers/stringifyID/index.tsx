export function stringifyID(id: number | string): string {
  let result = `${id}`;
  while (result.length < 3) {
    result = `0${result}`;
  }
  return result;
}
