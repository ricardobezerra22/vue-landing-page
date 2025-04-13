<template>
  <button class="zoom-btn" @click.stop="openFullImage(imageUrl)" title="Ver imagem ampliada">
    <v-icon icon="mdi-eye" size="small"></v-icon>
  </button>
</template>

<script setup>
defineProps({
  imageUrl: {
    type: String,
    required: true
  }
})

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
</script>

<style scoped lang="scss" src="./style.scss"></style>
