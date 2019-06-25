This readme assumes you are using npm as your package manager.

For the backend commit history, see the (now deprecated) [repo here](https://github.com/YozoraNoHoshi/pokesimbackend).

## Installation Guide

Clone the repository: `git clone git@github.com:YozoraNoHoshi/PokemonPalPark.git`

Install packages by running the following command in the root directory of the project (where `package.json` is located):  
`npm install`

To run a local version of the app, you will need two terminal windows, one for the frontend and one for the backend.

Run the following commands in the root directory.

###To start the backend:
`npm run backend`

###To start the frontend:
`npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.  
You will also see any lint errors in the console.

## Known Issues

- Hitting the back button after a redirect results in a blank page.
- The styling is nonexistent.
- Checking a Pokedex entry while already on a Pokedex entry causes the new entry to not render properly.
- Viewing the Inventory renders MissingNo. rather than your actual items.

## To-Dos

- Store items in local storage as JWTs rather than raw JSON.
- Make Pokedex live in a modal so you can view it during a battle.
- Pokedex remembers previous searches globally, not just on the Pokedex page
- Pokedex UI
- Battle UI and logic
- Inventory
- Responsive Design
- Backend for storing trainer information and their caught pokemon / progress / items rather than over local storage

## Credits

All data / resources are from the public, free [PokeAPI](https://pokeapi.co).

This is a fan project and is not an official product of Nintendo, or Pokemon.
