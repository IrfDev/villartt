<template>
  <div class="layout">
    <slot />
  </div>
</template>

<style>
@font-face {
  font-family: 'Rockness';
  src: url('../assets/rockness-webfont.woff2') format('woff2'),
    url('../assets/rockness-webfont.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'Courier';
  src: url('../assets/courier-webfont.woff2') format('woff2'),
    url('../assets/courier-webfont.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
body {
  margin: 0;
  padding: 0;
  line-height: 1.5;
}
.layout {
  max-width: 100vw;
}
</style>
