// This is the first page

<template>
  <div
    class="main-paint row d-flex m-0 justify-content-center"
    :id="`odd-paint-${user.username}`"
  >
    <div class="meta col-md-1 col-12 order-md-1 order-2">
      <h4 class="subtitle text-center mt-lg-0 mt-3">
        ~ Pintada por
        <span class="artist-name">{{ user.username }}</span>
        👩🏻‍🎨
      </h4>
      <h2 class="title">-{{ titulo }}</h2>
    </div>
    <div class="paint order-md-2 order-1 col-md-11 col-11 d-flex">
      <observer
        @intersect="intersected"
        v-bind="options"
        :id="'odd-paint-observer'"
      />
      <img
        v-for="(foto, fotoIndex) in fotos"
        :key="fotoIndex"
        class="d-none d-lg-block img-fluid"
        :src="`https://admin.villartt.me${foto.url}`"
        :class="`odd-paint-pic-${fotoIndex}`"
        :alt="`Villartt pintura ${titulo}`"
      />
      <paint-show
        :titulo="`odd-paint`"
        :fotos="fotos"
        class="align-self-center d-lg-none d-flex"
      />
    </div>
    <!-- <div class="text col-12 col-lg-1 order-3 text-center text-md-right">
      <p>{{ descripcion }}.</p>
    </div>-->
  </div>
</template>

<script>
import observer from '@/components/utilities/observer';

import gsap from 'gsap';

import PaintShow from '@/components/sections/paints/PaintShow';
let masterTL = gsap.timeline();

import moment from 'moment';

export default {
  name: 'OddPaint',

  components: {
    observer,
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

  data() {
    return {
      options: {
        threshold: 1.0,
      },
    };
  },

  methods: {
    intersected() {
      masterTL.add(this.paintsTL());
      // masterTL.add(this.metaTL());
      masterTL.play();
    },

    paintsTL() {
      let tl = gsap.timeline();
      tl.fromTo(
        `#odd-paint-${this.user.username} .odd-paint-pic-0`,
        0.8,
        {
          opacity: 1,
          filter: 'blur(5px)',
        },
        {
          filter: 'blur(0px)',
          opacity: 1,
          zIndex: 0,
          ease: 'circ',
        },
        '<'
      );

      tl.fromTo(
        `#odd-paint-${this.user.username} .odd-paint-pic-1`,
        0.9,
        {
          opacity: 0.95,
          scale: 1.05,
          filter: 'grayscale(100%) blur(7px)',
        },
        {
          filter: 'grayscale(0%) blur(0px)',
          scale: 1,
          opacity: 1,
          x: 0,
          y: 0,
          zIndex: 0,
          ease: 'circ',
        },
        '<'
      );
    },
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
      // transform-origin: 90% 42%;
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
      transform-origin: 10em -6em;
      white-space: wrap;
      line-break: strict;
      color: #f9aed8;
      width: 25em;
      transform: rotate(90deg);
    }

    img {
      position: relative;
      border-radius: 8px;
      max-height: 100%;
      max-width: 47vw;
    }

    img:nth-of-type(1) {
      bottom: 5em;
    }

    img:nth-of-type(2) {
      right: 5em;
      top: 0em;
    }
  }
}
</style>
