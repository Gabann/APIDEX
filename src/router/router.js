import NotFound from "@/components/notFound.vue";
import PokemonDetails from "@/components/pokemonDetails.vue";
import LogInVue from "@/views/LogInVue.vue";
import PokedexView from "@/views/pokedexView.vue";
import {createRouter, createWebHistory} from 'vue-router';

const routes = [
	{path: '/:pathMatch(.*)*', redirect: 'not-found'},
	{path: '/not-found', component: NotFound},
	{path: '/', redirect: "/pokedex/"},
	{path: '/pokedex/', component: PokedexView},
	// {path: '/pokedex/', redirect: "/pokedex/1"},
	{path: '/pokemon/:id', component: PokemonDetails},
	{path: '/login', component: LogInVue},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
	scrollBehavior(to, from) {
		// always scroll to top on router change
		if (to.path !== from.path) {
			return {top: 0};
		}
	},
});

export default router;