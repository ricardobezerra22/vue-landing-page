<template>
  <div class="services-section">
    <!-- Cabeçalho de serviços - Visível em todos os dispositivos -->
    <SectionHeader title="Serviços" subtitle="Transforme seu corpo e sua mente" />

    <Swiper
      :slidesPerView="1"
      :spaceBetween="30"
      :pagination="{ clickable: true }"
      :breakpoints="{
        '640': { slidesPerView: 2, spaceBetween: 20 },
        '768': { slidesPerView: 3, spaceBetween: 30 }
      }"
      :modules="modules"
      class="mySwiper"
    >
      <SwiperSlide>
        <div class="service-card">
          <div
            class="service-image"
            style="
              background-image: url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80');
            "
          ></div>
          <div class="service-content">
            <h3 class="text-primary">Treinamento Funcional</h3>
            <p>
              Melhore sua força, equilíbrio e mobilidade com exercícios que simulam movimentos do
              dia a dia.
            </p>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div class="service-card">
          <div
            class="service-image"
            style="
              background-image: url('https://images.unsplash.com/photo-1574680096145-d05b474e2155?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80');
            "
          ></div>
          <div class="service-content">
            <h3 class="text-primary">Musculação</h3>
            <p>
              Ganhe massa muscular e defina seu corpo com programas personalizados de treinamento de
              força.
            </p>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div class="service-card">
          <div
            class="service-image"
            style="
              background-image: url('https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80');
            "
          ></div>
          <div class="service-content">
            <h3 class="text-primary">Yoga e Pilates</h3>
            <p>
              Aumente sua flexibilidade, fortaleça o core e reduza o estresse com nossas aulas de
              yoga e pilates.
            </p>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div class="service-card">
          <div
            class="service-image"
            style="
              background-image: url('https://images.unsplash.com/photo-1434682881908-b43d0467b798?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80');
            "
          ></div>
          <div class="service-content">
            <h3 class="text-primary">Cardio e HIIT</h3>
            <p>
              Queime calorias e melhore seu condicionamento cardiovascular com treinos de alta
              intensidade.
            </p>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div class="service-card">
          <div
            class="service-image"
            style="
              background-image: url('https://images.unsplash.com/photo-1532384748853-8f54a8f476e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80');
            "
          ></div>
          <div class="service-content">
            <h3 class="text-primary">Nutrição Esportiva</h3>
            <p>
              Receba orientação nutricional personalizada para otimizar seus resultados e melhorar
              sua saúde.
            </p>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div class="service-card">
          <div
            class="service-image"
            style="
              background-image: url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80');
            "
          ></div>
          <div class="service-content">
            <h3 class="text-primary">Aulas Coletivas</h3>
            <p>
              Participe de aulas em grupo motivadoras e divertidas, como dança, spinning e circuito
              funcional.
            </p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, FreeMode } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'
import SectionHeader from '../SectionHeader/SectionHeader.vue'

const modules = [Pagination, FreeMode]
</script>

<style scoped lang="scss" src="./style.scss"></style>
