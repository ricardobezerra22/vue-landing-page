<template>
  <div class="home-container">
    <section class="hero-section">
      <div class="hero-content">
        <h1>Transform Your Body, Transform Your Life</h1>
        <p>Join Prime Fitness and experience our personalized approach to fitness</p>
        <button class="primary-button">Start Your Journey</button>
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
</script>

<style scoped lang="scss" src="./style.scss"></style>
