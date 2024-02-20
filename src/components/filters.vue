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

watch(generationFilter.value, (newValue) => {
	if (newValue.filter) {
		filterStore.addFilter(newValue);
	} else filterStore.removeFilter('generation', '');
});

function handleCheckboxChange(event, type) {
	if (event.target.checked) {
		filterStore.addFilter(new Filter('types', type));
		event.target.classList.toggle("unselected");
	} else {
		filterStore.removeFilter('types', type);
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
	<div class="d-flex justify-content-center align-items-center flex-column">
		<div class="row">
			<div class="col-6 row justify-content-center align-items-center">
				<label for='generation-filter'>Filtre par génération :</label>
				<select id='generation-filter' v-model="generationFilter.filter" class="form-select w-auto">
					<option disabled selected value="">Filtre de génération</option>
					<option value="">Toutes les générations</option>
					<option v-for="i in 9" :value=i>Génération {{ i }}</option>
				</select>
			</div>

			<div class="col-6 row justify-content-center align-items-center">
				<label for='name-or-id-filter'>Filtre par nom ou numéro de pokedex :</label>
				<input id="name-or-id-filter" v-model="nameFilter" class="form-control w-auto center" name=""
				       placeholder="Nom ou nº de pokedex"
				       type="text">
			</div>
		</div>

		<div class="col-xl-6 col-lg-6 col-md-10 col-sm-12 col-xs-12 d-flex flex-wrap type-filter-container">
			<!--			<span>Filtre par type:</span>-->
			<div v-for="type in pokemonTypes" :key="type">
				<input v-show="false" :id="type" :value="type" type="checkbox" @change="handleCheckboxChange($event, type)">
				<label :class="type" :for="type" class="type">{{ type }}</label>
			</div>
		</div>

		<div class="row">
			<button class="btn btn-danger" @click="clearFilters">Réinitialiser les filtres</button>
		</div>
	</div>
</template>

<style scoped>
.type {
	margin: 5px 10px 5px 10px;
	padding: 0 10px 0 10px;
	border-radius: 10px;
}

.type-filter-container {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
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

input[type="checkbox"]:checked + label {
	opacity: 1;
}
</style>