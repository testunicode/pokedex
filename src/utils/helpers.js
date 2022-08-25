import colorsList from '../data/backgroundColors'

export const addBackgroundColor = (pokemonType) => colorsList.find(({ name, color }, key) => pokemonType === name)

export const pokemonCapturedList = JSON.parse(localStorage.getItem('pokemons_captured_list') || "[]")
