import React, { useState, useEffect } from 'react';
import Nav from '../components/Nav';
import Table from '../components/Table';
import CardList from '../components/CardList';

const Captured = () => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleWindowResize);
    }, []);

    return (
        <div className="captured-pokemons">
            <div className="captured-pokemons__container">
                {width > 768 &&
                    <Nav />
                }
                {width > 768
                    ? <Table />
                    : <CardList />
                }
            </div>
        </div>
    );
};

export default Captured;