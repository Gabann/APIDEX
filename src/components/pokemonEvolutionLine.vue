<script setup>
import {usePokeApiStore} from "@/stores/apiStore.js";

defineProps({
	pokemon: Object,
});
let pokemonStore = usePokeApiStore();

function getEvolutionPokemon(pokemonName) {
	return pokemonStore.getPokemonByName(pokemonName);
}

function getFirstPokemonEvolutionLine(pokemonName) {
	let pokemon = pokemonStore.getPokemonByName(pokemonName);

	while (pokemon?.evolution?.pre) {
		pokemon = pokemonStore.getPokemonByName(pokemon.evolution.pre[0].name);
	}

	return pokemon;
}
</script>

<template>
	<table aria-describedby="pokemon evolution line" class="evolution-table table table-bordered table-responsive">
		<thead>
			<tr>
				<th colspan="2">Famille d'évolution de {{ getFirstPokemonEvolutionLine(pokemon.name.fr).name.fr }}</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="evolution in pokemon.evolution.pre">
				<td colspan="2">
					<div style="display: flex; justify-content: center; align-items: center; flex-direction: column;">
						<img :src="getEvolutionPokemon(evolution.name).sprites.regular" alt="pokemon evolution sprite">
						<br>
						<router-link :to="{path: '/pokemon/' + getEvolutionPokemon(evolution.name).pokedex_id}">
							{{ getEvolutionPokemon(evolution.name).name.fr }}
						</router-link>
						{{ evolution.condition }} ▲ <br>
					</div>
				</td>
			</tr>

			<tr class="current-pokemon">
				<td colspan="2">
					<div style="display: flex; justify-content: center; align-items: center; flex-direction: column;">
						<img :src="pokemon.sprites.regular" alt="current pokemon sprite">
						<br>
						{{ pokemon.name.fr }}
					</div>
				</td>
			</tr>

			<tr v-for="evolution in pokemon.evolution.next">
				<td colspan="2">
					<div style="display: flex; justify-content: center; align-items: center; flex-direction: column;">
						{{ evolution.condition }} ▼ <br>
						<img :src="getEvolutionPokemon(evolution.name).sprites.regular" alt="pokemon evolution sprite">
						<br>
						<router-link :to="{path: '/pokemon/' + getEvolutionPokemon(evolution.name).pokedex_id}">
							{{ getEvolutionPokemon(evolution.name).name.fr }}
						</router-link>
					</div>
				</td>
			</tr>

			<tr v-if="pokemon.evolution.mega">
				<td v-for="evolution in pokemon.evolution.mega">
					<div style="display: flex; justify-content: center; align-items: center; flex-direction: column;">
						▲ Mega évolution avec {{ evolution.orbe }} ▼ <br>
						<img :src="evolution.sprites.regular" alt="pokemon evolution sprite">
						<br>
						Mega {{ pokemon.name.fr }}
					</div>
				</td>
			</tr>
			<tr v-for="pokemon in pokemon.evolution.next" v-else>
				<td v-for="evolution in getEvolutionPokemon(pokemon.name).evolution.mega">
					<div style="display: flex; justify-content: center; align-items: center; flex-direction: column;">
						▲ Mega évolution avec {{ evolution.orbe }} ▼ <br>
						<img :src="evolution.sprites.regular" alt="pokemon evolution sprite">
						<br>
						Mega {{ pokemon.name }}
					</div>
				</td>
			</tr>
		</tbody>
	</table>
</template>

<style scoped>
.evolution-table img {
	max-height: 10em;
}

.current-pokemon {
	box-shadow: 0 0 10px 4px var(--main-color);
	position: relative;
	z-index: 1;
}
</style>
