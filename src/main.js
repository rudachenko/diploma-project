import Vue from 'vue'
import Vuelidate from 'vuelidate'
import VueMeta from 'vue-meta'
import Paginate from 'vuejs-paginate'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import dateFilter from '@/filters/date.filter.js'
import currencyFilter from '@/filters/currency.filter.js'
import localizeFilter from '@/filters/localize.filter.js'
import tooltipDirective from '@/directives/tooltip.derictive.js'
import Loader from '@/components/Loader.vue'
import messagePlugin from '@/utils/message.plugin'
import '../node_modules/materialize-css/dist/js/materialize.min.js'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false

Vue.use(messagePlugin)
Vue.use(Vuelidate)
Vue.use(VueMeta)
Vue.filter('date', dateFilter)
Vue.directive('tooltip', tooltipDirective)
Vue.filter('currency', currencyFilter)
Vue.filter('localize', localizeFilter)
Vue.component('Loader', Loader)
Vue.component('Paginate', Paginate)


firebase.initializeApp({
  apiKey: "AIzaSyBA7jmgw8aD3DGBq1rTHQl_f0KD3GUup7w",
  authDomain: "vue-dip.firebaseapp.com",
  databaseURL: "https://vue-dip.firebaseio.com",
  projectId: "vue-dip",
  storageBucket: "vue-dip.appspot.com",
  messagingSenderId: "147155035957",
  appId: "1:147155035957:web:ec55eb4b6b772cf8198e7c",
  measurementId: "G-3PQRBQF9F2"
})

let app

firebase.auth().onAuthStateChanged( () => {
	if (!app){
		app = new Vue({
		  router,
		  store,
		  render: h => h(App)
		}).$mount('#app')
	}
})


