import React, { memo } from 'react';
import { Router } from '@reach/router';
import AppContainer from './AppContainer';
import Flex from './components/atoms/Flex';
import Pokedex from './components/pages/Pokedex';
import HabitatMenu from './components/pages/HabitatMenu';
import HomePage from './components/pages/HomePage';
import NotFound from './components/pages/NotFound';
import PreMart from './components/organisms/PreMart';
import FooterMenu from './components/organisms/FooterMenu';
import PreBattle from './components/organisms/PreBattle';
import { PokemonWithHabitat } from './types';

//https://blog.logrocket.com/lazy-loading-components-in-react-16-6-6cea535c0b52
// For lazy loading components for performance

interface Props {}

const App: React.FC = (props: Props) => {
  return (
    <AppContainer>
      {({
        changeHabitat,
        changeGameState,
        modifyItems,
        modifyPokemon,
        state
      }) => {
        return (
          <Flex jCenter alCenter column>
            <Router>
              <NotFound default />
              <HomePage
                path="/"
                currentHabitat={state.habitat}
                changeGameState={changeGameState}
              />
              <PreBattle
                path="/battle"
                habitat={state.habitat}
                modifyPokemon={modifyPokemon}
              />
              <HabitatMenu
                path="/habitats"
                currentHabitat={state.habitat}
                changeHabitat={changeHabitat}
              />
              <PreMart path="/mart" />
              <Pokedex
                path="/pokedex"
                // Temporary Filler prop until redux
                pastSearch={[] as PokemonWithHabitat[]}
              />
            </Router>
            <Router primary={false}>
              <FooterMenu
                path="/*"
                default
                changeGameState={changeGameState}
                currentPokemon={state.currentPokemon}
              />
            </Router>
          </Flex>
        );
      }}
    </AppContainer>
  );
};

App.defaultProps = {};

export default memo(App);
