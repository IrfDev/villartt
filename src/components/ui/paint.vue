<template>
  <div class="card bg-dark text-white border-0">
    <img
      :src="`https://admin.villartt.me${fotos[0].url}`"
      class="card-img img-fluid"
      :alt="`Villartt ${categoria}`"
    />
    <div
      class="card-img-overlay align-center d-flex justify-content-center align-items-center flex-column"
    >
      <h5 class="card-title">-{{titulo}}</h5>
      <p>👉🏻{{descripcion}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'paint',
  props: {
    titulo: String,
    cliente: String,
    Artista: [String, Object],
    fecha: [Date, String],
    fotos: [Object, Array],
    descripcion: String,
    categoria: Object,
  },
};
</script>

<style lang='scss' scoped>
@media screen and (max-width: 768px) {
  .card:hover {
    img {
      filter: blur(2px) invert(100%) !important;
    }
    .card-title {
    }
    p {
    }
  }
}
p {
  transition: 0.5s cubic-bezier(0.6, -0.28, 0.735, 0.045);
  opacity: 0;
  font-family: 'Courier New';
  font-size: 0em;
}
.card {
  overflow: hidden;
  border-radius: 8px;
  font-family: Montserrat;
  font-weight: 500;
  box-shadow: 5px 4px 30px rgba(0, 0, 0, 0.358);
  .card-title {
    font-size: 0em;
    opacity: 0;
    transition: 0.5s cubic-bezier(0.6, -0.28, 0.735, 0.045);
  }
}
img {
  opacity: 1;
  transition: 0.5s cubic-bezier(0.6, -0.28, 0.735, 0.045);
}
.card:hover {
  img {
    transition: 0.6s cubic-bezier(0.6, -0.28, 0.735, 0.045);
    filter: invert(100%) blur(8px);
    opacity: 0.5;
  }
  .card-title {
    font-size: 1em;
    opacity: 1;
    transition: 0.3s cubic-bezier(0.6, -0.28, 0.735, 0.045);
  }
  p {
    transition: 0.3s cubic-bezier(0.6, -0.28, 0.735, 0.045);
    opacity: 1;
    font-size: 0.5em;
  }
}
</style>