<template>
  <div class="app-container">
    <NavBar @handleHomeNavigation="handleHomeNavigation" />
    <main class="main-content">
      <RouterView />
    </main>
    <Footer />
  </div>
</template>
<script setup>
import { RouterView } from 'vue-router'
import Footer from '@/components/Footer/Footer.vue'
import router from '@/router'
import NavBar from '@/components/Navbar/Navbar.vue'
const handleHomeNavigation = () => {
  router.push({ name: 'home' })
}
</script>

<style>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1;
}
</style>
