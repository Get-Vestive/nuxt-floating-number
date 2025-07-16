/*!
 * Copyright (c) 2025 Vestive, LLC
 *
 * This source code is licensed under the MIT license.
 * See https://github.com/vestive/nuxt-floating-number/blob/main/LICENSE for details.
 */
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
