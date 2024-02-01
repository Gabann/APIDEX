<script setup>
import router from "@/router/router.js";


</script>

<template>
	<header class="d-flex align-items-center">
		<div class="col-4 h-100 d-flex align-items-center">
			<img src="../assets/logo.png" alt="logo" @click="router.push('/')">&nbsp;&nbsp;&nbsp;&nbsp;
			<h3>
				APIDEX
			</h3>
		</div>

		<h1 class="text-center col-4">Pokedex using API and Vue JS</h1>

		<div class="col-4">
			<a href="https://github.com/Gabann/APIDEX" class="source-code" style="">
				<h3 class="d-flex align-items-center justify-content-end">
					GitHub &nbsp;&nbsp;<i class="bi bi-github h1"></i>
				</h3>
			</a>
		</div>

		<!--		<div class="col-4" style="text-align: right" v-if="!useAuthenticationStore().loggedIn">-->
		<!--			<a @click="router.push('/login/')">Login</a>-->
		<!--		</div>-->
		<!--		<div v-else class="col-4" style="text-align: right">-->
		<!--			<span>Bonjour {{ useAuthenticationStore().email }}</span>-->
		<!--		</div>-->
	</header>
</template>

<style scoped>
header {
//height: 7vh; background-color: var(--main-color); padding: 0 30px 0 30px; margin-bottom: 15px;
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
	all: unset;
}

.source-code:hover {
	text-decoration: underline;
}

</style>