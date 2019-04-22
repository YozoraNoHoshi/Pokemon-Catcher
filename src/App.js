import React, { Component } from 'react';
import { Router } from '@reach/router';
import HabitatMenu from './components/pages/HabitatMenu';
import PreBattle from './components/organisms/PreBattle';
import AppContainer from './AppContainer';
import Pokedex from './components/pages/Pokedex';
import Flex from './components/atoms/Flex';
import HomePage from './components/pages/HomePage';
import NotFound from './components/pages/NotFound';
import FooterMenu from './components/organisms/FooterMenu';

//https://blog.logrocket.com/lazy-loading-components-in-react-16-6-6cea535c0b52
// For lazy loading components for performance
class App extends Component {
  render() {
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
                <Pokedex path="/pokedex" />
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
  }
}

export default App;
