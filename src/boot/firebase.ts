import { boot } from 'quasar/wrappers';
import firebase from 'firebase/app';
import 'firebase/firestore'; // eslint-disable-line

const firebaseConfig = {
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
  appId: '',
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default boot(({ Vue }) => {
  // Initialize Firebase from settings
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  Vue.prototype.$firebase = firebase;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  Vue.prototype.$db = db;
});

export { db };
