<template>
  <div class="image-slider">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="service-card"
      :class="{ 'card-expanded': expandedCards[index] }"
    >
      <div class="image-container">
        <img v-if="item.imageUrl" class="service-image" :src="item.imageUrl" :alt="item.title" />
        <div
          v-else-if="item.backgroundImage"
          class="service-image"
          :style="{ backgroundImage: `url('${item.backgroundImage}')` }"
        ></div>
        <button 
          class="zoom-btn" 
          @click.stop="openFullImage(item.imageUrl || item.backgroundImage)" 
          title="Ver imagem ampliada"
        >
          <v-icon icon="mdi-eye" size="small"></v-icon>
        </button>
      </div>

      <div class="service-content" :class="{ expanded: expandedCards[index] }">
        <h3 class="text-primary">{{ item.title }}</h3>
        <p v-html="item.description"></p>
        <button
          class="read-more-btn"
          @click.stop="toggleExpand(index)"
          :aria-expanded="expandedCards[index]"
        >
          <span>{{ expandedCards[index] ? 'Ver menos' : 'Ver mais' }}</span>
          <span class="icon">{{ expandedCards[index] ? '▲' : '▼' }}</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { VIcon } from 'vuetify/components'

const props = defineProps({
  items: {
    type: Array,
    required: true,
    default: () => []
  },
  shouldCollapse: {
    type: Boolean,
    default: false
  }
})

// Inicializa o array de estados expandidos com base no número de itens
const expandedCards = ref(Array(props.items.length).fill(false))

// Atualiza o array de estados quando os itens mudam
watch(
  () => props.items.length,
  (newLength) => {
    expandedCards.value = Array(newLength).fill(false)
  }
)

// Observa mudanças na prop shouldCollapse para colapsar todos os cards
watch(
  () => props.shouldCollapse,
  (newValue) => {
    if (newValue) {
      // Colapsa todos os cards
      expandedCards.value = expandedCards.value.map(() => false)
    }
  }
)

const toggleExpand = (index) => {
  expandedCards.value[index] = !expandedCards.value[index]
}

// Função para abrir a imagem em tamanho completo
const openFullImage = (imageUrl) => {
  if (!imageUrl) return
  
  // Cria um elemento modal para exibir a imagem ampliada
  const modal = document.createElement('div')
  modal.style.position = 'fixed'
  modal.style.top = '0'
  modal.style.left = '0'
  modal.style.width = '100%'
  modal.style.height = '100%'
  modal.style.backgroundColor = 'rgba(0, 0, 0, 0.9)'
  modal.style.display = 'flex'
  modal.style.justifyContent = 'center'
  modal.style.alignItems = 'center'
  modal.style.zIndex = '9999'
  modal.style.cursor = 'pointer'
  
  // Cria a imagem ampliada
  const img = document.createElement('img')
  img.src = imageUrl
  img.style.maxWidth = '90%'
  img.style.maxHeight = '90%'
  img.style.objectFit = 'contain'
  img.style.border = '2px solid white'
  img.style.boxShadow = '0 0 20px rgba(0, 0, 0, 0.5)'
  
  // Adiciona a imagem ao modal
  modal.appendChild(img)
  
  // Fecha o modal ao clicar
  modal.addEventListener('click', () => {
    document.body.removeChild(modal)
  })
  
  // Adiciona o modal ao body
  document.body.appendChild(modal)
}

// Garante que o array de estados tenha o mesmo tamanho que o array de itens
onMounted(() => {
  if (expandedCards.value.length !== props.items.length) {
    expandedCards.value = Array(props.items.length).fill(false)
  }
})
</script>

<style scoped lang="scss" src="./style.scss"></style>
