import router from "@/router/router.js";
import {defineStore} from "pinia";
import {ref} from "vue";

export const useAuthenticationStore = defineStore('authenticationStore', () => {
	const email = "test@email.com";
	const password = "qwfpgj";
	let loggedIn = ref(false);

	function logIn(emailInput, passwordInput) {
		if (email === emailInput && password === passwordInput) {
			loggedIn.value = true;
			localStorage.setItem("username", email);
			router.push('/').then();
		} else {
			console.log("wrong email or password");
		}
	}

	return {logIn, loggedIn, email};
});
