<script setup>
import PageNavigation from "@/components/pageNavigation.vue";
import PokemonCard from "@/components/pokemonCard.vue";
import PokemonModal from "@/components/pokemonModal.vue";
import {useFilterStore} from "@/stores/filterStore.js";
import {usePageStore} from "@/stores/pageStore.js";
import {Modal} from "bootstrap";
import {onMounted, ref} from "vue";

let filterStore = useFilterStore();
let pageStore = usePageStore();


let modal;
let modalPokemon = ref({});


function displayModal(pokemon) {
	modalPokemon.value = pokemon;
	modal.show();
}

onMounted(() => {
	modal = new Modal(document.getElementById('pokemonModal'));
});
</script>

<template>
	<div v-if="filterStore.filteredPokemonArray.length > 0">
		<div class="d-flex flex-wrap">

			<template v-for="(pokemon, index) in filterStore.filteredPokemonArray">
				<div
					v-if="index < (pageStore.pokemonsPerPage * pageStore.currentPage) && index >= (pageStore.currentPage * pageStore.pokemonsPerPage) - pageStore.pokemonsPerPage"
					class="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-xs-12"
					style="padding: 20px">
					<PokemonCard :pokemon="pokemon" @display-modal="displayModal"></PokemonCard>
				</div>
			</template>
		</div>

		<div>
			<PageNavigation></PageNavigation>
		</div>
	</div>
	<div v-else style="display: flex; justify-content: center; align-items: center; height: 50vh;">
		<div>
			<h1>Aucun pokemon ne correspond a la recherche</h1>
		</div>
	</div>


	<div v-if="modalPokemon">
		<div id="pokemonModal" aria-hidden="true" aria-labelledby="pokemonModal" class="modal" tabindex="-1">
			<div class="modal-dialog modal-dialog-centered">
				<div class="modal-content">
					<PokemonModal v-bind:pokemon="modalPokemon"></PokemonModal>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>


.modal::before {
	content: "";
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.5);
	filter: grayscale(1);
	z-index: 1;
}

.modal-content {
	position: relative;
	z-index: 2;
}


</style>