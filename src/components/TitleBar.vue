<template>
  <div class="title-bar">
    <router-link to="/" class="router-link-container">
      <span class="material-icons">
        celebration
      </span>
      <div class="title">GmaBday</div>
    </router-link>
    <span class="material-icons menu-icon" @click="toggleMenu">more_horiz</span>
    <div v-if="isMenuOpen" class="square-menu">
      <router-link class="menu-option" to="/settings" style="text-decoration: none; color: inherit;">
        <span class="material-icons settings-icon">settings</span>
        <span class="menu-text">Settings</span>
      </router-link>
      <!-- Add more menu options as needed -->
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenuOnClickOutside = (event) => {
  if (isMenuOpen.value && !event.target.closest('.square-menu') && !event.target.closest('.material-icons')) {
    isMenuOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener('click', closeMenuOnClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('click', closeMenuOnClickOutside);
});
</script>

<style lang="scss">
.title-bar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: var(--titlebar-background);
  border-bottom: 1px solid var(--titlebar-divider);
  color: #1E293BFF;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  padding: 0 2rem; // Instead of padding: 0.5rem 2rem;
  z-index: 100;
}

.router-link-container {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
}


.logo {
  margin-right: 1rem; /* Adjust the margin to your preference */
  max-height: 24px;
  z-index: 1;
  position: relative;
  top: -3px;
}

.title {
  font-size: 1.25rem;
  color: #1E293BFF;
  margin-right: auto;
}

.menu-icon {
  color: #1E293BFF;
  margin-left: 1rem;
  cursor: pointer;
  padding: 4px;
  transition: background-color 0.3s ease, border-radius 0.3s ease;

  &:hover {
    background-color: #e8e8e8;
    border-radius: 8px;
    border: 1px solid #ccc;
  }
}


.square-menu {
  position: absolute;
  top: 60px;
  right: 30px;
  color: #535bf2;
  background-color: var(--titlebar-background);
  border: 1px solid var(--titlebar-divider);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 0.5rem;
  z-index: 101;
  width: 120px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
}

.square-menu {
  flex: 1;
  margin: 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.square-menu .menu-option {
  display: flex;
  align-items: center;
}

.square-menu .settings-icon {
  margin-right: 8px;
  cursor: auto;

  &:hover {
    background-color: transparent;
    border-radius: 0;
    border: none;
  }
}

</style>
