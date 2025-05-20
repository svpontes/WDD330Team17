const url = "https://pokeapi.co/api/v2/pokemon";
let results = null;

async function getPokemon(url) {
  const response = await fetch(url);
  if (response.ok) {
    const data = await response.json();
    doStuff(data);
  } else {
    console.error("Error fetching data:", response.status);
  }
}

function doStuff(data) {
  results = data;
  console.log("first:", results); // este aparece depois

  const select = document.getElementById("pokemon-select");
  select.innerHTML = ""; // limpa o conteúdo "Loading..."

  results.results.forEach((pokemon) => {
    const option = document.createElement("option");
    option.value = pokemon.name;
    option.textContent = pokemon.name;
    select.appendChild(option);
  });

  console.log("Total Pokemon:", results.count); // 1154
}

getPokemon(url);
console.log("second:", results); // este aparece primeiro (null)
