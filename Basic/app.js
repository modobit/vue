const app = Vue.createApp({
    // data, functions,
    //template: '<h2>I am the first template</h2>'

    data() {
        return {
            showBooks: true,
            title: 'Final Empire',
            author: 'Jon Smith',
            age: 45,
            x: 0,
            y: 0,
            urlA: 'http://google.com',
            urlB: 'http://yahoo.com',

            books:
            [
                {title: 'Name of the wind', author: 'Jim', img: 'assets/1.jpg'},
                {title: 'Starwars, retuen of the jedi', author: 'Bob', img: 'assets/2.jpg'},
                {title: 'Shadows of the Beast', author: 'Smith', img: 'assets/3.jpg'}
            ]
        }
    },

    methods: {
        toggleShowBooks() {
            //inverse toggle books show
            this.showBooks = !this.showBooks
        },

        handleEvent(e) {
            console.log(e)
        },

        changeTitle() {
            console.log("Function title() called...")
            this.title = "Words of Randiance"
        },
        handlemousemove(e){
            this.x = e.offsetX
            this.y = e.offsetY

        }
    }


})

app.mount('#app')

// adding another Vue component 
const myheading = Vue.createApp({})
myheading.mount('#heading')