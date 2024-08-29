import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchPokemonDetail } from "../service/pokemonService";

const PokemonDetailPage = () => {
    const { name } = useParams();
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        const getPokemonDetail = async () => {
            try {
                if (name) {
                    const data = await fetchPokemonDetail(name);
                    setPokemon(data);
                } else {
                    console.error("El nombre del Pokémon es inválido:", name);
                }
            } catch (error) {
                console.error("Error en el getPokemonDetail", error);
            }
        }
        getPokemonDetail();
    }, [name]);

    if (!pokemon) {
        return <div>Cargando...</div>;
    }

    return (
        <>
            <h1>{pokemon.name}</h1>
            <img src={pokemon.sprites.front_default} alt={`Imagen de ${pokemon.name}`} />
            <p>Altura: {pokemon.height}</p>
            <p>Peso: {pokemon.weight}</p>
            {console.log(pokemon)}
        </>
    );
}

export default PokemonDetailPage;
