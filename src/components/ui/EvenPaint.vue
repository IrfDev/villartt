<template>
  <div class="mt-3 main-paint row d-flex" :id="`even-paint-${id}`">
    <div
      class="text col-md-1 col-12 order-md-1 order-3 text-center text-md-left align-self-end"
    >
      <p>
        {{ descripcion }}
      </p>
    </div>
    <div class="paint order-md-2 order-2 col-md-10 col-12">
      <observer @intersect="intersected" v-bind="options" />
      <img
        v-for="(foto, fotoIndex) in fotos"
        :key="fotoIndex"
        :src="`https://admin.villartt.me${foto.url}`"
        class="img-fluid"
        :class="`even-paint-pic-${fotoIndex}`"
        :alt="`Villartt pintura ${titulo}`"
      />
    </div>
    <div class="meta col-md-1 col-12 order-md-3 order-1">
      <h3 class="subtitle">
        ~Pintada por
        <span class="artist-name">
          {{ user.username }}
        </span>
        👩🏻‍🎨
      </h3>
      <h2 class="title">-{{ titulo }}</h2>
    </div>
  </div>
</template>

<script>
import observer from '@/components/utilities/observer';

import gsap from 'gsap';
let masterTL = gsap.timeline();

import moment from 'moment';

export default {
  name: 'EvenPaint',
  components: {
    observer,
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
  props: {
    id: String,
    titulo: String,
    cliente: String,
    user: [String, Object],
    fecha: [Date, String],
    fotos: [Object, Array],
    descripcion: String,
    categorias: [Object, Array],
    Color: [String, null, Number],
  },
  methods: {
    intersected() {
      masterTL
        .add(this.paintsTL())
        // .add(this.metaTL())
        .play();
    },
    // metaTL() {
    //   let tl = gsap.timeline();
    //   tl.fromTo(
    //     `#even-paint-${this.id} .meta`,
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
        `#even-paint-${this.id} .even-paint-pic-0`,
        0.5,
        {
          x: -10,
          y: -20,
          opacity: 0.9,
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
        `#even-paint-${this.id} .even-paint-pic-1`,
        0.8,
        {
          scale: 1.05,
          x: -12,
          y: 40,
          opacity: 0.9,
          filter: 'grayscale(100%)',
        },
        {
          opacity: 1,
          filter: 'grayscale(0%)',
          scale: 1,

          x: 0,
          y: 0,

          ease: 'circ',
        },
        '<'
      );
    },
  },
};
</script>

<style lang="scss" scoped>
img {
  border-radius: 8px !important;
  max-width: 50vh;
}
.main-paint {
  margin: 20vh 0vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .meta {
    transform-origin: 0 0;
    transform: rotate(90deg);
    margin-top: -10em;
    white-space: nowrap;
    right: -7%;
    // bottom: -100px;
    .subtitle {
      font-family: 'Courier New';
      color: #f684c4;
      .artist-name {
        font-weight: 300;
        color: var(--alfa-color);
      }
    }
    .title {
      color: #e3dde1;
      font-family: Montserrat;
      font-weight: 800;
      font-size: 3em;
    }
  }
  .text p {
    font-family: 'Courier New';
    text-align: left;
    transform: rotate(-90deg);
    font-size: 1.3em;
    color: #f9aed8;
    width: 30em;
    transform-origin: 10% 120%;
    white-space: wrap;
  }
  img {
    position: absolute;
    border-radius: 8px;
  }
  img:nth-of-type(1) {
    position: relative;
    left: 37%;
    top: 10%;
    max-width: 47vw !important;
  }
  img:nth-of-type(2) {
    max-width: 50vw !important;
    bottom: 40%;
    left: 0%;
  }
}

@media screen and (max-width: 768px) {
  .main-paint {
    margin: 0vh 0vh !important;
    .text p {
      font-family: 'Courier New';
      text-align: center;

      transform: unset;
      width: 100%;
      transform-origin: unset;
    }
    .meta {
      margin: 1vh 0vh;
      white-space: pre-wrap;
      transform: none !important;
      text-align: center;
      right: 0% !important;
    }
    img {
      position: absolute;
    }
    img:nth-of-type(1) {
      min-width: 70vw !important;
      left: 25% !important;
    }
    img:nth-of-type(2) {
      min-width: 45vw !important;
    }
    .text {
      font-size: 1em !important;
    }
  }
}
@media screen and (max-width: 900px) {
  .text p {
    font-family: 'Courier New';
    text-align: unset;
    transform: unset;
    font-size: 1.3em;
    color: #f9aed8;
    width: 100%;
    transform-origin: unset;
    white-space: wrap;
  }
  .main-paint {
    .meta {
      transform-origin: unset;
      .title {
        font-size: 2.5em !important;
      }
      .subtitle {
        font-size: 1em !important;
      }
    }
  }
}
</style>
