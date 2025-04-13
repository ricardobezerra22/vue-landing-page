<template>
  <div class="home-container">
    <Navbar />
    <section id="hero" class="hero-section">
      <div class="hero-content">
        <h1>Mais que uma Academia, um Estilo de Vida!</h1>
        <p>Reabilitação e Condicionamento Integrados para uma Vida em Equilíbrio</p>
      </div>
      <div class="cta-button mt-2">
        <a
          href="https://wa.me/5500000000000?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20a%20Prime%20Fitness."
          target="_blank"
          rel="noopener noreferrer"
          class="primary-button animated-button"
        >
          Transforme Sua Vida Hoje
        </a>
        <div class="scroll-indicator">
          <svg
            class="scroll-arrow bounce"
            width="40px"
            height="40px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 5L12.5303 4.46967C12.2374 4.17678 11.7626 4.17678 11.4697 4.46967L12 5ZM12 13L11.4697 13.5303C11.7626 13.8232 12.2374 13.8232 12.5303 13.5303L12 13ZM9.46967 6.46967C9.17678 6.76256 9.17678 7.23744 9.46967 7.53033C9.76256 7.82322 10.2374 7.82322 10.5303 7.53033L9.46967 6.46967ZM13.4697 7.53033C13.7626 7.82322 14.2374 7.82322 14.5303 7.53033C14.8232 7.23744 14.8232 6.76256 14.5303 6.46967L13.4697 7.53033ZM10.5303 10.4697C10.2374 10.1768 9.76256 10.1768 9.46967 10.4697C9.17678 10.7626 9.17678 11.2374 9.46967 11.5303L10.5303 10.4697ZM14.5303 11.5303C14.8232 11.2374 14.8232 10.7626 14.5303 10.4697C14.2374 10.1768 13.7626 10.1768 13.4697 10.4697L14.5303 11.5303ZM3.25 10V14H4.75V10H3.25ZM20.75 14V10H19.25V14H20.75ZM11.25 5V13H12.75V5H11.25ZM11.4697 4.46967L9.46967 6.46967L10.5303 7.53033L12.5303 5.53033L11.4697 4.46967ZM11.4697 5.53033L13.4697 7.53033L14.5303 6.46967L12.5303 4.46967L11.4697 5.53033ZM12.5303 12.4697L10.5303 10.4697L9.46967 11.5303L11.4697 13.5303L12.5303 12.4697ZM12.5303 13.5303L14.5303 11.5303L13.4697 10.4697L11.4697 12.4697L12.5303 13.5303ZM20.75 10C20.75 5.16751 16.8325 1.25 12 1.25V2.75C16.0041 2.75 19.25 5.99594 19.25 10H20.75ZM12 22.75C16.8325 22.75 20.75 18.8325 20.75 14H19.25C19.25 18.0041 16.0041 21.25 12 21.25V22.75ZM3.25 14C3.25 18.8325 7.16751 22.75 12 22.75V21.25C7.99594 21.25 4.75 18.0041 4.75 14H3.25ZM4.75 10C4.75 5.99594 7.99594 2.75 12 2.75V1.25C7.16751 1.25 3.25 5.16751 3.25 10H4.75Z"
              fill="white"
            ></path>
          </svg>
          <span class="scroll-text">Role para baixo</span>
        </div>
      </div>
    </section>
    <section id="about" class="helper-section">
      <div class="helper-container">
        <div class="helper-video-container">
          <div class="helper-cta-card">
            <div class="cta-content">
              <span class="feature-tag">ABORDAGEM EXCLUSIVA</span>
              <h3>Compreendemos o Ser Humano em sua <span class="highlight">totalidade</span></h3>
              <p>
                Integramos <span class="keyword">Corpo</span>, <span class="keyword">Mente</span> e
                <span class="keyword">Energia</span> em nossa abordagem única, refletindo a essência
                da <span class="highlight">Metodologia PRIME</span>.
              </p>
              <p>
                Acolhemos cada fase da sua <span class="keyword">jornada</span>, oferecendo
                <span class="highlight">cuidado personalizado</span> e uma nova
                <span class="keyword">consciência</span> sobre treinamento para uma vida mais
                saudável.
              </p>
            </div>
            <div class="cta-actions">
              <a
                href="https://wa.me/5500000000000?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20a%20Prime%20Fitness."
                target="_blank"
                rel="noopener noreferrer"
                class="secondary-button animated-button"
              >
                SAIBA MAIS SOBRE NÓS
              </a>
            </div>
          </div>

          <div class="video-card">
            <video controls>
              <source src="@/assets/videos/video-demonstrativo.mp4" type="video/mp4" />
              Seu navegador não suporta a reprodução de vídeos.
            </video>
          </div>
        </div>
      </div>
    </section>
    <section id="methodology" class="roadmap-section">
      <div class="roadmap">
        <div class="roadmap-tagline">
          <p class="roadmap-tagline-text"><strong>Entenda Porque Não Somos Uma</strong></p>
          <div class="cta-wrapper">
            <a
              href="https://wa.me/5500000000000?text=Olá!%20Gostaria%20de%20conhecer%20a%20metodologia%20exclusiva%20da%20Prime%20Fitness."
              target="_blank"
              rel="noopener noreferrer"
              class="primary-button animated-button cta-methodology"
            >
              ACADEMIA TRADICIONAL
            </a>
          </div>
        </div>
        <div class="roadmap-container">
          <div class="roadmap-card">
            <div class="roadmap-card-front">
              <img
                src="@/assets/images/tragetoria.png"
                alt="Prime Fitness - Sua Trajetória de Tratamento"
              />
            </div>
            <div class="roadmap-card-back">
              <h3>Metodologia PRIME</h3>
              <p>
                Nossa Abordagem Exclusiva de Reabilitação Integrada Guia Você Através de 4 Etapas
                Estratégicas para Recuperação Completa e Fortalecimento. Clique para Visualizar em
                Detalhes.
              </p>
            </div>
          </div>
        </div>

        <div class="zoom-container">
          <img
            class="zoomed-image"
            src="@/assets/images/tragetoria.png"
            alt="Prime Fitness - Sua Trajetória de Tratamento"
          />
          <div class="close-zoom"></div>
        </div>
      </div>
    </section>
    <section id="services" class="services-section">
      <Services />
    </section>
    <section id="testimonials" class="testimonials-section">
      <Testimonials />
    </section>
    <section id="classes" class="classes-section">
      <div class="roadmap">
        <div class="roadmap-container classes-container">
          <div class="roadmap-card">
            <div class="roadmap-card-front">
              <img
                src="@/assets/images/aulas-coletivas.png"
                alt="Prime Fitness - Aulas Coletivas"
              />
            </div>
          </div>
        </div>
        <div class="zoom-container classes-zoom">
          <img
            class="zoomed-image"
            src="@/assets/images/aulas-coletivas.png"
            alt="Prime Fitness - Aulas Coletivas"
          />
          <div class="close-zoom"></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import Testimonials from '@/components/Testimonials/Testimonials.vue'
import Services from '@/components/Services/Services.vue'
import SectionHeader from '@/components/SectionHeader/SectionHeader.vue'
import Navbar from '@/components/Navbar/Navbar.vue'
import { onMounted, ref } from 'vue'

onMounted(() => {
  // Get elements for trajectory image
  const roadmapContainer = document.querySelector('.roadmap-section .roadmap-container')
  const zoomContainer = document.querySelector('.roadmap-section .zoom-container')

  // Get elements for collective classes image
  const classesContainer = document.querySelector('.classes-container')
  const classesZoom = document.querySelector('.classes-zoom')

  // Get all close buttons
  const closeButtons = document.querySelectorAll('.close-zoom')

  // Detect if device is mobile
  const isMobile = () => {
    return window.innerWidth <= 768 || 'ontouchstart' in window
  }

  // Handle trajectory image click
  roadmapContainer.addEventListener('click', () => {
    zoomContainer.classList.add('active')
    document.body.style.overflow = 'hidden' // Prevent scrolling when zoom is active
  })

  // Handle collective classes image click
  classesContainer.addEventListener('click', () => {
    classesZoom.classList.add('active')
    document.body.style.overflow = 'hidden' // Prevent scrolling when zoom is active
  })

  // Close zoom view for all close buttons
  closeButtons.forEach((closeBtn) => {
    closeBtn.addEventListener('click', (e) => {
      e.stopPropagation() // Prevent event bubbling
      const parentZoom = closeBtn.closest('.zoom-container')
      if (parentZoom) {
        parentZoom.classList.remove('active')
        document.body.style.overflow = '' // Re-enable scrolling
      }
    })
  })

  // Close zoom view when clicking outside any image
  const zoomContainers = document.querySelectorAll('.zoom-container')
  zoomContainers.forEach((container) => {
    container.addEventListener('click', (e) => {
      if (e.target === container) {
        container.classList.remove('active')
        document.body.style.overflow = ''
      }
    })
  })

  // Close zoom view with escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && zoomContainer.classList.contains('active')) {
      zoomContainer.classList.remove('active')
      document.body.style.overflow = ''
    }
  })
})
</script>

<style scoped lang="scss" src="./style.scss"></style>
