<template>
    <div
        class="row m-0 align-items-center header"
    >
      <div class="col text-center">
            Villartt
            <h2>
                Artistas de la Ciudad De México
            </h2>
      </div>
  </div>
</template>

<script>

export default {
    name: 'NewHeader',
};
</script>

<style lang='scss' scoped>
.row{
    height: 100vh;
}
.row::after{
    content:'';
    animation-name:simpleImage;
    animation-delay: 2s;
    animation-duration: 3s;
    animation-fill-mode: forwards;
    animation-timing-function: ease-out;
    z-index:0;
}
h2{
    font-size:5vw;
}
.col{
    font-weight: 700;
    font-size: 25vw;
    animation: super 5s ease-in forwards;
    position:absolute;
    white-space: nowrap;
    background-clip: text;
    color:transparent;
    background-size:cover;
    z-index: 1;
    font-family: Sociere;
    // color:white;
}
@keyframes super {
  0% {
        background-image:url('http://localhost:1337/uploads/9a80eeb74e26475e89389db7ef3915b1.jpg');
    }
  25% {
      background-image:url('http://localhost:1337//uploads/aa1839ec0e884918a74e39c281e49412.jpg');
    }
  50% {
        background-image:url('http://localhost:1337/uploads/9a80eeb74e26475e89389db7ef3915b1.jpg');
    }
  75% {
      color:transparent;
        background-image:url('../../../static/header-bg.jpg');
    //   background-image:url('http://localhost:1337//uploads/aa1839ec0e884918a74e39c281e49412.jpg');
    }
    // 80%{
    // }
  100% {
    background-position:center;
    filter: blur(0px);
    color:white;
    font-size: 27vw;
    //   background:filter(blur(22px))
      }
}
@keyframes simpleImage {
    from{
        background-image: none;
        height: 0vh;
        width: 100vw;
    }
    to{
        filter: blur(6px) grayscale(40%);
        height: 100vh;
        width: 100vw;
        opacity:1;
        background-attachment: fixed;
        background-image:url('../../../static/header-bg.jpg');
    }
}
</style>