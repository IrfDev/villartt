<template>
  <Layout class="main-content">
    <new-header @clickHeader="scrollToPaints" />
    <div class="background-skew" />
    <paints class="mt-5 mb-5" />
    <observer @intersect="intersected" :id="'main-cta-observer'" />
    <categories class="mt-5" />
    <main-cta :class="{ 'd-none': !showCta }" />
    <instagram-horizontal />
    <artists />
    <the-footer />
  </Layout>
</template>

<page-query>

 
query {
  pinturas:allStrapiPinturas{
  edges{
      node{
        feature:Destacada
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
import paints from '@/components/sections/Paints.vue';
import categories from '@/components/sections/paints/categories.vue';
import Artists from '@/components/sections/Artists.vue';
import InstagramHorizontal from '@/components/sections/InstagramHorizontal.vue';
import TheFooter from '@/components/sections/TheFooter.vue';
import MainCta from '@/components/ui/MainCta.vue';
import observer from '@/components/utilities/observer';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger.js';
gsap.registerPlugin(ScrollTrigger);

export default {
  components: {
    NewHeader,
    paints,
    categories,
    InstagramHorizontal,
    Artists,
    MainCta,
    TheFooter,
    observer,
  },

  data() {
    return {
      showCta: false,
    };
  },

  mounted() {
    this.startAnimation();
  },

  methods: {
    intersected() {
      this.showCta = true;
    },

    startAnimation() {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.main-content',
          start: 'top top',
          end: '15% top',
          // end: 'bottom top',
          scrub: true,
        },
      });

      tl.fromTo(
        '.background-skew',
        {
          duration: 3,
          skewY: 4,
        },
        {
          skewY: 0,
        }
      );

      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: '#oddPaint',
          start: 'top bottom',
          end: 'bottom center',

          scrub: true,
        },
      });

      tl2
        .fromTo(
          '#oddPaint .odd-paint-pic-0',
          {
            duration: 0.3,
            top: 50,
          },
          {
            top: '-50',
          },
          0
        )
        .fromTo(
          '#oddPaint .odd-paint-pic-1',
          {
            duration: 3,
            top: '-50',
          },
          {
            top: 50,
          },
          0
        );

      const tl3 = gsap.timeline({
        scrollTrigger: {
          trigger: '#evenPaint',
          start: 'top bottom',
          end: 'bottom center',

          scrub: true,
        },
      });

      tl3
        .fromTo(
          '#evenPaint #even-paint-pic-1',
          {
            duration: 3,
            top: 30,
          },
          {
            top: '-30',
          },
          0
        )
        .fromTo(
          '#evenPaint #even-paint-pic-0',
          {
            duration: 3,
            top: '-50',
          },
          {
            top: 50,
          },
          0
        );

      const tlC = gsap.timeline({
        scrollTrigger: {
          trigger: '#categories-section',
          start: 'top bottom',
          end: 'bottom bottom',
          scrub: true,
        },
      });

      tlC.from('#categories-section .category', {
        duration: 0.3,
        opacity: 0,
        filter: 'blur(10px) grayscale(100%)',
        scale: 0.6,
        y: 50,
        x: -10,
        ease: 'back',
        stagger: {
          each: 0.3,
          from: 'random',
        },
      });

      const tlArtists = gsap.timeline({
        scrollTrigger: {
          trigger: '#artists',
          start: '30% bottom',
          end: 'bottom bottom',
          scrub: true,
        },
      });

      tlArtists
        .from(
          '#artists h2',
          {
            duration: 0.5,
            rotate: '178deg',
          },
          0
        )
        .from(
          '#artists .artist-card .card',
          {
            duration: 1,
            opacity: 0.8,
            transform: 'translateY(-5em)',
            filter: 'blur(5px) grayscale(100%)',
            ease: 'ease-in',
            stagger: {
              each: 0.2,
            },
          },
          0
        )
        .from('#artists .artist-card .card .circles', {
          duration: 1,
          filter: 'hue-rotate(10deg)',
          borderRadius: '15%',
          ease: 'ease-in',
          stagger: {
            each: 0.2,
          },
        });
    },

    scrollToPaints() {
      let el = this.$el.getElementsByClassName('paint-structure')[0];
      el.scrollIntoView({ behavior: 'smooth' });
    },
  },

  metaInfo() {
    return {
      title: '👩🏻‍🎨 Inicio',

      meta: [
        { name: 'theme-color', content: '#F250AB' },
        { key: 'og:type', property: 'og:type', content: 'website' },
        {
          key: 'og:image',
          property: 'og:image',
          content: 'https://villartt.me/og-image.jpg',
        },
        {
          key: 'og:title',
          property: 'og:title',
          content: 'Villartt - Arte en la Ciudad de México',
        },
        {
          key: 'og:description',
          name: 'og:description',
          content:
            'Artistas en la Ciudad de México, convertimos tu idea en arte. ¡Mándanos un mensaje con tu idea y la convertiremos en arte! Pedidos disponibles',
        },
        { key: 'og:url', property: 'og:url', content: 'https://villartt.me' },
        {
          key: 'twitter:title',
          property: 'twitter:title',
          content: 'Villartt - Arte en la Ciudad de México',
        },
        {
          key: 'twitter:image',
          property: 'twitter:image',
          content: 'https://villartt.me/og-image.jpg',
        },
        {
          key: 'twitter:description',
          name: 'twitter:description',
          content:
            'Artistas en la Ciudad de México, convertimos tu idea en arte. ¡Mándanos un mensaje con tu idea y la convertiremos en arte! Pedidos disponibles',
        },

        {
          key: 'twitter:card',
          property: 'twitter:card',
          content: 'summary_large_image',
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.background-skew {
  position: absolute;
  right: 0;
  left: 0;
  width: 100%;
  height: 10%;
  background-color: white;
  @media screen and (min-width: 800px) {
    height: 15%;
  }
  transform-origin: top right;
}

@keyframes skweIntro {
  to {
    transform: skewY(3deg);
  }
}

:root {
  --alfa-color: #e50092;
  --alfa-color-200: #fcd9ed;
  --box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.3),
    0px 4px 20px rgba(246, 132, 196, 0.3);

  --base-font-size: 1.8em;
  --type-scale: 1.15;

  --scale-ctas: 2;
  --paragraphs: calc((var(--base-font-size) * 1.3) * var(--type-scale));
  --ctas: calc((var(--base-font-size) * var(--scale-ctas)) * var(--type-scale));
  --h5: calc(var(--base-font-size) * var(--type-scale));
  --h4: calc(var(--h5) * var(--type-scale));
  --h3: calc(var(--h4) * var(--type-scale));
  --h2: calc(var(--h3) * var(--type-scale));
  --h1: calc(var(--h2) * var(--type-scale));
}

.typo-font-size {
  font-size: calc(var(--base-font-size) * 4.5) !important;
}

.typo-subtitle {
  font-size: calc(var(--base-font-size) * 0.6) !important;
  font-family: Montserrat !important;
}

.typo-font-size.title {
  font-size: calc((var(--base-font-size) * 6) * var(--type-scale));
}

p {
  font-size: calc(var(--base-font-size) * 0.3);
}
button {
  font-size: var(--ctas);
}

h1 {
  margin-top: 0;
  font-size: var(--h1);
}

h2 {
  font-size: calc(var(--h2) * 1.25);
}

h3 {
  font-size: var(--h3);
}

h4 {
  font-size: var(--h4);
}

h5 {
  font-size: var(--h5);
}

@media (min-width: 480px) {
  :root {
    --base-font-size: 4.5em;
  }
}

@media (min-width: 768px) {
  :root {
    --base-font-size: 4.5em;
  }
}

@media (min-width: 1200px) {
  :root {
    --base-font-size: 4.8em;
    --scale-ctas: 1.7;
  }
}

h2 {
  font-family: Rockness;
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
