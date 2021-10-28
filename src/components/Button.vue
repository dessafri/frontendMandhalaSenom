<template>
  <button class="btn btn-outline-primary" type="button">
    {{ msg }}
  </button>
</template>
<script>
export default {
  name: 'Button',
  props: {
    msg: String,
  },
}
</script>
