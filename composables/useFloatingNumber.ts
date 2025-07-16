  export function useFloatingNumber() {
  function trigger(
    el: HTMLElement,
    value: number | string = 1,
    position: 'above' | 'below' = 'above'
  ) {
    // @ts-ignore
    const rect = (el?.$el || el).getBoundingClientRect()
    const div = document.createElement('div')
    div.className = 'floating-number'

    const num = typeof value === 'number' ? value : parseInt(`${value}`, 10)
    const isPositive = num > 0
    const display = typeof value === 'string' ? value : num > 0 ? `+${num}` : `${num}`

    div.textContent = display
    div.classList.add(isPositive ? 'positive' : 'negative')

    const yOffset = position === 'below' ? rect.bottom + 10 : rect.top - 10
    div.style.left = `${rect.left + rect.width / 2}px`
    div.style.top = `${yOffset + window.scrollY}px`

    document.body.appendChild(div)
    void div.offsetWidth // trigger reflow
    setTimeout(() => div.remove(), 1000)
  }

  return { trigger }
}
