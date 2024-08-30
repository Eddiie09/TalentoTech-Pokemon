import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchPokemonDetail } from "../service/pokemonService";
import { useSelector, useDispatch } from "react-redux";
import { addToTeam, removeFromTeam } from "../features/team/teamSlice";

const PokemonDetailPage = () => {
    const { name } = useParams();
    const [pokemon, setPokemon] = useState(null);
    const dispatch = useDispatch();
    const team = useSelector((state) => state.team.value);

    console.log(team);

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

   const isInTeam = team.some(pokemon => pokemon == name)
    const handLeToggleTeam = () => {
        const isInTeam = team.some((pokemon) => pokemon === name);
        if (isInTeam) {
            dispatch(removeFromTeam(name));
        } else {
            dispatch(addToTeam(name));
        }
    };

    if (!pokemon) {
        return <div>Cargando...</div>;
    }

    return (
        <>
            <h1>{pokemon.name}</h1>
            <img src={pokemon.sprites.front_default} alt={`Imagen de ${pokemon.name}`} />
            <p>Altura: {pokemon.height}</p>
            <p>Peso: {pokemon.weight}</p>
            <button onClick={handLeToggleTeam}>
                {isInTeam? "Remover del equipo":"Agregar al equipo"}
                {team.some((pokemon) => pokemon === name) ? "Remove from Team" : "Add to Team"}
            </button>
            {console.log(pokemon)}
        </>
    );
};

export default PokemonDetailPage;
