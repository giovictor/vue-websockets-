<template>
    <div>
        <h1>Borrowers</h1>
        <div v-for="borrower in borrowers" :key="borrower.IDNumber">
            <h3>{{borrower.lastname}}, {{borrower.firstname}}</h3>
            <p>{{borrower.IDNumber}}</p>
        </div>
    </div>
</template>

<script>
// import axios from 'axios'
export default {
    data() {
        return {
            // posts:[],
            borrowers:[]
        }
    },
    sockets:{
        // fetchPosts(data) {
        //     this.posts = data
        // },
        fetchBorrowers(data) {
            this.borrowers = data
        }
    },
    mounted() {
        // this.fetchPosts()
    },
    methods:{
        // fetchPosts() {
        //     axios.get('https://jsonplaceholder.typicode.com/posts')
        //     .then(response => {
        //         this.$socket.emit('fetchPosts', response.data)
        //     })
        //     .catch(err => console.log(err))
        // }
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
