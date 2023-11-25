<template>
  <div class="global-text">
    <header>
      <h1>Happy 72nd Birthday Lana Rhea!</h1>
      <p>Celebrating a life filled with joy, love, and wonderful memories.</p>
    </header>

    <main>
      <section>
        <h2>Welcome to Lana's Birthday Celebration Website</h2>
        <p>Join us in celebrating Lana Rhea's 72nd birthday with joy and happiness. This website is dedicated to honoring Lana and the incredible journey of her life so far.</p>
      </section>

      <section>
        <h2>Make a Choice</h2>
        <p>On this special day, Lana Rhea faces a mysterious and dangerous challenge. She must make the right choice to unlock the birthday surprise. Choose wisely!</p>

        <div class="choices">
          <router-link to="/choice1" class="choice-link">Choice 1</router-link>
          <router-link to="/choice2" class="choice-link">Choice 2</router-link>
          <router-link to="/choice3" class="choice-link">Choice 3</router-link>
        </div>
      </section>
    </main>

    <footer>
      <p>© 2023 Lana Rhea's 72nd Birthday Celebration</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "WelcomeText",
  methods: {
    handleChoice(choice) {
      // Implement your logic for each choice
      console.log(`User selected Choice ${choice}`);
      // You can navigate to different routes or perform other actions based on the user's choice
    }
  }
}
</script>

<style>

.global-text {
  color: #535bf2; /* Your desired color for plain text */
}

.choices {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}

.choice-link {
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

.choice-link:hover {
  background-color: #2980b9;
}

</style>