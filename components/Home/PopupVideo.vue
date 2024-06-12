<template>
	<div class="popup-video">
		<div class="popup-video__content">

			<button class="popup-video__close" @click="onClose">
				<img :src="close" alt="close">
			</button>
			<vue-plyr>
				<div class="plyr__video-embed">
					<iframe
					src="https://www.youtube.com/embed/k6YAE-wLtzk?si=FGH3HTkHSto0Olng"
					allowfullscreen
					allowtransparency
					></iframe>
				</div>
			</vue-plyr>
		</div>
		<div class="popup-video__bg"></div>
	</div>
</template>

<script>
import closeIcon from '~/assets/Home/close.svg'
export default {
	setup() {
		
	},
	data() {
		return {
			close: closeIcon
		}
	},
	props: {
		onClose: Function
	}
}
</script>

<style lang="scss">
	.plyr__video-embed {
		iframe {
			width: 100%;
			height: 100%;
		}
	}
	.popup-video {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;

		z-index: 1000000;

		

		&__bg {
			width: 100%;
			height: 100%;

			background: #0000006f;
		}

		&__content {
			width: 900px;
			height: 555px;
			background: white;

			position: absolute;
			top: 50%;
			left: 50%;

			transform: translate(-50%, -50%)
		}

		&__close {
			position: absolute;
			top: 0;
			right: 0;
			transform: translate(100%, -100%);

			background: transparent;
			border: none;
			outline: none;
			padding: 0;

			cursor: pointer;
			
		}
	}

	@media screen and (max-width: 1100px) {
		.popup-video {
			&__content {
				width: 675px;
				height: 390px;
			}
		}
	}

	@media screen and (max-width: 776px) {
		.popup-video {
			&__content {
				width: 429px;
				height: 248px;
			}

			&__close {
				img {
					width: 20px;
					height: 20px;
				}
			}
		}
	}

	@media screen and (max-width: 503px) {
		.popup-video {
			&__content {
				width: 317px;
				height: 183px;
			}
		}
	}
</style>