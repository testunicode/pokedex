import React from 'react';
import { NavLink } from "react-router-dom";
import Button from './Button';
import Logo from './Logo';

const Nav = () => {
    return (
        <div className="nav">
            <ul className="nav__container">
                <NavLink to="/">
                    <li>
                        <Logo />
                    </li>
                </NavLink>
                <NavLink
                    to="/captured"
                    className={({ isActive }) => (isActive ? 'nav__link--hide' : 'nav__link--show visible-sm')}
                >
                    <li>
                        <Button buttonId="capturedPokemons" buttonClass={["btn btn--img"]} buttonText="Captured Pokemons" buttonImg="/pokeball.png" />
                    </li>
                </NavLink>
                <NavLink
                    to="/captured"
                    className={({ isActive }) => (isActive ? 'nav__link--hide' : 'nav__link--show hide-sm')}
                >
                    <li>
                        <Button buttonId="capturedPokemonsMobile" buttonClass={["btn--img-mobile"]} buttonImg="/pokeball.png" />
                    </li>
                </NavLink>
            </ul>

        </div >
    );
};

export default Nav;