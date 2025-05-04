<template>
  <div class="services-section">
    <!-- Cabeçalho de serviços - Visível em todos os dispositivos -->
    <SectionHeader subtitle="Serviços" />

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
      ref="swiperInstance"
      :updateOnWindowResize="true"
      @slideChange="handleSlideChange"
    >
      <SwiperSlide v-for="(item, index) in items" :key="index">
        <ImageSlider :items="[item]" :shouldCollapse="collapseStates[index]" />
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, FreeMode } from 'swiper/modules'
import { ref, onMounted } from 'vue'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'
import SectionHeader from '../SectionHeader/SectionHeader.vue'
import ImageSlider from '../ImageSlider/ImageSlider.vue'

// Import image directly
import presenteiImage from '@/assets/images/presentei.jpg'
import analisePosturalImage from '@/assets/images/analise-postural.png'
import bemEstarImage from '@/assets/images/bem.jpg'
import personalImage from '@/assets/images/IMG_9020.jpg'
import programacaoImage from '@/assets/images/Feminino.png'

const modules = [Pagination, FreeMode]
const swiperInstance = ref(null)
const items = ref([
  {
    title: 'Atendimento Personalizado',
    description:
      'Um <span class="highlight">personal trainer</span> ao seu lado do início ao fim do treino, gerando <strong>segurança</strong> e <span class="highlight">acompanhamento constante</span>.<br><br>' +
      'Treinos <strong>atualizados todos os meses</strong> para você não cair na rotina, com <span class="highlight">estímulos variados</span> que seus músculos precisam para evoluir.<br><br>' +
      'Desenvolvimento focado em <span class="highlight">performance</span>, <span class="highlight">estética</span> e <span class="highlight">reabilitação</span> — tudo com o <strong>suporte individualizado</strong> que você merece.',
    imageUrl: personalImage
  },
  {
    title: 'Setor de Programação PRIME',
    description:
      'Atendimento totalmente <span class="highlight">individualizado</span> para montar o treino <strong>ideal para você</strong>.<br><br>' +
      'Avaliações frequentes da sua <span class="highlight">performance</span>, <strong>evolução muscular</strong> e <strong>composição corporal</strong>.<br>' +
      'Treino de musculação com integração de:<br>' +
      '• <strong>Pilates</strong> e <span class="highlight">fortalecimento articular</span><br>' +
      '• <strong>Fisioterapia</strong> para <span class="highlight">correção postural</span><br>' +
      '• <strong>Treinamento funcional</strong> e <span class="highlight">definição abdominal</span><br><br>' +
      'Sem necessidade de agendamento! Treinos <span class="highlight">dinâmicos</span>, <strong>motivadores</strong> e <strong>100% focados</strong> nos seus objetivos.',
    imageUrl: programacaoImage
  },

  {
    title: 'PRIME - Análise Postural',
    description:
      '<strong>Análise do aluno:</strong> <br><br>' +
      '<span class="highlight">Avaliação Postural:</span> Quadril inclinado e <strong>pelve desalinhada</strong> (rotação e elevação). ' +
      'Abdômen projetado, <span class="highlight">hiperlordose</span> e <strong>joelhos valgos</strong> (direito em recurvato).<br><br>' +
      '<span class="highlight">Objetivos do Treinamento</span> (4 a 5 sessões semanais de ~1h):<br><br>' +
      '• Fortalecer <span class="highlight">romboides</span>, <strong>latíssimo</strong>, serrátil, flexores cervicais, <strong>trapézio</strong>, quadríceps e isquiotibiais.<br>' +
      '• Alongar <span class="highlight">trapézio superior</span>, <strong>peitoral</strong>, paravertebrais, <strong>isquiotibiais</strong> e bíceps braquial.<br>' +
      '• Estabilizar <span class="highlight">CORE</span>, fortalecer <strong>ombros</strong>, <strong>coluna</strong>, pelve e <span class="highlight">cintura escapular</span>.<br>' +
      '• Melhorar <span class="highlight">mobilidade</span> de <strong>quadril</strong>, ombros e tornozelos.<br>' +
      '• Aumentar <strong>disposição</strong>, <span class="highlight">resistência cardiorrespiratória</span> e <strong>função digestiva</strong>.<br>' +
      '• <span class="highlight">Realinhar postura</span>, aumentar <strong>massa magra</strong> e promover <strong>emagrecimento</strong>.',
    imageUrl: analisePosturalImage
  },
  {
    title: 'Prime Day',
    description:
      'Uma <strong>aula gratuita</strong> para você nos conhecer!<br><br>' +
      'Agende sua aula e venha experimentar o <span class="highlight">novo jeito</span> de cuidar do seu <strong>corpo e mente</strong>. Aproveite essa <span class="highlight">oportunidade exclusiva</span> para dar o primeiro passo rumo à sua <strong>melhor versão</strong>.',
    imageUrl: bemEstarImage
  },
  {
    title: 'PRIME CARD',
    description:
      'Presenteie com <span class="highlight">Experiências Especiais</span>. O <strong>PRIME CARD</strong> é um voucher para surpreender quem você ama com <span class="highlight">Momentos Inesquecíveis</span>. Escolha seu <strong>presente</strong>. Planos <span class="highlight">semestrais ou anuais</span> para criar <strong>sorrisos e memórias</strong>.',
    imageUrl: presenteiImage
  }
])

// Estado para controlar o colapso de cada slide
const collapseStates = ref(Array(items.value.length).fill(false))

// Função para lidar com a mudança de slide
const handleSlideChange = (swiper) => {
  // Quando mudamos de slide, queremos colapsar todos os cards
  // Definimos todos como true para acionar o colapso em todos os slides
  collapseStates.value = collapseStates.value.map(() => true)

  // Depois de um pequeno delay, resetamos todos para false
  // para permitir que os cards possam ser expandidos novamente
  setTimeout(() => {
    collapseStates.value = collapseStates.value.map(() => false)
  }, 100)
}

// Garante que o swiper seja atualizado quando o componente for montado
onMounted(() => {
  setTimeout(() => {
    if (swiperInstance.value && swiperInstance.value.swiper) {
      swiperInstance.value.swiper.update()
    }
  }, 500)
})
</script>

<style scoped lang="scss" src="./style.scss"></style>
