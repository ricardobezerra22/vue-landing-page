<template>
  <div class="example-page">
    <h2 class="section-title">Nossos Serviços</h2>
    <p class="section-subtitle">Conheça as opções que a Prime Fitness oferece para você</p>
    
    <ImageSlider :items="servicesItems" />
  </div>
</template>

<script setup>
import ImageSlider from '@/components/ImageSlider/ImageSlider.vue'
import { ref } from 'vue'

// Dados para o carrossel de serviços
const servicesItems = ref([
  {
    title: 'PRIME CARD',
    description: 'Presenteie com <strong>Experiências Especiais</strong>. O <span class="highlight">PRIME CARD</span> é um voucher para surpreender quem você ama com <strong>Momentos Inesquecíveis</strong>. Escolha seu presente. Planos semestrais ou anuais para criar sorrisos e memórias.',
    imageUrl: '@/assets/images/presentei.jpg'
  },
  {
    title: 'Musculação',
    description: 'Ganhe <strong>Massa Muscular</strong> e defina seu corpo com <span class="highlight">Programas Personalizados</span> de treinamento de força.',
    backgroundImage: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80'
  },
  {
    title: 'Yoga e Pilates',
    description: 'Aumente sua <strong>Flexibilidade</strong>, fortaleça o core e <span class="highlight">Reduza o Estresse</span> com nossas aulas de yoga e pilates.',
    backgroundImage: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
  },
  {
    title: 'Cardio e HIIT',
    description: 'Queime <strong>Calorias</strong> e melhore seu <span class="highlight">Condicionamento Cardiovascular</span> com treinos de alta intensidade.',
    backgroundImage: 'https://images.unsplash.com/photo-1434682881908-b43d0467b798?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80'
  },
  {
    title: 'Nutrição Esportiva',
    description: 'Receba <strong>Orientação Nutricional</strong> personalizada para <span class="highlight">Otimizar seus Resultados</span> e melhorar sua saúde.',
    backgroundImage: 'https://images.unsplash.com/photo-1532384748853-8f54a8f476e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
  },
  {
    title: 'Aulas Coletivas',
    description: 'Participe de <strong>Aulas em Grupo</strong> motivadoras e divertidas, como <span class="highlight">Dança, Spinning e Circuito Funcional</span>.',
    backgroundImage: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
  }
])
</script>

<style scoped lang="scss">
@import '@/styles/global.scss';

.example-page {
  padding: 4rem 1rem;
  background-color: #f8f9fa;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  color: $primary;
  margin-bottom: 0.5rem;
}

.section-subtitle {
  text-align: center;
  font-size: 1.2rem;
  color: #666;
  max-width: 800px;
  margin: 0 auto 3rem;
}

@media (max-width: 768px) {
  .example-page {
    padding: 3rem 1rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .section-subtitle {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
}
</style>
