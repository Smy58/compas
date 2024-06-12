<template>
	<div class="slider" id="docs">
		<h3 class="slider__title">Документы</h3>
		<div class="slider__box">
			<button @click="onNext()" class="slider__btn slider__btn_next"><img :src="next" alt="next"></button>
			<button @click="onPrev()" class="slider__btn slider__btn_prev"><img :src="prev" alt="prev"></button>

			<swiper
			:modules="modules"
			:loop="true"
			:pagination="{ clickable: true }"
			:breakpoints="{
				320: {
					slidesPerView: 1,
					spaceBetween: 20
				},
				776: {
					slidesPerView: 2,
					spaceBetween: 20
				},
				1170: {
					slidesPerView: 3,
					spaceBetween: 35
				},
			}"
			@swiper="onSwiper"
			@slideChange="onSlideChange"
		>
			
			<swiper-slide v-for="item in cards" :key="item">
				<SliderCard :item="item"></SliderCard>
			</swiper-slide>
			
		</swiper>
		</div>
		
		
	</div>
</template>

<script>
import SliderCard from './SliderCard.vue';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import next from '~/assets/Home/next.png'
import prev from '~/assets/Home/prev.png'

import docData from '~/api/docData'


export default {
	components:{
		SliderCard,
		Swiper,
		SwiperSlide,
	},
	data(){
		return {
			cards: docData.cardsData,
			next: next,
			prev: prev,
		}
	},
	methods: {
		onNext() {
			const swiper = document.querySelector(".swiper").swiper;
			swiper.slideNext();
		},
		onPrev() {
			const swiper = document.querySelector(".swiper").swiper;
			swiper.slidePrev();
		},
	},
	setup() {
		const onSwiper = (swiper) => {
			// console.log(swiper);
		};
		const onSlideChange = () => {
			// console.log('slide change');
		};
		return {
			onSwiper,
			onSlideChange,
			modules: [Navigation, Pagination, Scrollbar, A11y],
		};

	},
}
</script>

<style lang="scss">
	.swiper {
		padding: 15px !important;
		height: 470px;

		&-slide {
			display: flex;
			justify-content: center
		}
	}

	.slider {
		max-width: 1172px;
		width: 80%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;

		margin-top: 50px;
		margin-bottom: 70px;

		&__btn {
			background: transparent;
			border: none;
			padding: 0;
			outline: none;
			position: absolute;
			top: 50%;
			transform: translateY(-50%);
			z-index: 100;
			cursor: pointer;

			&_next {
				right: 0;
			}

			&_prev {
				left: 0;
			}
		}

		&__title {
			font-weight: bold;
			font-size: 34px;
			line-height: 44px;

			margin: 0;
			margin-bottom: 40px;
		}

		&__box {
			width: 100%;
			padding: 0 12px;
			box-sizing: border-box;
			position: relative;
		}

		&__content {
			display: flex;
			flex-direction: row;
			gap: 35px;
		}
	}

	@media screen and (max-width: 1440px) {
		.swiper {
			height: 380px;
		}
	}

	@media screen and (max-width: 1169px) {
		.swiper {
			height: 470px;
		}
	}

	@media screen and (max-width: 970px) {
		.swiper {
			height: 380px;
		}
		.slider {
			margin-top: 25px;
		}
	}

	@media screen and (max-width: 775px) {
		.swiper {
			height: 470px;
		}
		.slider {
			&__title {
				margin-bottom: 20px;
			}
		}
	}

	@media screen and (max-width: 520px) {
		.swiper {
			height: 380px;
		}
	}
</style>