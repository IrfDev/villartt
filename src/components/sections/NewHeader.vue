<template>
  <div class="row m-0 align-items-center header">
    <div class="col text-center">
      <h1>
        Villartt
      </h1>
      <h2>Artistas de la Ciudad De México</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewHeader',
};
</script>

<style lang="scss" scoped>
.row {
  height: 100vh;
}
.row::after {
  content: '';
  animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
  animation-name: simpleImage;
  // animation-delay: 0.01s;
  animation-duration: 0.8s;
  animation-fill-mode: forwards;
  // animation-timing-function: ease-out;
  z-index: 0;
}
h1 {
  font-family: Rockness;
  font-size: 1em;
  color: var(--alfa-color-200);
}
h2 {
  font-size: 5vw;
  color: #fde3f1;
  font-family: Open Sans;
}
.col {
  font-weight: 700;
  font-size: 25vw;
  animation: super 2s forwards cubic-bezier(0.075, 0.82, 0.165, 1);
  position: absolute;
  white-space: nowrap;
  background-clip: text;
  color: transparent;
  background-size: cover;
  z-index: 1;
  // color:white;
}
@keyframes super {
  0% {
    font-size: 10vw;
  }
  100% {
    font-size: 27vw;
  }
}
@keyframes simpleImage {
  from {
    filter: blur(80px) grayscale(100%);
    background-image: none;
    height: 0vh;
    width: 100vw;
  }
  to {
    filter: none;
    height: 100vh;
    width: 100vw;
    opacity: 1;
    background-size: cover;
    background-attachment: fixed;
    background: radial-gradient(
        57.16% 87.39% at 49.64% 49.45%,
        rgba(0, 0, 0, 0.31) 0%,
        rgba(0, 0, 0, 0) 100%
      ),
      url('../../../static/header-bg.jpg');
  }
}
</style>
