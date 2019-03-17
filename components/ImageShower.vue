<template>
  <div class="qr-image-container">
    <div>
      <qrcode-vue :value="value" :size="size" level="H"></qrcode-vue>
    </div>
    <div class="img-footer">
      <v-btn color="info" @click="download">
        Download <v-icon right dark>cloud_download</v-icon></v-btn
      >
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import QrcodeVue from 'qrcode.vue'
export default {
  name: 'ImageShower',
  components: {
    QrcodeVue
  },
  data: function() {
    return {
      size: 300
    }
  },
  computed: {
    ...mapGetters(['value'])
  },
  methods: {
    download: function() {
      const link = document.createElement('a')
      link.download = `qrcode-${new Date().getTime()}.png`
      const canvas = document.getElementsByTagName('canvas')[0]
      if (canvas) {
        link.href = canvas.toDataURL()
        link.click()
      }
    }
  }
}
</script>

<style scoped lang="scss">
.qr-image-container {
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  > div {
    margin: auto;
  }
}
</style>
