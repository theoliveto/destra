<script lang="ts">
  import { defineAsyncComponent } from 'vue'

  export default {
    name: 'HomeView',
    components: {
      HeaderComponent: defineAsyncComponent(() => import('@/components/HeaderComponent.vue')),
      HeroComponent: defineAsyncComponent(() => import('@/components/contents/HeroComponent.vue')),
      StatementComponent: defineAsyncComponent(() => import('@/components/contents/StatementComponent.vue')),
      MarqueeComponent: defineAsyncComponent(() => import('@/components/contents/MarqueeComponent.vue')),
      PortfolioComponent: defineAsyncComponent(() => import('@/components/contents/PortfolioComponent.vue')),
      ServicesComponent: defineAsyncComponent(() => import('@/components/contents/ServicesComponent.vue')),
      ProcessComponent: defineAsyncComponent(() => import('@/components/contents/ProcessComponent.vue')),
      ContactComponent: defineAsyncComponent(() => import('@/components/contents/ContactComponent.vue')),
      FooterComponent: defineAsyncComponent(() => import('@/components/FooterComponent.vue')),
    },
  }
</script>

<template>
  <header-component />

  <main id="conteudo">
    <hero-component />

    <statement-component />

    <marquee-component />

    <portfolio-component />

    <services-component />

    <process-component />

    <contact-component />
  </main>

  <footer-component />
</template>
