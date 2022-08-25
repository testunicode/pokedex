import React from 'react';
import Nav from '../components/Nav';
import PokemonList from '../components/PokemonList';

const Home = () => {
    return (
        <div className="page--home">
            <div className="page--home__container">
                <Nav />
                <PokemonList />
            </div>
        </div>
    );
};

export default Home;