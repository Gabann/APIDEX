import {defineStore} from "pinia";
import {ref} from "vue";
import {Pokemon} from "../class/pokemon.js";

const baseUrl = 'https://tyradex.tech/api/v1/';

export const usePokeApiStore = defineStore('pokeApi', () => {
	let allPokemons = ref([]);

	async function getAllPokemons() {
		if (!localStorage.getItem("allPokemons")) {
			console.log("used api");
			try {
				let response = await fetch(baseUrl + `pokemon`);
				let formattedResponse = await formatApiResponse(response);

				allPokemons = formattedResponse;
				localStorage.setItem('allPokemons', JSON.stringify(formattedResponse));
			} catch (e) {
				console.error(e);
			}
		} else {
			console.log("used local storage");
			allPokemons = JSON.parse(localStorage.getItem('allPokemons'));
		}
	}

	async function formatApiResponse(response) {
		let results = [];
		let data = await response.json();

		for (let pokemon of data) {

			let currentPokemon = new Pokemon(
				pokemon.pokedexId,
				pokemon.generation,
				pokemon.category,
				pokemon.name,
				pokemon.sprites,
				pokemon.types,
				pokemon.talents,
				pokemon.stats,
				pokemon.resistances,
				pokemon.evolution,
				pokemon.height,
				pokemon.weight,
				pokemon.egg_group,
				pokemon.genderRatio,
				pokemon.catchRate,
				pokemon.xpToLevel100,
				pokemon.form
			);
			results.push(currentPokemon);
		}

		return results;
	}

	function getPokemonById(id) {
		return allPokemons.find((pokemon) => {
			return parseInt(pokemon.pokedexId) === parseInt(id);
		});
	}

	function getPokemonByName(name) {
		return allPokemons.find((pokemon) => {
			return pokemon.name.fr.toLowerCase() === name.toLowerCase();
		});
	}

	void getAllPokemons();

	return {allPokemons, getPokemonByName, getPokemonById};
});

