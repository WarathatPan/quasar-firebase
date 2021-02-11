<template>
  <q-page class="row">
    <q-form
      @submit.prevent="customerRegistration()"
      class="col-12"
    >
      <div class="row">
        <div class="col-6 q-pa-md">
          <label for="sender">Email</label>
          <q-input
            outlined
            v-model="form.email"
            label="Email"
            :rules="[val => !!val || 'Field is required']"
          />
        </div>

        <div class="col-6 q-pa-md">
          <label for="sender">Service Client</label>
          <q-input
            outlined
            v-model="form.serviceClient"
            label="Service Client"
            :rules="[val => !!val || 'Field is required']"
          />
        </div>

        <div class="col-6 q-pa-md">
          <label for="sender">Private Key</label>
          <q-input
            outlined
            v-model="form.privateKey"
            label="Private Key"
            :rules="[val => !!val || 'Field is required']"
          />
        </div>

        <div class="col-6 q-pa-md">
          <label for="sender">Domain Url</label>
          <q-input
            outlined
            v-model="form.domainUrl"
            label="Domain Url"
            :rules="[val => !!val || 'Field is required']"
          />
        </div>

        <div class="col-12 q-pa-md text-center">
          <q-btn label="Submit" type="submit" color="primary"/>
        </div>
      </div>
    </q-form>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api';

export default defineComponent({
  name: 'PageAdmin',
  setup() {
    const form = ref({
      email: '',
      serviceClient: '',
      privateKey: '',
      domainUrl: '',
    });

    return { form };
  },
  methods: {
    async customerRegistration() {
      const customer = {
        email: this.form.email,
        serviceClient: this.form.serviceClient,
        privateKey: this.form.privateKey,
        domainUrl: this.form.domainUrl,
      };

      await this.$store.dispatch('customer/addMailer', customer)
        .then(() => {
          this.$router.replace({ name: 'admin' })
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            .catch(() => {
            });
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        }).catch(() => {
        });
    },
  },
});
</script>
