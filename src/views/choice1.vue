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
  document.body.classList.add('no-scroll');
});

onBeforeUnmount(() => {
  document.body.classList.remove('no-scroll');
});
</script>

<style scoped>
.no-scroll {
  overflow: hidden;
}

.christmas-dove-trip {
  opacity: 0;
  text-align: center;
  color: #fff;
  background-color: #87CEEB; /* Light Blue background */
  padding: 20px;
  border-radius: 10px;
  transition: opacity 1s; /* Add a transition for a smoother opacity change */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1; /* Ensure the text is below the title bar */
}

.overlay-text {
  opacity: 0;
  color: #c90101;
  text-align: center;
  font-size: 2em; /* Increase font size for a larger text */
  margin-top: 20px; /* Add margin to separate text from image */
}

.christmas-dove-img {
  width: 100%; /* Make the image take up the full width of the container */
  max-height: 70vh; /* Set maximum height to 70% of viewport height */
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
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
  text-decoration: none;
  background-color: #420b0b;
  color: #ffffff;
  border: 1px solid #b96a29;
  border-radius: 5px;
  margin-top: 20px; /* Add spacing between button and dove image */
  transition: background-color 0.3s ease;
}

@media (max-width: 768px) {
  .christmas-dove-img {
    max-height: 50vh; /* Adjust max height for smaller screens */
  }
}
</style>
