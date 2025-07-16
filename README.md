# Floating Number

> Minimal example of how to use `useFloatingNumber()` to trigger animated floating numbers on an element.

## 🔧 Usage

```vue
<template>
  <div>
    <button ref="el" @click="() => trigger(el.value, 1)">+1</button>
    <button ref="el" @click="() => trigger(el.value, -1)">-1</button>
  </div>
</template>

<script setup>
const el = ref(null)
const { trigger } = useFloatingNumber()
</script>
