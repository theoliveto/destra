<script lang="ts">
    export default {
        name: 'ServicesComponent',
    };
</script>

<template>
    <section class="services section-dark" id="servicos" aria-labelledby="services-title">
        <div class="container">
            <div class="section-heading reveal">
                <div class="section-tag color-subtitle"><span>|</span> o que fazemos</div>
                <h2 id="services-title">estratégia que<br /><span>vira movimento.</span></h2>
                <p>Do primeiro roteiro ao corte final, abrimos cada frente de trabalho só quando ela faz sentido para a direção da sua marca.</p>
            </div>

            <div class="services-list services-accordion">
                <article class="service-row service-accordion is-open reveal" data-accordion>
                    <button class="service-trigger" type="button" aria-expanded="true" aria-controls="service-detail-01">
                        <i class="fa-solid fa-caret-right color-topic"></i><span class="service-name"><strong>posicionamento<br /><em>de marca</em></strong></span><span class="service-arrow" aria-hidden="true">↗</span>
                    </button>
                    <div class="service-detail" id="service-detail-01"><p>Definimos o território que sua marca ocupa, a história que ela conta e o lugar que deseja conquistar.</p></div>
                </article>
                <article class="service-row service-accordion reveal" data-accordion>
                    <button class="service-trigger" type="button" aria-expanded="false" aria-controls="service-detail-02">
                        <i class="fa-solid fa-caret-right color-topic"></i><span class="service-name"><strong>direção<br /><em>criativa</em></strong></span><span class="service-arrow" aria-hidden="true">↗</span>
                    </button>
                    <div class="service-detail" id="service-detail-02"><p>Conectamos conceito, estética e intenção para que cada escolha criativa tenha um porquê.</p></div>
                </article>
                <article class="service-row service-accordion reveal" data-accordion>
                    <button class="service-trigger" type="button" aria-expanded="false" aria-controls="service-detail-03">
                        <i class="fa-solid fa-caret-right color-topic"></i><span class="service-name"><strong>produção<br /><em>audiovisual</em></strong></span><span class="service-arrow" aria-hidden="true">↗</span>
                    </button>
                    <div class="service-detail" id="service-detail-03"><p>Do roteiro à captação, criamos filmes, reels e peças que carregam a marca para além do feed.</p></div>
                </article>
                <article class="service-row service-accordion reveal" data-accordion>
                    <button class="service-trigger" type="button" aria-expanded="false" aria-controls="service-detail-04">
                        <i class="fa-solid fa-caret-right color-topic"></i><span class="service-name"><strong>identidade<br /><em>verbal & visual</em></strong></span><span class="service-arrow" aria-hidden="true">↗</span>
                    </button>
                    <div class="service-detail" id="service-detail-04"><p>Traduzimos estratégia em personalidade, linguagem e sistemas visuais que fazem sua marca ser reconhecida.</p></div>
                </article>
                <article class="service-row service-accordion reveal" data-accordion>
                    <button class="service-trigger" type="button" aria-expanded="false" aria-controls="service-detail-05">
                        <i class="fa-solid fa-caret-right color-topic"></i><span class="service-name"><strong>conteúdo<br /><em>com intenção</em></strong></span><span class="service-arrow" aria-hidden="true">↗</span>
                    </button>
                    <div class="service-detail" id="service-detail-05"><p>Planejamos narrativas e formatos para transformar atenção em relacionamento, e relacionamento em negócio.</p></div>
                </article>
                <article class="service-row service-accordion reveal" data-accordion>
                    <button class="service-trigger" type="button" aria-expanded="false" aria-controls="service-detail-06">
                        <i class="fa-solid fa-caret-right color-topic"></i><span class="service-name"><strong>edição &<br /><em>finalização</em></strong></span><span class="service-arrow" aria-hidden="true">↗</span>
                    </button>
                    <div class="service-detail" id="service-detail-06"><p>Lapidamos ritmo, som e imagem para que o corte final seja tão estratégico quanto o primeiro frame.</p></div>
                </article>
                <article class="service-row service-accordion reveal" data-accordion>
                    <button class="service-trigger" type="button" aria-expanded="false" aria-controls="service-detail-07">
                        <i class="fa-solid fa-caret-right color-topic"></i><span class="service-name"><strong>presença<br /><em>digital</em></strong></span><span class="service-arrow" aria-hidden="true">↗</span>
                    </button>
                    <div class="service-detail" id="service-detail-07"><p>Colocamos a estratégia na rua com consistência, clareza e presença nos pontos de contato que importam.</p></div>
                </article>
            </div>
        </div>
    </section>
</template>

<style scoped>
    .color-topic {
        color: var(--yellow);
    }

    .color-subtitle {
        color: var(--paper);
    }
</style>