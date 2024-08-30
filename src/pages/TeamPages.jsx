import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PokemonCard from "../components/PokemonCard"; // Importa el componente
import { fetchPokemonDetail } from "../service/pokemonService"; // Asegúrate de importar esta función si no tienes detalles completos

const TeamPage = () => {
    const team = useSelector(state => state.team.value);
    const [pokemonDetails, setPokemonDetails] = useState([]);

    useEffect(() => {
        const fetchTeamDetails = async () => {
            const details = await Promise.all(
                team.map(async (pokemonName) => {
                    const data = await fetchPokemonDetail(pokemonName);
                    return data;
                })
            );
            setPokemonDetails(details);
        };

        fetchTeamDetails();
    }, [team]);

    return (
        <div>
            <h2>Mi Equipo Pokémon</h2>
            <div className="team-grid">
                {pokemonDetails.map((pokemon, index) => (
                    <PokemonCard key={index} pokemon={pokemon} />
                ))}
            </div>
        </div>
    );
};

export default TeamPage;
