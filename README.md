# Hitbox Vue Composable

> Minimal example of how to use `useHitbox()` to trigger animated floating numbers on an element.

## 🔧 Usage

```vue
<template>
  <div>
    <button ref="plus" @click="() => trigger(plus, 1)">+1</button>
    <button ref="minus" @click="() => trigger(minus, -1)">-1</button>
  </div>
</template>

<script setup>
const { trigger } = useHitbox()
const plus = ref(null)
const minus = ref(null)
</script>
