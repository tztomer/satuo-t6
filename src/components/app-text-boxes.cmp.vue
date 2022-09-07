<template>
	<div class="card overflow-hidden box-shadow box-radius">
		<div class="strip">
			<slot name="strip"> </slot>

			<slot name="stripHeb"> </slot>
		</div>
		<div class="content">
			<slot name="default"></slot>
		</div>
		<div class="img-product">
			<slot name="img"></slot>
		</div>
	</div>
</template>
<script>
	export default {
		name: "boxes",
		props: [],
		conponents: {},
		data() {
			return {};
		},
		methods: {},
		computed: {},
		created() {},
	};
</script>
