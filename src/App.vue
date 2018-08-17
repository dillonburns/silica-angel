<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Lato:100i');

html, body {
  margin: 0;
  display: block;
  height: 100%;
  background: #ffe9ff;
}

#app {
  font-family: 'Lato', sans-serif;
  font-weight: 100;
  background: #ffe9ff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  text-align: center;
}
</style>
