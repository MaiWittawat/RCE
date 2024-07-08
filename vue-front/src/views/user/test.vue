<template>
    <div class="flex items-center justify-center flex-col gap-4 bg-[#1F2430] min-h-screen">
        <h1 class="w-11/12 pt-[2%] pb-[0.5%] text-xl font-bold text-white">Start creating your challenge, let the world know that this is our ultimate challenge.</h1>
        <div class="w-11/12 text-white pb-[1%]">
            <ul class="grid grid-cols-4 justify-items-center bg-[#808080]">
                <li class="w-full flex items-center justify-center outline outline-1 text-xl font-bold py-6 bg-yellow-500">General information</li>
                <li class="w-full flex items-center justify-center outline outline-1 text-xl font-bold">Sample Problems</li>
                <li class="w-full flex items-center justify-center outline outline-1 text-xl font-bold">Test case</li>
                <li class="w-full flex items-center justify-center outline outline-1 text-xl font-bold">Publication</li>
            </ul>
        </div>
        <h2 class="w-11/12 text-xl font-bold text-white py-1">The secret to success is just creating a problem for others to use, which is like reviewing and seeing how the program works more completely.</h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 w-11/12">
            <div class="border-2 rounded-md p-6 flex flex-col gap-8 bg-[#FFFFFF] shadow-2xl">
                <div class="flex flex-col gap-1">
                    <label class="text-xl font-bold">Title</label>
                    <input v-model="formData.title" type="text" class="outline outline-1 rounded-sm p-1">
                </div>
                <div class="flex flex-col gap-1">
                    <label class="text-xl font-bold">Description of the problem</label>
                    <p class="text-sm font-semibold text-gray-500">It shows the origin, importance, characteristics of the program, or describes the task, what it wants members to do, and even writes a story that is consistent with the task, to create fun.</p>
                    <textarea v-model="desc" cols="20" rows="5" class="outline outline-1 rounded-sm p-1" style="word-break: break-word; overflow-wrap: break-word;"></textarea>
                </div>
                <div class="flex flex-col gap-1">
                    <label class="text-xl font-bold">Input Description</label>
                    <p class="text-sm font-semibold text-gray-500">For example, line 1 receives an integer number, line 2 - n inserts text, and so on.</p>
                    <input v-model="formData.inputDesc" type="text" class="outline outline-1 rounded-sm p-1" style="word-break: break-word; overflow-wrap: break-word;">
                </div>
                <div class="flex flex-col gap-1">
                    <label class="text-xl font-bold">Output Description</label>
                    <p class="text-sm font-semibold text-gray-500">For example, display the text in line 1 as “Hello World”.</p>
                    <input v-model="formData.outputDesc" type="text" class="outline outline-1 rounded-sm p-1" style="word-break: break-word; overflow-wrap: break-word;">
                </div>
                <div class="flex flex-col gap-1">
                    <label class="text-xl font-bold">Limitations and Scope</label>
                    <p class="text-sm font-semibold text-gray-500">For example, the input data will have a value from 0 - 1,000,000 or if there is a remainder, round up.</p>
                    <input v-model="formData.limit" type="text" class="outline outline-1 rounded-sm p-1" style="word-break: break-word; overflow-wrap: break-word;">
                </div>
            </div>
            <div class="border rounded-md bg-[#1F2430] text-white border-gray-700 shadow-2xl">
                <div class="bg-[#0C0E14] flex items-center justify-center flex-col">
                    <div class="flex w-4/5 items-center justify-between p-4"> <strong>{{ formData.title }}</strong> <strong>Username and Profile image</strong></div>
                    <ul class="w-full grid grid-cols-3 justify-items-center">
                        <li>Run : 2</li>
                        <li>Passed : 14</li>
                        <li>Difficulty : easy</li>
                    </ul>
                </div>
                <div class="p-6 flex flex-col gap-8">
                    <div class="grid grid-rows-2 items-center">
                        <label class="text-xl font-bold text-[#FFCC00]">Description</label>
                        <p class="border-b border-gray-700" style="word-break: break-word; overflow-wrap: break-word;">{{ desc }}</p>
                    </div>
                    
                    <div class="grid grid-rows-2 items-center">
                        <label class="text-xl font-bold text-[#FFCC00]">Input format</label>
                        <p class="border-b border-gray-700" style="word-break: break-word; overflow-wrap: break-word;">{{ formData.inputDesc }}</p>
                    </div>

                    <div class="grid grid-rows-2 items-center">
                        <label class="text-xl font-bold text-[#FFCC00]">Output format</label>
                        <p class="border-b border-gray-700" style="word-break: break-word; overflow-wrap: break-word;">{{ formData.outputDesc }}</p>
                    </div>

                    <div class="grid grid-rows-2 items-center">
                        <label class="text-xl font-bold text-[#FFCC00]">Limitations</label>
                        <p class="border-b border-gray-700" style="word-break: break-word; overflow-wrap: break-word;">{{ formData.limit }}</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="flex gap-4 w-4/5 items-center justify-center pb-[2%]">
            <button class="w-1/5 p-4 rounded-md bg-transparent text-xl font-bold border text-white">Back</button>
            <button @click="onNext" class="w-1/5 p-4 rounded-md bg-green-500 text-white text-xl font-bold border">Next</button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const formData = ref({})
const desc = ref()

const onNext = () => {
    formData.value.desc = desc.value
    console.log(formData.value)
}
</script>

<style scoped>
textarea,
input {
    word-break: break-word;
    overflow-wrap: break-word;
}

.flex-col > *:not(:first-child) {
    margin-top: 1rem;
}

.flex-col p {
    margin-top: 0.25rem;
}
</style>
