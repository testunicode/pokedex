import React from 'react';
import { useState } from 'react';
import { pokemonCapturedList } from '../utils/helpers';


const Modal = ({ setIsOpen, pokemon }) => {
    const [capturedData, setCapturedData] = useState({
        "name": pokemon.name,
        "nickname": "",
        "captured_date": new Date().toISOString().slice(0, 10),
        "captured_level": "",
        "pokemon_detail": pokemon,
    })

    // const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault()
        pokemonCapturedList.push(capturedData)
        localStorage.setItem('pokemons_captured_list', JSON.stringify(pokemonCapturedList))
        setIsOpen(false)
    }

    const handleInputChange = (event) => {
        setCapturedData({ ...capturedData, [event.target.id]: event.target.value })
    }

    return (
        <div>
            <div className="layover" onClick={() => setIsOpen(false)} />
            <div className="modal">
                <div className="modal__header">
                    <span className="modal__title">Dialog {pokemon.name}</span>
                </div>
                <div className="modal__content">
                    <form action="" className="form-capture" onSubmit={handleSubmit}>
                        {/* {isSubmitted &&  <span>Pokemon caught !</span>} */}
                        <input
                            onChange={handleInputChange}
                            type="text"
                            className="form__field"
                            placeholder="Nickname"
                            id="nickname"
                            value={capturedData.nickname}
                        />
                        <input type="date"
                            onChange={handleInputChange}
                            className="form__field"
                            id="captured_date"
                            value={capturedData.captured_date}
                            required
                        />

                        <input type="number"
                            onChange={handleInputChange}
                            className="form__field"
                            placeholder="Captured level"
                            id="captured_level"
                            value={capturedData.captured_level}
                            required />
                        <input type="submit"
                            className="btn"
                            value="Capture"
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};


export default Modal;