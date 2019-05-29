import { Dispatch, SetStateAction, useState, useEffect } from 'react';
import { getAllHabitats, getHabitatPokemon } from '../../../api';
import { Pokemon, Habitats } from '../../..';

export default function useHabitats(currentHabitat: string): any {
  const [selectedHabitat, setSelectedHabitat] = useState(currentHabitat);
  const [habitatPokemon, setHabitatPokemon] = useState([] as Pokemon[]);
  const [loading, setLoading] = useState(true);
  const [habitats, setHabitats]: [
    Habitats,
    Dispatch<SetStateAction<Habitats>>
  ] = useState({
    field: { name: 'field', description: '' }
  } as Habitats);

  const updateHabitatPokemon = async (habitat: string) => {
    let pokemon = await getHabitatPokemon(habitat);
    setSelectedHabitat(habitat);
    setHabitatPokemon(pokemon);
  };

  const handleClick = async (evt: any) => {
    evt.preventDefault();
    if (habitats[evt.target.id]) {
      await updateHabitatPokemon(evt.target.id);
    }
  };

  // Can possibly be moved to redux
  const setHabitat = async () => {
    if (!loading) setLoading(true);
    let habitats = await getAllHabitats();
    setHabitats(habitats);
    setLoading(false);
  };

  useEffect(() => {
    (async () => {
      try {
        await Promise.all([
          setHabitat(),
          updateHabitatPokemon(selectedHabitat)
        ]);
      } catch (error) {
        alert('The Pal Park is currently experiencing technical difficulties.');
      }
    })();
  }, []);

  return {
    loading,
    habitats,
    selectedHabitat,
    habitatPokemon,
    handleClick,
    setHabitat
  };
}
