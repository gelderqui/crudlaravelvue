/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue').default;

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))
import CategoriaComponent from './components/Categoria.vue';
Vue.component('categoria', CategoriaComponent);
//Tambien se puede llamar de la otra forma mejor rendimiento
//Vue.component("ExampleComponent", () => import("./components/ExampleComponent"));


/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    data :{
        menu : 0,
                //ruta: 'http://panaderia.atwebpages.com/public_html'
          ruta: 'http://localhost:80/principal/2crudlaravelvue/public'
         //ruta: 'http://192.168.0.105:80/sistemaprestamo/public'
         
         //ruta: 'http://crudlaravelvue.gelderqui.com/public'
    }
});
