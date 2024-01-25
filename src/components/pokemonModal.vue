<script setup>
import {ref} from "vue";

const props = defineProps({
	pokemon: Object,
});

let isShiny = ref(false);
</script>

<template>
	<div class="modal-header">
		<h5 class="modal-title" id="pokemonModal" v-if="pokemon.name">
			{{ pokemon.pokedexId }} - {{ pokemon.name.fr }}
		</h5>
		<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
	</div>

	<div class="modal-body">
		<div class="pokemon-modal">
			<div class="row" v-if="pokemon.sprites">
				<img :src="isShiny ? pokemon.sprites.shiny : pokemon.sprites.regular">
				<div>
					<button @click="isShiny = !isShiny">

						<i :class="'bi ' + (isShiny ? 'bi-star-fill' : 'bi-star')"></i>
					</button>
				</div>
			</div>

			<div class="row">
				<div class="col-3">
					<p>Taille:</p>
				</div>
				<div class="col-9">
					<p>{{ pokemon.height }}</p>
				</div>
			</div>

			<div class="row">
				<div class="col-3">
					<p>Poids:</p>
				</div>
				<div class="col-9">
					<p>{{ pokemon.weight }}</p>
				</div>
			</div>

			<div class="row" v-if="pokemon.types">
				<div class="col-3">
					<p>Types:</p>
				</div>
				<div class="col-9">
					<p v-for="type in pokemon.types">{{ type.name }}</p>
				</div>
			</div>


			<div class="row" v-if="pokemon.talents">
				<div class="col-3">
					<p>Talent:</p>
				</div>
				<div class="col-9">
					 <span v-for="(talent, index) in pokemon.talents">
					  <a :href="'https://www.pokepedia.fr/' + talent.name"> {{ talent.name }}</a>
					  <span v-if="index !== pokemon.talents.length - 1"> / </span>
					 </span>
				</div>
			</div>

			<div class="row" v-if="pokemon.talents">
				<div class="col-12">
					<p>PV {{ pokemon.stats.hp }}</p>
					<p>Attaque {{ pokemon.stats.atk }}</p>
					<p>Defense {{ pokemon.stats.def }}</p>
					<p>Attaque Spéciale {{ pokemon.stats.spe_atk }}</p>
					<p>Défense Spéciale {{ pokemon.stats.spe_def }}</p>
					<p>Vitesse {{ pokemon.stats.vit }}</p>
				</div>
			</div>
		</div>
	</div>

</template>

<style scoped>
</style>