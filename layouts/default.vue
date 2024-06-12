<template>
	<div class="layout">
		<Header></Header>
		<slot />
	</div>
</template>

<script lang="ts">
import '../assets/fonts/Gilroy/stylesheet.css'
import '../assets/fonts/PTSans/stylesheet.css'
import Header from '../components/Header/Header.vue';

export default {
	components: {
		Header
	},
	
	
}
</script>

<style lang="scss">
	body {
		margin: 0;
		padding: 0;

		font-family: 'PT Sans';

		
	}

	#__nuxt {
		width: 100%;
	}
 
	.layout {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;

		flex-direction: column;
	}
</style>