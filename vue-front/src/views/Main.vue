<template>
    <div class="flex flex-col gap-5">
        <NavBar></NavBar>
        <div class="flex w-full items-center justify-center">
            <Table class="w-4/5"></Table>
        </div>
    </div>
</template>

<script setup>
import NavBar from '../components/Nav.vue'
import Table from '../components/Table.vue';

</script>