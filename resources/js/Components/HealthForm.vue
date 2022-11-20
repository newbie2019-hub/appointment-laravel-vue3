<script setup>
import FloatingInput from "@/Components/FloatingInput/FloatingInput.vue";
import FormInput from "@/Components/FloatingInput/FormInput.vue";
import FloatingSelect from "@/Components/FloatingInput/FloatingSelect.vue";
import FloatingTextArea from "@/Components/FloatingInput/FloatingTextArea.vue";

const props = defineProps({
    data: {
        type: Object,
        required: true,
    },
});
</script>
<template>
    <Modal v-bind="$attrs">
        <template v-slot:title>
            <p class="text-xl font-bold">Prescription</p>
            <p class="text-sm font-regular">
                Enter your prescription for this appointment
            </p>
        </template>
        <template v-slot:body>

        </template>
        <template v-slot:footer>
            <Button
                text
                size="sm"
                color="gray"
                >Close</Button
            >
        </template>
    </Modal>
</template>
