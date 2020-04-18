<template>
  <Layout>
    <headerr/>
    <paints/>
    <categories/>
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
        Color
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
        Descripci_n
        pinturas{
          titulo
          descripcion
          fotos{
            url
          }
        }
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
import categories from '@/components/sections/paints/categories.vue';

export default {
  metaInfo: {
    title: 'Inicio',
  },
  components: {
    Headerr,
    paints,
    categories,
  },
};
</script>

<style lang="scss">
img{
  max-width:50%;
}
.home-links a {
  margin-right: 1rem;
}
</style>