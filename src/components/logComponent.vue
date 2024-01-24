<script setup>
import {ref} from "vue";
import {useAuthenticationStore} from "@/stores/authenticationStore.js";

let email = ref("");
let password = ref("");
let authenticationStore = useAuthenticationStore();

function tryLogIn(email, password)
{
  authenticationStore.logIn(email, password);
}
</script>

<template>
  <form @submit.prevent="tryLogIn(email,password)">
	<h3>Login</h3>

	<label for="Email">Email</label>
	<input type="text" placeholder="Email" id="email" v-model="email">

	<label for="password">Password</label>
	<input type="password" placeholder="Password" id="password" v-model="password">

	<button class="btn btn-success" type="submit">Log In</button>
  </form>
</template>

<style scoped>

</style>