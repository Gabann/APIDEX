<script setup>

</script>

<template>
	<header class="d-flex align-items-center">
		<div class="col-6 h-100 d-flex align-items-center">
			<router-link class="align-vertically" style="display: flex; height: 100%" to="/">
				<img alt="logo" src="../assets/logo.png" style="max-height: 90%; margin-right: 15px">

				<h3>
					APIDEX
				</h3>
			</router-link>
		</div>

		<!--		<h1 class="text-center col-4">Pokedex using API and Vue JS</h1>-->

		<div class="col-6 d-flex" style="height: 100%">
			<h3 class="d-flex align-items-center justify-content-end" style="height: 100%">
				<a class="align-vertically source-code" href="https://github.com/Gabann/APIDEX" style="height: 100%">
					<span class="source-code">
						GitHub
					</span>
					<i class="bi bi-github icon-100 align-vertically"
					   style="margin-left: 10px; font-size: 6vh ; text-decoration: none !important;"></i>
				</a>
			</h3>
		</div>
	</header>
</template>

<style scoped>
header {
	height: 8vh;
	background-color: var(--main-color);
	padding: 0 30px 0 30px;
	margin-bottom: 15px;
}

header h1, h2, h3, h4, h5, h6 {
	margin: 0;
}

.source-code {
	text-decoration: none;
	color: inherit;
}

.source-code:hover {
	text-decoration: underline;
}

.d-flex {
	display: flex;
	justify-content: center;
	align-items: center;
}

.align-vertically {
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>