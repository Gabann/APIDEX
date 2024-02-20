import {Filter} from "@/class/filter.js";
import {usePageStore} from "@/stores/pageStore.js";
import {defineStore} from "pinia";
import {computed, ref} from "vue";
import {usePokeApiStore} from "./apiStore.js";

export const useFilterStore = defineStore('filterStore', () => {

	let pageStore = usePageStore();

	let pokeApiStore = usePokeApiStore();
	let filterArray = ref([]);
	let searchQuery = ref('');

	let filteredPokemonArray = computed(() => {
		let allPokemons = pokeApiStore.allPokemons;
		let filteredArray = [...allPokemons];

		for (const filter of filterArray.value) {
			filteredArray = filterPokemonList(filteredArray, filter.property, filter.filter);
		}

		filteredArray = searchByNameOrId(filteredArray, searchQuery.value);

		return filteredArray;
	});

	function searchByNameOrId(array, searchedName) {
		return array.filter((pokemon) => {
			let pokemonName = pokemon.name.fr.toUpperCase();
			let pokemonId = pokemon.pokedexId.toString();
			searchedName = searchedName.toUpperCase();
			return (pokemonName.includes(searchedName) || pokemonId.startsWith(searchedName));
		});
	}

	function filterPokemonList(array, property, filter) {
		return array.filter((pokemon) => {
			return containsValue(pokemon[property], filter);
		});
	}

	function addFilter(filter) {
		const filterExists = filterArray.value.some(f => f.property === filter.property && f.filter === filter.filter);
		if (!filterExists) {
			filterArray.value.push(filter);
		}

		pageStore.currentPage = 1;
	}

	function removeFilter(filterName, filterValue) {
		let filter = new Filter(filterName, filterValue);
		filterArray.value = filterArray.value.filter(f => !(f.property === filter.property && f.filter === filter.filter));

		pageStore.currentPage = 1;
	}

	function clearFilters() {
		filterArray.value = [];
		searchQuery.value = '';

		pageStore.currentPage = 1;
	}

	function containsValue(obj, targetValue) {
		if (typeof obj === 'string' || typeof obj == "number") {
			return obj === targetValue;
		} else {
			for (const key in obj) {
				if (obj[key] === targetValue) {
					return true;
				} else if (typeof obj[key] === 'object' && obj[key] !== null) {

					// Recursively search in nested properties
					if (containsValue(obj[key], targetValue)) {
						return true;
					}
				}
			}
		}
		return false;
	}

	return {filteredPokemonArray, addFilter, removeFilter, searchQuery, clearFilters};
});

