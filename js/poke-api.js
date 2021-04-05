(function () {
    "use strict";

// url for Poke API
    const url = "https://pokeapi.co/api/v2/pokemon/";

    const allPokemon = () => fetch(url)
        .then(result => result.json())
        .catch(console.error);

    const onePokemon = (id) => fetch('${url}/${id}')
        .then(result => result.json())
        .catch(console.error)

})();

