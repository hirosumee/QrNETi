<template>
  <v-form v-model="valid">
    <v-container>
      <v-layout>
        <v-flex xs12 md4>
          <v-text-field v-model="fullname" label="Họ và tên"></v-text-field>
        </v-flex>

        <v-flex xs12 md4>
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="Email cá nhân"
          ></v-text-field>
        </v-flex>
        <v-flex xs12 md4>
          <v-text-field
            v-model="businessEmail"
            :rules="emailRules"
            label="Email doanh nghiệp"
          ></v-text-field>
        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex xs12 md4>
          <v-text-field
            v-model="phone"
            label="Số điện thoại cá nhân"
            :rules="phoneRules"
          ></v-text-field>
        </v-flex>

        <v-flex xs12 md4>
          <v-text-field
            v-model="businessPhone"
            :rules="phoneRules"
            label="Số điện thoại doanh nghiệp"
          ></v-text-field>
        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex>
          <v-text-field v-model="address" label="Địa chỉ"></v-text-field>
        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex>
          <v-text-field v-model="description" label="Mô tả"></v-text-field>
        </v-flex>
      </v-layout>
    </v-container>
  </v-form>
</template>

<script>
export default {
  name: 'Customer',
  data: function() {
    return {
      valid: false,
      fullname: '',
      email: '',
      businessEmail: '',
      phone: '',
      businessPhone: '',
      address: '',
      description: '',
      phoneRules: [
        v => /0[0-9\s.-]{9,13}/.test(v) || 'Số điện thoại sai định dạng'
      ],
      emailRules: [v => /.+@.+/.test(v) || 'Email sai định dạng']
    }
  },
  computed: {
    value: function() {
      const {
        fullname,
        email,
        businessEmail,
        phone,
        businessPhone,
        address,
        description
      } = this
      let start = 'BEGIN:VCARD\nVERSION:3.0'
      const end = `REV:${new Date().toISOString()}\nEND:VCARD`
      if (fullname) {
        start += `N:${fullname}\n`
        start += `FN:${fullname}\n`
      }
      if (phone) {
        start += `TEL;TYPE=HOME,VOICE:${phone}\n`
      }
      if (businessPhone) {
        start += `TEL;TYPE=WORK,VOICE:${businessPhone}\n`
      }
      if (address) {
        start += `ADR;TYPE=WORK,PREF:;;${address}\n`
        start += `LABEL;TYPE=WORK,PREF:${address}\n`
      }
      if (email) {
        start += `EMAIL;TYPE=HOME:${email}\n`
      }
      if (businessEmail) {
        start += `EMAIL;TYPE=WORK:${businessEmail}\n`
      }
      if (description) {
        start += `DESCRIPTION:${description}\n`
      }
      return start + end
    }
  },
  watch: {
    value: function(nextValue) {
      this.$store.dispatch('updateValue', nextValue)
    }
  }
}
</script>

<style scoped></style>
