<script setup lang="ts">
    const anoAtual = new Date().getFullYear()
</script>

<template>
    <footer class="site-footer">
        <div class="container footer-inner">
            <div class="footer-top">
                <a class="brand brand-footer" href="#topo" aria-label="Destra — voltar ao topo">
                    <img src="/brand.png" alt="Destra" width="150" />
                </a>
            </div>
            <div class="footer-meta">
                <span>© {{ anoAtual}} Destra</span>
                <span class="footer-credit">
                    Feito por
                    <a href="https://meu-portfolio-red-alpha.vercel.app/" target="_blank" rel="noopener noreferrer">
                        Oliveto Vinicius
                    </a>
                </span>
                <a href="#topo">voltar ao topo ↑</a>
            </div>
        </div>
    </footer>
</template>

<style scoped>
    .footer-top {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
    }

    .footer-tagline {
        margin: 0;
        text-align: left;
    }

    .footer-meta {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        flex-wrap: wrap;
    }

    .footer-credit a {
        color: inherit;
        text-decoration: underline;
    }

    @media (max-width: 600px) {
        .footer-top, .footer-meta {
            flex-direction: column;
            text-align: center;
        }

        .footer-tagline {
            text-align: center;
        }
    }
</style>