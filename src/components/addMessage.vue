<style media="screen">
  .head{
    color: #50E3C2;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0rem;
    width: 2rem;
    height: 2rem;
    margin: auto;
  }
  .nav{
    width: 100%;
    height: 3rem;
    background: #ffffff;
    position: relative;
  }
</style>


<template>
  <div class="nav">
    <p class="head"><i class="icon-plus icon-3x" @click='addMessage'></i></p>

  </div>
</template>

<script>
  export default {
    methods: {
      addMessage () {
        this.$dispatch('openMode')
      }
    }
  }
</script>
