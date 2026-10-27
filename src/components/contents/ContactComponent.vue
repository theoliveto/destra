<script setup lang="ts">
    import { ref } from 'vue'
    import ModalComponent from '../ModalComponent.vue'

    const modalAberto = ref(false)

    const WHATSAPP_NUMERO = '554999806486'
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(
        'Olá! Gostaria de conversar sobre um projeto.'
    )}`
</script>

<template>
    <section class="contact" id="contato" aria-labelledby="contact-title">
        <div class="contact-shape" aria-hidden="true">
            <img src="/logo-white.png" alt="Contact Shape">
        </div>
        <div class="container contact-inner">
            <div class="section-tag section-tag-dark reveal" v-reveal><span>|</span> próximo passo</div>
            <h2 id="contact-title" class="reveal mb" v-reveal>
                sua marca já tem potencial.<br /><span>vamos dar direção?</span>
            </h2>
            <p class="contact-copy reveal" v-reveal>Conte um pouco sobre o momento do seu negócio. A primeira conversa é onde a estratégia começa.</p>
            
            <div class="contact-actions reveal" v-reveal>
                <button class="button button-dark" type="button" @click="modalAberto = true">
                    enviar briefing por e-mail <span aria-hidden="true">↗</span>
                </button>
                <a
                    class="contact-whatsapp"
                    :href="whatsappUrl"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    ou falar via whatsapp <span aria-hidden="true">↗</span>
                </a>
            </div>
        </div>
    </section>

    <Teleport to="body">
        <ModalComponent v-model="modalAberto" />
    </Teleport>
</template>

<style>
    .mb {
        margin-bottom: 50px;
    }
</style>