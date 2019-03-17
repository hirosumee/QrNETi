<template>
  <v-layout row wrap>
    <v-flex xs12 sm8 md8>
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
    <v-flex xs12 sm4 md4>
      <ImageShower />
    </v-flex> </v-layout
></template>

<script>
import ImageShower from '../ImageShower'
import OneField from './OneField'
import Customer from './Customer'

export default {
  name: 'Encode',
  components: { OneField, ImageShower, Customer },
  data: function() {
    return {
      styles: [
        {
          name: 'Mặc định',
          component: 'OneField'
        },
        {
          name: 'Thông tin khách hàng',
          component: 'Customer'
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

<style scoped></style>
