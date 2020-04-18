<template>
<Intersect @enter="helloThere" @leave="goodByeThere">
 <div class="
        mt-3
        main-paint
        row
        d-flex
    ">
        <div class="
            text
            col-md-2
            col-12
            order-md-1
            order-3
            text-center
            text-md-right
            align-self-center
        ">
          <p>
            {{descripcion}}.<br>
                Vendido a 
            <b
                :style="`color: ${Color}`"
            >
                @{{cliente}}.<br>
            </b>
            <i>
                {{fecha}}
            </i>
        </p>
        </div>
            <div class="
                paint
                order-md-2
                order-2
                col-md-9
                col-12
            ">
                <img 
                    v-for="(foto, fotoIndex) in fotos"
                    :key="fotoIndex"
                    :src="`http://localhost:1337/${foto.url}`" 
                    class="js-image"
                    alt="Some image"
                >
            </div>
            <div class="meta col-md-1 col-12 order-md-3 order-1">
                <h3 class="subtitle">~{{categoria.titulo}}</h3>
                <h2
                    class="title"
                    :style="`color: ${Color}`"
                >
                    -{{titulo}}
                </h2>
            </div>
    </div>
</Intersect>
</template>

<script>
import {TimelineMax} from 'gsap'
import Intersect from 'vue-intersect'

export default {
    name: 'EvenPaint',
    components: {
        Intersect
    },
    props: {
        titulo:String,
        cliente:String,
        Artista: [String, Object],
        fecha:[Date, String],
        fotos:[Object,Array],
        descripcion:String,
        categoria:Object,
        Color:[String, null,Number]
    },
     methods: {
        //  helloThere(){
        //      var tl = new TimelineMax;
     
        //      tl.fromTo('.paint img', 1, {x:-200,opacity:0,},{x:0,opacity:1})
        //  },
        //  goodByeThere(){
        //      var tl = new TimelineMax;
     
        //      tl.fromTo('.paint img', .5, {x:0,opacity:1},{x:-200,opacity:0})
        //  },
    },
};
</script>

<style lang='scss' scoped>
@media screen and (max-width: 768px) {
    .main-paint{
    margin:30vh 0vh;
    .meta{
        transform:none!important;
        text-align:center;
    }
    img{
        position:absolute;
    }
    img:nth-of-type(1){
        min-width:70vw!important;
        left:25%!important;
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
        .meta{
            .title{
                font-size:2.5em!important;
            }
            .subtitle{
                font-size:1em!important;
            }
        }
    }
}
img{
    border-radius:8px!important;
    max-width: 50vh;
}
.main-paint{
    margin:50vh 0vh;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    .meta{
    transform-origin: 0 0;
    transform: rotate(90deg);
    white-space: nowrap;
    right: -7%;
    // bottom: -100px;
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
        left: 15%;
        max-width:60vw!important;
        box-shadow: 5px 4px 30px rgba(0, 0, 0, 0.289);
    }
    img:nth-of-type(2){
        bottom: 0%;
        left: 0%;
        top: 23%;
        max-width: 35vw !important;
    }
}
</style>