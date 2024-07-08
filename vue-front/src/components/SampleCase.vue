<!-- <template>
    <div class="flex items-center justify-center flex-col gap-4 bg-[#1F2430]">
        <h1 class="w-11/12 pt-[2%] pb-[0.5%] text-xl font-bold text-white">Start creating your challenge, let the world
            know that this is our ultimate challenge.</h1>
        <div class="w-11/12 text-white pb-[1%]">
            <ul class="grid grid-cols-4 justify-items-center bg-[#808080]">
                <li
                    class="w-full flex items-center justify-center outline outline-1 text-xl font-bold py-6 bg-[#D1A008]">
                    General information</li>
                <li class="w-full flex items-center justify-center outline outline-1 text-xl font-bold bg-yellow-400">
                    Sample Problems</li>
                <li class="w-full flex items-center justify-center outline outline-1 text-xl font-bold">Test case</li>
                <li class="w-full flex items-center justify-center outline outline-1 text-xl font-bold">Publication</li>
            </ul>
        </div>
        <h2 class="w-11/12 text-xl font-bold text-white py-1">The secret to success is just creating a problem for
            others to use, which is like reviewing and seeing how the program works more completely.</h2>

        <div class="grid grid-cols-2 gap-3 w-11/12">
            <div class="border-2 rounded-md p-6 flex flex-col gap-8 bg-[#FFFFFF] shadow-2xl">
                <div class="flex flex-col gap-2">
                    <div class="text-xl font-bold">Example of Input and Output</div>
                    <div class="font-semibold text-slate-600">
                        Shows an example of the program's Input and Output, for example, if the Input is 1, the Output
                        will be 2.
                        The data entered in the example will be the same as the actual data that the program processes
                        and
                        shows the results.
                    </div>
                </div>
                <div class="grid grid-cols-2 gap-10">
                    <div class="flex flex-col gap-2">
                        <label class="text-xl font-bold">Input sample 1</label>
                        <textarea v-model="inputSample.sample1" rows="4"
                            class="outline outline-1 rounded-sm p-2"></textarea>
                    </div>

                    <div class="flex flex-col gap-2">
                        <label class="text-xl font-bold">Output sample 1</label>
                        <textarea v-model="outputSample.sample1" rows="4"
                            class="outline outline-1 rounded-sm p-2"></textarea>
                    </div>
                </div>

                <div class="grid grid-cols-2 gap-10">
                    <div class="flex flex-col gap-2">
                        <label class="text-xl font-bold">Input sample 2</label>
                        <textarea v-model="inputSample.sample2" rows="4"
                            class="outline outline-1 rounded-sm p-2"></textarea>
                    </div>

                    <div class="flex flex-col gap-2">
                        <label class="text-xl font-bold">Output sample 2</label>
                        <textarea v-model="outputSample.sample2" rows="4"
                            class="outline outline-1 rounded-sm p-2"></textarea>
                    </div>
                </div>

                <div class="grid grid-cols-2 gap-10">
                    <div class="flex flex-col gap-2">
                        <label class="text-xl font-bold">Input sample 3</label>
                        <textarea v-model="inputSample.sample3" rows="4"
                            class="outline outline-1 rounded-sm p-2"></textarea>
                    </div>

                    <div class="flex flex-col gap-2">
                        <label class="text-xl font-bold">Output sample 3</label>
                        <textarea v-model="outputSample.sample3" rows="4"
                            class="outline outline-1 rounded-sm p-2"></textarea>
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
                    <div class="grid items-center">
                        <label class="text-lg font-medium">Example 1</label>
                        <div class="grid grid-cols-2 gap-4">
                            <div class="font-light">
                                <strong>Input:</strong>
                                <p
                                    class="border h-[3rem] border-gray-700 bg-[#171C27] p-2 overflow-x-auto overflow-y-hidden scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-500">
                                    {{ inputSample.sample1 }}</p>
                            </div>

                            <div class="font-light">
                                <strong>Output:</strong>
                                <p
                                    class="border h-[3rem] border-gray-700 bg-[#171C27] p-2 overflow-x-auto overflow-y-hidden scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-500">
                                    {{ outputSample.sample1 }}</p>
                            </div>
                        </div>
                    </div>

                    <div class="grid items-center">
                        <label class="text-lg font-medium">Example 2</label>
                        <div class="grid grid-cols-2 gap-4">
                            <div class="font-light">
                                <strong>Input:</strong>
                                <p
                                    class="border h-[3rem] border-gray-700 bg-[#171C27] p-2 overflow-x-auto overflow-y-hidden scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-500">
                                    {{ inputSample.sample2 }}</p>
                            </div>

                            <div class="font-light">
                                <strong>Output:</strong>
                                <p
                                    class="border h-[3rem] border-gray-700 bg-[#171C27] p-2 overflow-x-auto overflow-y-hidden scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-500">
                                    {{ outputSample.sample2 }}</p>
                            </div>
                        </div>
                    </div>

                    <div class="grid items-center">
                        <label class="text-lg font-medium">Example 3</label>
                        <div class="grid grid-cols-2 gap-4">
                            <div class="font-light">
                                <strong>Input:</strong>
                                <p
                                    class="border h-[3rem] border-gray-700 bg-[#171C27] p-2 overflow-x-auto overflow-y-hidden scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-500">
                                    {{ inputSample.sample3 }}</p>
                            </div>

                            <div class="font-light">
                                <strong>Output:</strong>
                                <p
                                    class="border h-[3rem] border-gray-700 bg-[#171C27] p-2 overflow-x-auto overflow-y-hidden scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-500">
                                    {{ outputSample.sample3 }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div class="flex gap-4 w-4/5 items-center justify-center pb-[2%]">
            <button class="w-1/5 p-4 rounded-md bg-transparent text-xl font-bold border text-white">Back</button>
            <button @click="onNext"
                class="w-1/5 p-4 rounded-md bg-green-500 text-white text-xl font-bold border">Continue</button>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const emit = defineEmits(['update-sample-cases'])

const inputSample = reactive({
    sample1: "",
    sample2: "",
    sample3: "",
})

const outputSample = reactive({
    sample1: "",
    sample2: "",
    sample3: "",
})

const onNext = () => {
    formData.value.desc = desc.value
    console.log(formData.value)
    emit('update-sample-cases', )
}
</script> -->




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