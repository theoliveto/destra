<script setup lang="ts">
    import { ref } from 'vue'
    import ModalComponent from '../ModalComponent.vue'

    const modalAberto = ref(false)
</script>

<template>
    <section class="contact" id="contato" aria-labelledby="contact-title">
        <div class="contact-shape" aria-hidden="true">
            <svg viewBox="0 0 400 330"><path d="M22 18 245 165 22 312V202l117-36L22 128Z" fill="none" stroke="currentColor" stroke-width="2" /><path d="m208 165 130-78-34 78 34 78Z" fill="none" stroke="currentColor" stroke-width="2" /></svg>
        </div>
        <div class="container contact-inner">
            <div class="section-tag section-tag-dark reveal"><span>05</span> próximo passo</div>
            <h2 id="contact-title" class="reveal">sua marca já tem potencial.<br /><span>vamos dar direção?</span></h2>
            <p class="contact-copy reveal">Conte um pouco sobre o momento do seu negócio. A primeira conversa é onde a estratégia começa.</p>
            
            <div class="contact-actions reveal">
                <button class="button button-dark" type="button" @click="modalAberto = true">
                    enviar briefing por e-mail <span aria-hidden="true">↗</span>
                </button>
                <a class="contact-whatsapp" data-whatsapp href="#">ou falar via whatsapp <span aria-hidden="true">↗</span></a>
            </div>
        </div>
    </section>

    <ModalComponent v-model="modalAberto" />
</template>