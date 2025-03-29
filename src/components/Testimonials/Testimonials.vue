<template>
  <section class="testimonials-section">
    <!-- Cabeçalho de depoimentos - Visível apenas em mobile -->
    <div class="testimonials-header-mobile">
      <v-btn variant="outlined" rounded color="primary" class="text-primary testimonials-button"
        >Depoimentos</v-btn
      >
      <h3 class="section-title text-primary">Transformações Reais</h3>
    </div>
    <div class="testimonials-header-desktop">
      <SectionHeader title="Depoimentos" subtitle="Transformações Reais" />
    </div>
    <div class="testimonials-grid">
      <div class="video-container">
        <div class="video-card">
          <video
            controls
            poster="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          >
            <source
              src="https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>

        <div class="cta-card">
          <div class="cta-content">
            <h3>Agende uma <span class="highlight">experimental</span> hoje!</h3>
            <p>
              Descubra como nosso <span class="highlight">método exclusivo</span> pode <span class="highlight">transformar</span> seu corpo e sua saúde em apenas
              <strong>30 dias</strong>. Treinadores <span class="highlight">especializados</span>, professores
              <strong>atenciosos</strong> e um plano <span class="highlight">personalizado</span> para seus objetivos.
            </p>
          </div>
          <div class="cta-actions">
            <button class="cta-button">200+</button>
            <div class="cta-stats">
              <p class="stats-text">Vidas</p>
              <p class="stats-label">Transformadas</p>
            </div>
            <v-btn icon="mdi-whatsapp" variant="text" color="terracotta"></v-btn>
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
import SectionHeader from '../SectionHeader/SectionHeader.vue'
</script>

<style lang="scss" scoped src="./style.scss"></style>
