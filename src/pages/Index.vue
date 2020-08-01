<template>
  <Layout>
    <new-header />
    <paints />
    <categories />
    <instagram-horizontal />
    <artists />
  </Layout>
</template>

<page-query>

 
query {
   instagramPosts:allInstagramPhoto(limit:6) {
    edges {
      node {
        display_url
        edge_media_to_caption {
          edges {
            node {
              text
            }
          }
        }
      }
    }
  }
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
import InstagramHorizontal from '@/components/sections/InstagramHorizontal.vue';

export default {
  metaInfo: {
    title: '👩🏻‍🎨 Inicio',
  },
  components: {
    NewHeader,
    paints,
    categories,
    InstagramHorizontal,
    Artists,
  },
};
</script>

<style lang="scss">
:root {
  --alfa-color: #e50092;
  --alfa-color-200: #fcd9ed;
  --box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.3), 0px 4px 20px #f684c4;
}

h2 {
  font-family: Rockness;
  font-size: 10em;
  color: var(--alfa-color);
  text-align: center;
}
img {
  max-width: 50%;
  box-shadow: var(--box-shadow);
}
.home-links a {
  margin-right: 1rem;
}
</style>
