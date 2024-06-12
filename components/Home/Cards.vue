<template>
	<div class="cards">
		<h3 class="cards__title">Плюсы использования сервиса «Компас» для анализа штрафов
</h3>
		<div class="cards__content">
			<div class="card">
				<img :src="plus1" alt="infinity" class="card__img">
				<div class="card__content">
					<h4 class="card__title">Неограниченый автопарк</h4>
					<p class="card__text">Можно добавить неограниченное кол-во машин и водителей</p>
				</div>
			</div>

			<div class="card">
				<img :src="plus2" alt="map" class="card__img">
				<div class="card__content">
					<h4 class="card__title">Сокращение затрат до 50%</h4>
					<p class="card__text">Максимально быстро узнаете о штрафах в автоматическом режиме, тем самым у вас есть время оплатить по скидке</p>
				</div>
			</div>

			<div class="card">
				<img :src="plus3" alt="shield" class="card__img">
				<div class="card__content">
					<h4 class="card__title">Безопасность</h4>
					<p class="card__text">Данные передаются в зашифрованном виде, они доступны только получателю</p>
				</div>
			</div>

			<div class="card">
				<img :src="plus4" alt="notification" class="card__img">
				<div class="card__content">
					<h4 class="card__title">Уведомление о погашении</h4>
					<p class="card__text">Мы оповестим вас о том, что штраф был погашен и соответствующая запись создана в ГИС ГМП</p>
				</div>
			</div>

			<div class="card">
				<img :src="plus5" alt="receipt" class="card__img">
				<div class="card__content">
					<h4 class="card__title">Квитанция об оплате</h4>
					<p class="card__text">После совершения оплаты банковской картой на Вашу электронную почту придет квитанция об успешной оплате.</p>
				</div>
			</div>

			<div class="card">
				<img :src="plus6" alt="time" class="card__img">
				<div class="card__content">
					<h4 class="card__title">Все история сохраняется по каждой машине</h4>
					<p class="card__text">Вся история штрафов сохраняется по машине и водителю, позволяет анализировать статистику по штрафам</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import plus1 from '~/assets/Home/plus1.png'
import plus2 from '~/assets/Home/plus2.png'
import plus3 from '~/assets/Home/plus3.png'
import plus4 from '~/assets/Home/plus4.png'
import plus5 from '~/assets/Home/plus5.png'
import plus6 from '~/assets/Home/plus6.png'

export default {
	data(){
		return {
			plus1: plus1,
			plus2: plus2,
			plus3: plus3,
			plus4: plus4,
			plus5: plus5,
			plus6: plus6,
		}
	},
	setup() {
		
	},
}
</script>

<style lang="scss">
	.cards {
		max-width: 1156px;
		width: 80%;
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 50px;
		margin-bottom: 35px;

		&__title {
			font-weight: bold;
			font-size: 34px;
			line-height: 44px;
			text-align: center;

			margin: 0;
			margin-bottom: 33px;
		}

		&__content {
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: center;
			gap: 35px;

			flex-wrap: wrap;

		}
	}

	.card {
		width: 362px;
		height: 151px;

		border: solid 1px #EEEFF1;
		border-radius: 10px;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 20px;

		&__content {
			width: 248px;

		}

		&__title {
			color: #1253A2;
			font-size: 18px;
			line-height: 22px;
			margin: 0;
			margin-bottom: 10px;
		}

		&__text {
			font-size: 15px;
			line-height: 18px;

			margin: 0;
		}
	}

	@media screen and (max-width: 970px) {
		.cards {
			width: 90%;
		}
	}

	@media screen and (max-width: 970px) {
		.cards {
			margin-top: 15px;
			margin-bottom: 20px;

			&__content {
				gap: 15px;
			}

			&__title {
				font-size: 28px;
				line-height: 36px;
				margin-bottom: 27px;
			}
		}
		.card {
			width: 310px;
			height: 130px;
			padding: 15px;

			&__context {
				width: 206px;
			}

			&__img {
				transform: scale(0.75);
			}

			&__title {
				font-size: 16px;
				line-height: 18px;
				margin-bottom: 6px;
			}

			&__text {
				font-size: 13px;
				line-height: 15px;
			}
		}
	}
</style>