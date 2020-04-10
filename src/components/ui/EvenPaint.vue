<template>
  <section class="section tres">
                <div class="tres__foreground">
                    <div class="tres__foreground-image">
                         <img 
                            :src="`http://localhost:1337/${fotos.url}`" 
                            class="js-image"
                            alt="Some image"
                        >
                    </div>
                    <div class="meta">
                        <h3 class="meta__subtitle">~{{categoria.titulo}}</h3>
                        <h2 class="meta__title">-{{titulo}}</h2>
                    </div>
                </div>
                <div class="tres__background">
                    <div class="tres__background-image">
                         <img 
                            :src="`http://localhost:1337/${fotos.url}`" 
                            class="js-image"
                            alt="Some image"
                        >
                    </div>
                    <div class="tres__text">
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
    name: 'EvenPaint',
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

<style>

</style>