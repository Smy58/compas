<template>
	<div class="slider-card">
		<div class="slider-card__conten">
			<h4 class="slider-card__title">{{ item.title }}</h4>
			<p class="slider-card__text">{{ item.text }}</p>
		</div>
		

		<button class="slider-card__btn" @click="goToDoc">Перейти</button>
	</div>
</template>

<script>
export default {
	props: {
		item: Object
	},
	methods: {
		goToDoc() {
			this.$router.push({
				path: '/documents',
				query: { docData: JSON.stringify(this.item) },
			})
		}
	}
}
</script>

<style lang="scss">
	.slider-card {
		width: 340px;
		height: 450px;
		border: solid 1px #EEEFF1;
		box-shadow: 0 0 15px rgba(0,0,0,0.12);
		border-radius: 10px;

		padding: 25px;
		box-sizing: border-box;

		display: flex;
		flex-direction: column;
		align-items: start;
		justify-content: space-between;


		&__title {
			font-size: 31px;
			font-weight: bold;
			color: #1253A2;
			line-height: 36px;
			margin: 0;
			margin-bottom: 15px;
		}

		&__text {
			font-size: 18px;
			line-height: 20px;
			margin: 0;
		}

		&__btn {
			background: #0584FE;
			color: white;
			width: 100%;
			height: 45px;
			border: none;
			border-radius: 7px;

			
			padding: 0;
			display: flex;
			align-items: center;
			justify-content: center;

			font-size: 18px;

			cursor: pointer;

			transition: all 0.3s ease;

			&:hover {
				border: solid 1px #0584FE;
				color: #0584FE;
				background: transparent;
			}

		}
	}

	@media screen and (max-width: 1440px) {
		
		.slider-card {
			width: 269px;
			height: 356px;
			padding: 18px;

			&__title {
				font-size: 22px;
				line-height: 24px;
			}

			&__text {
				font-size: 16px;
				line-height: 18px;
			}

			&__btn {
				height: 40px;
				font-size: 16px;
			}
		}
	}

	@media screen and (max-width: 1169px) {
		.slider-card {
			width: 340px;
			height: 450px;
			padding: 25px;

			&__title {
				font-size: 31px;
				line-height: 36px;
			}

			&__text {
				font-size: 18px;
				line-height: 20px;
			}

			&__btn {
				height: 45px;
				font-size: 18px;
			}
		}
	}

	@media screen and (max-width: 970px) {
		.slider-card {
			width: 269px;
			height: 356px;
			padding: 18px;

			&__title {
				font-size: 22px;
				line-height: 24px;
			}

			&__text {
				font-size: 16px;
				line-height: 18px;
			}

			&__btn {
				height: 40px;
				font-size: 16px;
			}
		}
	}

	@media screen and (max-width: 775px) {
		.slider-card {
			width: 340px;
			height: 450px;
			padding: 25px;

			&__title {
				font-size: 31px;
				line-height: 36px;
			}

			&__text {
				font-size: 18px;
				line-height: 20px;
			}

			&__btn {
				height: 45px;
				font-size: 18px;
			}
		}
	}

	@media screen and (max-width: 520px) {
		.slider-card {
			width: 269px;
			height: 356px;
			padding: 18px;

			&__title {
				font-size: 22px;
				line-height: 24px;
			}

			&__text {
				font-size: 16px;
				line-height: 18px;
			}

			&__btn {
				height: 40px;
				font-size: 16px;
			}
		}
	}
</style>