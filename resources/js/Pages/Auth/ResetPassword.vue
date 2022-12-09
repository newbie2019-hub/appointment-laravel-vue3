<script setup>
import BreezeButton from "@/Components/Button/Button.vue";
import BreezeGuestLayout from "@/Layouts/Guest.vue";
import BreezeInput from "@/Components/Input.vue";
import BreezeLabel from "@/Components/Label.vue";
import BreezeValidationErrors from "@/Components/ValidationErrors.vue";
import { Head, useForm } from "@inertiajs/inertia-vue3";

const props = defineProps({
    email: String,
    token: String,
});

const form = useForm({
    token: props.token,
    email: props.email,
    password: "",
    password_confirmation: "",
});

const submit = () => {
    form.post(route("password.update"), {
        onFinish: () => form.reset("password", "password_confirmation"),
    });
};
</script>

<template>
    <BreezeGuestLayout>
        <Head title="Reset Password" />


        <div class="flex h-screen items-center justify-center">
            <div class="bg-white shadow-sm px-8 py-6 rounded-lg max-w-md">
                <div class="mb-4 text-sm text-gray-600">
                    <p class="text-xl font-medium">Update Password</p>
                    <p class="mt-2 mb-3">
                        Please enter and confirm your new password.
                    </p>
                </div>
                <BreezeValidationErrors class="mb-4" />
                <form @submit.prevent="submit">
                    <div>
                        <BreezeLabel for="email" value="Email" />
                        <BreezeInput
                            id="email"
                            type="email"
                            class="mt-1 block w-full"
                            v-model="form.email"
                            required
                            autofocus
                            autocomplete="username"
                            disabled
                        />
                    </div>

                    <div class="mt-4">
                        <BreezeLabel for="password" value="Password" />
                        <BreezeInput
                            id="password"
                            type="password"
                            class="mt-1 block w-full"
                            v-model="form.password"
                            required
                            autocomplete="new-password"
                        />
                    </div>

                    <div class="mt-4">
                        <BreezeLabel
                            for="password_confirmation"
                            value="Confirm Password"
                        />
                        <BreezeInput
                            id="password_confirmation"
                            type="password"
                            class="mt-1 block w-full"
                            v-model="form.password_confirmation"
                            required
                            autocomplete="new-password"
                        />
                    </div>

                    <div class="flex items-center justify-end mt-4">
                        <BreezeButton
                            type="submit"
                            size="sm"
                            :class="{ 'opacity-25': form.processing }"
                            :disabled="form.processing"
                        >
                            Reset Password
                        </BreezeButton>
                    </div>
                </form>
            </div>
        </div>
    </BreezeGuestLayout>
</template>
