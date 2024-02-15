<!--suppress EqualityComparisonWithCoercionJS -->
<script setup>
import PokemonEvolutionLine from "@/components/pokemonEvolutionLine.vue";
import PokemonStats from "@/components/pokemonStats.vue";
import router from "@/router/router.js";
import {usePokeApiStore} from "@/stores/pokeApiStore.js";
import {ref, watch} from "vue";
import {useRoute} from "vue-router";

const route = useRoute();

let pokemonStore = usePokeApiStore();
let pokemon = ref({});
setPokemonById(route.params.id);

function setPokemonById(id) {
	pokemon.value = pokemonStore.getPokemonById(id);
}

function setPokemonByName(pokemonName) {
	pokemon.value = pokemonStore.getPokemonByName(pokemonName);

	router.replace({
		path: "/pokemon/" + pokemon.value.pokedexId
	});

	window.history.pushState({}, '', '/pokemon/' + pokemon.value.pokedexId);
}

watch(route, (to) => {
	pokemon.value = pokemonStore.getPokemonById(to.params.id);
});
</script>

<template>
	<div class="col-5" style="margin-left: auto;  margin-right: auto;">
		<table aria-describedby="pokemon details" class="table table-bordered table-responsive">
			<thead>
				<tr>
					<th colspan="1"><span>№ {{ pokemon.pokedexId }}</span></th>
					<th colspan="3"><span>{{ pokemon.name.fr }}</span></th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td class="center-image" colspan="4">
						<div class="center-div">
							<img :src="pokemon.sprites.regular" alt="pokemon sprite" class="img-fluid">
						</div>
					</td>
				</tr>

				<tr v-if="pokemon.name.jp">
					<td colspan="1"><span>Nom japonais</span></td>
					<td colspan="3">
						<span>{{ pokemon.name.jp }}</span>
					</td>
				</tr>

				<tr v-if="pokemon.name.en">
					<td><span>Nom anglais</span></td>
					<td>
						<span>{{ pokemon.name.en }}</span>
					</td>
				</tr>

				<tr v-if="pokemon.generation">
					<td><span>Génération</span></td>
					<td>
						<span>{{ pokemon.generation }}</span>
					</td>
				</tr>

				<tr v-if="pokemon.types">
					<td>
						<span>Types</span>
					</td>
					<td>
						<div style="display: flex; align-items: center;">
							<span v-for="type in pokemon.types" style="display: flex;margin: auto 5px auto 0">{{ type.name }}&nbsp;<img
								:src="type.image"
								alt="pokemon-type" class="col-4 img-fluid" style="height: 1.75em;width: auto">
							</span>
						</div>
					</td>
				</tr>

				<tr v-if="pokemon.category">
					<td>
						<span>Catégorie</span>
					</td>
					<td>
						<span>{{ pokemon.category }}</span>
					</td>
				</tr>

				<tr v-if="pokemon.height">
					<td>
						<span>Taille</span>
					</td>
					<td>
						<span>{{ pokemon.height }}</span>
					</td>
				</tr>

				<tr v-if="pokemon.weight">
					<td>
						<span>Poids</span>
					</td>
					<td>
						<span>{{ pokemon.weight }}</span>
					</td>
				</tr>

				<tr v-if="pokemon.talents">
					<td>
						<span>Talents</span>
					</td>
					<td>
						<ol style="margin-bottom: 0">
							<li v-for="(talent) in pokemon.talents">
								<a :href="'https://www.pokepedia.fr/' + talent.name"> {{ talent.name }} </a>
							</li>
						</ol>
					</td>
				</tr>

				<tr v-if="pokemon.egg_group">
					<td>
						<span>Groupe d'oeuf</span>
					</td>

					<td>
						<span v-for="eggGroup in pokemon.egg_group">
							{{ eggGroup }}
							<br>
						</span>
					</td>
				</tr>

				<tr v-if="pokemon.xpToLevel100">
					<td>
						<span>Xp pour lvl 100</span>
					</td>
					<td>
						<span>{{ pokemon.xpToLevel100.toLocaleString('fr-FR') }}</span>
					</td>
				</tr>

				<tr v-if="pokemon.genderRatio">
					<td>
						<span>Genre</span>
					</td>
					<td>
						<span>{{ pokemon.genderRatio.male }}% Male, {{ pokemon.genderRatio.female }}% Femelle</span>
						<br>
						<progress max="100" style="accent-color: cornflowerblue; background-color: hotpink"
						          v-bind:value="pokemon.genderRatio.male"></progress>
					</td>
				</tr>

				<tr v-if="pokemon.catchRate">
					<td>
						<span>Taux de capture</span>
					</td>
					<td>
						<span>{{ pokemon.catchRate }}</span>
					</td>
				</tr>
			</tbody>
		</table>
	</div>

	<div v-if="pokemon.evolution" class="col-4" style="margin-left: auto;  margin-right: auto;">
		<PokemonEvolutionLine :pokemon="pokemon"></PokemonEvolutionLine>
	</div>

	<div class="col-4" style="margin: auto">
		<PokemonStats :pokemon="pokemon"></PokemonStats>
	</div>


</template>

<style scoped>
.table th:nth-child(1) {
	/* width: 25%; */
}

.table th:nth-child(2) {
	/* width: 85%; */
}

.center-div {
	display: flex;
	justify-content: center;
	align-items: center;
}

td {
	vertical-align: middle;
}
</style>