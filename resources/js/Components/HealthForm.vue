<script setup>
import FloatingInput from "@/Components/FloatingInput/FloatingInput.vue";
import FormInput from "@/Components/FloatingInput/FormInput.vue";
import FloatingSelect from "@/Components/FloatingInput/FloatingSelect.vue";
import FloatingTextArea from "@/Components/FloatingInput/FloatingTextArea.vue";
import Button from "@/Components/Button/Button.vue";
import Modal from "./Modal/Modal.vue";
import Checkbox from "./Checkbox.vue";
import Radio from "./Radio.vue";
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
            <p class="text-xl font-bold">Health Declaration Form</p>
            <p class="text-sm font-regular mt-2">
                To ensure the safety of our customers, please fill-up this
                health declaration form honestly.
            </p>
        </template>
        <template #body>
            <div class="overflow-x-auto w-full">
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
                                class="py-3.5 pl-4 pr-3 text-left sm:pl-6"
                            >
                                Answer
                            </th>
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">
                        <tr class="hover:bg-gray-50">
                            <td
                                class="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6"
                            >
                                1. Are you experiencing (nakakaranas ka ba ng):
                                Soar Throat, Body Pains, Headache, Fever
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
                        <tr class="hover:bg-gray-50">
                            <td
                                class="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6"
                            >
                                2. Have you come in contact or stayed together
                                in the same close environment of a confirmed
                                COVID-19 case? (May nakasama ka ba o
                                nakatrabahong tao na kumpirmadong me
                                COVID-19/may impeksyon ng novel corona virus?)
                            </td>
                            <td
                                class="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6"
                            >
                                <div class="flex gap-x-4 ml-4" v-if="!viewOnly">
                                    <Radio
                                        v-model="data.q2"
                                        for="q2yes"
                                        id="q2yes"
                                        label="Yes"
                                        value="Yes"
                                        name="q2"
                                    />
                                    <Radio
                                        v-model="data.q2"
                                        for="q2no"
                                        id="q2no"
                                        label="No"
                                        value="No"
                                        name="q2"
                                    />
                                </div>
                                <p v-else class="text-gray-600">
                                    {{ data.q2 }}
                                </p>
                            </td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <td
                                class="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6"
                            >
                                3. Have you had any contact with anyone with
                                fever, cough, colds or sore throat in the past 2
                                weeks? (Mayroon ka bang nakasama na may lagnat,
                                ubo, sipon o sakit ng lalamunan sa nakalipas na
                                dalawang linggo?)
                            </td>
                            <td
                                class="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6"
                            >
                                <div class="flex gap-x-4 ml-4" v-if="!viewOnly">
                                    <Radio
                                        v-model="data.q3"
                                        for="q3yes"
                                        id="q3yes"
                                        label="Yes"
                                        value="Yes"
                                        name="q3"
                                    />
                                    <Radio
                                        v-model="data.q3"
                                        for="q3no"
                                        id="q3no"
                                        label="No"
                                        value="No"
                                        name="q3"
                                    />
                                </div>
                                <p v-else class="text-gray-600">
                                    {{ data.q3 }}
                                </p>
                            </td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <td
                                class="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6"
                            >
                                4. Have you travelled to an area where there are
                                high COVID-19 cases in the last 14 days? (Ikaw
                                ba ay pumunta o nagbyahe sa lugar na mayroong
                                mataas na kaso ng COVID-19 sa nakalipas na
                                labing-apat na araw?)
                            </td>
                            <td
                                class="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6"
                            >
                                <div class="flex gap-x-4 ml-4" v-if="!viewOnly">
                                    <Radio
                                        v-model="data.q4"
                                        for="q4yes"
                                        id="q4yes"
                                        label="Yes"
                                        value="Yes"
                                        name="q4"
                                    />
                                    <Radio
                                        v-model="data.q4"
                                        for="q4no"
                                        id="q4no"
                                        label="No"
                                        value="No"
                                        name="q4"
                                    />
                                </div>
                                <p v-else class="text-gray-600">
                                    {{ data.q4 }}
                                </p>
                            </td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <td
                                class="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6"
                            >
                                5. Have you travelled to any area aside from
                                your home location? (Ikaw ba ay nagpunta sa iba
                                pang parte o lugar bukod sa iyong bahay?)
                                Specify (Sabihin kung saan)
                            </td>
                            <td
                                class="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6"
                            >
                                <div class="flex gap-x-4 ml-4" v-if="!viewOnly">
                                    <Radio
                                        v-model="data.q5"
                                        for="q5yes"
                                        id="q5yes"
                                        label="Yes"
                                        value="Yes"
                                        name="q5"
                                    />
                                    <Radio
                                        v-model="data.q5"
                                        for="q5no"
                                        id="q5no"
                                        label="No"
                                        value="No"
                                        name="q5"
                                    />
                                </div>
                                <p v-else class="text-gray-600">
                                    {{ data.q5 }}
                                </p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </template>
        <template v-slot:footer>
            <Button @click.prevent="emitCloseModal" text size="sm" color="gray"
                >Close</Button
            >
            <Button
                v-if="!viewOnly"
                @click.prevent="emitSaveAppointment"
                text
                size="sm"
                color="success"
                >Save Appointment</Button
            >
        </template>
    </Modal>
</template>
