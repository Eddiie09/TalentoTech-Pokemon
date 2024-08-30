import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchPokemonDetail } from "../service/pokemonService";
import PokemonCard from "../components/PokemonCard"; // Importa el componente

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
        };

        getPokemonDetail();
    }, [name]);

    if (!pokemon) {
        return <div>Cargando...</div>;
    }

    return <PokemonCard pokemon={pokemon} />;
};

export default PokemonDetailPage;
