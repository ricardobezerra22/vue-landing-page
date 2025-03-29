<template>
  <div class="home-container">
    <section class="hero-section">
      <div class="hero-content">
        <h1>Transform Your Body, Transform Your Life</h1>
        <p>Join Prime Fitness and experience our personalized approach to fitness</p>
        <button class="primary-button">Start Your Journey</button>
      </div>
    </section>
    <section class="helper-section">
      <div class="helper-container">
        <div class="helper-video-container">
          <div class="helper-cta-card">
            <div class="cta-content">
              <span class="feature-tag">ABORDAGEM EXCLUSIVA</span>
              <h3>Compreendemos o Ser Humano em sua totalidade</h3>
              <p>
                Integramos Corpo, Mente e Energia em nossa abordagem única, refletindo a essência da
                Metodologia PRIME.
              </p>
              <p>
                Acolhemos cada fase da sua jornada, oferecendo cuidado personalizado e uma nova
                consciência sobre treinamento para uma vida mais saudável.
              </p>
            </div>
            <div class="cta-actions">
              <button class="secondary-button">SAIBA MAIS SOBRE NÓS</button>
            </div>
          </div>

          <div class="video-card">
            <div class="video-overlay"></div>
            <video controls>
              <source src="@/assets/videos/video-demonstrativo.mp4" type="video/mp4" />
              Seu navegador não suporta a reprodução de vídeos.
            </video>
          </div>
        </div>
      </div>
    </section>
    <section class="roadmap-section">
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
          <p><strong>ENTENDA PORQUE NÃO SOMOS UMA</strong></p>
          <h4>ACADEMIA TRADICIONAL</h4>
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
    <section class="services-section">
      <Services />
    </section>
    <section class="testimonials-section">
      <Testimonials />
    </section>
  </div>
</template>

<script setup>
import Testimonials from '@/components/Testimonials/Testimonials.vue'
import Services from '@/components/Services/Services.vue'
import SectionHeader from '@/components/SectionHeader/SectionHeader.vue'
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
