import { useFloatingNumber } from '@/composables/useFloatingNumber'

export default {
  mounted(el: HTMLElement, binding: any) {
    const { trigger } = useFloatingNumber()
    el.addEventListener('pointerdown', () => {
      const { quantity = 1, position = 'above' } = binding.value || {}
      trigger(el, quantity, position)
    })
  }
}
