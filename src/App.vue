<template>
  <div class="app">
    <TitleBar/>
    <router-view class="main-feed"/>
  </div>
</template>


<script setup lang="ts">
import TitleBar from './components/TitleBar.vue'

</script>


<style lang="scss">
:root {
  --titlebar-background: #efefef;
  --titlebar-divider: #b0b0b0;
  --background: #f7f7f7;
  --text: #5683c9;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Fira sans', sans-serif;
}

button {
  cursor: pointer;
  appearance: none;
  border: none;
  outline: none;
  background: none;
}

html, body {
  height: 100%;
  margin: 0;
}

.app {
  display: flex;
  background-color: var(--background);

  main {
    flex: 1;
    padding: 2rem;

    @media (max-width: 896px) {
      padding: 1rem;
    }
  }
}

.title-bar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;
}

.main-feed {
  margin-top: 80px; /* Adjust the margin-top value */
  position: relative;
  transition: margin-left 0.3s ease, padding 0.3s ease, font-size 0.3s ease;

  @media (max-width: 896px) {
    margin-top:300px;
  }

  @media (min-width: 897px) {
    margin-left: 300px;
    margin-right: 300px;
  }
}

</style>

