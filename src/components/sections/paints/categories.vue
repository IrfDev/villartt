<template>
<div>

    <h1
        class="text-center"
    >
        Categorías
    </h1>
    <div
        class="
            row
            align-center
            text-center
        "
    >
        <div
            v-for="categoria in $page.categorias.edges"
            :key="categoria.id"
            class="category col mt-3 mb-3"
            @click="activeCategory(categoria.node)"
        >
            <h5
            >
                {{categoria.node.titulo}}
            </h5>
            <div 
                class="category-wrapper"
                :class="{ active: active }"
                :style="`background-image: url(http://localhost:1337${categoria.node.foto.url}`"
            />
        </div>
    </div>
    <transition
        @enter="enter"
    >
    <div 
        class="container-fluid"
        v-if="active"
    >
            <h1
                class="text-center title"
            >
                {{categoryTitle}}
            </h1>
            <p
                class="text-center"
            >
                🎨 {{categoryDescription}}
            </p>
    <div
        class="paints row mt-3"
    >
        <div
            class="ind-paint col-md-3 col-6 mt-3"
            v-for="(paint, paintIndex) in categoryPaints"
            :key="paintIndex"
        >
            <paint
                class="actual-paint"
                v-bind="paint"
            /> 
        </div>
    </div>
</div>
</transition>
</div>
</template>

<script>
import gsap,{TimelineMax} from 'gsap';
import paint from '@/components/ui/paint';

export default {
    name: 'Categories',
    components:{
        paint,
    },
    mounted() {
		gsap.from('.category',{
			duration:1,
			opacity:0,
			scale:0,
            y:100,
            x:-500,
			ease: 'power1',
			stagger: {
                each:.3,
                from:'end'
			},
        });
        
		
    },
    data() {
           return {
               active:false,
               categoryPaints:[],
               categoryTitle:'',
               categoryDescription:''
           };
    },
    methods:{
        activeCategory({titulo, pinturas, Descripci_n}){
            if (this.active!==true) {
                this.active=true;
                this.categoryPaints=pinturas;
                this.categoryTitle=titulo;
                this.categoryDescription=Descripci_n;
            } else {
                this.categoryTitle=titulo;
                this.categoryDescription=Descripci_n;
                this.categoryPaints=pinturas;
                gsap.from('.ind-paint',{
                    duration:.5,
                    opacity:0,
                    scale:0.1,
                    y:100,
                    ease: 'power1',
                    stagger: {
                        each:.1,
                        from: 'center',
                    },
                });
            }
        },
        enter(){
            gsap.from('.ind-paint',{
                duration:.5,
                opacity:0,
                scale:0.1,
                y:100,
                ease: 'power1.in',
                stagger: {
                    each:.1,
                    from: 'center',
                },
            });
        }
    },
};
</script>

<style lang='scss' scoped>
.title{
    font-size:4em;
    font-weight: 400;
}
p{
    font-family: 'Courier New', Courier, monospace;
}
.category-wrapper{
    padding:70% 10%;
    border-radius:8px;
    background-attachment: fixed;
    background-size: cover;
    transition:.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
.active{
    padding:20% 10%;
    transition:.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
h1{
    font-family: Montserrat;
    font-size:5em;
    color:333;
    font-weight: bolder;
}
h5{
    font-family: 'Courier New';
    font-size: 1.5em;
}
.row{
    margin:0;
    text-align:center;
}
img{
    border-radius:8px;
    box-shadow: 5px 4px 30px rgba(0, 0, 0, 0.104);
}
</style>