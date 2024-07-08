<template>
    <form @submit.prevent="submit">
        <div>
            <label for="password"></label>
            <input v-model="formData.password"  type="text" placeholder="New passwrod">
        </div>

        <div>
            <label for="confirmPassword"></label>
            <input v-model="formData.confirmPassword" type="text" placeholder="Confirm passwrod">
        </div>

        <button>submit</button>
    </form>
</template>

<script setup>

import { ref } from 'vue'
import axios from 'axios'
import { useRoute } from 'vue-router'

const route = useRoute()

const formData = ref({
    password: '',
    confirmPassword: ''
})


const submit = async ()=>{
    const URI = "http://localhost:3000/api/mail/resetPasswordConfirm"
    const token = route.query.token
    const userId = route.query.id
    console.log(`userId: ${userId}`)
    console.log(`token: ${token}`)
    console.log(formData.value)

    const result = await axios.post(URI ,{
        token: token,
        newPassword: formData.value.password
    })

}

</script>