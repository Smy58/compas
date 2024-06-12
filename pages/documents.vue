<template>
	<div class="document-page">
		<div class="document-page__content">
			<Path />
			<Document :title="docData.title" :articles="docData.articles"/>
		</div>
	</div>
</template>

<script>
import Document from '../components/Documents/Document.vue';
import Path from '../components/Documents/Path.vue';

export default {
	setup() {
		
	},
	components: {
		Path,
		Document
	},
	data() {
		return {
			docData: {}
		}
	},
	beforeMount() {
		this.docData = JSON.parse(this.$route.query.docData)
	}
}
</script>

<style lang="scss">
	.document-page {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;

		&__content {
			max-width: 1164px;
			width: 90%;

		}
	}
</style>