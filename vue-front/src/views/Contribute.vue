<!-- <template>
    <div>
        <ProblemForm @update-problem-form="updateProblemForm"></ProblemForm>
        <SampleForm @update-sample-cases="updateSampleCase"></SampleForm>
        <TestForm @update-test-cases="updateTestCase"></TestForm>
        <button @click="submitForm">submit</button>
    </div>
</template>

<script setup>
import ProblemForm from '../components/ProblemForm.vue'
import SampleForm from '../components/SampleCase.vue'
import TestForm from '../components/TestCase.vue'

import axios from 'axios'
import { ref, reactive } from 'vue'

const problemFormData = ref({})
const sampleCaseData = ref({})
const testCaseData = ref({})

const currentStep = ref(1)

const updateProblemForm = (problemData) => {
    problemFormData.value = problemData
}

const updateSampleCase = (sampleData) => {
    sampleCaseData.value = sampleData
}

const updateTestCase = (testData) => {
    testCaseData.value = testData
}

const nextStep = () => {
    if (currentStep.value < 4) {
        currentStep.value++
    }
}

const previousStep = () => {
    if (currentStep.value > 1) {
        currentStep.value--
    }
}


const submitForm = async() => {
    const combinedData = {
        problemData: problemFormData,
        // sampleData: sampleCaseData,
        // testData: testCaseData
    }
    console.log("contribute")
    console.log(combinedData.problemData)
    
}

</script> -->



<!-- <template>
    <div class="flex items-center justify-center flex-col gap-4 bg-[#1F2430]">
        <h1 class="w-11/12 pt-[2%] pb-[0.5%] text-xl font-bold text-white">Start creating your challenge, let the world know that this is our ultimate challenge.</h1>
        <div class="w-11/12 text-white pb-[1%]">
            <h1 class="font-xl">{{ currentStep }}</h1>
            <ul class="grid grid-cols-4 justify-items-center bg-[#808080]">
                <li :class="{'bg-yellow-400': currentStep === 1}" class="w-full flex items-center justify-center outline outline-1 text-xl font-bold py-6">General information</li>
                <li :class="{'bg-yellow-400': currentStep === 2}" class="w-full flex items-center justify-center outline outline-1 text-xl font-bold">Sample Problems</li>
                <li :class="{'bg-yellow-400': currentStep === 3}" class="w-full flex items-center justify-center outline outline-1 text-xl font-bold">Test case</li>
                <li :class="{'bg-yellow-400': currentStep === 4}" class="w-full flex items-center justify-center outline outline-1 text-xl font-bold">Publication</li>
            </ul>
        </div>
        <h2 class="w-11/12 text-xl font-bold text-white py-1">The secret to success is just creating a problem for others to use, which is like reviewing and seeing how the program works more completely.</h2>

        <ProblemForm v-if="currentStep === 1" @update-problem-form="updateProblemForm"></ProblemForm>
        <SampleForm v-if="currentStep === 2" @update-sample-cases="updateSampleCase"></SampleForm>
        <TestForm v-if="currentStep === 3" @update-test-cases="updateTestCase"></TestForm>

        <div class="flex gap-4 w-4/5 items-center justify-center pb-[2%]">
            <button v-if="currentStep > 1" @click="previousStep" class="w-1/5 p-4 rounded-md bg-transparent text-xl font-bold border text-white">Back</button>
            <button v-if="currentStep < 4" @click="nextStep" class="w-1/5 p-4 rounded-md bg-green-500 text-white text-xl font-bold border">Next</button>
            <button v-if="currentStep === 4" @click="submitForm" class="w-1/5 p-4 rounded-md bg-green-500 text-white text-xl font-bold border">Submit</button>
        </div>
    </div>
</template>

<script setup>
import ProblemForm from '../components/ProblemForm.vue'
import SampleForm from '../components/SampleCase.vue'
import TestForm from '../components/TestCase.vue'

import { ref } from 'vue'

const currentStep = ref(1)
const problemFormData = ref({})
const sampleCaseData = ref({})
const testCaseData = ref({})

const updateProblemForm = (data) => {
    problemFormData.value = data
    nextStep()
}

const updateSampleCase = (data) => {
    sampleCaseData.value = data
    nextStep()
}

const updateTestCase = (data) => {
    testCaseData.value = data
    nextStep()
}

const nextStep = () => {
    if (currentStep.value < 4) {
        currentStep.value++
    }
}

const previousStep = () => {
    if (currentStep.value > 1) {
        currentStep.value--
    }
}

const submitForm = () => {
    const combinedData = {
        problemData: problemFormData.value,
        sampleData: sampleCaseData.value,
        testData: testCaseData.value,
    }
    console.log("Submit Form:", combinedData)
}
</script> -->



<template>
    <div class="flex items-center justify-center flex-col gap-4 bg-[#1F2430]">
        <h1 class="w-11/12 pt-[2%] pb-[0.5%] text-xl font-bold text-white">
            Start creating your challenge, let the world know that this is our ultimate challenge.
        </h1>
        <div class="w-11/12 text-white pb-[1%]">
            <h1 class="font-xl">{{ currentStep }}</h1>
            <ul class="grid grid-cols-4 justify-items-center bg-[#808080]">
                <li :class="{ 'bg-yellow-400': currentStep === 1 }" class="w-full flex items-center justify-center outline outline-1 text-xl font-bold py-6">
                    General information
                </li>
                <li :class="{ 'bg-yellow-400': currentStep === 2 }" class="w-full flex items-center justify-center outline outline-1 text-xl font-bold">
                    Sample Problems
                </li>
                <li :class="{ 'bg-yellow-400': currentStep === 3 }" class="w-full flex items-center justify-center outline outline-1 text-xl font-bold">
                    Test case
                </li>
                <li :class="{ 'bg-yellow-400': currentStep === 4 }" class="w-full flex items-center justify-center outline outline-1 text-xl font-bold">
                    Publication
                </li>
            </ul>
        </div>
        <h2 class="w-11/12 text-xl font-bold text-white py-1">
            The secret to success is just creating a problem for others to use, which is like reviewing and seeing how the program works more completely.
        </h2>

        <ProblemForm v-if="currentStep === 1" :formData="problemFormData" @update-problem-form="updateProblemForm"></ProblemForm>
        <SampleForm v-if="currentStep === 2" :sampleCases="sampleCaseData" @update-sample-cases="updateSampleCase"></SampleForm>
        <TestForm v-if="currentStep === 3" :testCases="testCaseData" @update-test-cases="updateTestCase"></TestForm>

        <div class="flex gap-4 w-4/5 items-center justify-center pb-[2%]">
            <button v-if="currentStep > 1" @click="previousStep" class="w-1/5 p-4 rounded-md bg-transparent text-xl font-bold border text-white">
                Back
            </button>
            <button v-if="currentStep < 4" @click="nextStep" class="w-1/5 p-4 rounded-md bg-green-500 text-white text-xl font-bold border">
                Next
            </button>
            <button v-if="currentStep === 4" @click="submitForm" class="w-1/5 p-4 rounded-md bg-green-500 text-white text-xl font-bold border">
                Submit
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import ProblemForm from '../components/ProblemForm.vue'
import SampleForm from '../components/SampleCase.vue'
import TestForm from '../components/TestCase.vue'

const currentStep = ref(1)
const problemFormData = ref({
    title: '',
    desc: '',
    inputDesc: '',
    outputDesc: '',
    limit: ''
})
const sampleCaseData = ref([
    { input: '', output: '' },
    { input: '', output: '' },
    { input: '', output: '' }
])
const testCaseData = ref([
    { input: '', output: '' },
    { input: '', output: '' },
    { input: '', output: '' }
])

const updateProblemForm = (data) => {
    problemFormData.value = data
}

const updateSampleCase = (data) => {
    sampleCaseData.value = data
}

const updateTestCase = (data) => {
    testCaseData.value = data
}

const nextStep = () => {
    if (currentStep.value < 4) {
        currentStep.value++
    }
}

const previousStep = () => {
    if (currentStep.value > 1) {
        currentStep.value--
    }
}

const submitForm = () => {
    const combinedData = {
        problemData: problemFormData.value,
        sampleData: sampleCaseData.value,
        testData: testCaseData.value,
    }
    console.log("Submit Form:", combinedData)
    // Here you can add logic to handle form submission
}
</script>

