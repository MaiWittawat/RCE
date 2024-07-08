<!-- <template>
    <div class="flex items-center justify-center flex-col gap-4 bg-[#1F2430]">
        <h1 class="w-11/12 pt-[2%] pb-[0.5%] text-xl font-bold text-white">Start creating your challenge, let the world
            know that this is our ultimate challenge.</h1>
        <div class="w-11/12 text-white pb-[1%]">
            <ul class="grid grid-cols-4 justify-items-center bg-[#808080]">
                <li
                    class="w-full flex items-center justify-center outline outline-1 text-xl font-bold py-6 bg-[#D1A008]">
                    General information</li>
                <li class="w-full flex items-center justify-center outline outline-1 text-xl font-bold bg-[#D1A008]">
                    Sample Problems</li>
                <li class="w-full flex items-center justify-center outline outline-1 text-xl font-bold bg-yellow-400">
                    Test case</li>
                <li class="w-full flex items-center justify-center outline outline-1 text-xl font-bold">Publication</li>
            </ul>
        </div>
        <h2 class="w-11/12 text-xl font-bold text-white py-1">The secret to success is just creating a problem for
            others to use, which is like reviewing and seeing how the program works more completely.</h2>

        <div class="grid grid-cols-2 gap-3 w-11/12">
            <div class="border-2 rounded-md p-6 flex flex-col gap-4 bg-[#FFFFFF] shadow-2xl">
                <div class="flex flex-col gap-2">
                    <div class="text-xl font-bold">เพิ่มกรณีทดสอบโปรแกรม</div>
                    <div class="font-semibold text-slate-600">
                        กรณีทดสอบ หรือ Test-case คือ Input และ เฉลยของโจทย์โปรแกรมนั้น
                        ๆว่าผู้ใช้งานจะสามารถพัฒนาโปรแกรมให้รับ Input
                        และแสดงผลลัพธ์ออกมาในรูปแบบที่โจทย์ต้องการได้หรือไม่
                    </div>
                </div>

                <div class="outline outline-slate-300 grid grid-rows-3 p-3 rounded-sm font-semibold ">
                    <p>[ - ] ต้องมีจำนวน 3 ถึง 8 Test Case เท่านั้น</p>
                    <p>[ - ] ต้องมี Input และ Output ครบจึงจะถูกบันทึก</p>
                    <p class="text-red-500">[ - ] หลีกเลี่ยงการใช้กรณีทดสอบภาษาไทย เนื่องจากข้อจำกัดในบางภาษา</p>
                </div>

                <div v-for="(testCase, index) in testCases" :key="index" class="grid grid-cols-2 gap-10 mb-4">
                    <div class="flex flex-col gap-2">
                        <label class="text-xl font-bold">Input sample {{ index + 1 }}</label>
                        <textarea v-model="testCase.input" rows="4" class="outline outline-1 rounded-sm p-2"></textarea>
                    </div>

                    <div class="flex flex-col gap-2">
                        <label class="text-xl font-bold">Output sample {{ index + 1 }}</label>
                        <textarea v-model="testCase.output" rows="4" class="outline outline-1 rounded-sm p-2"></textarea>
                    </div>
                </div>

                <div class="border flex items-center justify-center bg-yellow-400 rounded-sm py-2 font-semibold ">
                    <button @click="addTestCase">Add Test case</button>
                </div>
            </div>
            <div class="border rounded-md bg-[#1F2430] text-white border-gray-700 shadow-2xl">
                <div class="bg-[#0C0E14] h-[8rem] flex items-center justify-center flex-col">
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
                    <div class="grid grid-rows-2 items-center">
                        <label class="text-xl font-bold text-[#FFCC00]">Description</label>
                        <p class="border-b h-[3rem] border-gray-700">desc</p>
                    </div>

                    <div class="grid grid-rows-2 items-center">
                        <label class="text-xl font-bold text-[#FFCC00]">Input format</label>
                        <p class="border-b h-[3rem] border-gray-700">input</p>
                    </div>

                    <div class="grid grid-rows-2 items-center">
                        <label class="text-xl font-bold text-[#FFCC00]">Output format</label>
                        <p class="border-b h-[3rem] border-gray-700">output</p>
                    </div>

                    <div class="grid grid-rows-2 items-center">
                        <label class="text-xl font-bold text-[#FFCC00]">Limitations</label>
                        <p class="border-b h-[3rem] border-gray-700">limit</p>
                    </div>
                    <div class="flex flex-col gap-6">
                        <div class="grid items-center">
                            <label class="text-lg font-medium">Example 1</label>
                            <div class="grid grid-cols-2 gap-4">
                                <div class="font-light">
                                    <strong>Input:</strong>
                                    <p
                                        class="border h-[3rem] border-gray-700 bg-[#171C27] p-2 overflow-x-auto overflow-y-hidden scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-500">
                                        inputSample.sample1 </p>
                                </div>

                                <div class="font-light">
                                    <strong>Output:</strong>
                                    <p
                                        class="border h-[3rem] border-gray-700 bg-[#171C27] p-2 overflow-x-auto overflow-y-hidden scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-500">
                                        outputSample.sample1</p>
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
                                        inputSample.sample2</p>
                                </div>

                                <div class="font-light">
                                    <strong>Output:</strong>
                                    <p
                                        class="border h-[3rem] border-gray-700 bg-[#171C27] p-2 overflow-x-auto overflow-y-hidden scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-500">
                                        outputSample.sample2</p>
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
                                        inputSample.sample3</p>
                                </div>

                                <div class="font-light">
                                    <strong>Output:</strong>
                                    <p
                                        class="border h-[3rem] border-gray-700 bg-[#171C27] p-2 overflow-x-auto overflow-y-hidden scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-500">
                                        outputSample.sample3</p>
                                </div>
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
import { reactive } from 'vue'

const emit = defineEmits(['update-test-cases'])

const testCases = reactive([
    { input: '', output: '' },
    { input: '', output: '' },
    { input: '', output: '' }
])

const addTestCase = () => {
    if (testCases.length < 8) {
        testCases.push({ input: '', output: '' })
    } else {
        alert('You can only add up to 8 test cases.')
    }
}

const onNext = () => {
    console.log('Proceeding with test cases:', testCases)
    emit('update-test-case', testCases)
}
</script> -->

<template>
    <div class="flex flex-col items-center gap-6 w-full">
        <h2 class="text-xl font-bold text-white">Test Cases</h2>
        <div class="flex flex-col gap-4 w-full">
            <div v-for="(testCase, index) in testCases" :key="index" class="grid grid-cols-2 gap-10">
                <div class="flex flex-col gap-2">
                    <label class="text-xl font-bold">Input Test Case {{ index + 1 }}</label>
                    <textarea v-model="testCase.input" rows="4" class="outline outline-1 rounded-sm p-2"></textarea>
                </div>

                <div class="flex flex-col gap-2">
                    <label class="text-xl font-bold">Output Test Case {{ index + 1 }}</label>
                    <textarea v-model="testCase.output" rows="4" class="outline outline-1 rounded-sm p-2"></textarea>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const testCases = ref([
    { input: '', output: '' },
    { input: '', output: '' },
    { input: '', output: '' }
])

</script>

