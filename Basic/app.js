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

            books:
            [
                {title: 'Name of the wind', author: 'Jim'},
                {title: 'Starwars, retuen of the jedi', author: 'Bob'},
                {title: 'Shadows of the Beast', author: 'Smith'}
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