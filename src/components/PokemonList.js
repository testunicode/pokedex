import axios from 'axios';
import React, { useEffect, useState, useRef } from 'react';
import Card from './Card';

const PokemonList = () => {
    const [pokemonListData, setPokemonListData] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const offset = useRef(0);

    const fetchPokemonData = (pokemon) => {
        axios.get(pokemon.url)
            .then((res) => {
                setPokemonListData(current => [
                    ...current,
                    res.data
                ].sort((a, b) => a.id - b.id))
                setLoading(false)
            })
    }

    useEffect(() => {
        const loadPokemons = () => {
            axios.get(`https://pokeapi.co/api/v2/pokemon?limit=8&offset=${offset.current}`)
                .then(function (allpokemon) {
                    allpokemon.data.results.forEach(function (pokemon) {
                        fetchPokemonData(pokemon);
                    })
                })
            offset.current = offset.current + 4;
        }

        const handleScroll = (e) => {
            if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
                setLoading(true);
                loadPokemons();
            }
        }

        loadPokemons();
        window.onscroll = () => {
            handleScroll();
        };
    }, [])


    return (
        <div>
            <div className="pokemon-list">
                <div className="pokemon-list__container">
                    {
                        pokemonListData.map((pokemon, index) => <Card key={index} pokemon={pokemon} />)
                    }
                </div>
                {isLoading &&
                    <span className="pokemon-list__loading">
                        <img src="./pokeball.png" alt="" />
                    </span>
                }
            </div>
        </div>
    );
};

export default PokemonList;