<template>
    <div class="mx-auto flex flex-col">
        <div class="flex flex-col mx-12 mt-12 my-12">
            <label class="relative w-24">
                <input type="checkbox" name="gender" class="appearance-none shadow border border-gray-400 p-2 rounded-full w-12 h-6" :class="{'bg-orange-500': checkedSettings.includes('FT_1x2')}" value="FT_1x2" v-model="checkedSettings">
                <span class="absolute top-0 rounded-full shadow-inner shadow border w-6 h-6" :class="[checkedSettings.includes('FT_1x2') ? 'switch-on bg-white': 'left-0 bg-orange-500 ']"></span>
                FT_1x2
            </label>
            <label class="relative w-24">
                <input type="checkbox" name="gender" class="appearance-none shadow border border-gray-400 p-2 rounded-full w-12 h-6" :class="{'bg-orange-500': checkedSettings.includes('FT_HDP')}" value="FT_HDP" v-model="checkedSettings">
                <span class="absolute top-0 rounded-full shadow-inner shadow border w-6 h-6" :class="[checkedSettings.includes('FT_HDP') ? 'switch-on bg-white': 'left-0 bg-orange-500']"></span>
                FT_HDP
            </label>
            <label class="relative w-24">
                <input type="checkbox" name="gender" class="appearance-none shadow border border-gray-400 p-2 rounded-full w-12 h-6" :class="{'bg-orange-500': checkedSettings.includes('FT_OU')}" value="FT_OU" v-model="checkedSettings">
                <span class="absolute top-0 rounded-full shadow-inner shadow border w-6 h-6" :class="[checkedSettings.includes('FT_OU') ? 'switch-on bg-white': 'left-0 bg-orange-500']"></span>
                FT_OU
            </label>
        </div>
        <div class="mx-12">
            <h3>Chat</h3>
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
            username:'',
            checkedSettings:['FT_1x2', 'FT_HDP', 'FT_OU']
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

.switch-on {
    left:24px;
}
</style>
