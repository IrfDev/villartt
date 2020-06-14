<template>
  <Layout>
    <new-header/>
    <paints/>
    <categories/>
    <artists/>
  </Layout>
</template>

<page-query>
query {
  pinturas:allStrapiPinturas{
  edges{
      node{
        categorias{
          titulo
          foto{
            url
          }
        }
        cliente
        Color
        titulo
        descripcion
        user{
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
  users:allStrapiUsers{
    edges{
      node{
        username
        about
        imagen{
          url
        }
      }
    }
  }
}

</page-query>

<script>
import NewHeader from '@/components/sections/NewHeader.vue';
// import Headerr from '@/components/sections/Header.vue';
import paints from '@/components/sections/Paints.vue';
import categories from '@/components/sections/paints/categories.vue';
import Artists from '@/components/sections/Artists.vue';

export default {
  metaInfo: {
    title: '👩🏻‍🎨 Inicio',
  },
  components: {
    NewHeader,
    paints,
    categories,
    Artists,
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