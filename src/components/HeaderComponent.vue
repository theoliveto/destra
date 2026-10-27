<script setup lang="ts">
    import { ref } from 'vue'
    import { useScrollState } from '@/composables/useScrollState'

    const { isScrolled, progress } = useScrollState()

    const isMenuOpen = ref(false)

    const toggleMenu = () => {
        isMenuOpen.value = !isMenuOpen.value
    }

    const closeMenu = () => {
        isMenuOpen.value = false
    }
</script>

<template>
    <div class="scroll-progress" aria-hidden="true">
        <span :style="{ width: progress + '%' }"></span>
    </div>

    <header class="site-header" :class="{ 'is-scrolled': isScrolled }">
        <div class="container header-inner">
            <a 
                class="brand" 
                href="#topo" 
                aria-label="Destra — voltar ao topo"
                @click="closeMenu"
            >
                <img src="/brand.png" alt="Destra" width="150" />
            </a>

            <button 
                class="menu-toggle" 
                type="button" 
                :aria-expanded="isMenuOpen" 
                aria-controls="site-nav" 
                :aria-label="isMenuOpen ? 'Fechar menu' : 'Abrir menu'"
                @click="toggleMenu"
            >
                <span></span>
                <span></span>
            </button>

            <nav 
                id="site-nav" 
                class="site-nav" 
                :class="{ 'is-open': isMenuOpen }"
                aria-label="Navegação principal"
            >
                <a href="#posicionamento" @click="closeMenu">Posicionamento</a>
                <a href="#portfolio" @click="closeMenu">Portfólio</a>
                <a href="#servicos" @click="closeMenu">Serviços</a>
                <a href="#processo" @click="closeMenu">Processo</a>
                <a class="nav-cta" href="#contato" @click="closeMenu">
                    falar com a destra <span aria-hidden="true">↗</span>
                </a>
            </nav>
        </div>
    </header>
</template>
