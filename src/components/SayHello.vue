<template>
<div id="say-hello">
  <h1>{{msg}} say hello to you!</h1>
</div>
</template>

<script>
    export default {
        name: "say-hello",
      data(){
          return{
            msg:'Misty Snow'
          }
      }
    }
</script>

<style scoped>
  h1{
    color: #31b77f;
  }

</style>
