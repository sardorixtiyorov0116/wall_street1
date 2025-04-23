<script setup lang="ts">
import { ref } from 'vue';
import * as XLSX from 'xlsx';

const tableData = ref<any[]>([]);
const headers = ref<unknown>([]);

const handleFileUpload = (event: Event) => {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
        const data = new Uint8Array(e.target?.result as ArrayBuffer);
        const workbook = XLSX.read(data, { type: 'array' });

        // Birinchi varaqni olish
        const sheetName = workbook.SheetNames[1];
        const sheet = workbook.Sheets[sheetName];

        // Excel ma'lumotlarini JSON formatiga o‘tkazish
        const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });

        headers.value = jsonData[0]; // Birinchi qatordagi ustun nomlari
        tableData.value = jsonData.slice(1); // Qolgan ma'lumotlar
    };

    reader.readAsArrayBuffer(file);
};
</script>

<template>
    <div>
        <input type="file" @change="handleFileUpload" accept=".xlsx, .xls, .xltx" />

        <table v-if="tableData.length">
            <thead>
                <tr>
                    <th v-for="(header, index) in headers" :key="index">
                        {{ header }}
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(row, rowIndex) in tableData" :key="rowIndex">
                    <td v-for="(cell, cellIndex) in row" :key="cellIndex">
                        {{ cell }}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<style lang="scss" scoped>
table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
}

td,
th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
}


</style>
