<template>
  <div class="home-container">
    <Navbar />
    <section id="hero" class="hero-section">
      <div class="hero-content">
        <h1>Mais que uma academia, um estilo de vida!</h1>
        <p>Reabilitação e condicionamento integrados para uma vida em equilíbrio</p>
        <a 
          href="https://wa.me/5500000000000?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20a%20Prime%20Fitness." 
          target="_blank" 
          rel="noopener noreferrer" 
          class="primary-button animated-button"
        >
          Transforme Sua Vida Hoje
        </a>
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
              <button class="secondary-button">SAIBA MAIS SOBRE NÓS</button>
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
      <SectionHeader title="METODOLOGIA" subtitle="Sua Trajetória" />
      <div class="roadmap">
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
                Nossa abordagem exclusiva de reabilitação integrada guia você através de 4 etapas
                estratégicas para recuperação completa e fortalecimento. Clique para visualizar em
                detalhes.
              </p>
            </div>
          </div>
        </div>
        <div class="roadmap-tagline">
          <p class="roadmap-tagline-text"><strong>ENTENDA PORQUE NÃO SOMOS UMA</strong></p>
          <h4>ACADEMIA <span class="underline">TRADICIONAL</span></h4>
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
        <div class="roadmap-container">
          <div class="roadmap-card">
            <div class="roadmap-card-front">
              <img
                src="@/assets/images/aulas-coletivas.png"
                alt="Prime Fitness - Aulas Coletivas"
              />
            </div>
          </div>
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
  // Get elements
  const roadmapContainer = document.querySelector('.roadmap-container')
  const zoomContainer = document.querySelector('.zoom-container')
  const closeZoom = document.querySelector('.close-zoom')

  // Detect if device is mobile
  const isMobile = () => {
    return window.innerWidth <= 768 || 'ontouchstart' in window
  }

  // Handle roadmap click
  roadmapContainer.addEventListener('click', () => {
    // On mobile, just open the zoom view directly
    zoomContainer.classList.add('active')
    document.body.style.overflow = 'hidden' // Prevent scrolling when zoom is active
  })

  // Close zoom view
  closeZoom.addEventListener('click', (e) => {
    e.stopPropagation() // Prevent event bubbling
    zoomContainer.classList.remove('active')
    document.body.style.overflow = '' // Re-enable scrolling
  })

  // Close zoom view when clicking outside the image
  zoomContainer.addEventListener('click', (e) => {
    if (e.target === zoomContainer) {
      zoomContainer.classList.remove('active')
      document.body.style.overflow = ''
    }
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
