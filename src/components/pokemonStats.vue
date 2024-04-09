<script setup>
defineProps({
	pokemon: Object,
});
</script>

<template>
	<table v-if="pokemon.stats" aria-describedby="pokemon stats" class="table table-striped table-hover table-bordered">
		<thead>
			<tr>
				<th scope="col">Statistique</th>
				<th scope="col">Statistique de base</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><span>HP: {{ pokemon.stats.hp }}</span></td>
				<td>
					<progress class="Health" max="255" v-bind:value="pokemon.stats.hp"></progress>
				</td>
			</tr>
			<tr>
				<td><span>ATK: {{ pokemon.stats.atk }}</span></td>
				<td>
					<progress class="Attaque" max="255" v-bind:value="pokemon.stats.atk"></progress>
				</td>
			</tr>
			<tr>
				<td><span>ATK SPE: {{ pokemon.stats.spe_atk }}</span></td>
				<td>
					<progress class="SpeAtt" max="255" v-bind:value="pokemon.stats.spe_atk"></progress>
				</td>
			</tr>
			<tr>
				<td><span>DEF: {{ pokemon.stats.def }}</span></td>
				<td>
					<progress class="Defense" max="255" v-bind:value="pokemon.stats.def"></progress>
				</td>
			</tr>
			<tr>
				<td><span>DEF SPE: {{ pokemon.stats.spe_def }}</span></td>
				<td>
					<progress class="SpeDef" max="255" v-bind:value="pokemon.stats.spe_def"></progress>
				</td>
			</tr>
			<tr>
				<td><span>VIT: {{ pokemon.stats.vit }}</span></td>
				<td>
					<progress class="Speed" max="255" v-bind:value="pokemon.stats.vit"></progress>
				</td>
			</tr>
		</tbody>
	</table>
</template>

<style scoped>
progress {
	border: none;
	box-shadow: none;
	height: 30px;
	width: 100%;
}
</style>