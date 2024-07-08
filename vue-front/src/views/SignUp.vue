<template>
    <div class="p-10">
        <h1 class="mb-8 font-extrabold text-4xl">Register</h1>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">

            <form @submit.prevent="subMitForm">
                <div>
                    <label class="block font-semibold" for="username">User Name</label>
                    <input v-model="formData.username"
                        class="w-full shadow-inner bg-gray-100 rounded-lg placeholder-black text-2xl p-4 border-none block mt-1 w-full"
                        id="name" type="text" name="name" required autofocus="autofocus">
                </div>

                <div class="mt-4">
                    <label class="block font-semibold" for="email">Email</label>
                    <input v-model="formData.email"
                        class="w-full shadow-inner bg-gray-100 rounded-lg placeholder-black text-2xl p-4 border-none block mt-1 w-full"
                        id="email" type="email" name="email" required>
                </div>

                <div class="mt-4 flex flex-col gap-2">
                    <label class="block font-semibold" for="sex">sex</label>
                    <div class="flex w-full gap-10">
                        <div class="flex gap-1"><input v-model="formData.sex" type="radio" name="sex" value="0"
                                required>Male</div>
                        <div class="flex gap-1"><input v-model="formData.sex" type="radio" name="sex" value="1"
                                required>Female</div>
                    </div>
                </div>

                <div class="mt-4">
                    <label class="block font-semibold" for="password">Password</label>
                    <input v-model="formData.password"
                        class="w-full shadow-inner bg-gray-100 rounded-lg placeholder-black text-2xl p-4 border-none block mt-1 w-full"
                        id="password" type="password" name="password" required autocomplete="new-password">
                </div>

                <div class="flex items-center justify-between mt-8">
                    <button type="submit"
                        class="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">Register</button>
                    <button @click="goToLogin" class="font-semibold">
                        Already registered?
                    </button>
                </div>

            </form>

            <aside class="">
                <div class="bg-gray-100 p-8 rounded">
                    <h2 class="font-bold text-2xl">Instructions</h2>
                    <ul class="list-disc mt-4 list-inside">
                        <li>All users must provide a valid email address and password to create an account.</li>
                        <li>Users must not use offensive, vulgar, or otherwise inappropriate language in their username
                            or profile information</li>
                        <li>Users must not create multiple accounts for the same person.</li>
                    </ul>
                </div>
            </aside>

        </div>
    </div>
</template>


<script setup>
import { ref, reactive } from 'vue'
import { uuid } from 'vue-uuid'
import axios from 'axios'
import { useRouter } from 'vue-router'

const router = useRouter()

const formData = reactive({
    id: uuid.v4(),
    username: "",
    email: "",
    password: "",
    sex: null,
    status: 1,
})


const goToLogin = ()=>{
    router.push('/logindark')
}

const subMitForm = async () => {
    try {
        // console.log(formData)
        const result = await axios.post('http://localhost:3000/api/users', formData)
        console.log(result)
        console.log(`status: ${result.status}  ${result.data.message}`)
    } catch (err) {
        console.error(`Error : ${err}`)
    }
}

</script>