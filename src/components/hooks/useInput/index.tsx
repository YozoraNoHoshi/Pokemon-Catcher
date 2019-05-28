import { useState, Dispatch, SetStateAction } from 'react';

export default function useInput(
  initialValue: string
): {
  input: string;
  handleChange: (evt: any) => void;
  setInput: Dispatch<SetStateAction<string>>;
} {
  const [input, setInput] = useState(initialValue);
  const handleChange = (evt: any) => {
    setInput(evt.target.value);
  };
  return { input, handleChange, setInput };
}
