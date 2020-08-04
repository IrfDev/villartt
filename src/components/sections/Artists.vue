<template>
  <div class="artists row m-0 justify-content-center">
    <div class="col-12">
      <h2 class="text-center">Artistas</h2>
      <observer @intersect="intersected" :id="'artistas-card'" />
    </div>

    <div
      class="artist-card col-md-4 col-12"
      v-for="(villi, villiIndex) in $page.users.edges"
      :key="villiIndex"
    >
      <div
        class="card border-0 d-flex justify-content-around align-items-center"
        :class="{
          'flex-row': villiIndex % 2 === 0,
          'flex-row-reverse': villiIndex % 2 !== 0,
        }"
      >
        <div
          class="info"
          :class="{
            'text-right mr-3': villiIndex % 2 === 0,
            'text-left ml-3': villiIndex % 2 !== 0,
          }"
        >
          <h3>{{ villi.node.username }}</h3>
          <p>{{ villi.node.about }}</p>
        </div>
        <div
          class="circle"
          :style="
            `background-image: url(https://admin.villartt.me${
              villi.node.imagen.url
            }`
          "
        />
      </div>
    </div>
  </div>
</template>

<script>
import observer from '@/components/utilities/observer';
import { TweenMax } from 'gsap';

export default {
  name: 'Artists',

  components: {
    observer,
  },

  methods: {
    intersected() {
      TweenMax.from('.artist-card', {
        duration: 0.7,
        opacity: 0.5,
        filter: 'blur(5px) grayscale(100%)',
        ease: 'ease-in',
        stagger: {
          each: 0.2,
          from: 'left',
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.circle {
  width: 200px;
  height: 200px;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 50%;
}

.info {
  max-width: 12em;
}

h2 {
  margin: 0vh 0;
  transform: rotate(180deg);
  // text-decoration: underline;
}
p {
  font-family: 'Courier New';
  color: #f9aed8;
}
h3 {
  font-family: Montserrat;
  font-weight: 600;
  color: #f684c4;
  font-size: 2.5em !important;
}
h1 {
}
p {
  font-size: 1em !important;
}
@media screen and (min-width: 768px) {
  h2 {
    transform: rotate(180deg);
    // text-decoration: underline;
  }
  p {
    font-size: 2em;
  }
  h3 {
    font-size: 3em;
  }
}
</style>
