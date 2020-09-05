// This is the first page
<template>
  <div id="oddPaint" ref="oddPaint" class="main-paint row d-flex m-0 justify-content-center">
    <div class="meta col-lg-1 col-12 order-lg-1 order-2">
      <h4 class="subtitle text-center mt-lg-0 mt-3">
        ~ Pintada por
        <span class="artist-name">{{ user.username }}</span>
        👩🏻‍🎨
      </h4>
      <h2 class="title">-{{ titulo }}</h2>
    </div>
    <div class="paint order-md-2 order-1 col-md-11 col-12 d-flex">
      <img
        v-for="(foto, fotoIndex) in fotos"
        :key="fotoIndex"
        class="d-none d-lg-block img-fluid"
        :src="`https://admin.villartt.me${foto.url}`"
        :class="`odd-paint-pic-${fotoIndex}`"
        :alt="`Villartt pintura ${titulo}`"
      />
      <paint-show :titulo="`odd-paint`" :fotos="fotos" class="align-self-center d-lg-none d-flex" />
    </div>
  </div>
</template>

<script>
import PaintShow from '@/components/sections/paints/PaintShow';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger.js';
gsap.registerPlugin(ScrollTrigger);

export default {
  name: 'OddPaint',

  components: {
    PaintShow,
  },

  props: {
    id: String,
    titulo: String,
    cliente: String,
    user: [String, Object],
    fecha: [Date, String],
    fotos: [Object, Array],
    descripcion: String,
    categorias: [Object, Array],
    Color: [String, Number],
  },

  mounted() {
    this.startAnimation();
  },

  methods: {
    startAnimation() {
      // const tl2 = gsap.timeline({
      //   scrollTrigger: {
      //     trigger: '#oddPaint',
      //     start: 'top bottom',
      //     end: 'bottom center',
      //     markers: true,
      //     scrub: true,
      //   },
      // });
      // tl2.fromTo(
      //   '#oddPaint .odd-paint-pic-0',
      //   {
      //     duration: 0.3,
      //     top: 50,
      //   },
      //   {
      //     top: '-50',
      //   }
      // );
      // tl2.fromTo(
      //   '#oddPaint .odd-paint-pic-1',
      //   {
      //     duration: 3,
      //     top: '-50',
      //   },
      //   {
      //     top: 50,
      //   }
      // );
    },
  },

  data() {
    return {
      options: {
        threshold: 1.0,
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.main-paint {
  .meta {
    top: 10% !important;
    .title {
      font-family: Montserrat;
      color: #e3dde1;
      font-weight: 800;
      text-align: center !important;
      font-size: calc(var(--base-font-size) * 1.5);
    }
    .subtitle {
      font-family: 'Courier New';
      color: #f684c4;
      font-size: calc(var(--base-font-size) * 0.7);
      .artist-name {
        font-weight: 300;

        color: var(--alfa-color);
      }
    }
  }

  .text p {
    font-family: 'Courier New';
    font-size: 1.3em;
    white-space: swrap;
    // line-break: strict;
    color: #f9aed8;
  }
}

@media screen and (min-width: 900px) {
  .main-paint {
    margin-top: 10vw !important;
    margin-bottom: 10vw !important;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .meta {
      transform: rotate(-90deg);
      margin-top: 26em;

      white-space: nowrap;
      .title {
        font-family: Montserrat;
        color: #e3dde1;
        font-weight: 800 !important;
        font-size: 3em;
      }

      .subtitle {
        font-family: 'Courier New';
        color: #f684c4;
        font-size: calc(var(--base-font-size) * 0.3);
        .artist-name {
          font-weight: 300;
          color: var(--alfa-color);
        }
      }
    }

    .text p {
      font-family: 'Courier New';
      font-size: 1.3em;
      transform-origin: 1em -6em;
      white-space: wrap;
      line-break: strict;
      color: #f9aed8;
      width: 25em;
      transform: rotate(90deg);
    }

    img {
      position: relative;
      border-radius: 8px;
      max-height: 90%;
      max-width: 47vw;
    }

    img:nth-of-type(1) {
      bottom: 5em;
    }

    img:nth-of-type(2) {
      right: 5em;
      max-height: 95%;
      top: 0em;
    }
  }
}
</style>
