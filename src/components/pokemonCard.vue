<script setup>
const props = defineProps({
	pokemon: Object,
});
</script>

<template>
	<div class="pokemon-card">
		<div class="row">
			<img :src="pokemon.sprites.regular" @click="$emit('display-modal', pokemon)" alt="pokemon-sprite">
		</div>

		<div class="row">
			<div class="col-3">
				№
			</div>
			<div class="col-9">
				<p>{{ pokemon.pokedexId }}</p>
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

		<div class="row">
			<div class="col-3">
				<p>Types:</p>
			</div>
			<div class="col-9 d-flex">
				<div :class="type.name" v-for="type in pokemon.types" class="pokemon-type col-5 h-100 d-flex align-items-center"
				     style="justify-content: space-between">
					<span style="padding: 0 10px 0 10px" class="col-8 text-center">{{ type.name }}</span>
					<img class="col-4" :src="type.image" alt="pokemon-type">
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.pokemon-card {
	/*border: 1px solid red;*/
	box-shadow: rgba(0, 0, 0, 0.35) 0 5px 15px;
	height: 100%;
	padding: 20px;
	border-radius: 20px;
}

.pokemon-card:hover {
	background-color: rgba(170, 187, 255, 1);
}

.pokemon-type {
	margin: 0 10px 0 10px;
}

img {
//width: 100%;
}
</style>