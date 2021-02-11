import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { CustomerStateInterface } from './state';

const getters: GetterTree<CustomerStateInterface, StateInterface> = {
  mailer(state) {
    return state.mailer;
  },
};

export default getters;
