<script lang="ts">
  export default {
    name: 'HomeView',
    components: {
      HeaderComponent: () => import('@/components/HeaderComponent.vue'),
      HeroComponent: () => import('@/components/contents/HeroComponent.vue'),
      StatementComponent: () => import('@/components/contents/StatementComponent.vue'),
      MarqueeComponent: () => import('@/components/contents/MarqueeComponent.vue'),
      PortfolioComponent: () => import('@/components/contents/PortfolioComponent.vue'),
      ServicesComponent: () => import('@/components/contents/ServicesComponent.vue'),
      ProcessComponent: () => import('@/components/contents/ProcessComponent.vue'),
      ContactComponent: () => import('@/components/contents/ContactComponent.vue'),
      FooterComponent: () => import('@/components/FooterComponent.vue'),
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
