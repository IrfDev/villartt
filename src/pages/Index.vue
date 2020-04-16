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
  users:allStrapiUsers (filter: { role: {name: {eq:"Villas"} }}){
    edges{
      node{
        username
        imagen{
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
    title: 'Inicio',
  },
  components: {
    Headerr,
    paints
  },

};
</script>

<style lang="scss">
html{
  background-color: #E9BEC9!important;
}
img{
  max-width:50%;
}
.home-links a {
  margin-right: 1rem;
}
</style>
