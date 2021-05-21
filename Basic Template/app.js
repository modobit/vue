 const app = Vue.createApp({

     data() {
         return {
             heading: 'Welcome to vue tutorial',

             dummytext: 'Maecenas faucibus mollis interdum. Cras mattis consectetur purus sit amet fermentum. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec sed odio dui. Donec sed odio dui.'
         }
     },

     methods: {
         currentDateTime() {
             const current = new Date();
             const date = current.getFullYear() + '-' + (current.getMonth() + 1) + '-' + current.getDate();
             const time = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds();
             const dateTime = date + ' ' + time;

             return dateTime;
         }
     }


 });

 app.mount('#myapp');