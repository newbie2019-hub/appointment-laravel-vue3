<script setup>
import BreezeButton from "@/Components/Button/Button.vue";
import BreezeGuestLayout from "@/Layouts/Guest.vue";
import BreezeInput from "@/Components/Input.vue";
import BreezeLabel from "@/Components/Label.vue";
import BreezeValidationErrors from "@/Components/ValidationErrors.vue";
import { Head, useForm, Link } from "@inertiajs/inertia-vue3";

defineProps({
    status: String,
});

const form = useForm({
    email: "",
});

const submit = () => {
    form.post(route("password.email"));
};
</script>

<template>
    <BreezeGuestLayout>
        <Head title="Forgot Password" />

        <BreezeValidationErrors class="mb-4" />

        <div class="flex h-screen items-center justify-center">
            <div class="bg-white shadow-sm px-8 py-6 rounded-lg max-w-md">
                <div class="mb-4 text-sm text-gray-600">
                    <p class="text-xl font-medium">Password Reset</p>
                    <p class="mt-2 mb-3">
                        Forgot your password? Let us know your email address and
                        we will send you a password reset link.
                    </p>
                </div>
                <div
                    v-if="status"
                    class="mb-4 font-medium text-sm text-green-600"
                >
                    {{ status }}
                </div>
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
                        />
                    </div>
                    <div class="mt-2">
                        <Link
                            :href="route('login')"
                            class="hover:underline text-sm text-blue-400 hover:text-blue-700"
                        >
                            Login Account
                        </Link>
                    </div>
                    <div class="flex items-center justify-end mt-5 mb-2">
                        <BreezeButton
                            type="submit"
                            size="sm"
                            :class="{ 'opacity-25': form.processing }"
                            :disabled="form.processing"
                        >
                            Email Password Reset Link
                        </BreezeButton>
                    </div>
                </form>
            </div>
        </div>
    </BreezeGuestLayout>
</template>
