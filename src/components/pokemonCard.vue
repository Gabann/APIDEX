<script setup>
defineProps({
	pokemon: Object,
});
</script>

<template>
	<router-link :to="`/pokemon/${pokemon.pokedex_id}`">
		<div class="pokemon-card">
			<div class="row">
				<img :src="pokemon.sprites.regular" alt="pokemon-sprite" style="margin-bottom: 10px">
			</div>

			<div class="row">
				<div class="col-3">
					№
				</div>
				<div class="col-9">
					<p>{{ pokemon.pokedex_id }}</p>
				</div>
			</div>

			<div class="row">
				<div class="col-3">
					<p>Name:</p>
				</div>
				<div class="col-9">
					<p>{{ pokemon.name.fr }}</p>
				</div>
			</div>

			<div class="row">
				<div class="col-3">
					<p>Catégorie:</p>
				</div>
				<div class="col-9">
					<p>{{ pokemon.category }}</p>
				</div>
			</div>

			<div class="row">
				<div class="col-3">
					<p>Generation:</p>
				</div>
				<div class="col-9">
					<p>{{ pokemon.generation }}</p>
				</div>
			</div>

			<div v-if="pokemon.types" class="row">
				<div class="col-3">
					<p>Types:</p>
				</div>
				<div class="col-9 d-flex">
					<div v-for="type in pokemon.types" :class="type.name" class="pokemon-type col-5 h-100 d-flex align-items-center"
					     style="justify-content: space-between">
						<span class="col-8 text-center" style="padding: 0 10px 0 10px">{{ type.name }}</span>
						<img :src="type.image" alt="pokemon-type" class="col-4">
					</div>
				</div>
			</div>
		</div>
	</router-link>
</template>

<style scoped>
.pokemon-card {
	box-shadow: rgba(0, 0, 0, 0.35) 0 5px 15px;
	height: 100%;
	padding: 20px;
	border-radius: 20px;
}

.pokemon-card:hover {
	background-color: #009bd6;
}

.pokemon-type {
	margin: 0 10px 0 10px;
}

a {
	text-decoration: none;
	color: inherit;
}

.router-link-exact-active {
	text-decoration: none;
	color: inherit;
}
</style>
