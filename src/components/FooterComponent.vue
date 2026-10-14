<script lang="ts">
    export default {
        name: 'FooterComponent',
    };
</script>

<template>
    <footer class="site-footer">
        <div class="container footer-inner">
            <a class="brand brand-footer" href="#topo" aria-label="Destra — voltar ao topo">
                <img src="/src/assets/images/logo.svg" alt="Destra" width="125" height="125" />
            </a>
            <p>estratégia que constrói presença.</p>
            <div class="footer-meta">
                <span>© <span data-year></span> destra</span>
                <a href="#topo">voltar ao topo ↑</a>
            </div>
        </div>
    </footer>
</template>