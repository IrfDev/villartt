<template>
    <div
        class="
        main-paint
        row"
        :id="`odd-paint-${id}`"
    >
            <div
                class="
                    meta
                    col-md-1
                    col-12
                    order-md-1
                    order-2
                "
            >
                <h3 class="subtitle">~{{categoria.titulo}}</h3>
                <h2
                    class="title"
                    :style="`color: ${Color}`"
                >
                    -{{titulo}}
                </h2>
            </div>
            <div class="
                paint
                col-9
                order-md-2
                order-1
                col-md-9
                col-12
            ">
                <img 
                    v-for="(foto, fotoIndex) in fotos"
                    :key="fotoIndex"
                    :src="`http://localhost:1337/${foto.url}`" 
                    :class="`odd-paint-pic-${fotoIndex}`"
                    alt="Some image"
                >
            </div>
            <div class="
                text
                col-12
                col-md-2
                order-md-3
                order-3
                text-center
                text-md-left
            ">
                <p>
                    {{descripcion}}.
                    Vendido a 
                    <b
                        :style="`color: ${Color}`"
                    >
                        @{{cliente}}.<br>
                    </b>
                    {{fecha}}
                </p>
        </div>
        <observer
            @intersect="intersected"
            v-bind="options"
        />
    </div>
</template>

<script>
import observer from '@/components/utilities/observer';
import Intersect from 'vue-intersect'

import gsap from 'gsap'
let masterTL= gsap.timeline()

export default {
    name: 'OddPaint',
    components: {
        Intersect,
        observer
    },
    props:{
       titulo:String,
        cliente:String,
        Artista: [String, Object],
        fecha:[Date, String],
        fotos:[Object,Array],
        descripcion:String,
        categoria:Object,
        Color:[String, Number],
        id:[Number,String]
    },
    data() {
        return {
            options:{
                   threshold:1,
               }
        }
    }, 
    methods: {
        intersected() {
            masterTL.add(this.paintsTL())
            masterTL.add(this.metaTL())
            masterTL.play()
        },
        metaTL() {
            let tl = gsap.timeline()
             tl.fromTo(`#odd-paint-${this.id} .meta`,1,{
                opacity:0, 
                scale:0, 
                x:0, 
            }, { 
                opacity:1, 
                scale:1, 
                x:0, 
                ease: 'circ',
            },'<');
        },
        paintsTL() {
            let tl = gsap.timeline()
            tl.fromTo(`#odd-paint-${this.id} .odd-paint-pic-0`,1,{
                x:300, 
                y:200,
                scale:.5,
            }, { 
                scale:1,
                x:0,
                y:0,
                ease: 'slow',
                zIndex:0,
            },'<');

            tl.fromTo(`#odd-paint-${this.id} .odd-paint-pic-1`,1,{
               scale:2,
                x:-270, 
                y:-250,
            }, {
                scale:1,
                x:0,
                y:0,
                ease: 'circ',
            },'<');
        },
    },
};
</script>

<style lang='scss' scoped>
@media screen and (max-width: 768px) {
    .main-paint{
    .meta{
        transform:none!important;
        text-align:center;
    }
    img{
        position:absolute
    }
    img:nth-of-type(1){
        min-width:70vw!important;
    }
    img:nth-of-type(2){
        min-width: 45vw !important;
    }
    .text{
        font-size:1em!important;
    }
    }
}
@media screen and (max-width: 900px) {
    .main-paint{
        margin:20vh 0vh!important;
        .meta{
            top:10%!important;
            .title{
                font-size:2.5em!important;
            }
            .subtitle{
                font-size:1em!important;
            }
        }
    }
}
.main-paint{
    margin:40vh 0vh;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    .meta{
        left:200;
        scale:0;
        opacity:0;
        transform-origin: 0 0;
        transform: rotate(-90deg);
        white-space: nowrap;
        top:300px;
        .subtitle{
            font-family: 'Courier New';
        }
        .title{
            font-family: Montserrat;
            font-weight: 800;
            font-size:3.5em;
        }
    }
    .text{
        font-family: 'Courier New';
        font-size: 1.5em;
    }
    img{
        position: absolute;
        border-radius:8px;
    }
    img:nth-of-type(1){
        position: relative;
        bottom: 30%;
        max-width:60vw!important;
        box-shadow: 5px 4px 30px rgba(0, 0, 0, 0.289);
    }
    img:nth-of-type(2){
        bottom:0%;
        right:0%;
        max-width:35vw!important;
    }
}
</style>