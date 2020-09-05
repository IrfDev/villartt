<template>
  <div
    class="row p-5 align-items-stretch d-flex instagram-horizontal justify-content-center m-0 mb-5"
    @mouseenter="hoverRow = true"
    v-if="photos"
    ref="instagram"
    id="instagramHorizontal"
  >
    <div class="col-12 text-center">
      <h2>Instagram</h2>
    </div>
    <div
      class="instagram-foto align-self-center justify-content-center text-center"
      v-for="(post, postIndex) in firstPictures"
      :key="postIndex"
      :style="`background-image: url('${post.node.display_url}');`"
    />
    <div
      v-if="hoverRow"
      class="col-10 col-lg-4 mt-5 pb-5 text-center cta-instagram justify-content-center"
    >
      <a href="https://www.instagram.com/vill.artt/" target="_blank">
        <img class="img-flui" src="../../static/instagram-logo.png" alt="instagram-logo" />
      </a>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'InstagramHorizontalPost',

  async mounted() {
    try {
      const igProfileJson = await axios.get(
        `https://www.instagram.com/vill.artt/?__a=1`
      );

      console.log(igProfileJson);
      this.photos =
        igProfileJson.data.graphql.user.edge_owner_to_timeline_media.edges;
      console.log(this.photos);
    } catch (error) {}
  },

  computed: {
    firstPictures() {
      if (this.photos) return this.photos.splice(0, 6);
    },
  },

  data() {
    return {
      hoverRow: false,
      photos: null,
    };
  },
};
</script>

<style lang="scss" scoped>
.instagram-horizontal {
  margin-top: 10% !important;
  margin-bottom: 5vh !important;
}

.instagram-horizontal .instagram-horizontal div {
  height: 100%;
}

.instagram-horizontal .instagram-foto {
  transition: 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.instagram-horizontal:hover {
  .instagram-foto {
    transition: 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    margin: 0.5em 0.5em;
    transform: none;
    flex-basis: 42%;
  }
  .instagram-foto:hover {
    transition: 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }
}

.cta-instagram {
  height: 100%;
  a {
    img {
      box-shadow: none !important;
      width: 100%;
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
    padding: 8% 15%;

    animation: goDown 1s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
  }
}

.instagram-foto {
  // background-attachment: fixed;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  flex-basis: 50%;
  margin-left: -3%;
  min-height: 14em;
  width: 100%;
  border-radius: 7px;
  z-index: initial;
}
.instagram-foto:nth-of-type(even) {
  transform: rotate(-7deg);
}

.instagram-foto:nth-of-type(odd) {
  transform: rotate(-7deg);
}
@media screen and (min-width: 768px) {
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
      padding: 5% 8%;
      animation: goDown 1s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
    }
  }

  .instagram-foto {
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
</style>
