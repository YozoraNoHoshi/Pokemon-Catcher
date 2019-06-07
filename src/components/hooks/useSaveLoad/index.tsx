import { useCallback } from 'react';

export default function useSaveLoad(
  fn: (type?: string) => void
): {
  saveGame: () => void;
  loadGame: () => void;
} {
  const saveGame = useCallback(() => {
    fn();
  }, [fn]);
  const loadGame = useCallback(() => {
    fn('load');
  }, [fn]);
  return { saveGame, loadGame };
}
