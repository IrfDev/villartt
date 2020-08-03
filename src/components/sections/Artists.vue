<template>
  <div class="row m-0 justify-content-center">
    <div class="col-12">
      <h2 class="text-center">Artistas</h2>
    </div>
    <div class="col-md-4 col-12" v-for="(villi, villiIndex) in $page.users.edges" :key="villiIndex">
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
export default {
  name: 'Artists',
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
  margin: 10vh 0;
  transform: rotate(180deg);
  // text-decoration: underline;
}
p {
  font-family: 'Courier New';
}
h3 {
  font-family: Montserrat;
  font-weight: 600;
}
h1 {
  font-size: 4em !important;
}
p {
  font-size: 1em !important;
}
@media screen and (min-width: 768px) {
  h2 {
    font-size: 7em;
    margin: 10vh 0;
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
