import React from 'react';
import { pokemonCapturedList } from '../utils/helpers';
import CardMobile from './CardMobile';

const CardList = () => {
    return (
        <div>
            <h1>Captured Pokemon</h1>
            <div className="card-list--mobile">
                {
                    pokemonCapturedList.map((pokemon, index) => <CardMobile key={index} pokemon={pokemon} />)
                }
            </div>
        </div>
    );
};

export default CardList;