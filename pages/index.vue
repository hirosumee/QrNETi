<template>
  <v-layout row>
    <v-flex xs6 sm8 md8>
      <div class="container">
        <v-tabs dark max>
          <v-tab v-for="(style, index) in styles" :key="index">{{
            style.name
          }}</v-tab>
          <v-tab-item v-for="(style, index) in styles" :key="index">
            <v-card flat>
              <component :is="style.component"></component>
              <div>
                <v-btn color="info" @click="createQr">Tạo QrCode</v-btn>
              </div>
            </v-card>
          </v-tab-item>
        </v-tabs>
      </div>
    </v-flex>
    <v-flex xs6 sm4 md4>
      <ImageShower />
    </v-flex>
  </v-layout>
</template>
<style lang="scss" scoped>
.container {
  /*width: 500px;*/
}
</style>
<script>
import Url from '../components/Tab/Url'
import ImageShower from '../components/ImageShower'
import Customer from '../components/Tab/Customer'

export default {
  components: { Url, ImageShower, Customer },
  data: function() {
    return {
      styles: [
        {
          name: 'Url',
          text: 'Url này',
          component: 'Url'
        },
        {
          name: 'Số điện thoại',
          text: 'số điện thoại này',
          component: 'Url'
        },
        {
          name: 'Thông tin khách hàng',
          component: 'Customer'
        },
        {
          name: 'Tùy chỉnh',
          text: 'Tùy chỉnh này',
          component: 'Url'
        }
      ]
    }
  },
  methods: {
    createQr() {
      this.$store.dispatch('updateHandleValue')
    }
  }
}
</script>
