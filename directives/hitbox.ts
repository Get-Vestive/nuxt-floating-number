/*!
 * Copyright (c) 2025 Vestive, LLC
 *
 * This source code is licensed under the MIT license.
 * See https://github.com/vestive/nuxt-hitbox/blob/main/LICENSE for details.
 */
import { useFloatingNumber } from '@/composables/useHitbox'

export default {
  mounted(el: HTMLElement, binding: any) {
    const { trigger } = useHitbox()
    el.addEventListener('pointerdown', () => {
      const { quantity = 1, position = 'above' } = binding.value || {}
      trigger(el, quantity, position)
    })
  }
}
