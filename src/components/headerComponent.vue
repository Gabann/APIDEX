<script setup>

</script>

<template>
	<header class="d-flex align-items-center">
		<div class="col-6 h-100 d-flex align-items-center">
			<router-link style="max-height: 90%" to="/">
				<img alt="logo" src="../assets/logo.png">

				<h3>
					APIDEX
				</h3>
			</router-link>
		</div>

		<!--		<h1 class="text-center col-4">Pokedex using API and Vue JS</h1>-->

		<div class="col-6 d-flex">
			<h3 class="d-flex align-items-center justify-content-end">
				<a class="source-code" href="https://github.com/Gabann/APIDEX">
					GitHub<i class="bi bi-github h1" style="margin-left: 10px"></i>
				</a>
			</h3>
		</div>
	</header>
</template>

<style scoped>
header {
	height: 7vh;
	background-color: var(--main-color);
	padding: 0 30px 0 30px;
	margin-bottom: 15px;
}

header img {
	max-height: 90%;
}

header h1, h2, h3, h4, h5, h6 {
	margin: 0;
}

.h1 {
	margin: 0;
}

.source-code {
	text-decoration: none;
	color: inherit;
}

.d-flex {
	display: flex;
	justify-content: center;
	align-items: center;
}

.source-code:hover {
	text-decoration: underline;
}
</style>