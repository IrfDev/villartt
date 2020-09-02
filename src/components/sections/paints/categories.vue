<template>
  <div class="mt-5 mb-5" id="categories-section">
    <h2 class="text-center cat">Categorias</h2>
    <div class="row category-row text-center justify-content-lg-center align-items-stretch m-0">
      <div
        v-for="categoria in $page.categorias.edges"
        :key="categoria.id"
        class="category col-5 mt-lg-3 mb-md-3"
        @click="activeCategory(categoria.node)"
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
            class="ind-paint col-md-3 m-1 col-5 mt-3 align-self-stretch"
            v-for="(paint, paintIndex) in categoryPaints"
            :key="paintIndex"
            :style="`background-image: url(https://admin.villartt.me${paint.fotos[0].url})`"
          >
            <!-- <paint class="actual-paint align-self-stretch" v-bind="paint" /> -->
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
      options: {
        // rootMargin: [0.25],
      },
    };
  },

  mounted() {
    this.startAnimation();
  },

  methods: {
    startAnimation() {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '#categories-section',
          start: 'top bottom',
          end: 'bottom bottom',
          scrub: true,
        },
      });

      tl.from('#artists h2', {
        duration: 1,
        rotate: '174deg',
      }).from('#categories-section .category', {
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
    },

    activeCategory({ titulo, pinturas, Descripci_n }) {
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
  },
};
</script>

<style lang="scss" scoped>
.category-row {
  padding-bottom: 3em;

  overflow-y: auto;
  flex-flow: row nowrap;
}

.ind-paint {
  height: 15em;
  width: 10em;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 8px;
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
