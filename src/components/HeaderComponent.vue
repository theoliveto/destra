<script lang="ts">
    export default {
        name: 'HeaderComponent',
    };
</script>

<template>
    <header class="site-header" data-header>
        <div class="container header-inner">
            <a class="brand" href="#topo" aria-label="Destra — voltar ao topo">
                <img src="/src/assets/images/logo.svg" alt="Destra" width="125" height="125" />
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
