<template>
  <div :id="`carouselControls-${titulo}`" class="carousel slide" data-ride="carousel">
    <div class="carousel-inner">
      <div
        v-for="(foto, fotoIndex) in fotos"
        :key="fotoIndex"
        class="carousel-item"
        :class="{ active: fotoIndex === activeItem }"
      >
        <img :src="`https://admin.villartt.me${foto.url}`" class="img-fluid" alt="Villartt-pintura" />
      </div>
    </div>
    <a
      class="carousel-control-prev"
      role="button"
      data-slide="prev"
      v-if="activeItem >= 1"
      @click="activeItem--"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a
      v-if="activeItem < 1"
      class="carousel-control-next"
      role="button"
      @click="activeItem++"
      data-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</template>

<script>
export default {
  name: 'PaintShosw',

  props: {
    fotos: Array,
    titulo: String,
  },

  data() {
    return {
      activeItem: 0,
    };
  },
};
</script>

<style lang="scss" scoped>
.active {
  animation: activeItem 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
}

.carousel {
  min-width: 100%;
}

.carousel-inner {
  border-radius: 16px;
  box-shadow: var(--box-shadow);
}

@keyframes activeItem {
  from {
    filter: grayscale(90%) blur(3px);
  }
  to {
    filter: grayscale(0%) blur(0px);
  }
}
</style>
