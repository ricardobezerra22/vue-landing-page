<template>
  <section class="testimonials-section">
    <!-- Cabeçalho de depoimentos - Visível apenas em mobile -->

    <div class="testimonials-header">
      <SectionHeader title="Depoimentos" subtitle="Transformações Reais" />
    </div>
    <div class="testimonials-grid">
      <div class="video-container">
        <!-- Carousel de vídeos com controles de navegação -->
        <div class="video-carousel">
          <!-- Controles de navegação laterais para telas maiores -->
          <button 
            class="carousel-control-overlay prev" 
            @click="prevVideo"
            :disabled="currentVideoIndex === 0"
            aria-label="Vídeo anterior"
            title="Vídeo anterior"
          >
            <v-icon icon="mdi-arrow-left-thick"></v-icon>
          </button>
          
          <button 
            class="carousel-control-overlay next" 
            @click="nextVideo"
            :disabled="currentVideoIndex === videos.length - 1"
            aria-label="Próximo vídeo"
            title="Próximo vídeo"
          >
            <v-icon icon="mdi-arrow-right-thick"></v-icon>
          </button>
          
          <div 
            class="carousel-container" 
            ref="carouselContainer"
            @touchstart="handleTouchStart"
            @touchmove="handleTouchMove"
            @touchend="handleTouchEnd"
          >
            <div
              v-for="(video, index) in videos"
              :key="video.id"
              class="video-card"
              :class="{ active: currentVideoIndex === index }"
            >
              <!-- Placeholder para vídeos não ativos -->
              <div 
                class="video-placeholder" 
                v-if="currentVideoIndex !== index"
                @click="goToVideo(index)"
                role="button"
                :aria-label="`Reproduzir vídeo ${index + 1}`"
              >
                <div class="placeholder-icon">
                  <v-icon icon="mdi-play-circle" size="large" color="white"></v-icon>
                </div>
              </div>

              <!-- Estado de carregamento -->
              <div v-if="currentVideoIndex === index && isLoading" class="video-loading">
                <div class="loading-spinner">
                  <div class="spinner"></div>
                </div>
                <p class="loading-text">Carregando vídeo...</p>
              </div>

              <!-- iframe do YouTube -->
              <iframe
                v-if="currentVideoIndex === index"
                width="100%"
                height="100%"
                :src="getEmbedUrl(video.url)"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                loading="lazy"
                @load="handleVideoLoaded"
                style="opacity: 0; transition: opacity 0.3s ease"
                :style="{ opacity: isLoading ? 0 : 1 }"
              ></iframe>
            </div>
          </div>

          <!-- Controles de navegação do carousel -->
          <div class="carousel-controls">
            <button 
              class="carousel-control prev" 
              @click="prevVideo"
              :disabled="currentVideoIndex === 0"
              aria-label="Vídeo anterior"
              title="Vídeo anterior"
            >
              <v-icon icon="mdi-arrow-left"></v-icon>
            </button>

            <div class="carousel-indicators">
              <button
                v-for="(video, index) in videos"
                :key="index"
                class="indicator"
                :class="{ active: currentVideoIndex === index }"
                @click="goToVideo(index)"
                :aria-label="`Ir para vídeo ${index + 1}`"
                :title="`Vídeo ${index + 1}`"
              ></button>
            </div>

            <button
              class="carousel-control next"
              @click="nextVideo"
              :disabled="currentVideoIndex === videos.length - 1"
              aria-label="Próximo vídeo"
              title="Próximo vídeo"
            >
              <v-icon icon="mdi-arrow-right"></v-icon>
            </button>
          </div>
        </div>

        <div class="cta-card">
          <div class="cta-content">
            <h3>Agende uma <span class="highlight">experimental</span> hoje!</h3>
            <p>
              Descubra como nosso <span class="highlight">método exclusivo</span> pode
              <span class="highlight">transformar</span> seu corpo e sua saúde em apenas
              <strong>30 dias</strong>. Treinadores <span class="highlight">especializados</span>,
              professores <strong>atenciosos</strong> e um plano
              <span class="highlight">personalizado</span> para seus objetivos.
            </p>
          </div>
          <div class="cta-actions">
            <button class="cta-button">200+</button>
            <div class="cta-stats">
              <p class="stats-text">Vidas</p>
              <p class="stats-label">Transformadas</p>
            </div>
            <v-btn
              icon="mdi-whatsapp"
              variant="text"
              color="terracotta"
              href="https://wa.me/5500000000000?text=Olá!%20Gostaria%20de%20agendar%20uma%20aula%20experimental%20na%20Prime%20Fitness."
              target="_blank"
              rel="noopener noreferrer"
            ></v-btn>
          </div>
        </div>
      </div>

      <div class="testimonials-column">
        <div class="testimonial-card">
          <div class="testimonial-author">
            <div
              class="author-avatar"
              style="
                background-image: url('https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1476&q=80');
                background-size: cover;
              "
            ></div>
            <div class="author-info">
              <h4>Carolina Silva</h4>
              <p class="author-title">Aluna há 8 meses</p>
            </div>
          </div>
          <p class="testimonial-text">
            "Depois de dois filhos, achei que nunca mais recuperaria minha forma. Na Prime Fitness
            encontrei não só um treino eficiente, mas uma nova mentalidade sobre saúde. Perdi 12kg
            em 6 meses e ganhei uma energia que não tinha há anos. Os professores são incríveis!"
          </p>
          <div class="rating">
            <span class="star">★</span>
            <span class="star">★</span>
            <span class="star">★</span>
            <span class="star">★</span>
            <span class="star">★</span>
          </div>
        </div>

        <div class="testimonial-divider"></div>

        <div class="testimonial-card">
          <div class="testimonial-author">
            <div
              class="author-avatar"
              style="
                background-image: url('https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80');
                background-size: cover;
              "
            ></div>
            <div class="author-info">
              <h4>Marcos Oliveira</h4>
              <p class="author-title">Aluno do programa de força</p>
            </div>
          </div>
          <p class="testimonial-text">
            "Comecei na Prime Fitness após uma lesão nas costas que me limitava muito. O
            acompanhamento personalizado fez toda diferença - em 3 meses, não só eliminei as dores
            como ganhei massa muscular e melhorei minha postura. O método deles realmente funciona!"
          </p>
          <div class="rating">
            <span class="star">★</span>
            <span class="star">★</span>
            <span class="star">★</span>
            <span class="star">★</span>
            <span class="star">★</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import SectionHeader from '../SectionHeader/SectionHeader.vue'

// Lista de vídeos do YouTube
const videos = [
  { id: 1, url: 'https://youtube.com/shorts/ws8oQyXirHk' },
  { id: 2, url: 'https://youtube.com/shorts/OnbfGMxnlIc' },
  { id: 3, url: 'https://youtube.com/shorts/kVF09sd90No' }
]

// Estado do carousel
const currentVideoIndex = ref(0)
const carouselContainer = ref(null)
const isLoading = ref(true)

// Funções de navegação
const nextVideo = () => {
  if (currentVideoIndex.value < videos.length - 1) {
    isLoading.value = true
    currentVideoIndex.value++
  }
}

const prevVideo = () => {
  if (currentVideoIndex.value > 0) {
    isLoading.value = true
    currentVideoIndex.value--
  }
}

const goToVideo = (index) => {
  if (currentVideoIndex.value !== index) {
    isLoading.value = true
    currentVideoIndex.value = index
  }
}

// Função para lidar com o carregamento do vídeo
const handleVideoLoaded = () => {
  // Pequeno atraso para garantir que o vídeo esteja realmente pronto
  setTimeout(() => {
    isLoading.value = false
  }, 500)
}

// Converter URL do YouTube para URL de incorporação
const getEmbedUrl = (url) => {
  // Converter shorts para formato de incorporação
  if (url.includes('youtube.com/shorts/')) {
    const videoId = url.split('/').pop().split('?')[0]
    return `https://www.youtube.com/embed/${videoId}?autoplay=0&rel=0`
  }
  return url
}

// Variáveis para controle de swipe
const touchStartX = ref(0)
const touchEndX = ref(0)
const touchThreshold = 50 // Distância mínima para considerar um swipe

// Funções para controle de swipe
const handleTouchStart = (e) => {
  touchStartX.value = e.touches[0].clientX
}

const handleTouchMove = (e) => {
  touchEndX.value = e.touches[0].clientX
}

const handleTouchEnd = () => {
  const swipeDistance = touchEndX.value - touchStartX.value
  
  // Se o swipe for significativo
  if (Math.abs(swipeDistance) > touchThreshold) {
    if (swipeDistance > 0) {
      // Swipe para a direita - vídeo anterior
      prevVideo()
    } else {
      // Swipe para a esquerda - próximo vídeo
      nextVideo()
    }
  }
  
  // Reset dos valores
  touchStartX.value = 0
  touchEndX.value = 0
}

// Ajustar proporção do vídeo com base na largura da tela
const adjustVideoRatio = () => {
  if (window.innerWidth >= 768) {
    // Proporção 16:9 para telas maiores
    document.documentElement.style.setProperty('--video-aspect-ratio', '16/9')
  } else {
    // Proporção 9:16 para mobile
    document.documentElement.style.setProperty('--video-aspect-ratio', '9/16')
  }
}

// Adicionar eventos de teclado para acessibilidade e ajustar proporção
onMounted(() => {
  if (carouselContainer.value) {
    carouselContainer.value.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
        prevVideo()
      } else if (e.key === 'ArrowRight') {
        nextVideo()
      }
    })
  }
  
  // Ajustar proporção inicialmente
  adjustVideoRatio()
  
  // Ajustar proporção quando a janela for redimensionada
  window.addEventListener('resize', adjustVideoRatio)
})
</script>

<style lang="scss" scoped src="./style.scss"></style>
