<template>
	<div class="home-page">
		<WelcomeForm />
		<Cards />
		<Slider />
	</div>
</template>

<script>
import WelcomeForm from '~/components/Home/WelcomeForm.vue'
import Cards from '~/components/Home/Cards.vue';
import Slider from '~/components/Home/Slider.vue';

export default {
	setup() {
		
	},
	components: {
		WelcomeForm,
		Cards,
		Slider
	}
}
</script>

<style lang="scss">
	.home-page {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>