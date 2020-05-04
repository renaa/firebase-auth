import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'



import * as firebase from 'firebase/app'

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyCj7EeQNc8NPJd90ewqBCt52rJGkcVmTAY",
  authDomain: "fir-auth-logrocket.firebaseapp.com",
  databaseURL: "https://fir-auth-logrocket.firebaseio.com",
  projectId: "fir-auth-logrocket",
  storageBucket: "fir-auth-logrocket.appspot.com",
  messagingSenderId: "379373513767",
  appId: "1:379373513767:web:628d0b8ad47032fca43202"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
