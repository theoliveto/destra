<script lang="ts">
    export default {
        name: 'PortfolioComponent',
    };
</script>

<template>
    <section class="portfolio" id="portfolio" aria-labelledby="portfolio-title">
        <div class="container">
            <div class="section-heading portfolio-heading reveal">
                <div class="section-tag"><span>|</span> direção em prática</div>
                <h2 id="portfolio-title">ideias que<br /><span>ganham forma.</span></h2>
                <p>Alguns recortes do que acontece quando estratégia e criatividade caminham na mesma direção.</p>
            </div>
            <div class="portfolio-grid">
                <a class="portfolio-card portfolio-card-featured reveal" href="#contato" aria-label="Conversar sobre um projeto de identidade de marca">
                    <div class="portfolio-card-visual visual-brand"><span class="visual-word">marca<br /><i>em movimento</i></span><span class="visual-arrow">↗</span></div>
                    <div class="portfolio-card-meta"><span>identidade</span><span>ver projeto ↗</span></div>
                </a>
                <a class="portfolio-card reveal" href="#contato" aria-label="Conversar sobre um projeto audiovisual">
                    <div class="portfolio-card-visual visual-film"><span class="film-label">frame<br /><b>story / direction</b></span><span class="film-play">▶</span></div>
                    <div class="portfolio-card-meta"><span>audiovisual</span><span>ver projeto ↗</span></div>
                </a>
                <a class="portfolio-card reveal" href="#contato" aria-label="Conversar sobre um projeto de conteúdo">
                    <div class="portfolio-card-visual visual-content"><span class="content-shape">conteúdo<br /><b>com intenção.</b></span></div>
                    <div class="portfolio-card-meta"><span>conteúdo</span><span>ver projeto ↗</span></div>
                </a>
            </div>
        </div>
    </section>
</template>