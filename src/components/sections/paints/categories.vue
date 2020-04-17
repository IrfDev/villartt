<template>
<section class="section cuatro">
    <ul>
        <li
            v-for="categoria in $page.categorias.edges"
            :key="categoria.id"
            class="category"
        >
            <h5>
                {{categoria.node.titulo}}
            </h5>
            <img 
                :src="`http://localhost:1337/${categoria.node.foto.url}`"
                class="js-image"
                alt="Some image"
            >
        </li>
    </ul>
</section>
</template>

<script>
import gsap from 'gsap'

export default {
    name: 'Categories',
    mounted() {
		gsap.from('.category',{
			duration:1,
			opacity:0,
			scale:0,
            y:100,
            x:-500,
			ease: 'power1',
			stagger: {
				each:3,
			},
		})
	},
}
</script>

<style>

</style>