// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	plugins: [
		{ src: '~/plugins/vue-plyr', mode: 'client' }
	],
	css: ["~/node_modules/vue-plyr/dist/vue-plyr.css"],
	app: {
		baseURL: '/compas/',
		buildAssetsDir: 'assets'
	}

})
