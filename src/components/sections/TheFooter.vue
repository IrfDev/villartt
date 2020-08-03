<template>
  <footer class="mt-5 container-fluid d-flex justify-content-between">
    <div class="logo-name">
      <h6>Villartt 2020®</h6>
    </div>
    <div class="statement">
      <h6>Todos los derechos reservados</h6>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'TheFooter',
};
</script>

<style lang="scss" scoped>
.container-fluid {
  font-family: Montserrat;
}
.logo-name {
  color: #fde3f1;
  font-weight: 700;
}

.statement {
  color: #fde3f1;
  font-weight: 200;
}
</style>