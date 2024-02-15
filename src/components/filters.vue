<script setup>
import {Filter} from "@/class/filter.js";
import {useFilterStore} from "@/stores/filterStore.js";
import {ref, watch} from "vue";

let filterStore = useFilterStore();
let generationFilter = ref(new Filter('generation', ''));
let nameFilter = ref("");
const pokemonTypes = ['Acier', 'Combat', 'Dragon', 'Eau', 'Électrik', 'Fée', 'Feu', 'Glace', 'Insecte', 'Normal', 'Plante', 'Poison',
	'Psy', 'Roche', 'Sol', 'Spectre', 'Ténèbres', 'Vol'];

watch(nameFilter, (newValue) => {
	filterStore.searchQuery = newValue;
});

function handleCheckboxChange(event, type) {
	if (event.target.checked) {
		filterStore.addFilter(new Filter('types', type));
		event.target.classList.toggle("unselected");
	} else {
		filterStore.removeFilter(new Filter('types', type));
	}
}

function clearFilters() {
	nameFilter.value = '';
	filterStore.clearFilters();

	document.querySelector('#generation-filter').value = '';

	const checkboxes = document.querySelectorAll('input[type="checkbox"]');
	for (const checkbox of checkboxes) {
		checkbox.checked = false;
	}
}
</script>

<template>
	<div class="py-4 d-flex  justify-content-center align-items-center flex-column">
		<label for='generation-filter'></label>
		<select id='generation-filter' v-model="generationFilter.filter" @change="filterStore.addFilter(generationFilter)">
			<option disabled selected value="">Generation filter</option>
			<option value="">Aucun</option>
			<option v-for="i in 9" :value=i>{{ i }}</option>
		</select>

		<div class="row">
			<input id="" v-model="nameFilter" name="" placeholder="Nom ou numéro de pokedex" type="text">
		</div>

		<div class="d-flex flex-wrap type-filter-container">
			<div v-for="type in pokemonTypes" :key="type">
				<input v-show="false" :id="type" :value="type" type="checkbox" @change="handleCheckboxChange($event, type)">
				<label :class="type" :for="type" class="type">{{ type }}</label>
			</div>
		</div>

		<div class="row">
			<button class="btn btn-danger" @click="clearFilters">Clear filters</button>
		</div>
	</div>
</template>

<style scoped>
.type {
	margin: 5px 10px 5px 10px;
	padding: 0 10px 0 10px;
	border-radius: 10px;
}

.row {
	padding: 10px;
}

label {
	text-align: center;
}

input[type="checkbox"]:not(:checked) + label {
	opacity: 0.3;
}

input[type="checkbox"]:hover + label {
	opacity: 0.65;
}
</style>