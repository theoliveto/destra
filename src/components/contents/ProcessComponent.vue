<script lang="ts">
    export default {
        name: 'ProcessComponent',
    };
</script>

<template>
    <section class="process" id="processo" aria-labelledby="process-title">
        <div class="container process-grid">
            <div class="process-intro reveal" v-reveal>
                <div class="section-tag"><span>|</span> como fazemos</div>
                <h2 id="process-title">menos achismo.<br /><span>mais direção.</span></h2>
                <p>Um processo próximo, provocador e feito para encontrar o que torna seu negócio impossível de ignorar.</p>
            </div>
            <div class="process-steps">
                <article class="process-step reveal" v-reveal>
                    <div class="step-top"><span>01</span><span class="step-symbol">↘</span></div>
                    <h3>mergulho</h3>
                    <p>Investigamos o negócio, o mercado e as ambições por trás da marca.</p>
                </article>
                <article class="process-step reveal" v-reveal>
                    <div class="step-top"><span>02</span><span class="step-symbol">↘</span></div>
                    <h3>direção</h3>
                    <p>Transformamos descobertas em escolhas claras de posicionamento e linguagem.</p>
                </article>
                <article class="process-step reveal" v-reveal>
                    <div class="step-top"><span>03</span><span class="step-symbol">↘</span></div>
                    <h3>movimento</h3>
                    <p>Colocamos a estratégia na rua com presença consistente e intenção.</p>
                </article>
            </div>
        </div>
    </section>
</template>