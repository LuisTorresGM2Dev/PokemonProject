import React, { useEffect, useState, useContext } from "react";
import "../src/card.css";

function Card() {
    const [pokemonData, setPokemonData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredPokemon, setFilteredPokemon] = useState([]);

    const pokemonApi = "https://pokeapi.co/api/v2/pokemon/?limit=1010";

    useEffect(() => {
        fetch(pokemonApi)
            .then((response) => response.json())
            .then((data) => {
                setPokemonData(data.results);
                setFilteredPokemon(data.results);
            });
    }, []);

    useEffect(() => {
        const filteredResults = pokemonData.filter((pokemon) =>
            pokemon.name.includes(searchTerm.toLowerCase())
        );
        setFilteredPokemon(filteredResults);
    }, [searchTerm, pokemonData]);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <>
            <div className="search-box">
                <input
                    type="text"
                    placeholder="Buscar Pokémon por nombre"
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
            </div>

            <div className='cards-container'>
                {filteredPokemon.map((pokemon) => {
                    const pokemonId = pokemon.url.split("/")[6];
                    return (
                        <div className="structure-card" key={pokemonId}>
                            <div>
                                <img
                                    className="pokemon-img"
                                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`}
                                    alt={pokemon.name}
                                />
                            </div>
                            <div>
                                <h2 className="pokemons-name">{pokemon.name}</h2>
                            </div>
                        </div>
                    );
                })}
            </div>

        </>

    );
}

export { Card };
