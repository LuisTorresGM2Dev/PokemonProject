import { createContext, useContext, useState } from "react";

const initialState = {
    result: []
};

export const TestContext = createContext();

export const TestProvider = ({ children }) => {
    const [pokemonData, setPokemonData] = useState(initialState);
    const [pokemonDetails, setPokemonDetails] = useState();

    const getPokemon = async (id) => {
        try {
            const res = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=1010')
            setPokemonDetails(res)
        } catch (error) {

        }
    }

    return (
        <TestContext.Provider value={{ pokemonData, getPokemon, pokemonDetails }}>
            {children}
        </TestContext.Provider>
    );
}; 