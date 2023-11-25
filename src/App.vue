<template>
  <div :class="{ darkMode: isDarkMode }" class="app">
    <TitleBar/>
    <router-view @toggle-changed="handleToggleChange" class="main-feed"/>
  </div>
</template>


<script setup lang="ts">
import { ref } from 'vue';
import TitleBar from './components/TitleBar.vue'

const isDarkMode = ref(false);
const handleToggleChange = () => {
  isDarkMode.value = !isDarkMode.value;
};

</script>


<style lang="scss">
:root {
  //--primary: #5aeac4;
  //--primary-alt: #229fc5;
  --post-icons: #000000;
  --sidebar-accent: #6dafad;
  --sidebar-icons: #1e293b;
  --sidebar-hover: #e8e8e8;
  --sidebar-highlight: #87dad8;
  //--dark-alt: #334155;
  --titlebar-background: #efefef;
  --titlebar-divider: #b0b0b0;
  --background: #f7f7f7;
  --title-text: #1e293b;
  --text: #5683c9;
  --sidebar-width: 200px;
  --text-bubble: #e9e9e9;
  --text-bubble-hover: #e0e0e0;
  --app-side-divider: #d7d7d7;
  --searchbar-background: #fff;
  --searchbar-border: #fff
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
}


.app {
  display: flex;

  background-color: var(--background); // Move this line here



  main {
    flex: 1 1 0;
    padding: 2rem;

    @media (max-width: 896px) {
      padding-left: 6rem;
    }
  }


}


.title-bar {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;
}



.main-feed {

  margin-top: 100px;
  z-index: 1;
  margin-left: 300px; /* Same as sidebar width */
  margin-right: 300px; /* Add buffer margin to the right */
  position: relative;
  transition: margin-left 0.3s ease, padding 0.3s ease, font-size 0.3s ease;

  @media (max-width: 896px) {
    margin-left: 0; /* Remove margin on the left when the screen is narrow */
    margin-right: 0; /* Remove buffer margin on the right when the screen is narrow */
  }

}

</style>

