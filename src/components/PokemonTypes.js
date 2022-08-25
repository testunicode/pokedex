import React from 'react';

const PokemonTypes = ({ item, index }) => <span>{item.type.name} {index !== 0 ? '' : '· '} </span>

export default PokemonTypes;