<template>
  <div>
  <div :class="{ 'buttonClicked': giftButtonClicked }" class="christmas-dove-trip">
    <h2>Welcome to the Christmas Dove Trip!</h2>
    <p>Get ready for a magical journey to the Christmas Dove, where joy and festivity await.</p>

    <div class="snowy-scene">
      <!-- Snowy background -->
      <div class="snowflakes"></div>

      <!-- Christmas Dove image -->
      <img src="../assets/snowman.webp" alt="Christmas Dove" class="christmas-dove-img" />
    </div>

    <p>I will accompany you on a tour of the Christmas Dove sometime before Christmas! (If you want!)</p>
  </div>
  <button @click="playChristmasMusic">Receive Gift</button>
  </div>
</template>

<script setup>
import sound from "../assets/xmas_music.mp3";
import { ref } from "vue";
const audio = new Audio(sound);
const playChristmasMusic = () => {

  audio.play();
  handleButtonClicked();
};

const giftButtonClicked = ref(false);
const handleButtonClicked = () => {
  giftButtonClicked.value = true;
};

</script>

<style scoped>
.christmas-dove-trip {
  opacity: 0;
  text-align: center;
  color: #fff;
  background-color: #87CEEB; /* Light Blue background */
  padding: 20px;
  border-radius: 10px;
  transition: opacity 1s; /* Add a transition for a smoother opacity change */
}

.snowy-scene {
  position: relative;
  margin-top: 20px;
}

.snowflakes {
  background: url('../assets/christmas-background.webp') repeat top center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.christmas-dove-img {
  width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 50%;
  position: relative;
  z-index: 1;
}

.christmas-dove-trip.buttonClicked {
  opacity: 1;
}

button {
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
  text-decoration: none;
  background-color: #3498db;
  color: #ffffff;
  border: 1px solid #2980b9;
  border-radius: 5px;
  margin-right: 10px; /* Add spacing between links */
  transition: background-color 0.3s ease;
}
</style>