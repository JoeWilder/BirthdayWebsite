<template>
  <div :class="{ buttonClicked: buttonClicked }" class="full-page-container">

    <h1 class="overlay-text">Oh No you chose the wrong button!!!</h1>
    <p class="overlay-text">&nbsp;</p>
    <p class="aligncenter">
      <img src="../assets/scary_face.jpg" alt="Scary Face" class="full-page-image" />
    </p>
    <button @click="playScaryMusic">Receive Gift</button>
    <p class="overlay-text">&nbsp;</p>
  </div>

</template>

<script setup>
  import sound from "../assets/scary_sound.mp3";
  import {ref} from "vue";


  const playScaryMusic = () => {
    const audio = new Audio(sound);
    audio.play();
    handleButtonClicked()
  };

  const buttonClicked = ref(false);
  const handleButtonClicked = () => {
    buttonClicked.value = true;
  };


</script>

<style scoped>



/* Apply these styles to make the image take up the whole page */
.full-page-container {
  position: relative;
  height: 100vh; /* Full height of the viewport */
  margin: 0;
}

.full-page-image {
  opacity: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* This ensures the image covers the entire container */
}

.overlay-text {
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #c90101;
  text-align: center;
  z-index: 1;
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

.buttonClicked .overlay-text,
.buttonClicked .full-page-image {
  opacity: 1;
}

</style>
