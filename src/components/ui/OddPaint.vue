<template>
  <section class="section dos">
                <div class="dos__foreground">
                    <div class="meta">
                        <h3 class="meta__subtitle">~{{categoria.titulo}}</h3>
                        <h2 class="meta__title">-{{titulo}}</h2>
                    </div>
                    <div class="dos__foreground-image">
                        <img 
                            :src="`http://localhost:1337/${fotos.url}`" 
                            alt="Some image"
                        >
                    </div>
                </div>
                <div class="dos__background">
                    <div class="dos__background-image">
                        <img 
                            :src="`http://localhost:1337/${fotos.url}`" 
                            class="js-image"
                            alt="Some image"
                        >
                    </div>
                    <div class="dos__text">
                        <p>
                            {{descripcion}}.<br>
                            Vendido a {{cliente}}.<br>
                            {{fecha}}
                        </p>
                    </div>
                </div>
            </section>
</template>

<script>
export default {
    name: 'OddPaint',
    props: {
        titulo:String,
        cliente:String,
        Artista: String,
        fecha:Date,
        fotos:Object,
        descripcion:String,
        categoria:Object,
    }
}
</script>

<style lang='scss' scoped>

.dos {
	margin: 100px 50px;
	position: relative;
}

.dos img {
	max-width: 100%;
	display: block;
	width: 100%;
}

.dos__foreground {
	width: 40%;
	position: relative;
	padding-left: 6em;
}

.dos__background {
	text-align: right;
	margin-left: 30%;
	position: relative;
	margin-top: -14vh;
}

.dos__text {
	position: absolute;
	bottom: 0;
	width: 40%;
	right: calc(100% + 1em);
}

.dos .meta {
	position: absolute;
	left: 0;
	/*right: 0;*/
	/*left: auto;*/
	top: 100%;
	transform: rotate(-90deg);
	transform-origin: 0 0;

}
</style>