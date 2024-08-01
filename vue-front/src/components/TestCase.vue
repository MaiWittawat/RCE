<template>
    <div class="grid w-11/12 ">
        <div class="border-2 rounded-md p-6 flex flex-col gap-4 bg-[#FFFFFF] shadow-2xl w-full outline">
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
                <p class="text-red-500">[ - ] หลีกเลี่ยงการใช้กรณีทดสอบภาษาไทย เนื่องจากข้อจำกัดในบางภาษา
                </p>
            </div>

            <div v-for="(testCase, index) in testCases" :key="index">
                <div v-if="index <= 2" class="grid grid-cols-2 gap-10 mb-4">
                    <div class="flex flex-col gap-2">
                        <label class="text-xl font-bold">Input sample {{ index + 1 }}</label>
                        <textarea v-model="testCase.input" rows="10"
                            class="outline outline-1 rounded-sm p-2"></textarea>
                    </div>

                    <div class="flex flex-col gap-2">
                        <label class="text-xl font-bold">Output sample {{ index + 1 }}</label>
                        <textarea v-model="testCase.output" rows="10"
                            class="outline outline-1 rounded-sm p-2"></textarea>
                    </div>
                </div>

                <div v-else class="grid grid-cols-2 gap-10 mb-4">
                    <div class="flex flex-col gap-2">
                        <div class="flex gap-2">
                            <label class="text-xl font-bold">Input sample {{ index + 1 }}</label>
                            <button class="outline" @click="removeTestCase">Delete</button>
                        </div>
                        <textarea v-model="testCase.input" rows="10"
                            class="outline outline-1 rounded-sm p-2"></textarea>
                    </div>

                    <div class="flex flex-col gap-2">
                        <label class="text-xl font-bold">Output sample {{ index + 1 }}</label>
                        <textarea v-model="testCase.output" rows="10"
                            class="outline outline-1 rounded-sm p-2"></textarea>
                    </div>
                </div>
            </div>

            <div class="border flex items-center justify-center bg-yellow-400 rounded-sm py-2 font-semibold ">
                <button @click="addTestCase">Add Test case</button>
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

const addTestCase = () => {
    if (testCases.value.length > 4) {
        return alert("Test case must not exceed 5 case")
    }
    return testCases.value.push({ input: '', output: '' })
}

const removeTestCase = (index)=>{
    testCases.value.splice(index, 1)
}
</script>
