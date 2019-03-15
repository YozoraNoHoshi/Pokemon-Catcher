import React, { Component } from 'react';
import './App.css';
import { Router } from '@reach/router';
import HabitatMenu from './components/pages/HabitatMenu';
import PreBattle from './components/organisms/PreBattle';
import AppContainer from './AppContainer';
import Pokedex from './components/organisms/Pokedex';
import PokedexPage from './components/organisms/PokedexPage';
import Flex from './components/atoms/Flex';
import HomePage from './components/pages/HomePage';
import NotFound from './components/pages/NotFound';
import FooterMenu from './components/organisms/FooterMenu';

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
                <PokedexPage path="/pokedex/:entry" />
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
