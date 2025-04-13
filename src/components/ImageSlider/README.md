# Componente ImageSlider

Este componente permite exibir um carrossel de cards com imagens e conteúdo expansível.

## Como usar

```vue
<template>
  <div>
    <h2>Nossos Serviços</h2>
    <ImageSlider :items="servicesItems" />
  </div>
</template>

<script setup>
import ImageSlider from '@/components/ImageSlider/ImageSlider.vue'
import { ref } from 'vue'

// Dados para o carrossel
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
  }
])
</script>
```

## Propriedades

O componente aceita as seguintes propriedades:

| Propriedade | Tipo | Descrição |
|-------------|------|-----------|
| items | Array | Array de objetos com os dados dos cards |

Cada item do array deve ter a seguinte estrutura:

```javascript
{
  title: String,          // Título do card
  description: String,    // Descrição do card (pode conter HTML)
  imageUrl: String,       // URL da imagem (se for uma imagem local)
  backgroundImage: String // URL da imagem de fundo (alternativa ao imageUrl)
}
```

## Funcionalidades

- Carrossel responsivo com paginação
- Cards com efeito de hover
- Botão "Ver mais" para expandir o conteúdo
- Suporte a HTML no conteúdo da descrição
- Suporte a imagens locais ou URLs externas
