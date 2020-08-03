<template>
  <div data-scroll>
    <h2>Pinturas</h2>
    <div
      v-for="(edge, edgeInedex) in pinturas"
      :key="edgeInedex"
      class="paint-structure d-flex flex-column justify-content-between"
    >
      <odd-paint v-if="edgeInedex % 2 === 0" v-bind="edge.node" />
      <even-paint v-else v-bind="edge.node" />
    </div>
  </div>
</template>

<script>
import OddPaint from '@/components/ui/OddPaint.vue';
import EvenPaint from '@/components/ui/EvenPaint.vue';

export default {
  name: 'paints',

  components: {
    OddPaint,
    EvenPaint,
  },

  computed: {
    pinturas() {
      const filteredPinturas = this.$page.pinturas.edges.filter(
        ({ node }) => node.feature === true
      );
      return [filteredPinturas[0], filteredPinturas[1]];
    },
  },
};
</script>

<style lang="scss"></style>
