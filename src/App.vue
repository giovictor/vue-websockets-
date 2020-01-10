<template>
    <div class="mx-auto flex flex-col">
        <div class="mx-12">
            <h3>Chats</h3>
            <div class="bg-gray-300 w-full px-8 py-8" style="height:700px;">
                <div v-for="chat in chats" :key="chat.message">{{chat.username}}: {{chat.message}}</div>
            </div>
        </div>
        <div class="mx-12">
            <div class="mb-2">
                <label class="block">Username: </label>
                <input class="shadow appearance-none border" type="text" v-model="username">
            </div>
            <div class="mb-2">
                <label class="block">Message: </label>
                <input class="shadow appearance-none border" type="text" v-model="message" @keyup="typingMessage">
            </div>
            <button @click="sendMessage" class="mt-2 bg-green-500 px-5 text-white rounded-lg">Send</button>
            {{typing}}
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            posts:[],
            message:'',
            chats:[],
            typing:'',
            username:''
        }
    },
    sockets:{
        sendMessage(data) {
            this.chats.push(data)
            this.typing = ''
        },
        typingMessage(data) {
            this.typing = data
        }
    },
    mounted() {
    },
    methods:{
        sendMessage() {
            this.$socket.emit('sendMessage', {username:this.username, message:this.message})
            this.message = ''
            this.typing = ''
        },
        typingMessage() {
            this.$socket.emit('typingMessage', `${this.username} is typing...`)
            this.typing = ''
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
