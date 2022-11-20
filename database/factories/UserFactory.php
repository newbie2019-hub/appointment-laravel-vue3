<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class UserFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {

        $gender = fake()->randomElement(['Male', 'Female']);

        return [
            'first_name' => fake()->firstName($gender),
            'middle_name' => fake()->lastName(),
            'last_name' => fake()->lastName(),
            'gender' => $gender,
            'address' => fake()->address(),
            'contact_number' => fake()->phoneNumber(),
            'birthday' => fake()->date('Y-m-d', now()->subYears()),
            'email' => fake()->safeEmail(),
            'email_verified_at' => now(),
            'password' => 'password',
            'is_approved' => 1,
            'remember_token' => Str::random(10),
        ];
    }

    /**
     * Indicate that the model's email address should be unverified.
     *
     * @return static
     */
    public function unverified()
    {
        return $this->state(function (array $attributes) {
            return [
                'email_verified_at' => null,
            ];
        });
    }
}
