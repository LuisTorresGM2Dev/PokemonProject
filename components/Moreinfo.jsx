import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function MoreInfo() {
    const { pokemonId } = useParams();
    const [pokemonDetails, setPokemonDetails] = useState(null);

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`)
            .then((response) => response.json())
            .then((data) => {
                setPokemonDetails(data);
            });
    }, [pokemonId]);

    return (
        <>
            {pokemonDetails ? (
                <div className="info-card-structure">
                    <div className="top-card">
                        <div className="pokemon-zone">
                            <h2 className="poke-name">{pokemonDetails.name}</h2>
                            <div className="main-info">
                                <div className="types">
                                    {pokemonDetails.types.map((type) => (
                                        <p key={type.slot} className="type-name">
                                            {type.type.name}
                                        </p>
                                    ))}
                                </div>
                                <div className="index">
                                    <p className="pokedex-num">Pokedex Number: {pokemonDetails.id}</p>
                                    <p className="seed">Seed</p>
                                </div>
                            </div>
                            <div className="pokemon-info-img">
                                <img
                                    className="pokemon-image"
                                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`}
                                    alt={pokemonDetails.name}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="under-card">
                        {/* Resto de la información del Pokémon */}
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </>
    );
}

export { MoreInfo };
