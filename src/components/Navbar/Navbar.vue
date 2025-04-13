<template>
  <nav class="navbar" :class="{ scrolled: scrolled, 'mobile-open': mobileMenuOpen }">
    <div class="navbar-container">
      <div class="navbar-logo">
        <a href="#" class="logo-link">
          <img src="@/assets/images/logo.png" alt="Prime Fitness Logo" class="logo-image" />
        </a>
      </div>

      <div class="navbar-menu" :class="{ active: mobileMenuOpen }">
        <ul class="nav-links">
          <li><a href="#hero" @click="closeMobileMenu">Início</a></li>
          <li><a href="#about" @click="closeMobileMenu">Sobre Nós</a></li>
          <li><a href="#methodology" @click="closeMobileMenu">Metodologia</a></li>
          <li><a href="#services" @click="closeMobileMenu">Serviços</a></li>
          <li><a href="#testimonials" @click="closeMobileMenu">Depoimentos</a></li>
          <li><a href="#classes" @click="closeMobileMenu">Aulas</a></li>
          <li>
            <a
              @click="
                redirectToLink(
                  'https://wa.me/5581820101500?text=Olá,%20gostaria%20de%20marcar%20uma%20aula%20Experimental'
                )
              "
              >Contato</a
            >
          </li>
        </ul>
      </div>

      <div class="mobile-toggle" @click="toggleMobileMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const scrolled = ref(false)
const mobileMenuOpen = ref(false)

const checkScroll = () => {
  scrolled.value = window.scrollY > 50
}

const redirectToLink = (link) => {
  window.open(link, '_blank')
  closeMobileMenu()
}

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value

  // Prevent scrolling when mobile menu is open
  if (mobileMenuOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
  document.body.style.overflow = ''
}

onMounted(() => {
  window.addEventListener('scroll', checkScroll)
  checkScroll() // Check initial scroll position
})

onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll)
})
</script>

<style lang="scss" scoped src="./style.scss"></style>
