<template>
  <footer class="mt-5 container-fluid d-flex justify-content-between">
    <div class="d-flex justify-content-between w-100">
      <div class="logo-name">
        <h6>Villartt 2020®</h6>
      </div>
      <div class="statement text-right">
        <h6>Todos los derechos reservados</h6>
      </div>
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
  flex-basis: 50%;
}

.statement {
  flex-basis: 50%;
  color: #fde3f1;
  font-weight: 200;
}
</style>