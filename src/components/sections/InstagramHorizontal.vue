<template>
  <div
    @mouseenter="hoverRow = true"
    class="row align-items-stretch d-flex instagram-horizontal justify-content-center m-0 mt-5 mb-5"
  >
    <div class="col-12">
      <h2>Instagram</h2>
    </div>
    <div
      class="instagram-foto align-self-center justify-content-center text-center"
      v-for="(post, postIndex) in $page.instagramPosts.edges"
      :key="postIndex"
      :style="`background: url('${post.node.display_url}');`"
    >
      <!-- edge_media_to_caption {
          edges {
            node {
              text
      }-->
    </div>
    <div v-if="hoverRow" class="col-6 mt-5 pb-5 text-center cta-instagram">
      <a href="https://www.instagram.com/vill.artt/" target="_blank">
        <img
          class="img-fluid w-25"
          src="../../static/instagram-logo.png"
          alt="instagram-logo"
        />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InstagramHorizontalPost',

  data() {
    return {
      hoverRow: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.instagram-horizontal div {
  height: 100%;
}
.instagram-horizontal .instagram-foto {
  transition: 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.instagram-horizontal:hover {
  .instagram-foto {
    transition: 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    margin: 0 0.5em;
    transform: none;
    flex-basis: 15%;
  }
}
.cta-instagram {
  height: 100%;
  a {
    img {
      box-shadow: none !important;
    }
    position: relative;
    background: linear-gradient(
      50deg,
      #405de6,
      #5851db,
      #833ab4,
      #c13584,
      #e1306c,
      #fd1d1d
    );
    color: white;
    padding: 2% 10%;
    font-size: 1.5em;
    animation: goDown 1s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
  }
}

@keyframes identifier {
}

@keyframes goDown {
  0% {
    transform: scale(0);
    font-size: 0;
    top: -200;
    background: linear-gradient(
      -280deg,
      #405de6,
      #5851db,
      #833ab4,
      #c13584,
      #e1306c,
      #fd1d1d
    );
  }

  45% {
    transform: scale(1);
    border-radius: 7px;
    margin: 0;
    top: 0;
    font-size: 1.5em;
  }

  90% {
    background: linear-gradient(
      -250deg,
      #405de6,
      #5851db,
      #833ab4,
      var(--alfa-color),
      #e1306c,
      #fd1d1d
    );
  }
  93% {
    background: linear-gradient(
      -180deg,
      #405de6,
      #5851db,
      #833ab4,
      var(--alfa-color),
      #e1306c,
      #fd1d1d
    );
  }

  96% {
    background: linear-gradient(
      0deg,
      #405de6,
      #5851db,
      #833ab4,
      #c13584,
      #e1306c,
      #fd1d1d
    );
  }

  99% {
    background: linear-gradient(
      25deg,
      #405de6,
      #5851db,
      #833ab4,
      #c13584,
      #e1306c,
      #fd1d1d
    );
  }

  100% {
    cursor: pointer;
    border-radius: 7px;
  }
}

.instagram-foto {
  background-size: cover !important;
  flex-basis: 18%;
  margin-left: -3%;

  min-height: 13em;
  width: 100%;
  border-radius: 7px;
  z-index: initial;
}
.instagram-foto:nth-of-type(even) {
  transform: rotate(7deg);
}

.instagram-foto:nth-of-type(odd) {
  transform: rotate(-7deg);
}
</style>
