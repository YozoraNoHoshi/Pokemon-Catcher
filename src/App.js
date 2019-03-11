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
import ChangeScreenButton from './components/molecules/ChangeScreenButton';

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
            <div className="App">
              <Router>
                <MainMenu default path="/menu" />
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
              {/* Inventory and bag menu buttons go here */}
              {/* <InventoryMenu /> */}
              <Flex>
                <TrainerMenu changeGameState={changeGameState} />
                <ChangeScreenButton to="/menu">Menu</ChangeScreenButton>
              </Flex>
            </div>
          );
        }}
      </AppContainer>
    );
  }
}

export default App;
