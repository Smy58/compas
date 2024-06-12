<template>
	<div class="document">
		<h2 class="document__title">{{ title }}</h2>

		<article class="document__article" v-for="item in articles" :key="item.id">
			<h3 class="document__subtitle">{{ item.subtitle }}</h3>
			<p class="document__text" v-for="index in item.text" :key="index.id">{{ index.content }}</p>
		</article>

	</div>
</template>

<script>
export default {
	setup() {
		
	},
	props: {
		title: String,
		articles: Array
	}
}
</script>

<style lang="scss">
	.document {
		display: flex;
		flex-direction: column;
		align-items: start;

		margin-bottom: 30px;

		&__title {
			margin: 0;
			font-size: 41px;
			line-height: 48px;
			font-weight: bold;
			margin-bottom: 25px;
		}

		&__subtitle {
			margin: 0;
			font-size: 41px;
			line-height: 48px;
			font-weight: bold;
			margin-top: 15px;
			margin-bottom: 25px;
		}

		&__text {
			margin: 0;
			font-size: 18px;
			line-height: 22px;
			margin-bottom: 15px;
		}
	}
</style>