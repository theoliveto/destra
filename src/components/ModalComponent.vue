<script setup lang="ts">
    import { reactive, ref, watch, onBeforeUnmount } from 'vue'

    const FORMSPREE_ID = 'mqpewool'
    const FORMSPREE_URL = `https://formspree.io/f/${FORMSPREE_ID}`

    interface BriefingForm {
        nome: string
        email: string
        marca: string
        projeto: string
    }

    const aberto = defineModel<boolean>({ default: false })

    const form = reactive<BriefingForm>({ nome: '', email: '', marca: '', projeto: '' })
    const status = ref<'idle' | 'sending' | 'success' | 'error'>('idle')
    const errorMessage = ref('')

    function fechar() {
        aberto.value = false
    }

    function resetar() {
        form.nome = ''
        form.email = ''
        form.marca = ''
        form.projeto = ''
        status.value = 'idle'
        errorMessage.value = ''
    }

    async function enviar() {
        if (!FORMSPREE_ID) {
            errorMessage.value = 'Envio ainda não configurado.'
            status.value = 'error'
            return
        }

        status.value = 'sending'
        errorMessage.value = ''

        try {
            const response = await fetch(FORMSPREE_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify({
                    ...form,
                    _subject: `Novo briefing - ${form.marca}`,
                }),
            })

            if (!response.ok) throw new Error('Falha no envio')

            status.value = 'success'
            form.nome = ''
            form.email = ''
            form.marca = ''
            form.projeto = ''
        } catch {
            errorMessage.value = 'Não foi possível enviar agora. Tente novamente.'
            status.value = 'error'
        }
    }

    function onKeydown(e: KeyboardEvent) {
        if (e.key === 'Escape') fechar()
    }

    watch(aberto, (valor) => {
        if (valor) {
            window.addEventListener('keydown', onKeydown)
            document.body.style.overflow = 'hidden'
        } else {
            window.removeEventListener('keydown', onKeydown)
            document.body.style.overflow = ''
            resetar()
        }
    })

    onBeforeUnmount(() => {
        window.removeEventListener('keydown', onKeydown)
        document.body.style.overflow = ''
    })
</script>

<template>
    <Transition name="modal">
        <div 
            v-if="aberto"
            class="modal" 
            role="dialog" 
            aria-modal="true" 
            aria-labelledby="modal-title"
        >
            <div class="modal-backdrop" @click="fechar"></div>
            <div class="modal-panel" role="document">
                <button class="modal-close" type="button" aria-label="Fechar formulário" @click="fechar">×</button>

                <div class="section-tag"><span>briefing</span> vamos conversar</div>

                <h2 id="modal-title" class="modal-title-briefing">conte o que<br /><span>você imagina.</span></h2>

                <p class="modal-lede">Preencha os campos e seu cliente de e-mail abrirá uma mensagem pronta para a Destra.</p>

                <form class="contact-form" @submit.prevent="enviar">
                    <label>
                        nome
                        <input v-model.trim="form.nome" name="nome" type="text" autocomplete="name" placeholder="Como podemos te chamar?" required />
                    </label>

                    <label>
                        e-mail
                        <input v-model.trim="form.email" name="email" type="email" autocomplete="email" placeholder="voce@empresa.com" required />
                    </label>

                    <label>
                        marca
                        <input v-model.trim="form.marca" name="marca" type="text" autocomplete="organization" placeholder="Nome da marca" required />
                    </label>

                    <label class="form-full">
                        sobre o projeto
                        <textarea v-model.trim="form.projeto" name="projeto" rows="4" placeholder="Qual é o momento e o desafio da sua marca?" required></textarea>
                    </label>

                    <button class="button button-primary form-submit" type="submit" :disabled="status === 'sending'">
                        {{ status === 'sending' ? 'enviando...' : 'enviar briefing' }}
                        <span aria-hidden="true">↗</span>
                    </button>

                    <p class="form-status" role="status">
                        <template v-if="status === 'success'">Briefing enviado com sucesso. Em breve entraremos em contato.</template>
                        <template v-else-if="status === 'error'">{{ errorMessage }}</template>
                    </p>
                </form>
            </div>
        </div>
    </Transition>
</template>

<style scoped>
    .modal-title-briefing {
        font-size: 60px;
    }
</style>