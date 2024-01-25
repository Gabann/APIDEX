import {createRouter, createWebHistory} from 'vue-router';
import PokemonList from "@/components/pokemonList.vue";
import NotFound from "@/components/notFound.vue";
import PokedexView from "@/views/pokedexView.vue";
import LogInVue from "@/views/LogInVue.vue";
import PokemonDetails from "@/components/pokemonDetails.vue";

const routes = [
	{path: '/:pathMatch(.*)*', redirect: 'not-found'},
	{path: '/not-found', component: NotFound},
	{path: '/', redirect: "/pokedex/1"},
	{path: '/pokedex/', redirect: "/pokedex/1"},
	{path: '/pokedex/:page', component: PokedexView},
	{path: '/pokemon/:id', component: PokemonDetails},
	{path: '/login', component: LogInVue},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;