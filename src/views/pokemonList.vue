<script setup>
import PokemonCard from "@/components/pokemonCard.vue";
import PokemonModal from "@/components/pokemonModal.vue";
import {useFilterStore} from "@/stores/filterStore.js";
import {Modal} from "bootstrap";
import {onMounted, ref} from "vue";

let filterStore = useFilterStore();

let currentPage = ref(1);
let pokemonsPerPage = 20;

let modal;
let modalPokemon = ref({});

function switchPage(targetPage) {
	if (targetPage !== currentPage.value) {
		currentPage.value = Math.floor(Math.min(Math.max(targetPage, 1), (filterStore.filteredPokemonArray.length / pokemonsPerPage) + 1));
		window.scrollTo(0, 0);
	}
}

function displayModal(pokemon) {
	modalPokemon.value = pokemon;
	modal.show();
}

function forceNumberInput(event) {
	event.target.value = Number(event.target.value.replace(/^0-9/g, Number(1)));
}

onMounted(() => {
	modal = new Modal(document.getElementById('pokemonModal'));
});

</script>

<template>
	<div v-if="filterStore.filteredPokemonArray.length > 0">
		<div class="d-flex flex-wrap">

			<template v-for="(pokemon, index) in filterStore.filteredPokemonArray">
				<div v-if="index < (pokemonsPerPage * currentPage) && index >= (currentPage * pokemonsPerPage) - pokemonsPerPage"
				     class="col-xl-3 col-md-4 col-12"
				     style="padding: 20px">
					<PokemonCard :pokemon="pokemon" @display-modal="displayModal"></PokemonCard>
				</div>
			</template>
		</div>

		<div class="page-navigation mx-auto justify-content-center d-flex align-items-center">
			<nav aria-label="Page navigation">

				<ul class="pagination">
					<li class="page-item">
						<button class="btn btn-outline-primary page-button" @click="switchPage(1)">&lt;&lt;</button>
					</li>
					<li class="page-item">
						<button class="btn btn-outline-primary page-button" @click="switchPage(currentPage - 1)">&lt;</button>
					</li>
					<li v-if="currentPage - 1 > 0" class="page-item page-number">
						<button class="btn btn-outline-primary page-button" @click="switchPage(currentPage-1)">{{ currentPage - 1 }}
						</button>
					</li>
					<li class="page-item page-number">
						<input :value="currentPage" class="btn btn-outline-primary page-button" style="width: auto" type="number"
						       @change="switchPage($event.target.value)"
						       @input="forceNumberInput">
					</li>
					<li class="page-item page-number">
						<button v-if="currentPage + 1 < filterStore.filteredPokemonArray.length / 20"
						        class="btn btn-outline-primary page-button"
						        @click="switchPage(currentPage+1)">
							{{ currentPage + 1 }}
						</button>
					</li>
					<li class="page-item">
						<button class="btn btn-outline-primary page-button" @click="switchPage(currentPage + 1)"> ></button>
					</li>
					<li class="page-item">
						<button class="btn btn-outline-primary page-button" @click="switchPage(999999999)">>></button>
					</li>
				</ul>
			</nav>
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
.page-navigation {
	padding: 20px;
}

.pagination {
	margin: 0;
}

.page-button {
	margin: 5px;
}

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

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
	-webkit-appearance: none;
	margin: 0;
}

input[type="number"] {
	-moz-appearance: textfield;
}
</style>