import React, { Component } from 'react';
import './App.css';
import { Router } from '@reach/router';
import MainMenu from './components/pages/MainMenu';
import HabitatMenu from './components/pages/HabitatMenu';
import PreBattle from './components/organisms/PreBattle';
import TrainerMenu from './components/pages/TrainerMenu';
import AppContainer from './AppContainer';
import Pokedex from './components/organisms/Pokedex';
import PokedexPage from './components/organisms/PokedexPage';
import Flex from './components/atoms/Flex';
import HomePage from './components/pages/HomePage';
import ModalMenu from './components/molecules/ModalMenu';
import NotFound from './components/pages/NotFound';

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
                <HomePage path="/home" />
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
              <Flex row style={{ position: 'fixed', bottom: 0 }}>
                <TrainerMenu
                  changeGameState={changeGameState}
                  pokemon={state.currentPokemon}
                />
                <ModalMenu closeOnInteract buttonText="Menu">
                  <MainMenu />
                </ModalMenu>
              </Flex>
            </Flex>
          );
        }}
      </AppContainer>
    );
  }
}

export default App;
