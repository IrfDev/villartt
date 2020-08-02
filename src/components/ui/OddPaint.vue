<template>
  <div class="main-paint row d-flex" :id="`odd-paint-${user.username}`">
    <div class="meta col-md-1 col-12 order-md-1 order-2">
      <h3 class="subtitle">
        ~ Pintada por
        <span class="artist-name">
          {{ user.username }}
        </span>
        👩🏻‍🎨
      </h3>
      <h2 class="title">-{{ titulo }}</h2>
    </div>
    <div class="paint order-md-2 order-1 col-md-10 col-12">
      <img
        v-for="(foto, fotoIndex) in fotos"
        :key="fotoIndex"
        :src="`https://admin.villartt.me${foto.url}`"
        :class="`odd-paint-pic-${fotoIndex}`"
        :alt="`Villartt pintura ${titulo}`"
      />
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
let masterTL = gsap.timeline();

import moment from 'moment';

export default {
  name: 'OddPaint',

  components: {
    observer,
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
      return moment(date)
        .locale('es')
        .fromNow();
    },
  },

  methods: {
    intersected() {
      masterTL.add(this.paintsTL());
      // masterTL.add(this.metaTL());
      masterTL.play();
    },
    // metaTL() {
    //   let tl = gsap.timeline();
    //   tl.fromTo(
    //     `#odd-paint-${this.user.username} .meta`,
    //     1,
    //     {
    //       opacity: 0,
    //       scale: 0,
    //       x: 0,
    //     },
    //     {
    //       opacity: 1,
    //       scale: 1,
    //       x: 0,
    //       ease: 'back',
    //     },
    //     '<'
    //   );
    // },
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
.main-paint {
  margin-top: 30vh;
  margin-bottom: 40vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .meta {
    // left: 200;
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

@media screen and (max-width: 900px) {
  .text p {
    transform: unset;
    margin-bottom: 0vh;
    font-size: 1.3em;
    transform-origin: unset;
    white-space: wrap;
    line-break: strict;
    width: 25em;
  }
  .main-paint {
    margin-top: 20vh;
    margin-bottom: 10vh;
    .meta {
      top: 10% !important;
      margin-top: 3em;

      .title {
        font-size: 2em !important;
      }
      .subtitle {
        font-size: 1em !important;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .main-paint {
    margin-top: 30vh;
    .text p {
      font-size: 1.3em;
      transform: unset;
      transform-origin: unset;
      white-space: wrap;
      line-break: strict;
      width: 100%;
    }
    .meta {
      transform: none !important;
      text-align: center;
    }

    img:nth-of-type(1) {
      min-width: 60vw !important;
      left: 10%;
      top: -8em;
    }

    img:nth-of-type(2) {
      min-width: 60vw !important;
      top: -15em;
      left: 35%;
    }
  }
}
</style>
