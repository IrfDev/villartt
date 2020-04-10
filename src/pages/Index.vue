<template>
  <Layout>
    <headerr/>
    <paints/>
  </Layout>
</template>

<page-query>
query {
  pinturas:allStrapiPinturas{
  edges{
      node{
        categoria{
          titulo
          foto{
            url
          }
        }
        id
        cliente
        titulo
        descripcion
        Artista{
          username
        }
        fecha
        fotos{
          url
        }
      }
    } 
  }
  categorias:allStrapiCategorias{
    edges{
      node{
        titulo
        foto{
          url
        }
      } 
    }
  }
}

</page-query>

<script>
import Headerr from '@/components/sections/Header.vue';
import paints from '@/components/sections/Paints.vue';

export default {
  metaInfo: {
    title: 'Villartt',
  },
  components: {
    Headerr,
    paints
  },
};
</script>

<style lang="scss">
html{
  background-color: #DDE8EB;
}
img{
  max-width:50%;
}
.home-links a {
  margin-right: 1rem;
}
</style>
