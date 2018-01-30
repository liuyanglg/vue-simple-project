<template>
  <div id="app">
    <img src="./assets/logo.png">
    <SayHello/>
    <p>
      <router-link to="/first">Go To First Page</router-link>
      <router-link to="/second">Go To Second Page</router-link>
    </p>
     <router-view/>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import SayHello from "./components/SayHello.vue";

export default {
  name: "App",
  components: { HelloWorld,SayHello }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
