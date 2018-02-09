<template>
  <div id="app">
    <Header></Header>
    <MTab></MTab>
    <!--<img src="./assets/logo.png">-->
    <!--<p class="my-router">-->
      <!--<router-link :to="'first'">go to first page</router-link>-->
      <!--<br/>-->
      <!--<router-link :to="'second'">go to second page</router-link>-->
    <!--</p>-->
    <!--<router-view/>-->
  </div>
</template>

<script>
  import Header from "./components/header/header.vue";
  import MTab from "./components/tab/index.vue";

  export default {
    name: "App",
    components: {Header,MTab},
    watch: {
      '$route'(to, from) {
        console.log(from.path,"->", to.path);
        console.log("router.path->", this.$route.path);
      }
    }
  };
</script>

<style>
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top:15px;
  }

  .my-router {
    font-size: 1.5em;
    color: blue;
  }
</style>
