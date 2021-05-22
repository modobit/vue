 const app = Vue.createApp({

     data() {
         return {

             boxASelected: false,
             boxBSelected: false,
             boxCSelected: false,
             textSelect: 'Box Select',
             enteredGoalValue: '',
             goals: [],
             heading: 'Welcome to vue tutorial',
             goaladded: 'Adding Goals',

             link_google: 'https://google.com/',
             link_yahoo: 'https://yahoo.com',
             counter: 0,
             name: '',
             dummytext: 'Maecenas faucibus mollis interdum. Cras mattis consectetur purus sit amet fermentum. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec sed odio dui. Donec sed odio dui.'
         }
     },

     methods: {

         addGoal() {
             this.goals.push(this.enteredGoalValue);
             

         },

         removeGoal(idx)
         {
             this.goals.splice(idx, 1);
         },

         boxSelected(box) {
             if (box === 'A') {
                 this.boxASelected = !this.boxASelected;
                 this.textSelect = 'Selected'
                 console.log("Cliked")
             } else if (box === 'B') {
                 this.boxBSelected = !this.boxBSelected;
                 this.textSelect = 'Selected'
                 console.log("Cliked")

             } else if (box === 'C') {
                 this.boxCSelected = !this.boxCSelected;
                 this.textSelect = 'Selected'
                 console.log("Cliked")

             }
         },

         setName(event) {
             this.name = event.target.value;
         },

         addCounter() {
             this.counter = this.counter + 1;
         },

         currentDateTime() {
             const current = new Date();
             const date = current.getFullYear() + '-' + (current.getMonth() + 1) + '-' + current.getDate();
             const time = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds();
             const dateTime = date + ' ' + time;

             return dateTime;
         },

         randomNumber() {
             this.random = Math.floor(Math.random() * (10999444 - 1 + 1)) + 1
             return this.random
         }
     }


 });

 app.mount('#myapp');