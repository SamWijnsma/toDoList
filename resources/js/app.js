require('./bootstrap');

import Vue from 'vue'
import App from './vue/app'
// window.Vue = require('vue').default
// Vue.config.devtools = true

// Vue.component('app-main', require('./vue/App.vue').default)
// Vue.component('app-todo', require('./vue/Todo.vue').default)

import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlusSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faPlusSquare, faTrash)

Vue.component('font-awesome-icon', FontAwesomeIcon)

const app = new Vue({
    el: '#app',
    components: { App }
   
});