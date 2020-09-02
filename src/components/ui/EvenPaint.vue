// This is the second page
<template>
  <div class="mt-3 main-paint mt-5 row d-flex m-0 justify-content-center">
    <observer @intersect="intersected" v-bind="options" />
    <div class="paint order-md-1 order-1 col-md-11 col-11 justify-content-center d-flex">
      <img
        v-for="(foto, fotoIndex) in fotos"
        :key="fotoIndex"
        :src="`https://admin.villartt.me${foto.url}`"
        class="img-fluid d-none d-lg-block"
        :id="`even-paint-pic-${fotoIndex}`"
        :alt="`Villartt pintura ${titulo}`"
      />
      <paint-show :titulo="`even-paint`" :fotos="fotos" class="align-self-center d-lg-none d-flex" />
    </div>
    <div class="meta mt-4 mt-lg-0 col-md-1 col-12 order-md-2 order-2 d-flex flex-column">
      <h3 class="subtitle">
        ~Pintada por
        <span class="artist-name">{{ user.username }}</span>
        👩🏻‍🎨
      </h3>
      <h2 class="title order-md-2 order-1">-{{ titulo }}</h2>
    </div>
  </div>
</template>

<script>
import observer from '@/components/utilities/observer';

import PaintShow from '@/components/sections/paints/PaintShow';

import gsap from 'gsap';
let masterTL = gsap.timeline();

import moment from 'moment';

export default {
  name: 'EvenPaint',
  components: {
    observer,
    PaintShow,
  },

  data() {
    return {
      activePaint: 0,
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

        .play();
    },

    paintsTL() {
      let tl = gsap.timeline();
      tl.fromTo(
        ` #even-paint-pic-0`,
        0.5,
        {
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
        ` #even-paint-pic-1`,
        0.8,
        {
          scale: 1.05,
          opacity: 0.9,
          filter: 'grayscale(100%) blur(7px)',
        },
        {
          opacity: 1,
          filter: 'grayscale(0%) blur(0px)',
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
.main-paint {
  .meta {
    text-align: center;
    .subtitle {
      font-size: calc(var(--base-font-size) * 0.7);
      font-family: 'Courier New';
      color: #f684c4;
      .artist-name {
        font-weight: 300;
        color: var(--alfa-color);
      }
    }
    .title {
      color: #e3dde1;
      font-size: calc(var(--base-font-size) * 1.5);
      font-family: Montserrat;
      font-weight: 800;
    }
  }

  .text p {
    font-family: 'Courier New';
    text-align: center;

    color: #f9aed8;

    // white-space: no-wrap;
  }
}

.text p {
  font-family: 'Courier New';
  text-align: unset;
  transform: unset;
  color: #f9aed8;
  width: 100%;
  white-space: wrap;
}
.main-paint {
  .meta {
    transform-origin: unset;
    .title {
      text-align: center;
    }
    .subtitle {
    }
  }
}

@media screen and (min-width: 768px) {
  img {
    max-width: 48vw;
  }
  .main-paint {
    margin-bottom: 10vw !important;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .meta {
      transform-origin: 0 0;
      transform: rotate(90deg);
      margin-top: -1em;
      white-space: nowrap;
      right: -7%;
      // bottom: -100px;
      .subtitle {
        font-family: 'Courier New';
        font-size: calc(var(--base-font-size) * 0.3);
        color: #f684c4;
        .artist-name {
          font-weight: 300;
          color: var(--alfa-color);
        }
      }
      .title {
        font-size: 3em;
        color: #e3dde1;
        font-family: Montserrat;
        font-weight: 800;
      }
    }
  }
  img {
    position: relative;
    border-radius: 8px;
    max-height: 90%;
    // max-width: 50vw;
  }

  img:nth-of-type(1) {
    top: 4em;
    left: 2em;
  }

  img:nth-of-type(2) {
    // bottom: 1em;
    right: 3.3em;
  }
}

@media screen and (min-width: 1210px) {
  img {
    // max-width: 85vw;
  }
}
</style>
