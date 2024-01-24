<script setup>
import FooterComponent from "@/components/footerComponent.vue";
import HeaderComponent from "@/components/headerComponent.vue";
import {RouterView} from 'vue-router';
</script>

<template>
	<header-component></header-component>

	<div class="container-fluid">

		<main>

			<div class="col-10 mx-auto">
				<RouterView/>
			</div>

		</main>

	</div>


	<footer-component></footer-component>
</template>

<style scoped>
</style>