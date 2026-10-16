import { ref, onMounted, onBeforeUnmount } from 'vue'

export function useScrollState(threshold = 30) {
    const isScrolled = ref(false)
    const progress = ref(0)
    let ticking = false

    function update() {
        isScrolled.value = window.scrollY > threshold

        const scrollable = document.documentElement.scrollHeight - window.innerHeight
        progress.value = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0

        ticking = false
    }

    function onScroll() {
        if (ticking) return
        ticking = true
        requestAnimationFrame(update)
    }

    onMounted(() => {
        update()
        window.addEventListener('scroll', onScroll, { passive: true })
        window.addEventListener('resize', onScroll, { passive: true })
    })

    onBeforeUnmount(() => {
        window.removeEventListener('scroll', onScroll)
        window.removeEventListener('resize', onScroll)
    })

    return { isScrolled, progress }
}