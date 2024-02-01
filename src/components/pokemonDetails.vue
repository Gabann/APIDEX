<!--suppress EqualityComparisonWithCoercionJS -->
<script setup>
import {useRoute} from "vue-router";
import {usePokeApiStore} from "@/stores/pokeApiStore.js";

const route = useRoute();

let pokemonStore = usePokeApiStore();
// let pokemon = pokemonStore.allPokemons.find((pokemon) => {
// 	return pokemon.pokedexId == route.params.id;
// });
let pokemon = pokemonStore.getPokemonById(route.params.id);

</script>

<template>
	<div class="col-4" style="margin-left: auto;  margin-right: auto;">
		<table class="table table-bordered table-responsive">
			<thead style="border-style: none">
				<tr>
					<td colspan="1"><span>№{{ pokemon.pokedexId }}</span></td>
					<td colspan="3"><span>{{ pokemon.name.fr }}</span></td>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td class="center-image" colspan="4">
						<div class="center-div">
							<img class="img-fluid" :src="pokemon.sprites.regular" alt="pokemon sprite">
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
	                    <span v-for="type in pokemon.types">{{ type.name }}<img style="height: 2em; width: auto" class="col-4 img-fluid"
	                                                                            :src="type.image"
	                                                                            alt="pokemon-type"></span>
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
						<progress max="100" v-bind:value="pokemon.genderRatio.male"
						          style="accent-color: cornflowerblue; background-color: hotpink"></progress>
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

	<div class="col-5" style="margin: auto">
		<table class="table table-striped table-hover table-bordered">
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
					<br>
				</tr>
				<tr>
					<td><span>ATK: {{ pokemon.stats.atk }}</span></td>
					<td>
						<progress class="Attaque" max="255" v-bind:value="pokemon.stats.atk"></progress>
					</td>
					<br>
				</tr>
				<tr>
					<td><span>ATK SPE: {{ pokemon.stats.spe_atk }}</span></td>
					<td>
						<progress class="SpeAtt" max="255" v-bind:value="pokemon.stats.spe_atk"></progress>
					</td>
					<br>
				</tr>
				<tr>
					<td><span>DEF: {{ pokemon.stats.def }}</span></td>
					<td>
						<progress class="Defense" max="255" v-bind:value="pokemon.stats.def"></progress>
					</td>
					<br>
				</tr>
				<tr>
					<td><span>DEF SPE: {{ pokemon.stats.spe_def }}</span></td>
					<td>
						<progress class="SpeDef" max="255" v-bind:value="pokemon.stats.spe_def"></progress>
					</td>
					<br>
				</tr>
				<tr>
					<td><span>VIT: {{ pokemon.stats.vit }}</span></td>
					<td>
						<progress class="Speed" max="255" v-bind:value="pokemon.stats.vit"></progress>
					</td>
					<br>
				</tr>
			</tbody>
		</table>
	</div>


</template>

<style scoped>
.table th:nth-child(1) {
//width: 25%;
}

.table th:nth-child(2) {
//width: 80%;
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