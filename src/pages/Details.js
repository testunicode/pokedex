import React from 'react';
import Nav from '../components/Nav';
import CardColumn from '../components/CardColumn';
import PokemonList from '../components/PokemonList';
import { useParams } from 'react-router-dom';


const Details = () => {
    const params = useParams()
    return (
        <div>
            <div className="page--details__container">
                <div className="page--details__content--left">
                    <Nav />
                    <PokemonList />
                </div>
                <div className="page--details__content--right">
                    <CardColumn pokemonId={params.pokemonId} />
                </div>
            </div>
        </div>
    );
};

export default Details;