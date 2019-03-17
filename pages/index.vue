<template>
  <v-tabs dark max>
    <v-tab>Mã hóa</v-tab>
    <v-tab> Giải mã</v-tab>
    <v-tab-item><Encode></Encode></v-tab-item>
    <v-tab-item><Decode></Decode></v-tab-item>
  </v-tabs>
</template>
<style lang="scss" scoped>
.container {
  /*width: 500px;*/
}
</style>
<script>
import Encode from '../components/Tab/Encode'
import Decode from '../components/Tab/Decode'
export default {
  components: { Decode, Encode }
}
</script>
