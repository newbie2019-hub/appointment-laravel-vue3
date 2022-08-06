<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PatientUpdateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'first_name' => ['required', 'max:150'],
            'middle_name' => ['sometimes', 'max:150'],
            'last_name' => ['required', 'max:150'],
            'address' => ['required', 'max:250'],
            'gender' => ['required', 'max:20'],
            'birthday' => ['required'],
        ];
    }
}
