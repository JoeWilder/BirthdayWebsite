<template>
  <div class="scroll-lock">
    <div :class="{ 'buttonClicked': giftButtonClicked }" class="christmas-dove-trip">

      <h1 class="overlay-text">Oh No you chose the wrong button!!!</h1>
      <img src="../assets/scary_face.jpg" alt="Scary Face" class="christmas-dove-img" />

    </div>
    <button @click="playScaryMusic">Receive Gift</button>
  </div>
</template>

<script setup>
import sound from "../assets/scary_sound.mp3";
import { ref, onBeforeUnmount, onMounted } from "vue";
const audio = new Audio(sound);

const playScaryMusic = () => {
  audio.play();
  handleButtonClicked();
};

const giftButtonClicked = ref(false);
const handleButtonClicked = () => {
  giftButtonClicked.value = true;
};

onMounted(() => {
  document.documentElement.style.overflow = 'hidden';  // Apply style to html element
  document.body.classList.add('no-scroll');
});

onBeforeUnmount(() => {
  document.documentElement.style.overflow = '';  // Remove style from html element
  document.body.classList.remove('no-scroll');
});
</script>

<style scoped>
.no-scroll {
  overflow: hidden;
}

body {
  margin: 0; /* Remove default body margin */
}

html {
  height: 100%;
  overflow: hidden;  /* Prevent scrolling on the entire page */
}

.christmas-dove-trip {
  opacity: 0;
  text-align: center;
  color: #fff;
  background-color: #4b0141;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
  height: 100vh;
}

.overlay-text {
  opacity: 0;
  color: #c90101;
  text-align: center;
  font-size: 2em;
}

.christmas-dove-img {
  width: 100%;
  max-height: 70vh;
  object-fit: cover;
  border-radius: 50%;
}

.christmas-dove-trip.buttonClicked {
  opacity: 1;
}

.christmas-dove-trip.buttonClicked .overlay-text {
  opacity: 1;
}

button {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
  text-decoration: none;
  background-color: #420b0b;
  color: #ffffff;
  border: 1px solid #b96a29;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  z-index: 2; /* Ensure the button is above other elements */
}

@media (max-width: 768px) {
  .christmas-dove-img {
    max-height: 50vh;
  }
}
</style>
