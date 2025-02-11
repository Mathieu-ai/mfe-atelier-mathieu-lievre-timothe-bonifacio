<template>
  <header class="header">
    <h1>My Vue App</h1>
    <nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #333;
  color: white;
}

.header h1 {
  font-size: 1.8rem;
}

nav ul {
  list-style: none;
  display: flex;
  gap: 1rem;
}

nav a {
  text-decoration: none;
  color: white;
  font-size: 1rem;
}

nav a:hover {
  opacity: 0.7;
}
</style>
