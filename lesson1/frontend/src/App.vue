<script setup lang="ts">
import { ref } from 'vue';
import io from "socket.io-client";

const name = ref<string>('name')
const contents = ref<string>('message')
const msgs = ref<Array<{
content:string, //keyname : value type
name:string
}>>([])

const socket = io("http://localhost:3000/");

socket.on('msg', (msg) => {
  msgs.value.push(JSON.parse(msg));
  console.log(msg);
})

function add() {
  //ABCの中身をhello.valueに置き換える
  const json = JSON.stringify({
        content:contents.value,
        name:name.value
    })
  socket.send(json)
}
</script>
<template>
  <!-- v-for の v は vue の v -->
  <div v-for="msg in msgs">{{msg.content}} -by {{msg.name}}</div>
  <input v-model="name" />
  <input v-model="contents" /><button @click="add()">送信</button>
</template>
