<template>
  <div class="cta text-center">
    <!-- id="main-cta-typeform" -->
    <a
      class="typeform-share button main-cta text-center"
      href="https://form.typeform.com/to/GVqFyAA1"
      data-mode="popup"
      style="text-decoration:none;background-color:#E50092;color:white;cursor:pointer;text-align:center;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;"
      target="_blank"
      >¡Pide ahora!
    </a>
  </div>
</template>
<script>
(function() {
  var qs,
    js,
    q,
    s,
    d = document,
    gi = d.getElementById,
    ce = d.createElement,
    gt = d.getElementsByTagName,
    id = 'typef_orm_share',
    b = 'https://embed.typeform.com/';
  if (!gi.call(d, id)) {
    js = ce.call(d, 'script');
    js.id = id;
    js.src = b + 'embed.js';
    q = gt.call(d, 'script')[0];
    q.parentNode.insertBefore(js, q);
  }
})();
</script>

<style lang="scss" scoped>
.cta {
  display: flex;
  justify-content: center !important;
  position: fixed;
  bottom: 1em;
  min-width: 100%;
  animation: mainCta 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
}
@keyframes mainCta {
  from {
    opacity: 0.5;
    filter: blur(5px) grayscale(100%);
  }

  to {
    filter: blur(0px) grayscale(0%);
    opacity: 1;
  }
}

.main-cta {
  z-index: 100;
  font-weight: 600;
  font-family: Montserrat !important;
  padding: 1% 2%;
  border-radius: 8px;
  width: 50%;
  font-size: calc(var(--base-font-size) * 0.6) !important;
  @media screen and (min-width: 768px) {
    font-size: calc(var(--base-font-size) * 0.23) !important;
    width: 15%;
  }
}
</style>
