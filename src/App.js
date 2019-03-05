import React, { Component } from 'react';
import './App.css';
import { Router } from '@reach/router';
import MainMenu from './components/molecules/MainMenu';
import HabitatMenu from './components/organisms/HabitatMenu';
import PreBattle from './components/organisms/PreBattle';
import InventoryMenu from './components/organisms/InventoryMenu';
import TrainerMenu from './components/organisms/TrainerMenu';
import AppContainer from './AppContainer';

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
              </Router>
              {/* Inventory and bag menu buttons go here */}
              <InventoryMenu />
              <TrainerMenu />
            </div>
          );
        }}
      </AppContainer>
    );
  }
}

export default App;
