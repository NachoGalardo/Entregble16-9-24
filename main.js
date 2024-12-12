const container = document.getElementById('poke-seccion');

const getPokemonData = async () => {
    try {
        const respuesta = await fetch('https://pokeapi.co/api/v2/pokemon');
        const info = await respuesta.json();
        const pokemons = info.results;

        mostrarPokemones(pokemons);
    } catch (error) {
        console.error('Error al obtener los datos de la API:', error);
    }
};

const mostrarPokemones = (pokemons) => {
    pokemons.forEach(async (pokemon) => {
        try {
            const respuesta = await fetch(pokemon.url);
            const pokemonData = await respuesta.json();

            const card = document.createElement('div');
            card.classList.add('card');

            const imagen = document.createElement('img');
            imagen.src = pokemonData.sprites.front_default;
            imagen.alt = pokemonData.name;

            const pokemonNombre = document.createElement('h3');
            pokemonNombre.textContent = pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1);

            
            card.appendChild(imagen);
            card.appendChild(pokemonNombre);
           

            container.appendChild(card);
        } catch (error) {
            console.error('Error al obtener los detalles del Pokémon:', error);
        }
    });
};

getPokemonData();
