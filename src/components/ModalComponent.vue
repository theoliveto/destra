<script setup lang="ts">
    const aberto = defineModel<boolean>({ default: false })

    function fechar() {
        aberto.value = false
    }
</script>

<template>
    <div 
        v-if="aberto"
        class="modal" 
        role="dialog" 
        aria-modal="true" 
        aria-labelledby="modal-title"
        @keydown.esc="fechar"
    >
        <div class="modal-backdrop" @click="fechar"></div>
        <div class="modal-panel" role="document">
            <button 
                class="modal-close" 
                type="button" 
                aria-label="Fechar formulário" 
                @click="fechar"
            >×</button>
            <div class="section-tag"><span>briefing</span> vamos conversar</div>
            <h2 id="modal-title">conte o que<br /><span>você imagina.</span></h2>
            <p class="modal-lede">Preencha os campos e seu cliente de e-mail abrirá uma mensagem pronta para a Destra.</p>
            <form class="contact-form" data-email-form>
                <label>nome<input name="nome" type="text" autocomplete="name" placeholder="Como podemos te chamar?" required /></label>
                <label>e-mail<input name="email" type="email" autocomplete="email" placeholder="voce@empresa.com" required /></label>
                <label>marca<input name="marca" type="text" autocomplete="organization" placeholder="Nome da marca" required /></label>
                <label class="form-full">sobre o projeto<textarea name="projeto" rows="4" placeholder="Qual é o momento e o desafio da sua marca?" required></textarea></label>
                <button class="button button-primary form-submit" type="submit">abrir e-mail <span aria-hidden="true">↗</span></button>
                <p class="form-status" data-form-status role="status"></p>
            </form>
        </div>
    </div>
</template>