/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { ActionTree } from 'vuex';
import { db } from 'boot/firebase';
import { StateInterface } from '../index';
import { CustomerStateInterface } from './state';

const customersRef = db.collection('mailer');

const actions: ActionTree<CustomerStateInterface, StateInterface> = {
  async addMailer({ commit }, payload) {
    const mailer = await customersRef.add({ payload });
    commit('setMailer', mailer);
  },
  async fetchMailer({ commit }) {
    const payload: {
      id: string;
      email: string;
      serviceClient: string;
      privateKey: string;
      domainUrl: string;
    }[] = [];

    const query = await customersRef.get();
    query.forEach((doc) => {
      payload.push({
        id: doc.id,
        email: doc.data().payload.email,
        serviceClient: doc.data().payload.serviceClient,
        privateKey: doc.data().payload.privateKey,
        domainUrl: doc.data().payload.domainUrl,
      });
      commit('setMailer', payload);
    });
  },
  // async updateMailer({ commit }, payload) {
  //   const mailer = await customersRef.doc(payload.id).update({ payload });
  // dispatch('customer/fetchMailer', null, { root: true });
  // },
  async deletedMailer({ dispatch }, id) {
    await customersRef.doc(id).delete();
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    dispatch('customer/fetchMailer', null, { root: true });
  },
};

export default actions;
