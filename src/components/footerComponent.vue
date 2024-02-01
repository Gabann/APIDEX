<script setup>
const currentYear = new Date().getFullYear();
</script>

<template>
	<footer class="d-flex align-items-center">
		<div class="col-4 h-100 d-flex align-items-center">
			<a href="https://github.com/Gabann" class="image-container">
				<img src="https://avatars.githubusercontent.com/u/40118785?v=4">
			</a>
		</div>

		<div class="col-4 h-100 d-flex align-items-center justify-content-center flex-wrap">
			
			<span class="w-100 text-center">
				Data from <a href="https://tyradex.tech/">Tyradex</a>
			</span>

			<span class="w-100 text-center">
				<a href="https://github.com/Gabann/APIDEX">Source code</a>
			</span>

			<span class="w-100 text-center">
				© {{ currentYear }} | <a
				href="https://github.com/Gabann/APIDEX/blob/544a382d9f95f578b94cb874e866431a80d07648/LICENSE">MIT License</a>
			</span>
		</div>

		<div class="col-4 h-100 d-flex align-items-center justify-content-end">

		</div>
	</footer>
</template>

<style scoped>
footer {
	background-color: var(--main-color);
	height: 7vh;
	padding: 0 30px 0 30px;
	margin-top: 15px;
}

.image-container {
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
}

footer img {
	max-height: 80%;
	border-radius: 50%;
}

span {
	font-size: 12px;
}
</style>