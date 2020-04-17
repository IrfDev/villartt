<template>
<div data-scroll>
		<div 
			v-for="(edge, edgeInedex) in $page.pinturas.edges" 
			:key="edgeInedex"
			class="
			
				paint-structure
				d-flex
				flex-column
				justify-content-between
			"
		>
			<odd-paint
				v-if="edgeInedex % 2 === 0"
				v-bind="edge.node"
			/>
			<even-paint
				v-else
				v-bind="edge.node"
			/>
		</div>
	<categories/>
</div>
</template>

<script>
import OddPaint from '@/components/ui/OddPaint.vue';
import EvenPaint from '@/components/ui/EvenPaint.vue';
import intro from '@/components/sections/paints/intro.vue';
import categories from '@/components/sections/paints/categories.vue';

import gsap from 'gsap'

export default {
    name: 'paints', 
    components: {
        OddPaint,
        EvenPaint,
        intro,
        categories,
	},
	mounted() {
		gsap.from('.paint-structure',{
			duration:0.5,
			opacity:0,
			scale:0,
			y:200,
			ease: 'power1',
			stagger: {
				each:0.2,
			},
		})
	},
};
</script>

<style lang='scss'>

</style>