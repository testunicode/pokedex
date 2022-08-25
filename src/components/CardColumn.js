import React from 'react';
import { useState, useEffect } from 'react';
import { addBackgroundColor, pokemonCapturedList } from '../utils/helpers';
import Button from './Button';
import Modal from './Modal';
import PokemonTypes from './PokemonTypes';
import axios from 'axios';
import { get } from 'lodash';
import Moment from 'moment';

const PokemonStats = ({ item }) => (
    <li>
        <span className="card__list__name">
            {item.stat.name.replace(/-/g, ' ')}: </span>
        <span className="card__list__text">{item.base_stat}</span>
    </li>
)

const CardColumn = ({ pokemonId }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [pokemon, setPokemon] = useState([])
    const [isInLocalStorage, setIsInLocalStorage] = useState({})

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
            .then((res) => {
                setPokemon(res.data)
            })
    }, [pokemonId])

    useEffect(() => {
        setIsInLocalStorage(pokemonCapturedList.find(element => element.pokemon_detail.name === pokemon.name))
    }, [pokemon, isOpen])


    return (
        <div className="pokemon-details">
            <div className="card--column">
                <div className="card__header" style={{ background: addBackgroundColor(get(pokemon, 'types[0].type.name', 'default')).color }}>
                    <img src={get(pokemon, 'sprites.other["official-artwork"].front_default', null)} alt="" />
                    <span className="card__title">#00{get(pokemon, 'id', null)} {get(pokemon, 'name', null)}</span>
                </div>
                <div className="card__content">
                    <div className="card--text card--about">
                        <span className="card__title">About</span>
                        <ul className="card__list">
                            <li>
                                <span className="card__list__name">Type(s): </span>
                                {get(pokemon, 'types', []).length > 1
                                    ? pokemon.types.map((item, index) => <PokemonTypes item={item} index={index} key={index} />)
                                    : <span className="card__list__text"> {get(pokemon, 'pokemon.types[0].type.name', null)}</span>
                                }
                            </li>
                            <li>
                                <span className="card__list__name">Weight: </span>
                                <span className="card__list__text">{get(pokemon, 'weight', null) / 10} kg</span>
                            </li>
                            <li>
                                <span className="card__list__name">Height: </span>
                                <span className="card__list__text">{get(pokemon, 'height', null) / 10}</span>
                            </li>
                        </ul>
                    </div>
                    <div className="card--text card--stats">
                        <span className="card__title">Base stats</span>
                        <ul className="card__list">
                            {get(pokemon, 'stats', []).map((item, index) => <PokemonStats item={item} index={index} key={index} />)}
                        </ul>
                    </div>

                    {isInLocalStorage !== undefined &&
                        <div className="card--text card--about">
                            <span className="card__title">Capture Information</span>
                            <ul className="card__list">
                                <li>
                                    <span className="card__list__name">Nickname: </span>
                                    <span className="card__list__text">{isInLocalStorage.nickname}</span>
                                </li>
                                <li>
                                    <span className="card__list__name">Capture Date: </span>
                                    <span className="card__list__text">
                                        {Moment(isInLocalStorage.captured_date).format("MMM, D YYYY")}
                                    </span>

                                </li>
                                <li>
                                    <span className="card__list__name">Capture level: </span>
                                    <span className="card__list__text">
                                        {isInLocalStorage.captured_level}
                                    </span>
                                </li>
                            </ul>
                        </div>
                    }
                    {isOpen && <Modal setIsOpen={setIsOpen} pokemon={pokemon} />}
                    {isInLocalStorage === undefined &&
                        <Button buttonClass="btn" buttonText="Capture" onClick={() => setIsOpen(true)} />
                    }
                </div>
            </div>
        </div >
    );
};

export default CardColumn;