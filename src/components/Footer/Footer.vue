<template>
  <footer class="footer-container">
    <div class="footer-main">
      <div class="footer-logo-section">
        <h2>Prime Fitness</h2>
        <div class="social-icons">
          <v-btn
            v-for="icon in icons"
            :key="icon"
            :icon="icon.icon"
            class="mx-2"
            variant="text"
            @click="redirectToLink(icon.link)"
          ></v-btn>
        </div>
      </div>

      <div class="footer-links">
        <div class="footer-column">
          <h3 class="timers"><span class="mdi mdi-clock-outline mr-2"></span>Horários de Atendimento</h3>
          <p>
            Segunda à Sexta: <strong class="text-primary">6:00 - 13:00</strong> e
            <strong class="text-primary">14:00 - 21:00</strong>
          </p>
          <p>Sábado: <strong class="text-primary">8:00 - 12:00</strong></p>
          <p>Domingo: Fechado</p>
        </div>

        <div class="footer-column">
          <h3><span class="mdi mdi-map-marker-outline mr-2"></span>Endereço</h3>
          <p>Av. Paris, 132. Universitário. Caruaru</p>
          <p>55016-380</p>
        </div>

        <div class="footer-column">
          <h3><span class="mdi mdi-link-variant mr-2"></span>Links Rápidos</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Sobre Nós</a></li>
            <li><a href="#">Aulas</a></li>
            <li><a href="#">Programas</a></li>
            <li><a href="#">Comunidade</a></li>
          </ul>
        </div>
      </div>
    </div>

    <div class="footer-divider"></div>

    <div class="footer-bottom">
      <div class="copyright">
        &copy; {{ getYear() }} —
        <strong class="text-primary">Prime Fitness Todos Direitos Reservados</strong>
      </div>
      <div class="credits">
        <span>Desenvolvido por </span>
        <a
          class="link"
          href="https://www.linkedin.com/in/ricardo-bezerra-22bb661a4/"
          target="_blank"
          >Ricardo Bezerra</a
        >
      </div>
      <div class="legal-links">
        <a href="#">Privacidade & Política</a>
        <a href="#">Termos & Condições</a>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'
const icons = ref([
  {
    icon: 'mdi-whatsapp',
    link: 'https://wa.me/5581820101500?text=Olá,%20gostaria%20de%20marcar%20uma%20aula%20Experimental'
  },
  { icon: 'mdi-instagram', link: 'https://www.instagram.com/primefitness1/' }
])

const getYear = () => new Date().getFullYear()
const redirectToLink = (link) => {
  window.open(link, '_blank')
}
</script>

<style scoped lang="scss" src="./style.scss"></style>
