<template>
  <div class="main-paint row d-flex m-0" :id="`odd-paint-${user.username}`">
    <div class="meta col-md-1 col-12 order-md-1 order-2">
      <h3 class="subtitle">
        ~ Pintada por
        <span class="artist-name">{{ user.username }}</span>
        👩🏻‍🎨
      </h3>
      <h2 class="title">-{{ titulo }}</h2>
    </div>
    <div class="paint order-md-2 order-1 col-md-10 col-12">
      <img
        v-for="(foto, fotoIndex) in fotos"
        :key="fotoIndex"
        class="d-none d-lg-flex img-fluid"
        :src="`https://admin.villartt.me${foto.url}`"
        :class="`odd-paint-pic-${fotoIndex}`"
        :alt="`Villartt pintura ${titulo}`"
      />
      <paint-show :fotos="fotos" class="align-self-center d-lg-none d-flex" />
      <observer @intersect="intersected" v-bind="options" />
    </div>
    <div class="text col-12 col-lg-1 order-3 text-center text-md-right">
      <p>{{ descripcion }}.</p>
    </div>
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

  filters: {
    fechaEnDias(date) {
      return moment(date).locale('es').fromNow();
    },
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
        0.7,
        {
          x: -10,
          y: -20,
          opacity: 1,
          filter: 'blur(5px)',
        },
        {
          filter: 'blur(0px)',
          opacity: 1,
          x: 0,
          y: 0,
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
          x: -12,
          y: 40,
          filter: 'grayscale(100%)',
        },
        {
          filter: 'grayscale(0%)',
          scale: 1,
          opacity: 1,
          x: 0,
          y: 0,
          zIndex: 1,
          ease: 'circ',
        },
        '<'
      );
    },
  },
};
</script>

<style lang="scss" scoped>
@media screen and (min-width: 900px) {
  .main-paint {
    margin-top: 35vh !important;
    margin-bottom: 40vh !important;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .meta {
      transform-origin: 20% 1%;
      transform: rotate(-90deg);
      margin-top: 10em;
      white-space: nowrap;
      top: 10em;
      .subtitle {
        font-family: 'Courier New';
        color: #f684c4;
        .artist-name {
          font-weight: 300;
          color: var(--alfa-color);
        }
      }
      .title {
        font-family: Montserrat;
        color: #e3dde1;
        font-weight: 800;
        font-size: 3em;
      }
    }

    .text p {
      font-family: 'Courier New';
      font-size: 1.3em;
      transform-origin: 9em -6em;
      white-space: wrap;
      line-break: strict;
      color: #f9aed8;
      width: 25em;
      transform: rotate(90deg);
    }

    img {
      position: absolute;
      width: 100%;
      border-radius: 8px;
    }

    img:nth-of-type(1) {
      bottom: 40%;
      max-width: 45vw;
    }

    img:nth-of-type(2) {
      max-width: 45vw;
      bottom: 0%;
      right: 0;
      left: 46%;
    }
  }
}
.main-paint {
  margin-top: 20vh;
  margin-bottom: 10vh;
  .meta {
    top: 10% !important;
    .title {
      font-family: Montserrat;
      color: #e3dde1;
      font-weight: 800;
      font-size: 3em;
    }
    .subtitle {
      font-family: 'Courier New';
      color: #f684c4;
      .artist-name {
        font-weight: 300;
        color: var(--alfa-color);
      }
    }
  }

  .text p {
    font-family: 'Courier New';
    font-size: 1.3em;
    text-align: center;
    white-space: swrap;
    // line-break: strict;
    color: #f9aed8;
  }
}
</style>
