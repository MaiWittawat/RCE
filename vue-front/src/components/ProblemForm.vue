<template>
    <div class="grid grid-cols-2 gap-3 w-11/12">
        <div class="border-2 rounded-md p-6 flex flex-col gap-8 bg-[#FFFFFF] shadow-2xl">
            <div class="flex flex-col gap-1">
                <label class="text-xl font-bold">Title</label>
                <input v-model="formData.title" type="text" class="outline outline-1 rounded-sm p-1">
            </div>
            <div class="flex flex-col gap-1">
                <label class="text-xl font-bold">Description of the problem</label>
                <p class="text-sm font-semibold text-gray-500">It shows the origin, importance, characteristics of the program, or describes the task, what it wants members to do, and even writes a story that is consistent with the task, to create fun.</p>
                <textarea v-model="formData.desc" cols="20" rows="5" class="outline outline-1 rounded-sm p-1"></textarea>
            </div>
            <div class="flex flex-col gap-1">
                <label class="text-xl font-bold">Input Description</label>
                <p class="text-sm font-semibold text-gray-500">For example, line 1 receives an integer number, line 2 - n inserts text, and so on.</p>
                <input v-model="formData.inputDesc" type="text" class="outline outline-1 rounded-sm p-1">
            </div>
            <div class="flex flex-col gap-1">
                <label class="text-xl font-bold">Output Description</label>
                <p class="text-sm font-semibold text-gray-500">For example, display the text in line 1 as “Hello World”.</p>
                <input v-model="formData.outputDesc" type="text" class="outline outline-1 rounded-sm p-1">
            </div>
            <div class="flex flex-col gap-1">
                <label class="text-xl font-bold">Limitations and Scope</label>
                <p class="text-sm font-semibold text-gray-500">For example, the input data will have a value from 0 - 1,000,000 or if there is a remainder, round up.</p>
                <input v-model="formData.limit" type="text" class="outline outline-1 rounded-sm p-1">
            </div>
        </div>
        <div class="border rounded-md bg-[#1F2430] text-white border-gray-700 shadow-2xl">
            <div class="bg-[#0C0E14] h-[15%] flex items-center justify-center flex-col">
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
                    <p class="border-b h-[3rem] border-gray-700">{{ formData.desc }}</p>
                </div>
                
                <div class="grid grid-rows-2 items-center">
                    <label class="text-xl font-bold text-[#FFCC00]">Input format</label>
                    <p class="border-b h-[3rem] border-gray-700">{{ formData.inputDesc }}</p>
                </div>

                <div class="grid grid-rows-2 items-center">
                    <label class="text-xl font-bold text-[#FFCC00]">Output format</label>
                    <p class="border-b h-[3rem] border-gray-700">{{ formData.outputDesc }}</p>
                </div>

                <div class="grid grid-rows-2 items-center">
                    <label class="text-xl font-bold text-[#FFCC00]">Limitations</label>
                    <p class="border-b h-[3rem] border-gray-700">{{ formData.limit }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const formData = ref({
    title: '',
    desc: '',
    inputDesc: '',
    outputDesc: '',
    limit: ''
})

const props = defineProps({
    formData: Object,
})

const emit = defineEmits(['update-problem-form'])

const localFormData = ref({ ...props.formData })

watch(localFormData, (newData) => {
    emit('update-problem-form', newData)
})

</script>


