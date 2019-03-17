<template>
  <div class="url-tab">
    <v-text-field label="Nhập dữ liệu" @change="updateValue"></v-text-field>
  </div>
</template>

<script>
export default {
  name: 'OneField',
  data: function() {
    return {
      url: ''
    }
  },
  computed: {
    value: function() {
      return this.url
    }
  },
  methods: {
    updateValue(i) {
      this.url = i
      this.$store.dispatch('updateValue', this.value)
    }
  }
}
</script>

<style scoped lang="scss">
.url-tab {
  margin: 10px;
}
</style>
