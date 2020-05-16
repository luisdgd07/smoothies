<template>

  <v-app >
    <v-app-bar
      app
      dense
      elevate-on-scroll
      transition="scale-transition"
      color="primary"
      dark
      class="text-center"
    >
    <h4 class="my-auto mx-auto">Smoothie Match <img src="@/assets/smoothieb.png" width="30" height="30" alt=""></h4>
    
    <!-- <v-btn to="/" class="primary"><p  >Smoothie Match</p></v-btn> -->
<!-- <v-btn to="/mysmoothies" class="primary"><p  >Crea tu Smoothie</p></v-btn>
<v-btn to="/smoothies" class="primary"><p  >Nuestros Smoothies</p></v-btn> -->
    </v-app-bar>
    <transition name="fade">
  <router-view class="mt-8 "></router-view>
</transition>
 
  </v-app>


</template>

<style>
v-app{
  background:linear-gradient(90deg,rgb(241, 135, 227), rgb(194, 116, 181));
}
.fondo{
  background:linear-gradient(90deg,rgb(206, 19, 181), rgb(206, 20, 175));
  box-shadow: 0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(20, 20, 20, 0.192)
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background:linear-gradient(90deg,rgb(219, 208, 218), rgb(225, 213, 231));
}

.subtitulo{
  color:rgb(124, 14, 109);

}
.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: .40s;
}

.fade-enter-active {
  transition-delay: .40s;
}

.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>