import React from 'react';
import { Link } from 'react-router-dom';
import { addBackgroundColor } from '../utils/helpers';
import PokemonTypes from './PokemonTypes';

const Card = ({ pokemon }) => {
    return (
        <div>
            <Link to={`/detail/${pokemon.id}`}>
                <div className="card">
                    <div className="card__header" style={{ background: addBackgroundColor(pokemon.types[0].type.name).color }}>
                        <img src={pokemon.sprites.other["official-artwork"].front_default} alt="" />
                    </div>
                    <div className="card__content">
                        <span className="card__title">#00{pokemon.id} {pokemon.name}</span>
                        <div className="card__text">
                            {pokemon.types.length > 1
                                ? pokemon.types.map((item, index, arr) => <PokemonTypes item={item} index={index} key={index} />)
                                : <span> {pokemon.types[0].type.name}</span>
                            }
                        </div>
                    </div>
                </div>
            </Link>
        </div >
    );
};

export default Card;