import React from 'react';
import { addBackgroundColor } from '../utils/helpers';
import Moment from 'moment';

const CardMobile = ({ pokemon }) => {
    return (
        <div className="card--mobile">
            <div className="pokemon-info">
                <div className="pokemon-info__img" style={{ background: addBackgroundColor(pokemon.pokemon_detail.types[0].type.name).color }}>
                    <img src={pokemon.pokemon_detail.sprites.other["official-artwork"].front_default} alt="" />
                </div>
                <div className="pokemon-info_content">
                    <span className="pokemon-name">{pokemon.pokemon_detail.name}</span>
                    <span className="pokemon-captured--date">Captured on: {Moment(pokemon.captured_date).format("MMM, D YYYY")}</span>
                    <span className="pokemon-captured--level">Captured Level: {pokemon.captured_level}</span>
                </div>
            </div>
        </div>
    );
};

export default CardMobile;