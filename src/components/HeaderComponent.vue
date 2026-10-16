<script setup lang="ts">
    import { useScrollState } from '@/composables/useScrollState'

    const { isScrolled, progress } = useScrollState()
</script>
<template>
    <div class="scroll-progress" aria-hidden="true">
        <span :style="{ width: progress + '%' }"></span>
    </div>

    <header class="site-header" :class="{ 'is-scrolled': isScrolled }">
        <div class="container header-inner">
            <a class="brand" href="#topo" aria-label="Destra — voltar ao topo">
                <img src="/brand.png" alt="Destra" width="150" />
            </a>

            <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="site-nav" data-menu-toggle>
                <span></span><span></span>
                <span class="sr-only">Abrir menu</span>
            </button>

            <nav class="site-nav" id="site-nav" aria-label="Navegação principal" data-nav>
                <a href="#posicionamento">Posicionamento</a>
                <a href="#portfolio">Portfólio</a>
                <a href="#servicos">Serviços</a>
                <a href="#processo">Processo</a>
                <a class="nav-cta" href="#contato">falar com a destra <span aria-hidden="true">↗</span></a>
            </nav>
        </div>
    </header>
</template>
