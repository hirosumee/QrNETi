<template>
  <div class="container">
    <v-layout row wrap align-center>
      <v-flex xs12 sm3 md3>
        <v-layout column wrap>
          <div class="upload-btn-wrapper">
            <v-btn color="info" block>Upload</v-btn>
            <input type="file" @change="onChange($event)" />
          </div>
          <div>
            <img id="img-decode" />
          </div>
        </v-layout>
      </v-flex>
      <v-flex xs12 sm8 md8 offset-sm1 offset-md1>
        <v-alert
          :value="alert"
          type="error"
          transition="scale-transition"
          dismissible
        >
          Có vẻ ảnh không hợp lệ hoặc không thể tìm thấy mã của bạn
        </v-alert>
        <v-textarea
          v-model="decodedData"
          name="input-7-1"
          label="Dữ liệu"
        ></v-textarea>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import QrCode from 'qrcode-reader'
export default {
  name: 'Decode',
  data: function() {
    return {
      data: null,
      decodedData: '',
      alert: false
    }
  },
  methods: {
    onChange(e) {
      const imageType = /^image\//
      const file = e.target.files[0]
      if (file && imageType.test(file.type)) {
        const reader = new FileReader()
        const qr = new QrCode()
        qr.callback = (err, result) => {
          if (!err) {
            this.decodedData = result.result
          } else {
            this.alert = true
            setTimeout(() => {
              this.alert = false
            }, 2000)
          }
        }
        reader.onload = function(e) {
          this.data = e.target.result
          const img = document.getElementById('img-decode')
          img.src = this.data
          qr.decode(this.data)
        }
        reader.readAsDataURL(file)
      }
      e.target.value = ''
      //
    }
  }
}
</script>

<style scoped>
#img-decode {
  width: 100%;
  max-height: 500px;
}
.container {
  margin-top: 10px;
}
.upload-btn-wrapper {
  position: relative;
  overflow: hidden;
  display: inline-block;
  /*margin: auto;*/
}

.upload-btn-wrapper input[type='file'] {
  font-size: 100px;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
}
</style>
