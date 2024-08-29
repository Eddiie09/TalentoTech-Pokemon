export const fetchPokemons = async () => {
    const url = "https://pokeapi.co/api/v2/pokemon/?limit=20&offset=20";

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Error al obtener los datos");
        }
        const data = await response.json();
        return data.results;

    } catch (error) {
        console.error("Error en la petición a la PokeAPI", error);
    }
}

export const fetchPokemonDetail = async (name)=>{
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        const data = await response.json()
        return data
    } catch (error) {
        console.error("error en el fechtPokemonDetail", error)
    }
}