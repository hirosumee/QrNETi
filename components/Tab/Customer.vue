<template>
  <v-form v-model="valid">
    <v-container>
      <v-layout>
        <v-flex xs12 md4>
          <v-text-field v-model="fullname" label="First name"></v-text-field>
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
      return `BEGIN:VCARD
VERSION:3.0
FN:${fullname}
TEL;TYPE=HOME,VOICE:${phone}
TEL;TYPE=WORK,VOICE:${businessPhone}
ADR;TYPE=WORK,PREF:;;${address}
LABEL;TYPE=WORK,PREF:${address}
EMAIL;TYPE=HOME:${email}
EMAIL;TYPE=WORK:${businessEmail}
DESCRIPTION:${description}
REV:${new Date().toISOString()}
END:VCARD`
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
