<template>
	<div class="outer-container">
		<!-- <app-header /> -->
		<router-view />
		<!-- <app-footer /> -->
	</div>
</template>

<script>
	// import appHeader from "./components/app-header.cmp.vue";
	// import appFooter from "./components/app-footer.cmp.vue";
	export default {
		name: "main-app",
		// props: [],
		// components: {
		// 	// appHeader,
		// 	// appFooter,
		// },
		// created() {
		// 	this.$store.dispatch({ type: "loadToys" });
		// },
	};
</script>

<style></style>
