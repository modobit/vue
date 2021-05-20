<template>
  <div class="hello">
    <h1>Hello Again from Modal</h1>
    <h2>{{ books[0].title }}</h2>
     <h2>{{ books[1].title }}</h2>

  <div v-if="showBooks">
    {{ books[0].title }} <br>
    {{ books[1].title }}

    <ul>
        <li  v-bind:key="book" v-for="book in books">
            {{ book.title }}, 
            Author: {{ book.author }} | &nbsp;&nbsp;&emsp;&nbsp;
            <img :src="book.img" :alt="book.title" style="width:200px;">
            <hr>
            
        </li>
    </ul>
</div>

  </div>
</template>

<script>
export default {
  name: 'Modal',
  
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
                {title: 'Starwars, return of the jedi', author: 'Bob', img: 'assets/2.jpg'},
                {title: 'Shadows of the Beast', author: 'Smith', img: 'assets/3.jpg'}
            ]
        }
    }
  
  
  }

  


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
