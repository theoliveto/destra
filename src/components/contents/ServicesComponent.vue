<script setup lang="ts">
    import { ref } from 'vue'

    interface Servico {
        linha1: string
        linha2: string
        descricao: string
    }

    const servicos: Servico[] = [
        { linha1: 'posicionamento', linha2: 'de marca', descricao: 'Definimos o território que sua marca ocupa, a história que ela conta e o lugar que deseja conquistar.' },
        { linha1: 'direção', linha2: 'criativa', descricao: 'Conectamos conceito, estética e intenção para que cada escolha criativa tenha um porquê.' },
        { linha1: 'produção', linha2: 'audiovisual', descricao: 'Do roteiro à captação, criamos filmes, reels e peças que carregam a marca para além do feed.' },
        { linha1: 'identidade', linha2: 'verbal & visual', descricao: 'Traduzimos estratégia em personalidade, linguagem e sistemas visuais que fazem sua marca ser reconhecida.' },
        { linha1: 'conteúdo', linha2: 'com intenção', descricao: 'Planejamos narrativas e formatos para transformar atenção em relacionamento, e relacionamento em negócio.' },
        { linha1: 'edição &', linha2: 'finalização', descricao: 'Lapidamos ritmo, som e imagem para que o corte final seja tão estratégico quanto o primeiro frame.' },
        { linha1: 'presença', linha2: 'digital', descricao: 'Colocamos a estratégia na rua com consistência, clareza e presença nos pontos de contato que importam.' },
    ]

    const abertoIndex = ref<number | null>(0)

    function alternar(index: number) {
        abertoIndex.value = abertoIndex.value === index ? null : index
    }
</script>

<template>
    <section class="services section-dark" id="servicos" aria-labelledby="services-title">
        <div class="container">
            <div class="section-heading reveal" v-reveal>
                <div class="section-tag color-subtitle"><span>|</span> o que fazemos</div>
                <h2 id="services-title">estratégia que<br /><span>vira movimento.</span></h2>
                <p>Do primeiro roteiro ao corte final, abrimos cada frente de trabalho só quando ela faz sentido para a direção da sua marca.</p>
            </div>

            <div class="services-list services-accordion">
                <article
                    v-for="(servico, i) in servicos"
                    :key="servico.linha1"
                    class="service-row service-accordion reveal" v-reveal
                    :class="{ 'is-open': abertoIndex === i }"
                >
                    <button
                        class="service-trigger"
                        type="button"
                        :aria-expanded="abertoIndex === i"
                        :aria-controls="`service-detail-${i + 1}`"
                        @click="alternar(i)"
                    >
                        <i class="fa-solid fa-caret-right color-topic"></i>
                        <span class="service-name">
                            <strong>{{ servico.linha1 }}<br /><em>{{ servico.linha2 }}</em></strong>
                        </span>
                        <span class="service-arrow" aria-hidden="true">↗</span>
                    </button>
                    <div class="service-detail" :id="`service-detail-${i + 1}`">
                        <p>{{ servico.descricao }}</p>
                    </div>
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