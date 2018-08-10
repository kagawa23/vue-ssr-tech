import App from './app.vue';
import Vue from 'vue';

import '../assets/img.svg'
import '../assets/an_go.png'
import '../styles/style.styl'

const root = document.createElement('root');
document.appendChild(root);

new Vue({
    render:(h) => h(App)
}).$mount()