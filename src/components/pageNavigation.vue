<script setup>
import {useFilterStore} from "@/stores/filterStore.js";
import {inject} from "vue";

let filterStore = useFilterStore();
const updateCurrentPage = inject("currentPage").updateCurrentPage;
const currentPage = inject('currentPage').currentPage;
const pokemonsPerPage = inject('pokemonsPerPage').pokemonsPerPage;

function forceNumberInput(event) {
	event.target.value = Number(event.target.value.replace(/^0-9/g, Number(1)));
}

function switchPage(targetPage) {
	if (targetPage !== currentPage) {
		updateCurrentPage(Math.floor(Math.min(Math.max(targetPage, 1), (filterStore.filteredPokemonArray.length / pokemonsPerPage) + 1)));
		window.scrollTo(0, 0);
	}
}
</script>

<template>
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

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
	-webkit-appearance: none;
	margin: 0;
}

input[type="number"] {
	-moz-appearance: textfield;
}
</style>