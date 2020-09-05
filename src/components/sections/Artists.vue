<template>
  <div class="artists row m-0 justify-content-center" id="artists">
    <div class="col-12">
      <h2 class="title-section text-center">Artistas</h2>
    </div>
    <div
      class="artist-card col-md-4 col-12 mt-4"
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
          class="circles"
          :style="
            `background-image: url(https://admin.villartt.me${
              villi.node.imagen.url
            }`
          "
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Artists',
};
</script>

<style lang="scss" scoped>
#artists {
  margin-top: 10% !important;
}

.circles {
  width: 200px;
  height: 200px;
  float: left;
  shape-outside: circle() border-box;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 11px;
}

.artist-card .card {
  z-index: 0;
  height: 100%;
}

.info {
  max-width: 12em;
}

h2 {
  margin: 0vh 0;
  transform: rotate(180deg);
}
p {
  font-family: 'Courier New';
  color: #f9aed8;
  float: left;
  -webkit-shape-outside: circle();
  shape-outside: ellipse(100px 200px at 50% 50%);
}
h3 {
  font-family: Montserrat;
  font-weight: 600;
  color: #f684c4;
  font-size: 2.1em !important;
}
h1 {
}
p {
  font-size: 1em !important;
}
@media screen and (min-width: 768px) {
  p {
    font-size: 2em;
  }
  h3 {
    font-size: 3em;
  }
}
</style>
