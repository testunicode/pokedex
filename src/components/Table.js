import React from 'react';
import TableRows from './TableRows';
import { pokemonCapturedList } from '../utils/helpers';

const Table = () => {
    return (
        <div className="table table--captured-pokemons">
            <div className="table__container">
                <div className="table__header-row">
                    <div className="table__header-cell">
                        Pokemon
                    </div>
                    <div className="table__header-cell">
                        Nickname
                    </div>
                    <div className="table__header-cell">
                        Captured at
                    </div>
                    <div className="table__header-cell">
                        Captured level
                    </div>
                </div>
                <div className="table__body">
                    {pokemonCapturedList.length > 0
                        ? pokemonCapturedList.map((pokemon, index) => <TableRows key={index} pokemon={pokemon} />)
                        : <span class="table__text">No pokemons yet :/</span>}
                </div>
            </div>

        </div>
    );
};

export default Table;