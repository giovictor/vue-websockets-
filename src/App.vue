<template>
    <div>
        <h1>Posts</h1>
        <div v-for="post in posts" :key="post.id">
            <h3>{{post.title}}</h3>
            <p>{{post.body}}</p>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            posts:[]
        }
    },
    sockets:{
        fetchPosts(data) {
            this.posts = data
        }
    },
    mounted() {
        this.fetchPosts()
    },
    methods:{
        fetchPosts() {
            axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                this.$socket.emit('fetchPosts', response.data)
            })
            .catch(err => console.log(err))
        }
    }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
