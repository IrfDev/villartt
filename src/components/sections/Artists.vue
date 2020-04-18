<template>
<div class="
  row
  m-0
  justify-content-center
  "
>
  <div class="col-12">
    <h1
      class="text-center"
    >
      Artistas
    </h1>
  </div>
  <div
    class="
      col-md-4
      col-12
      "
    v-for="(villi, villiIndex) in $page.users.edges"
    :key="villiIndex"
  >
    <div 
      class="card border-0 d-flex justify-content-around"
      :class="{'flex-row':villiIndex % 2 === 0,'flex-row-reverse':villiIndex % 2 !== 0}"
    >
        <div 
          class="info"
          :class="{'text-right mr-3':villiIndex % 2 === 0,'text-left ml-3':villiIndex % 2 !== 0}"
        >
          <h2>
            {{villi.node.username}}
          </h2>
          <p>
            {{villi.node.about}}
          </p>
        </div>
        <div
          class="circle"
          :style="`background-image: url(http://localhost:1337${villi.node.imagen.url}`"
        />
    </div>
  </div>
</div>
</template>

<script>
export default {
    name: 'Artists'
}
</script>

<style lang='scss' scoped>
@media screen and (max-width: 768px) {
 h1{
   font-size:4em!important;
 } 
 p{
   font-size:1em!important;
 }
}

.circle{
  width:200px;
  height: 200px;
  background-size:cover;
  background-repeat: no-repeat;;
  border-radius: 50%;
}
h1{
  font-family:Montserrat;
  font-size:7em;
  font-weight: bolder;
  margin:10vh 0;
  transform: rotate(180deg);
  // text-decoration: underline;
}
p{
  font-family: 'Courier New';
  font-size:2em;
}
h2{
  font-family:Montserrat;
  font-size:3em;
  font-weight: 600;
}

</style>