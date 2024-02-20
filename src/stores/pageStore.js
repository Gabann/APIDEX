import {useFilterStore} from "@/stores/filterStore.js";
import {defineStore} from "pinia";
import {computed, ref, watch} from "vue";

export const usePageStore = defineStore('pageStore', () => {
	let filterStore = useFilterStore();

	let currentPage = ref(1);
	let pokemonsPerPage = ref(20);

	let maxPage = computed(() => {
		return Math.ceil(filterStore.filteredPokemonArray.length / pokemonsPerPage.value);
	});

	watch(currentPage, (newVal, oldVal) => {
		if (newVal !== oldVal)
			window.scrollTo(0, 0);
	});

	return {currentPage, pokemonsPerPage, maxPage};
});