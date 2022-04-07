<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-form
        ref="form"
        v-model="valid"
        lazy-validation
      >
        <v-text-field
          v-model="form.username"
          :rules="usernameRules"
          label="Username"
          required
        ></v-text-field>

        <v-text-field
            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show ? 'text' : 'password'"
            name="input-10-2"
            label="Password"
            class="input-group--focused"
            @click:append="show = !show"
            v-model="form.password"
          ></v-text-field>
        <v-btn
          :disabled="!valid"
          color="success"
          class="mr-4"
          @click="validate"
        >
          Validate
        </v-btn>
      </v-form>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'IndexPage',
  data () {
    return {
      show: false,
      form: { username: null, password: null },
      valid: true,
      usernameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 100) || 'Name must be less than 10 characters'
      ]
    }
  },
  methods: {
    async validate () {
      const valid = this.$refs.form.validate()
      if (valid) {
        try {
          await this.$strapi.login({
            identifier: this.form.username,
            password: this.form.password
          })
          console.log(this.$strapi.user)
        } catch (error) {
          console.error(error)
        }
      }
    }
  }
}
</script>
