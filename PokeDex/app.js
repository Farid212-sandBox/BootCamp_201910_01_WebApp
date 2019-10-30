(() => {
  const promises = [];
  for (let i = 1; i < 807; i++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    promises.push(fetch(url).then(res => res.json()));
  }

  Promise.all(promises).then(results => {
    const pokemon = results.map(data => ({
      name: data.name,
      id: data.id,
      image: data.sprites["front_default"],
      type: data.types.map(type => type.type.name).join(", ")
    }));

    displayPokemon(pokemon);
  });

  const pokedex = document.getElementById("pokedex");

  const displayPokemon = pokemon => {
    // console.log(pokemon);
    const pokemonHTMLString = pokemon
      .map(
        pokemonster => `
                    <li class="card">
                        <img class="card-image" src="${pokemonster.image}"/>
                        <h2 class="card-title">${pokemonster.name}</h2>
                        <p class="card-subtitle">${pokemonster.type}</p>
                    </li>
                `
      )
      .join("");

    pokedex.innerHTML = pokemonHTMLString;
  };
})();
