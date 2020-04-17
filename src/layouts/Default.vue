<template>
  <div class="layout">
    <slot/>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
body {
  margin:0;
  padding:0;
  line-height: 1.5;
}
.layout {
  max-width: 100vw;
}

</style>
