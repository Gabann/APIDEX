<script setup>
import router from "@/router/router.js";
import {useAuthenticationStore} from "@/stores/authenticationStore.js";
</script>

<template>
  <header class="d-flex align-items-center">
	<div class="col-4 h-100 d-flex align-items-center">
	  <img src="../assets/logo.png" alt="logo" @click="router.push('/')">
	</div>

	<h1 class="text-center col-4">PokeApi in vue js</h1>

	<div class="col-4" style="text-align: right" v-if="!useAuthenticationStore().loggedIn">
	  <a @click="router.push('/login/')">Login</a>
	</div>

	<div v-else class="col-4" style="text-align: right">
	  <span>Bonjour {{ useAuthenticationStore().email }}</span>
	</div>
  </header>
</template>

<style scoped>
header {
  height: 10vh;
  background-color: var(--main-color);
  padding: 0px 30px 0px 30px;
}

header img {
  max-height: 90%;
}
</style>