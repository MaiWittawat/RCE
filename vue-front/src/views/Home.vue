<template>
    <div class="flex items-center justify-center w-full min-h-screen">
      <form @submit.prevent="onSubmit" class="flex items-center justify-center flex-col">
        <select v-model="option">
          <option disabled value="">Please select one</option>
          <option value="python">Python</option>
          <option value="c">C</option>
          <option value="c++">C++</option>
        </select>
        <textarea v-model="code" name="" id="" cols="30" rows="10" class="p-2 outline"></textarea>
        <button>submit</button>
      </form>
    </div>
  </template>
  
  
  <script setup>
    import { ref, reactive } from 'vue'
    import axios from 'axios'
    const code = ref()
    const option = ref('')
  
    const onSubmit = async ()=>{
      console.log(code.value)
      console.log(option.value)
      // const result = await axios.get('http://localhost:3000/hello')
      const result = await axios.post('http://localhost:3000/compile',{
        code: code.value,
        language: option.value
      })
      console.log(result.data)
    }
  
  
  </script>
  
  
  