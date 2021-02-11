<template>
  <q-page class="row">
    <q-table
      :grid="$q.screen.xs"
      title="Customer Registration"
      :data="mailer"
      :columns="columns"
      row-key="name"
      :filter="filter"
      class="col-12"
    >
      <template v-slot:top-right>
        <q-input borderless dense debounce="300" v-model="filter" placeholder="Search">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>

      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="email" :props="props">
            {{ props.row.email }}
          </q-td>
          <q-td key="serviceClient" :props="props">
            {{ props.row.serviceClient }}
          </q-td>
          <q-td key="privateKey" :props="props">
              {{ props.row.privateKey }}
          </q-td>
          <q-td key="domainUrl" :props="props">
              {{ props.row.domainUrl }}
          </q-td>
          <!-- <q-td key="id" :props="props">
            <q-btn color="red" @click="deletedMailer(props.row.id)">
              Delete
            </q-btn>
          </q-td> -->
        </q-tr>
      </template>
    </q-table>
  </q-page>
</template>

<script lang="ts">
import { Mailer } from 'components/models';
import { defineComponent, ref } from '@vue/composition-api';
import { mapActions, mapGetters } from 'vuex';

export default defineComponent({
  name: 'PageAdmin',
  setup() {
    const mailers = ref<Mailer[]>([]);
    const filter = '';
    const columns = [
      {
        name: 'email',
        required: true,
        label: 'Email',
        align: 'left',
        field: 'email',
        sortable: true,
      },
      {
        name: 'serviceClient', align: 'center', label: 'Service Client', field: 'serviceClient', sortable: true,
      },
      {
        name: 'privateKey', label: 'Private Key', field: 'privateKey', sortable: true,
      },
      {
        name: 'domainUrl', label: 'Domain Url', field: 'domainUrl', sortable: true,
      },
      // {
      //   name: 'id', label: 'Action', field: 'id',
      // },
    ];

    return {
      mailers, filter, columns,
    };
  },
  computed: {
    ...mapGetters('customer', ['mailer']),
  },
  created() {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    this.fetchMailer();
  },
  methods: {
    ...mapActions('customer', ['fetchMailer', 'deletedMailer']),
  },
});
</script>
