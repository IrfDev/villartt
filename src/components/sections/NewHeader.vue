<template>
  <div class="row m-0 align-items-center header title">
    <div class="col text-center">
      <h1 class="typo-font-size">Villartt</h1>
      <h2 class="typo-subtitle">Artistas de la Ciudad De México</h2>
      <button @click="scrollNext">👇🏻</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewHeader',

  methods: {
    scrollNext() {
      this.$emit('clickHeader');
      console.log('object');
    },
  },
};
</script>

<style lang="scss" scoped>
button {
  border: none;
  background-color: transparent;
  font-size: var(--base-font-size);
  text-shadow: 2px 1px 20px rgba(51, 51, 51, 0.276);
  transform: scale(0);
  animation: ctaIntro 0.4s 1s ease-in-out forwards;
}

@keyframes ctaIntro {
  from {
    filter: blur(7px);
    transform: scale(0.4);
    opacity: 0.4;
  }
  to {
    filter: blur(0px);
    opacity: 1;
    transform: scale(1);
  }
}

.row {
  height: 100vh;
}
.row::after {
  content: '';
  background-position: center !important;
  @media screen and (min-width: 768px) {
    background-position: unset !important;
  }
  background-repeat: no-repeat;
  animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
  animation-name: simpleImage;
  background-attachment: fixed;
  animation-duration: 0.8s;
  animation-fill-mode: forwards;
  z-index: 0;
}
h1 {
  font-family: Rockness;
  color: var(--alfa-color-200);
}
h2 {
  color: #fefbfd;
}
.col {
  font-weight: 700;
  animation: super 2s forwards cubic-bezier(0.075, 0.82, 0.165, 1);
  position: absolute;

  background-clip: text;
  color: transparent;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 1;
}
@keyframes super {
  0% {
    font-size: 60%;
  }
  100% {
    font-size: 100%;
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

    background-repeat: no-repeat;
    background: radial-gradient(
        57.16% 87.39% at 49.64% 49.45%,
        rgba(0, 0, 0, 0.31) 0%,
        rgba(0, 0, 0, 0) 100%
      ),
      url('/header-bg.jpg');
  }
}
</style>
