<template>
  <div class="mt-3 main-paint row d-flex" :id="`even-paint-${id}`">
    <observer @intersect="intersected" v-bind="options" />
    <div
      class="text col-md-2 col-12 order-md-1 order-3 text-center text-md-right align-self-center"
    >
      <p>
        {{ descripcion }}. <br />Pintado
        <i>{{ fecha | fechaEnDias }}</i>
      </p>
    </div>
    <div class="paint order-md-2 order-2 col-md-9 col-12">
      <img
        v-for="(foto, fotoIndex) in fotos"
        :key="fotoIndex"
        :src="`https://admin.villartt.me${foto.url}`"
        :class="`even-paint-pic-${fotoIndex}`"
        alt="Some image"
      />
    </div>
    <div class="meta col-md-1 col-12 order-md-3 order-1">
      <h3 class="subtitle">~{{ categorias.titulo }}</h3>
      <h2 class="title" :style="`color: ${Color}`">-{{ titulo }}</h2>
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
        threshold: 0.5,
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
    titulo: String,
    cliente: String,
    user: [String, Object],
    fecha: [Date, String],
    fotos: [Object, Array],
    descripcion: String,
    categorias: Object,
    Color: [String, null, Number],
  },
  methods: {
    intersected() {
      masterTL
        .add(this.paintsTL())
        .add(this.metaTL())
        .play();
    },
    metaTL() {
      let tl = gsap.timeline();
      tl.fromTo(
        `#even-paint-${this.id} .meta`,
        1,
        {
          opacity: 0,
          scale: 0,
          x: 0,
        },
        {
          opacity: 1,
          scale: 1,
          x: 0,
          ease: 'back',
        },
        '<'
      );
    },
    paintsTL() {
      let tl = gsap.timeline();
      tl.fromTo(
        `#even-paint-${this.id} .even-paint-pic-0`,
        1,
        {
          x: -500,
          y: -100,
          scale: 0,
        },
        {
          scale: 1,
          x: 0,
          y: 0,
          zIndex: 0,
          ease: 'circ',
        },
        '<'
      );

      tl.fromTo(
        `#even-paint-${this.id} .even-paint-pic-1`,
        1,
        {
          opacity: 0.8,
          scale: 2.5,
          x: 270,
          y: 60,
        },
        {
          scale: 1,
          opacity: 1,
          x: 0,
          y: 0,
          zIndex: 1,
          ease: 'slow',
        },
        '<'
      );
    },
  },
};
</script>

<style lang="scss" scoped>
@media screen and (max-width: 768px) {
  .main-paint {
    margin: 9vh 0vh !important;
    .meta {
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
  .main-paint {
    .meta {
      .title {
        font-size: 2.5em !important;
      }
      .subtitle {
        font-size: 1em !important;
      }
    }
  }
}
img {
  border-radius: 8px !important;
  max-width: 50vh;
}
.main-paint {
  margin: 50vh 0vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .meta {
    transform-origin: 0 0;
    transform: rotate(90deg);
    white-space: nowrap;
    right: -7%;
    // bottom: -100px;
    .subtitle {
      font-family: 'Courier New';
    }
    .title {
      font-family: Montserrat;
      font-weight: 800;
      font-size: 3.5em;
    }
  }
  .text {
    font-family: 'Courier New';
    font-size: 1.5em;
  }
  img {
    position: absolute;
    border-radius: 8px;
  }
  img:nth-of-type(1) {
    position: relative;
    left: 15%;
    max-width: 60vw !important;
  }
  img:nth-of-type(2) {
    bottom: 0%;
    left: 0%;
    top: 23%;
    max-width: 35vw !important;
  }
}
</style>
