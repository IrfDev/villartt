<template>
  <div data-scroll>
    <h2>Pinturas</h2>
    <div
      v-for="(edge, edgeInedex) in $page.pinturas.edges"
      :key="edgeInedex"
      class="
				paint-structure
				d-flex
				flex-column
				justify-content-between
			"
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
};
</script>

<style lang="scss"></style>
