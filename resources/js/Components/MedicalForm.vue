<script setup>
import FloatingInput from "@/Components/FloatingInput/FloatingInput.vue";
import FormInput from "@/Components/FloatingInput/FormInput.vue";
import FloatingSelect from "@/Components/FloatingInput/FloatingSelect.vue";
import FloatingTextArea from "@/Components/FloatingInput/FloatingTextArea.vue";
import Button from "@/Components/Button/Button.vue";
import Modal from "./Modal/Modal.vue";
import Checkbox from "./Checkbox.vue";
import Radio from "./Radio.vue";

import dentalquestions from "../dental_questions.json";
import medicalquestions from "../medical_questions.json";

const props = defineProps({
    data: {
        type: Object,
        required: true,
    },
    viewOnly: {
        type: Boolean,
        default: false,
    },
    scrollable: {
        type: Boolean,
        default: false,
    },
    maxWidth: {
        type: [Number, String],
        default: 400,
    },
});

const emits = defineEmits(["emitClose", "saveAppointment"]);

const emitCloseModal = () => emits("emitClose");
const emitSaveAppointment = () => emits("emitSaveAppointment");
</script>
<template>
    <Modal v-bind="$attrs" @close="emitCloseModal">
        <template v-slot:title>
            <p class="text-xl font-bold">Dental History</p>
            <p class="text-sm font-regular mt-2">
                To keep track of our patients, we are requiring every new
                patient to fill-up this form.
            </p>
        </template>
        <template #body>
            <div class="overflow-x-auto w-full">
                <p class="font-medium mb-2 mt-4">Dental Questionnaire</p>
                <table class="w-full divide-y divide-gray-300">
                    <thead class="bg-gray-50">
                        <tr
                            class="[&>*]:uppercase font-medium text-xs text-gray-500"
                        >
                            <th
                                scope="col"
                                class="py-3.5 pl-4 pr-3 text-left sm:pl-6"
                            ></th>
                            <th
                                scope="col"
                                class="py-3.5 pl-4 pr-3 text-right sm:pl-6"
                            >
                                Answer
                            </th>
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">
                        <tr
                            class="hover:bg-gray-50"
                            v-for="(question, i) in dentalquestions"
                            :key="`dental-q-${i}`"
                        >
                            <td
                                class="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6"
                            >
                                {{ question.question }}
                            </td>
                            <td
                                class="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6"
                            >
                                <div class="flex gap-x-4 ml-4" v-if="!viewOnly">
                                    <Radio
                                        v-model="data.q1"
                                        for="q1yes"
                                        id="q1yes"
                                        label="Yes"
                                        value="Yes"
                                        name="q1"
                                    />
                                    <Radio
                                        v-model="data.q1"
                                        for="q1no"
                                        id="q1no"
                                        label="No"
                                        value="No"
                                        name="q1"
                                    />
                                </div>
                                <p v-else class="text-gray-600">
                                    {{ data.q1 }}
                                </p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="overflow-x-auto w-full">
                <p class="font-medium mb-2 mt-4">Medical Questionnaire</p>
                <table class="w-full divide-y divide-gray-300">
                    <thead class="bg-gray-50">
                        <tr
                            class="[&>*]:uppercase font-medium text-xs text-gray-500"
                        >
                            <th
                                scope="col"
                                class="py-3.5 pl-4 pr-3 text-left sm:pl-6"
                            ></th>
                            <th
                                scope="col"
                                class="py-3.5 pl-4 pr-3 text-right sm:pl-6"
                            >
                                Answer
                            </th>
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">
                        <tr
                            class="hover:bg-gray-50"
                            v-for="(question, i) in medicalquestions"
                            :key="`medical-q-${i}`"
                        >
                            <td
                                class="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6"
                            >
                                {{ question.question }}
                            </td>
                            <td
                                class="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6"
                            >
                                <div class="flex gap-x-4 ml-4" v-if="!viewOnly">
                                    <Radio
                                        v-model="data.q1"
                                        for="q1yes"
                                        id="q1yes"
                                        label="Yes"
                                        value="Yes"
                                        name="q1"
                                    />
                                    <Radio
                                        v-model="data.q1"
                                        for="q1no"
                                        id="q1no"
                                        label="No"
                                        value="No"
                                        name="q1"
                                    />
                                </div>
                                <p v-else class="text-gray-600">
                                    {{ data.q1 }}
                                </p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <hr class="my-4"/>
            <form-input
                for="previous_dentist"
                label="Previous Dentist"
                class="mt-3"
            >
                <floating-input
                    type="password"
                    id="previous_dentist"
                    v-model="data.previous_dentist"
                />
            </form-input>
            <form-input
                for="other_conditions"
                label="Other Conditions"
                class="mt-2"
            >
                <floating-text-area
                    id="other_conditions"
                    v-model="data.other_conditions"
                />
            </form-input>
            <form-input
                for="last_cleaning"
                label="Last Cleaning"
                class="mt-3"
            >
                <floating-input type="date" v-model="data.last_cleaning" />
            </form-input>
            <form-input
                for="last_visit"
                label="Last Visit"
                class="mt-3"
            >
                <floating-input type="date" v-model="data.last_visit" />
            </form-input>
            <hr class="my-4"/>

            <p class="font-medium pl-2 mt-4 mb-2">Please read carefully</p>
            <p class="text-sm px-2 text-justify mb-3">
                By clicking register account, I, the registering patient,
                understand the above information is necessary to provide me with
                dental care in a safe and efficient manner. I have answered all
                questions to the best of my knowledge. Manabat Dental-Flores has
                my permission to ask the respective health care provider or
                agency, who may release such information. I will notify this
                dental care facility of any and all changes in my health or
                medications. I consent to the performing of dental procedures
                agreed to be necessary or advisable, including the use of local
                anesthetics.
            </p>
        </template>
        <template v-slot:footer>
            <Button @click.prevent="emitCloseModal" text size="sm" color="gray"
                >Cancel</Button
            >
            <Button
                v-if="!viewOnly"
                @click.prevent="emitSaveAppointment"
                text
                size="sm"
                color="success"
                >Register Account</Button
            >
        </template>
    </Modal>
</template>
