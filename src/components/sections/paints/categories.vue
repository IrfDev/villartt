<template>
  <div class="mt-5 mb-5">
    <h2 class="text-center cat">Categorias</h2>
    <div class="row align-center text-center align-items-stretch m-0">
      <observer @intersect="intersected" v-bind="options" :id="'categories'" />
      <div
        v-for="categoria in $page.categorias.edges"
        :key="categoria.id"
        class="category col mt-lg-3 mb-md-3 align-items-stretch"
        @click="activeCategory(categoria.node)"
      >
        <h5>{{ categoria.node.titulo }}</h5>
        <div
          class="category-wrapper"
          :class="{ active: active }"
          :style="
            `background-image: url(https://admin.villartt.me${
              categoria.node.foto.url
            }`
          "
        />
      </div>
    </div>
    <transition @enter="enter">
      <div class="container-fluid" v-if="active">
        <h3 class="text-center title">{{ categoryTitle }}</h3>
        <p class="text-center">🎨 {{ categoryDescription }}</p>
        <div class="paints row mt-3">
          <div
            class="ind-paint col-md-3 col-6 mt-3"
            v-for="(paint, paintIndex) in categoryPaints"
            :key="paintIndex"
          >
            <paint class="actual-paint" v-bind="paint" />
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import observer from '@/components/utilities/observer';
import { TweenMax } from 'gsap';
import paint from '@/components/ui/paint';

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
        rootMargin: [0.25],
      },
    };
  },
  methods: {
    intersected() {
      TweenMax.from('.category', {
        duration: 1,
        opacity: 0,
        scale: 0,
        y: 150,
        ease: 'ease-in',
        stagger: {
          each: 0.3,
          from: 'center',
        },
      });
    },
    activeCategory({ titulo, pinturas, Descripci_n }) {
      function animation() {
        TweenMax.from('.ind-paint', {
          duration: 0.5,
          opacity: 0,
          scale: 0.1,
          y: 100,
          ease: 'power1',
          stagger: {
            each: 0.1,
            from: 'center',
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
        scale: 0.1,
        y: 100,
        ease: 'power1.in',
        stagger: {
          each: 0.1,
          from: 'center',
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.category-wrapper {
  padding: 6em 20%;
  border-radius: 8px;
  background-attachment: fixed;
  background-size: cover;
  background-position: top;
  box-shadow: var(--box-shadow);
  transition: 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
.title {
  font-size: 2em !important;
}
h3 {
  font-size: 3em !important;
}
h5 {
  font-size: 1em !important;
}
.active {
  padding: 20% 10% !important;
}
p,
h5 {
  font-family: 'Courier New', Courier, monospace;
}
@media screen and (min-width: 768px) {
  .title {
    font-size: 4em;
    font-weight: 400;
  }
  .category-wrapper {
    padding: 70% 40%;
  }
  .active {
    padding: 30% 10%;
    transition: 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }
  h3 {
    font-family: Montserrat;
    font-size: 5em;
    color: 333;
    font-weight: bolder;
  }
  h5 {
    font-family: 'Courier New';
    font-size: 2em;
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
