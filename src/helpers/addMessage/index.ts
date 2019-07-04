export default function addMessage(message: string) {
  return (prev: string[]) => [...prev, message];
}
