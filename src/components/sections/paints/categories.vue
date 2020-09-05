<template>
  <div class="mt-5 mb-5" id="categories-section">
    <h2 class="text-center cat">Categorias</h2>
    <div class="row category-row text-center justify-content-lg-center align-items-stretch m-0">
      <div
        v-for="categoria in $page.categorias.edges"
        :key="categoria.id"
        class="category col-5 mt-lg-3 mb-md-3"
        @click="activeCategory(categoria.node)"
        :class="{'activeCategory':categoryTitle ===categoria.node.titulo}"
      >
        <h5>{{ categoria.node.titulo }}</h5>
        <div
          class="category-wrapper"
          :class="{ active: active }"
          :style="
            `background: url(https://admin.villartt.me${
              categoria.node.foto.url
            }`
          "
        />
      </div>
    </div>

    <transition @enter="enter">
      <div class="container-fluid mt-4 pr-lg-5 pl-lg-5" v-if="active">
        <h3 class="text-center title">{{ categoryTitle }}</h3>
        <p class="text-center">🎨 {{ categoryDescription }}</p>
        <div class="paints row mt-3 align-items-center m-0 justify-content-around">
          <div
            class="overflow-auto ind-paint col-md-3 m-1 col-5 mt-3 align-self-stretch d-flex"
            v-for="(paint, paintIndex) in categoryPaints"
            :key="paintIndex"
            :style="`background-image: url(https://admin.villartt.me${paint.fotos[0].url})`"
            :class="{'non-active':openModal !== paintIndex && openModal,  'ye-active':openModal === paintIndex, 'last-item':paintIndex === categoryPaints.length -1}"
            :id="`ind-paint-${paintIndex}`"
            @click.self="toggleModal(paintIndex)"
          >
            <span @click="closeModal" class="close-modal" v-if="openModal === paintIndex">X</span>
            <span
              class="info-paint text-center"
              :class="openModal === paintIndex ? 'd-block align-self-end':'d-none'"
            >
              <p>
                <i>{{paint.titulo}}</i>
                <br />
                <small>{{paint.descripcion}}</small>
              </p>
            </span>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import observer from '@/components/utilities/observer';
import paint from '@/components/ui/paint';

import { gsap, TweenMax } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger.js';
gsap.registerPlugin(ScrollTrigger);

export default {
  name: 'Categories',
  components: {
    paint,
    observer,
  },

  data() {
    return {
      active: false,
      categoryPaints: [],
      categoryTitle: '',
      categoryDescription: '',
      modalOptions: {},
      openModal: null,
    };
  },

  methods: {
    closeModal() {
      this.openModal = 100000;
    },

    activeCategory({ titulo, pinturas, Descripci_n }) {
      this.openModal = null;
      function animation() {
        TweenMax.from('.ind-paint', {
          duration: 0.5,
          opacity: 0,
          scale: 0.1,
          filter: 'blur(7px)',
          y: 100,
          ease: 'power1',
          stagger: {
            each: 0.1,
            from: 'top',
          },
        });
      }
      if (this.active !== true) {
        this.active = true;
        this.categoryPaints = pinturas;
        this.categoryTitle = titulo;
        this.categoryDescription = Descripci_n;
      } else {
        this.categoryTitle = titulo;
        this.categoryDescription = Descripci_n;
        this.categoryPaints = pinturas;
      }
      animation();
    },

    enter() {
      TweenMax.from('.ind-paint', {
        duration: 0.5,
        opacity: 0,
        scale: 0.5,
        y: 100,
        filter: 'blur(3px)',
        ease: 'power1.in',
        stagger: {
          each: 0.1,
          from: 'top',
        },
      });
    },

    toggleModal(index) {
      this.openModal = index;
    },
  },
};
</script>

<style lang="scss" scoped>
.close-modal {
  position: absolute;
  top: -2%;
  right: -1.5%;
  padding: 0 1%;
  font-size: 60%;
  background-color: #fff;
  border-radius: 50%;
  color: red;
  cursor: pointer;
}
.ind-paint:not(.ye-active) {
  cursor: pointer;
}
.non-active {
  z-index: 0;
  transition: ease-in-out 0.5s;
  cursor: pointer;
  position: unset;
  width: 100%;
}

.category-row {
  padding-bottom: 3em;
  overflow-y: auto;
  flex-flow: row nowrap;
}

.ind-paint {
  height: 10em;
  width: 10em;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 8px;
  border-radius: 8px;
  font-family: Montserrat;
  font-weight: 500;
  box-shadow: 5px 4px 30px rgba(0, 0, 0, 0.358);

  &:hover {
    box-shadow: 5px 4px 30px rgba(0, 0, 0, 0.534);
  }
  .info-paint {
    background-color: var(--alfa-color);
    font-size: 80%;
    padding: 0 1.5%;
    color: white;
    margin: 0 auto;
    border-radius: 11px 11px 0 0;
  }
  @media screen and (min-width: 800px) {
    height: 15em;
    width: 10em;
  }
}

.ye-active {
  position: relative;
  z-index: 100;
  overflow: visible !important;
  margin: auto !important;
  width: 100% !important;
  flex-basis: 100%;
  transform: scale(1.5) !important;
  min-height: 15em;
  min-width: 15em;
  transition: 0.6s cubic-bezier(0.68, 1, 0.265, 1.55);
  box-shadow: 5px 4px 300px 300px#000000c4;
  &:hover {
    box-shadow: 5px 4px 300px 300px#000000c4;
  }
  &:nth-of-type(3n + 1) {
    transform-origin: unset;
  }
  &:nth-of-type(3n) {
    transform-origin: unset;
  }
  &:nth-of-type(2n) {
    transform-origin: center center;
  }
  &:nth-of-type(2n + 1) {
    transform-origin: center center;
  }

  @media screen and (min-width: 800px) {
    &:nth-of-type(2n) {
      transform-origin: unset;
    }
    &:nth-of-type(2n + 1) {
      transform-origin: unset;
    }
    &:nth-of-type(3n + 1) {
      transform-origin: center left;
    }
    &:nth-of-type(3n) {
      transform-origin: center right;
    }
    transform: scale(2.5) !important;
  }
  &:last-of-type {
    transform-origin: unset;
  }
}

.category {
  background-size: cover;
  background-attachment: fixed;
  background-position: top;
}

.category-wrapper {
  background-size: cover !important;
  padding: 8em 0%;
  border-radius: 8px;
  height: 100%;
  max-width: 100%;
  cursor: pointer;
  background-attachment: fixed;
  background-position: center !important;
  box-shadow: var(--box-shadow);
  transition: 0.7s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
.title {
  font-size: 2em !important;
}
h3 {
}
h5 {
  font-size: 0.8em;
}
.active {
  padding: 50% 10%;
}
p,
h5 {
  font-family: 'Courier New', Courier, monospace;
}

.activeCategory {
  .category-wrapper {
    /* border: 10px solid var(--alfa-color); */
  }
  h5 {
    font-weight: bolder;
  }
}

@media screen and (min-width: 768px) {
  .category-row .category {
    flex-basis: 20%;
    margin: 0 1em;
  }
  .title {
    font-weight: 400;
    font-size: 2em;
  }
  .category-wrapper {
    padding: 75% 0%;
  }
  .active {
    padding: 25% 0%;
    transition: 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }
  h3 {
    color: 333;
    font-weight: bolder;
  }
  h5,
  p,
  h3 {
    font-family: 'Courier New';
    font-size: 1em;
  }
  .row {
    margin: 0;
    text-align: center;
  }
  img {
    border-radius: 8px;
    box-shadow: 5px 4px 30px rgba(0, 0, 0, 0.104);
  }
}
// .cat{
//     text-decoration: underline;
// }
</style>
