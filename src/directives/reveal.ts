import type { Directive } from 'vue'

const observer =
    typeof IntersectionObserver !== 'undefined'
    ? new IntersectionObserver(
        (entries, obs) => {
            entries.forEach((e) => {
                if (!e.isIntersecting) return
                e.target.classList.add('is-visible')
                obs.unobserve(e.target)
            })
        },
        { threshold: 0.12 }
        )
    : null

export const vReveal: Directive<HTMLElement> = {
    mounted(el) {
        if (observer) observer.observe(el)
        else el.classList.add('is-visible')
    },

    unmounted(el) {
        observer?.unobserve(el)
    },
}