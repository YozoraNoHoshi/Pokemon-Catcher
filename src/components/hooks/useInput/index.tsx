import { useState, Dispatch, SetStateAction } from 'react';

export default function useInput(): {
  input: string;
  handleChange: (evt: any) => void;
  setInput: Dispatch<SetStateAction<string>>;
} {
  const [input, setInput] = useState('');
  const handleChange = (evt: any) => {
    setInput(evt.target.value);
  };
  return { input, handleChange, setInput };
}
