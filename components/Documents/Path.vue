<template>
	<div class="path">
		<NuxtLink to="/" class="path__link">Главная страница</NuxtLink>
		<div class="path__point"></div>
		<NuxtLink :to="{ path: '/', hash:'#docs'}" class="path__link">Документы</NuxtLink>
		<div class="path__point"></div>
		<p class="path__link path__link_active">Лицензионный договор</p>

	</div>
</template>

<script>
export default {
	setup() {
		
	},
}
</script>

<style lang="scss">
	.path {
		margin-top: 20px;
		margin-bottom: 20px;

		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 10px;

		flex-wrap: wrap;
		color: #000;

		&__link {
			font-size: 13px;
			line-height: 16px;
			margin: 0;
			text-decoration: none;

			&:-webkit-any-link {
				color: #000;
			}

			&_active {
				color: #8F8F8F;
			}
		}

		&__point {
			width: 5px;
			height: 5px;
			border-radius: 5px;
			background: #000;
		}
	}
</style>