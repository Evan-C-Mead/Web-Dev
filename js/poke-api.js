(function () {
    "use strict";

// url for Poke API
    // const url = "https://pokeapi.co/api/v2/pokemon";
    //
    // const allPokemon = () => fetch(url)
    //     .then(result => result.json())
    //     .catch(console.error);
    //
    // const onePokemon = (id) => fetch('${url}/${id}')
    //     .then(result => result.json())
    //     .catch(console.error)

    const Pokedex = require('pokedex-promise-v2');
    const options = {
        protocol: 'https',
        hostName: 'localhost:443',
        versionPath: '/api/v2/',
        cacheLimit: 100 * 1000, // 100s
        timeout: 5 * 1000 // 5s
    };
    const P = new Pokedex(options);

    P.allPokemon = () => fetch(Pokedex)
        .then(result => result.json())
        .catch(console.error);

    P.getPokemonByName = (id) => fetch('${url}/${id}')
        .then(result => result.json())
        .catch(console.error);

    P.allPokemon().then(pkmns => {
        let pkmnList = '<div class="album py-5 bg-dark">\n' +
            '               <div class="container">\n' +
            '                   <div class="row">';

        for (let pkmn of pkmns) {
            pkmnList += `<div class="col-md-4">
                    <div class="card mb-4 box-shadow">
                        <div class="card-body">
                            <p class="card-text">${pkmn.name}</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="modal fade" aria-hidden="true">
                                    <div class="modal-dialog" role="document">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="movieModal${pkmn.id}Label">${pkmn.name}</h5>
                                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div class="modal-body">
                                                <p>Name: ${pkmn.name}</p>
                                                <p>ID#: ${pkmn.id}</p>
                                            </div>
                                        </div>
                                    </div>                              
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`
        }
        pkmnList += '</div>';

        $("#pkdex-div").html(pkmnList);
    })

})();

