<template>
	<header class="header">
		<div class="header__bg">
			<div class="header__content">
				<div class="header__nav">
					<NuxtLink to="/" class="header__link">
						<img :src="logo" alt="Compas" class="header__logo">
					</NuxtLink>
					<NuxtLink to="/tariff" class="header__link">Тарифы</NuxtLink>
					<NuxtLink to="/contacts" class="header__link">Контакты</NuxtLink>
				</div>
				<div class="header__auth">
					<p class="header__phone">+7 495 118-44-22</p>
					<button class="header__btn header__btn_log" @click="goToLog">Вход</button>
					<button class="header__btn header__btn_reg" @click="goToReg">Регистрация</button>
				</div>
			</div>

			<div class="header__content header__content_mobile">
				<div class="header__nav">
					<button class="header__btn_menu" @click="toogleMenu()"><img :src="menu" alt="menu"></button>
					<NuxtLink to="/" class="header__link">
						<img :src="logo" alt="Compas" class="header__logo">
					</NuxtLink>
					
				</div>
				<div class="header__auth">
					<p class="header__phone">+7 495 118-44-22</p>
					<button class="header__btn header__btn_log" @click="goToLog">Вход</button>
					<button class="header__btn header__btn_reg" @click="goToReg">Регистрация</button>
				</div>
			</div>
		</div>
		
		<div :class="`header__menu ${isMenu ? ' header__menu_open' : ''}`">
			<NuxtLink to="/tariff" class="header__link">Тарифы</NuxtLink>
			<div class="header__line"></div>
			<NuxtLink to="/contacts" class="header__link">Контакты</NuxtLink>
		</div>
	</header>
</template>

<script>
import logoImg from "~/assets/Header/logo.png"
import menu from '~/assets/Home/menu.png'

export default {
	data() {
		return {
			logo: logoImg,
			menu: menu,
			isMenu: false
		}
	},
	methods: {
		toogleMenu() {
			this.isMenu = !this.isMenu
		},
		goToReg() {
			this.$router.push({
				path: '/registration',
			})
		},
		goToLog() {
			this.$router.push({
				path: '/login',
			})
		}
	}
}
</script>

<style lang="scss">
	.header {
		
		width: 100%;
		height: 60px;
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;

		&__bg {
			background: linear-gradient(to right, #000000 30%, #1C2734 70%);
			width: 100%;
			height: 60px;
			display: flex;
			align-items: center;
			justify-content: center;
			z-index: 100;
		}

		&__menu {
			display: none;
			height: 0px;
		}


		&__content {
			width: 90%;
			max-width: 1161px;
			display: flex;
			align-items: center;
			justify-content: space-between;

			&_mobile {
				height: 0;
				display: none;
			}
		}

		&__nav {
			display: flex;
			align-items: center;

			gap: 30px;
		}

		&__logo {
			width: 119px;
			height: 26px;
		}

		&__link {
			color: white;
			font-size: 18px;
			text-decoration: none;
			line-height: 23px;

			
		}

		&__auth {
			display: flex;
			align-items: center;
			gap: 30px;
		}

		&__phone {
			color: white;
			font-weight: bold;
			font-size: 18px;

			margin: 0;
		}

		&__btn {
			cursor: pointer;

			&_log {
				background: transparent;
				border: none;
				color: white;
				font-size: 18px;
				padding: 0;
			}

			&_reg {
				background: #0584FE;
				border: none;
				color: white;
				font-size: 15px;

				width: 117px;
				height: 37px;

				display: flex;
				align-items: center;
				justify-content: center;

				border-radius: 7px;
			}
		}
	}

	@media screen and (max-width: 800px) {
		.header {

			&__nav {
				gap: 10px;
			}

			&__logo {
				width: 93px;
				height: 20px;
			}

			&__link {
				font-size: 14px;

				display: flex;
				align-items: center;
			}

			&__auth {
				gap: 10px;
			}

			&__phone {
				font-size: 14px;
			}

			&__btn {
				&_log {
					font-size: 14px;
				}

				&_reg {
					font-size: 14px;
				}
			}
		}
	}

	@media screen and (max-width: 600px) {
		.header {
			z-index: 40;
			

			&__content {
				height: 0;
				display: none;

				&_mobile {
					height: auto;
					display: flex;
					width: 100%;
					padding: 0 10px;
					box-sizing: border-box;
				}
			}

			&__link {
				color: #000000;
			}

			&__line {
				height: 0;
				width: 150px;
				border-bottom: solid 1px #EEEFF1;
			}

			&__btn_menu {
				background: transparent;
				border: none;
				outline: none;
				padding: 0;

				display: flex;
				align-items: center;

				cursor: pointer;
			}

			&__menu {
				z-index: 20;
				width: 210px;
				position: absolute;
				padding: 10px;
				box-sizing: border-box;
				bottom: 0;
				left: 0;
				background: white;
				transform: translate(0, 0);

				border-bottom: solid 1px #EEEFF1;
				border-right: solid 1px #EEEFF1;
				height: auto;

				display: flex;
				flex-direction: column;
				gap: 5px;

				transition: transform 0.4s ease;

				&_open {
					transform: translate(0, 100%);
				}
			}
			
		}
	}

	@media screen and (max-width: 450px) {
		.header {
			&__phone {
				display: none;
			}
		}
	}
</style>