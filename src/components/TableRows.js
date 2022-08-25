import React from 'react';
import { addBackgroundColor } from '../utils/helpers';
import PokemonTypes from './PokemonTypes';
import Moment from 'moment';

const TableRows = ({ pokemon }) => {
    return (
        <div className="table__row">
            <div className="table__body-cell">
                <div className="pokemon-info">
                    <div className="pokemon-info__img" style={{ background: addBackgroundColor(pokemon.pokemon_detail.types[0].type.name).color }}>
                        <img src={pokemon.pokemon_detail.sprites.other["official-artwork"].front_default} alt="" />
                    </div>
                    <div className="pokemon-info_card">
                        <span className="pokemon-name">#00{pokemon.pokemon_detail.order} {pokemon.pokemon_detail.name}</span>
                        <span className="pokemon-types">
                            {pokemon.pokemon_detail.types.length > 1
                                ? pokemon.pokemon_detail.types.map((item, index, arr) => <PokemonTypes item={item} index={index} key={index} />)
                                : <span> {pokemon.pokemon_detail.types[0].type.name}</span>
                            }
                        </span>
                    </div>
                </div>
            </div>
            <div className="table__body-cell">
                {pokemon.nickname.length > 0 ? pokemon.nickname : <span class="text-muted">None</span>}
            </div>
            <div className="table__body-cell">
                {Moment(pokemon.captured_date).format("MMM, D YYYY")}
            </div>
            <div className="table__body-cell">
                {pokemon.captured_level}
            </div>
        </div>
    );
};

export default TableRows;