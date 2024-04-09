<!--suppress EqualityComparisonWithCoercionJS -->
<script setup>
import PokemonEvolutionLine from "@/components/pokemonEvolutionLine.vue";
import PokemonStats from "@/components/pokemonStats.vue";
import PokemonTable from "@/components/pokemonTable.vue";
import {usePokeApiStore} from "@/stores/apiStore.js";
import {ref, watch} from "vue";
import {useRoute} from "vue-router";

const route = useRoute();

let pokemonStore = usePokeApiStore();
let pokemon = ref({});
setPokemonById(route.params.id);

function setPokemonById(id) {
	pokemon.value = pokemonStore.getPokemonById(id);
}

watch(route, (to) => {
	pokemon.value = pokemonStore.getPokemonById(to.params.id);
});
</script>

<template>
	<div class="col-xl-6 col-lg-7 col-md-8 col-sm-10 col-xs-12" style="margin-left: auto;  margin-right: auto;">
		<PokemonTable :pokemon="pokemon"></PokemonTable>
	</div>

	<a href="https://www.pokepedia.fr/%C3%89volution"><h2>Évolutions: </h2></a>
	<hr>
	<div v-if="pokemon.evolution" class="col-xl-6 col-lg-7 col-md-8 col-sm-10 col-xs-12" style="margin-left: auto;  margin-right: auto;">
		<PokemonEvolutionLine :pokemon="pokemon"></PokemonEvolutionLine>
	</div>
	<div v-else class="col-xl-6 col-lg-7 col-md-8 col-sm-10 col-xs-12" style="margin-left: auto;  margin-right: auto;">
				<span>
					{{ pokemon.name.fr }} n'a pas d'évolution et n'est l'évolution d'aucun Pokémon.
				</span>
	</div>

	<a href="https://www.pokepedia.fr/Statistique"><h2>Statistique: </h2></a>
	<hr>
	<div class="col-xl-5 col-lg-6 col-md-7 col-sm-9 col-xs-11" style="margin: auto">
		<PokemonStats :pokemon="pokemon"></PokemonStats>
	</div>
</template>

<style scoped>

td {
	vertical-align: middle;
}
</style>