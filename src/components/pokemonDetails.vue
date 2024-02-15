<!--suppress EqualityComparisonWithCoercionJS -->
<script setup>
import router from "@/router/router.js";
import {useRoute} from "vue-router";

const route = useRoute();
import {ref, watch} from "vue";
import {usePokeApiStore} from "@/stores/pokeApiStore.js";

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

function getEvolutionPokemon(pokemonName) {
	return pokemonStore.getPokemonByName(pokemonName);
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
					<th colspan="1"><span>№{{ pokemon.pokedexId }}</span></th>
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
								{{ talent.name }}
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
		<table aria-describedby="pokemon evolution line" class="evolution-table table table-bordered table-responsive">
			<thead>
				<tr>
					<th colspan="2">Famille d'évolution de {{ pokemon.name.fr }}</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="evolution in pokemon.evolution.pre">
					<td colspan="2">
						<div style="display: flex; justify-content: center; align-items: center; flex-direction: column;">
							<img :src="getEvolutionPokemon(evolution.name).sprites.regular" alt="pokemon evolution sprite">
							<br>
							<router-link :to="{path: '/pokemon/' + getEvolutionPokemon(evolution.name).pokedexId}">
								{{ getEvolutionPokemon(evolution.name).name.fr }}
							</router-link>
							{{ evolution.condition }} ▲ <br>
						</div>
					</td>
				</tr>

				<tr style="  box-shadow: 0 0 10px 4px rgba(234,70,70,0.5);">
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
							<router-link :to="{path: '/pokemon/' + getEvolutionPokemon(evolution.name).pokedexId}">
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
							Mega {{ pokemon.name.fr }}
						</div>
					</td>
				</tr>
			</tbody>
		</table>
	</div>

	<div class="col-4" style="margin: auto">
		<table aria-describedby="pokemon stats" class="table table-striped table-hover table-bordered">
			<thead>
				<tr>
					<th scope="col">Statistique</th>
					<th scope="col">Statistique de base</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td><span>HP: {{ pokemon.stats.hp }}</span></td>
					<td>
						<progress class="Health" max="255" v-bind:value="pokemon.stats.hp"></progress>
					</td>
				</tr>
				<tr>
					<td><span>ATK: {{ pokemon.stats.atk }}</span></td>
					<td>
						<progress class="Attaque" max="255" v-bind:value="pokemon.stats.atk"></progress>
					</td>
				</tr>
				<tr>
					<td><span>ATK SPE: {{ pokemon.stats.spe_atk }}</span></td>
					<td>
						<progress class="SpeAtt" max="255" v-bind:value="pokemon.stats.spe_atk"></progress>
					</td>
				</tr>
				<tr>
					<td><span>DEF: {{ pokemon.stats.def }}</span></td>
					<td>
						<progress class="Defense" max="255" v-bind:value="pokemon.stats.def"></progress>
					</td>
				</tr>
				<tr>
					<td><span>DEF SPE: {{ pokemon.stats.spe_def }}</span></td>
					<td>
						<progress class="SpeDef" max="255" v-bind:value="pokemon.stats.spe_def"></progress>
					</td>
				</tr>
				<tr>
					<td><span>VIT: {{ pokemon.stats.vit }}</span></td>
					<td>
						<progress class="Speed" max="255" v-bind:value="pokemon.stats.vit"></progress>
					</td>
				</tr>
			</tbody>
		</table>
	</div>


</template>

<style scoped>
.table th:nth-child(1) {
	/* width: 25%; */
}

.table th:nth-child(2) {
	/* width: 85%; */
}

.evolution-table img {
	max-height: 10em;
}

progress {
	border: none;
	box-shadow: none;
	height: 30px;
	width: 100%;
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