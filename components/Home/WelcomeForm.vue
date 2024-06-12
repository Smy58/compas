<template>
	<div class="welcome-form">
		<div class="welcome-form__content">
			<h3 class="welcome-form__title">Проверьте штрафы и зарегестрируйтесь в 1 клик</h3>
			<form class="welcome-form__form">
				<div class="welcome-form__row">
					<div class="welcome-form__field welcome-form__field_car-number">
						<label for="car-number" class="welcome-form__label">Номер автомобиля</label>
						<input v-model="carNum" id="car-number" type="text" 
							@focus="carNumFocus = true"
							:class="`welcome-form__input ${carNumValid ? '' : 'welcome-form__input_err'}`">
					</div>
					<div class="welcome-form__field welcome-form__field_region">
						<label for="region" class="welcome-form__label">Регион</label>
						<input v-model="region" id="region" type="text" 
							@focus="regionFocus = true"
							:class="`welcome-form__input ${regionValid ? '' : 'welcome-form__input_err'}`">
					</div>
				</div>
				<div class="welcome-form__row">
					<div class="welcome-form__field">
						<label for="reg-number" class="welcome-form__label">Свидетельство о регистрации ТС</label>
						<input v-model="regNum" id="reg-number" type="text" 
							@focus="regNumFocus = true"
							:class="`welcome-form__input ${regNumValid ? '' : 'welcome-form__input_err'}`">
					</div>
				</div>
				<div class="welcome-form__row">
					<button :class="`welcome-form__submit ${isValid ? '' : 'welcome-form__submit_blocked'}`" 
						@click.prevent="sendData">Проверить штрафы 
							<img :src="arrow" alt="arrow" class="welcome-form__arrow">
					</button>
					<span :class="`welcome-form__not ${isSend ? 'welcome-form__not_visible' : ''}`">Данные успешно отправлены!</span>
					<button class="welcome-form__video" @click.prevent="tooglePopup">
						<img :src="videoIcon" alt="video icon" class="welcome-form__video-icon">
						О сервисе <span class="welcome-form__video-span">(1 мин. 20 сек)</span>
					</button>
				</div>
				<span class="welcome-form__info">Нажимая «Проверить штрафы» вы соглашаетесь с политикой обработки персональных данных и принимаете оферту</span>
			</form>
		</div>
		<img :src="image" alt="application" class="welcome-form__img">
		<PopupVideo v-if="isPopup" :onClose="tooglePopup"/>
	</div>
</template>

<script>
import image from '~/assets/Home/welcomeForm.png'
import arrow from '~/assets/Home/arrow.svg'
import videoIcon from '~/assets/Home/videoIcon.svg'

import PopupVideo from './PopupVideo.vue'

export default {
	components: {
		PopupVideo
	},
	data() {
		return {
			image: image,
			arrow: arrow,
			videoIcon: videoIcon,
			isPopup: false,
			carNum: '',
			region: '',
			regNum: '',
			isSend: false,
			carNumFocus: false,
			regionFocus: false,
			regNumFocus: false
		}
	},
	watch: {
		carNumFocus() {
			console.log(this.carNumFocus);
		}
	},
	computed: {
		isValid() {
			if (this.carNum !== '' && this.region !== '' && this.regNum !== '') {
				console.log(true);
				return true
			}
			// console.log(false);

			return false
		},
		regNumValid() {
			if (this.regNumFocus) {
				return this.regNum !== ''
			}
			return true
		},
		carNumValid() {
			if (this.carNumFocus) {
				return this.carNum !== ''
			}
			return true
		},
		regionValid() {
			if (this.regionFocus) {
				return this.region !== ''
			}
			return true
		}
	},
	methods: {
		tooglePopup() {
			this.isPopup = !this.isPopup
		},
		sendData() {
			if (this.isValid) {
				let data = {
					carNum: this.carNum,
					region: this.region,
					regNum: this.regNum
				}
				console.log(data);

				this.isSend = true
			}
			
		}
	}
}
</script>

<style lang="scss">
	.welcome-form {
		width: 90%;
		max-width: 1135px;
		display: flex;
		flex-direction: row;
		margin-top: 79px;
		margin-bottom: 48px;
		justify-content: center;
		gap: 40px;

		&__img {
			width: 532px;
			height: 335px;
		}

		&__not {
			position: absolute;
			bottom: -14px;
			left: 10px;
			font-size: 12px;
			line-height: 12px;
			color: green;

			opacity: 0;
			transition: all 0.3s ease;

			&_visible {
				opacity: 1;
			}
		}

		&__content {
			display: flex;
			flex-direction: column;
			align-items: start;
			max-width: 563px;
		}

		&__title {
			font-weight: bold;
			font-size: 41px;
			margin: 0;
			margin-bottom: 25px;

		}

		&__form {
			display: flex;
			flex-direction: column;
			width: 100%;
			gap: 16px;
		}

		&__row {
			width: 100%;
			display: flex;
			align-items: center;
			gap: 30px;

			position: relative;

		}

		&__field {
			display: flex;
			flex-direction: column;
			align-items: start;
			width: 100%;

			&_car-number {
				width: 320px;
			}

			&_region {
				width: 213px;
			}
		}

		&__label {
			font-size: 12px;
			line-height: 14px;

			margin-bottom: 5px;
		}

		&__input {
			width: 100%;
			height: 40px;
			border: none;
			outline: none;
			border: solid 1px #BCBCBC;
			border-radius: 5px;

			box-sizing: border-box;
			padding: 10px;

			transition: all 0.3s ease;

			font-family: 'PT SANS';
			font-size: 16px;

			&_err {
				border: solid 1px red;
			}

			&:focus {
				border: solid 1px #0584FE;
			}
		}

		&__submit {
			background: #0584FE;
			border: none;
			color: white;
			padding: 0;

			font-size: 18px;
			line-height: 23px;
			width: 210px;
			height: 45px;

			border-radius: 7px;
			display: flex;
			align-items: center;
			justify-content: center;

			cursor: pointer;

			transition: all 0.3s ease;

			&:hover {
				// background: transparent;
				// border: solid 1px #0584FE;

				// color: #0584FE;
				
				background: rgb(0, 202, 0);


				img{
					color: white;
				}
			}

			&_blocked {
				background:rgb(157, 157, 157);
				cursor: default;

				&:hover {
					background:rgb(157, 157, 157);
					border: none;
					color: white;

				}
			}
		}

		&__arrow {
			margin-left: 4px;
			width: 14px;
		}

		&__video {
			border: none;
			border: solid 1px #0584FE;
			background: transparent;

			width: 258px;
			height: 45px;

			border-radius: 7px;

			display: flex;
			align-items: center;
			justify-content: center;

			font-size: 18px;
			line-height: 21px;
			cursor: pointer;

			transition: all 0.3s ease;


			

			&-icon {
				margin-right: 5px;
			}

			&-span {
				color: #1253A2;
				font-size: 15px;
				line-height: 23px;
				margin-left: 4px;
				transition: all 0.3s ease;

			}
			&:hover {
				// background: #0584FE;
				// color: white;

				background: #92caff;
				border: none;

			}
		}

		&__info {
			color: #8F8F8F;
			font-size: 13px;
		}
	}

	@media screen and (max-width: 1255px) {
		.welcome-form {
			&__img {
				width: 370px;
				height: 233px;
			}

			&__content {
				width: 433px;
			}
			&__title {
				font-size: 32px;
			}

			&__submit {
				font-size: 14px;
				line-height: 16px;
			}

			&__video {
				font-size: 14px;
				line-height: 16px;

				&-span {
					font-size: 12px;
					line-height: 14px;
				}

				&-icon {
					width: 27px;
					height: 19px;
				}
			}
		}
	}

	@media screen and (max-width: 900px) {
		.welcome-form {

			flex-direction: column-reverse;
			align-items: center;

		}
	}

	@media screen and (max-width: 460px) {
		.welcome-form {
			width: 100%;
			padding: 10px;
			box-sizing: border-box;

			margin-top: 49px;

			gap: 20px;

			&__img {
				width: 299px;
				height: 189px;
			}

			&__title {
				font-size: 26px;
				margin-bottom: 14px;
			}

			&__content {
				width: 100%;
			}

			&__form {
				gap: 14px;
			}

			&__row {
				flex-direction: column;
				gap: 14px;
				align-items: start;
			}

			&__field {

				&_car-number, &_region {
					width: 100%;
				}
			}

			&__submit {
				width: 100%;
			}

			&__video {
				width: 100%;
			}
		}
	}
</style>