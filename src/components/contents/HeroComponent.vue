<script lang="ts">
    export default {
        name: 'HeroComponent',
    };
</script>

<template>
    <section class="hero" id="topo" aria-labelledby="hero-title">
        <div class="hero-grid-pattern" aria-hidden="true"></div>
        <div class="container hero-inner">
            <div class="hero-copy reveal">
                <p class="eyebrow"><span class="eyebrow-dot"></span> agência boutique de marketing</p>
                <h1 id="hero-title">marcas com<br /><em>direção.</em></h1>
                <p class="hero-lede">Marketing não é sorte. É estratégia. E estratégia se constrói com direção.</p>
                <div class="hero-actions">
                    <a class="button button-primary" href="#contato">quero posicionar minha marca <span aria-hidden="true">↗</span></a>
                    <a class="text-link" href="#posicionamento">entender a destra <span aria-hidden="true">↓</span></a>
                </div>
            </div>

            <div class="hero-art reveal reveal-delay" aria-label="Elemento gráfico de direção">
                <div class="hero-art-glow"></div>
                <div class="hero-art-ring hero-art-ring-one"></div>
                <div class="hero-art-ring hero-art-ring-two"></div>
                <svg class="hero-arrow" viewBox="0 0 520 390" role="img" aria-label="Seta amarela apontando para cima e para a direita">
                    <path d="M35 74 307 190 35 305V214l145-24-145-25Z" fill="none" stroke="currentColor" stroke-width="3" />
                    <path d="m265 190 150-78-42 78 42 78Z" fill="none" stroke="currentColor" stroke-width="3" />
                </svg>
                <span class="hero-art-caption">criatividade<br />com intenção</span>
                <span class="hero-art-index">01<span>/04</span></span>
            </div>
        </div>
        <div class="hero-footline container">
            <span>estratégia que constrói presença</span>
            <span class="line"></span>
            <span>scroll para descobrir <span aria-hidden="true">↓</span></span>
        </div>
    </section>
</template>