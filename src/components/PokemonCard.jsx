import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToTeam, removeFromTeam } from '../features/team/teamSlice';

const PokemonCard = ({ pokemon }) => {
    const dispatch = useDispatch();
    const team = useSelector((state) => state.team.value);
    const isInTeam = team.some(p => p === pokemon.name);

    const handleToggleTeam = () => {
        if (isInTeam) {
            dispatch(removeFromTeam(pokemon.name));
        } else {
            dispatch(addToTeam(pokemon.name));
        }
    };

    return (
        <div className="pokemon-card">
            <h2>{pokemon.name}</h2>
            <img src={pokemon.sprites.front_default} alt={`Imagen de ${pokemon.name}`} />
            <p>Altura: {pokemon.height}</p>
            <p>Peso: {pokemon.weight}</p>
            <button onClick={handleToggleTeam}>
                {isInTeam ? "Remover del equipo" : "Agregar al equipo"}
            </button>
        </div>
    );
};

export default PokemonCard;
