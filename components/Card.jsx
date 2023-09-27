import "../src/card.css";
import { useEffect, useState } from "react";

function Card() {
    const [pokemonData, setPokemonData] = useState([]);
    const pokemonApi = "https://pokeapi.co/api/v2/pokemon/?limit=152";
    useEffect(() => {
        fetch(pokemonApi)
            .then((response) => response.json())
            .then((data) => setPokemonData(data.results));
    });
    return (
        <>
            {pokemonData.map((pokemon, index) => {
                return (
                    <div className="structure-card" key={index}>
                        <div>
                            <img className="pokemon-img "
                                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index + 1
                                    }.png`}
                                alt={pokemon.name}
                            />
                        </div>
                        <div>
                            <h2 className="pokemons-name">{pokemon.name}</h2>
                        </div>
                    </div>
                );
            })}
        </>
    );
}
export { Card };