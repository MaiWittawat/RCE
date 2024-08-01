<template>
    <div class="grid grid-cols-2 gap-3 w-11/12">
        <div class="border-2 rounded-md p-6 flex flex-col gap-8 bg-[#FFFFFF] shadow-2xl">
            <div class="flex flex-col gap-2">
                <div class="text-xl font-bold">Example of Input and Output</div>
                <div class="font-semibold text-slate-600">
                    Shows an example of the program's Input and Output, for example, if the Input is 1, the Output will be 2.
                    The data entered in the example will be the same as the actual data that the program processes and shows the results.
                </div>
            </div>
            <div v-for="(item, index) in sampleCase" :key="index" class="grid grid-cols-2 gap-10">
                <div class="flex flex-col gap-2">
                    <label class="text-xl font-bold">Input sample {{ index + 1 }}</label>
                    <textarea v-model="item.input" rows="4" class="outline outline-1 rounded-sm p-2"></textarea>
                </div>

                <div class="flex flex-col gap-2">
                    <label class="text-xl font-bold">Output sample {{ index + 1 }}</label>
                    <textarea v-model="item.output" rows="4" class="outline outline-1 rounded-sm p-2"></textarea>
                </div>
            </div>
        </div>
        <div class="border rounded-md bg-[#1F2430] text-white border-gray-700 shadow-2xl">
            <div class="bg-[#0C0E14] h-[20%] flex items-center justify-center flex-col">
                <div class="flex w-4/5 items-center justify-between p-4">
                    <titlet>Title</titlet>
                    <strong>Username and Profile image</strong>
                </div>
                <ul class="w-full grid grid-cols-3 justify-items-center">
                    <li>Run : 2</li>
                    <li>Passed : 14</li>
                    <li>Difficulty : easy</li>
                </ul>
            </div>
            <div class="p-6 flex flex-col gap-6">
                <div v-for="(item, index) in sampleCase" :key="index" class="grid items-center">
                    <label class="text-lg font-medium">Example {{ index + 1 }}</label>
                    <div class="grid grid-cols-2 gap-4">
                        <div class="font-light">
                            <strong>Input:</strong>
                            <p class="border h-[3rem] border-gray-700 bg-[#171C27] p-2 overflow-x-auto overflow-y-hidden scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-500">
                                {{ item.input }}
                            </p>
                        </div>
                        <div class="font-light">
                            <strong>Output:</strong>
                            <p class="border h-[3rem] border-gray-700 bg-[#171C27] p-2 overflow-x-auto overflow-y-hidden scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-500">
                                {{ item.output }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const emit = defineEmits(['update-sample-cases'])

const sampleCase = ref([
    { input: '', output: '' },
    { input: '', output: '' },
    { input: '', output: '' }
])

</script>