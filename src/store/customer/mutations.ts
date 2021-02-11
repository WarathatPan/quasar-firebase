import { MutationTree } from 'vuex';
import { CustomerStateInterface } from './state';

const mutation: MutationTree<CustomerStateInterface> = {
  setMailer(state: CustomerStateInterface, payload) {
    state.mailer = payload;
  },
};

export default mutation;
